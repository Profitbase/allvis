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
    public class LinkdinController : ControllerBase
    {
        private readonly HttpClient _client;

        private readonly string COMPANYID = "78xaaniius3n35";
        private readonly string COMPANYSECRET = "nNq2plrBZL2tlWlK";

        private string _bearerToken = "AAAAAAAAAAAAAAAAAAAAAE0tMwEAAAAAI2QW%2FZmImgXvGvH%2BJRGS9pOyE%2FI%3DfX8cXrY5VgD9Ka68WZmogFCM2NWRSu7TwSl9IVLLGAAfw5Qyih";


        public LinkdinController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<LinkdinAPI>
        [HttpGet]
        public async Task<LinkdinDataDto> Get()
        {
            var url = $"https://api.linkedin.com/v1/companies/{COMPANYID}/updates?format=json";
            var response = await _client.GetAsync(url);

            var res = response.Content.ReadAsStringAsync();

            var tweets = JsonSerializer.Deserialize<LinkdinAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new LinkdinDataDto()
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

