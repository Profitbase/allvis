using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TwitterController : ControllerBase
    {
        private readonly HttpClient _client;

        private readonly string COMPANYID = "28198545";

        private  string _bearerToken = "AAAAAAAAAAAAAAAAAAAAAE0tMwEAAAAAI2QW%2FZmImgXvGvH%2BJRGS9pOyE%2FI%3DfX8cXrY5VgD9Ka68WZmogFCM2NWRSu7TwSl9IVLLGAAfw5Qyih";


        public TwitterController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<TwitterAPI>
        [HttpGet]
        public async Task<TwitterDataDto> Get()
        {
            var url = $"https://api.twitter.com/2/users/{COMPANYID}/tweets?expansions=attachments.media_keys&media.fields=preview_image_url,url";
            var response = await _client.GetAsync(url);

            var res = response.Content.ReadAsStringAsync();

            var tweets = JsonSerializer.Deserialize<TwitterAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new TwitterDataDto()
            {
                text = tweets.data[0].text,
                medium = tweets.includes.media[0].url,
                type = GetMediaType(tweets.includes.media[0].type)
            };
        }

     
        private string GetMediaType(string type)
        {
            string mediaType;

            if (type == "photo")
            {
                mediaType = "photo";
            }
            else if (type == "video")
            {
                mediaType = "video";
            }
            else
            {
                mediaType = null;
            }
            return mediaType;
        }







    }

}

