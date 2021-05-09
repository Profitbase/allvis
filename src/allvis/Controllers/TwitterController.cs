using allvis.Controllers.Data_Storage_Table;
using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TwitterController : ControllerBase
    {
        private readonly HttpClient _client;
        private readonly string COMPANYID = "28198545";
        private  string _bearerToken = "AAAAAAAAAAAAAAAAAAAAAE0tMwEAAAAAI2QW%2FZmImgXvGvH%2BJRGS9pOyE%2FI%3DfX8cXrY5VgD9Ka68WZmogFCM2NWRSu7TwSl9IVLLGAAfw5Qyih";
        private int _amountOfTweets;

        public TwitterController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);

            _amountOfTweets = HandleAzureStorageTable.GetInstance.AmountOfPosts("1", "sandnes").Result.amountOfPostsTwitter;
        }

        [HttpGet]
        public async Task<List <TwitterDataDto>> Get()
        {
            var url = $"https://api.twitter.com/2/users/{COMPANYID}/tweets?expansions=attachments.media_keys&media.fields=preview_image_url,url";
            var response = await _client.GetAsync(url);
            try
            {
                var twitter = await response.Content.ReadAsStringAsync();
                var tweets = JsonSerializer.Deserialize<TwitterAPIResponse>( twitter, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                var tweetlist = new List <TwitterDataDto>();

                for (int i = 0; i < _amountOfTweets; i++)
                {
                    if (tweets.data[i].attachments == null)
                    {
                        tweetlist.Add(new TwitterDataDto { text = tweets.data[i].text, medium = null });
                    }
                    else
                    {
                        tweetlist.Add(new TwitterDataDto
                        {
                            text = tweets.data[i].text,
                            medium = tweets.includes.media.Where(t => tweets.data[i].attachments.media_keys.Contains(t.media_key)).Select(m => m.url).ToList(),
                        });
                    };
                }
                
                return tweetlist;
                
            }
            catch (System.Exception ex) 
            {

                throw;
            }

          
        }

   


    }

}

