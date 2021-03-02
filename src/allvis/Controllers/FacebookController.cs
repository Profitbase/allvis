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
    public class FacebookController : ControllerBase
    {
        private readonly HttpClient _client;

        private readonly string COMPANYID = "";

        private string _bearerToken = "";


        public FacebookController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<FacebookAPI>
        [HttpGet]
        public async Task<FacebookDataDto> Get()
        {
            var url = $"";
            var response = await _client.GetAsync(url);

            var res = response.Content.ReadAsStringAsync();

            var tweets = JsonSerializer.Deserialize<FacebookAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new FacebookDataDto()
            {
                text = tweets.data[1].text,
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

