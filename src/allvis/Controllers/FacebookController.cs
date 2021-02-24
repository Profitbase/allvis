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

        private readonly string CONSUMER_KEY = "VELCDa29rseuM43h0bMpeRm5Q";

        private readonly string CONSUMER_SECRET = "8UR88dNcpVawCc2zypux26k6sTIgJDwVxEW3vip2ivQZaqvcu5";

        private readonly string ACCESS_TOKEN = "1358353224009457664-3sgkRNzyvLCgRF2UBPbzdiuaVHELwT";

        private readonly string ACCESS_TOKEN_SECRET = "xHsomaaxOSIKGf9m92HaZYrWM4tGkSw2Kuj7ukHuwtW3j";

        private readonly string COMPANYID = "28198545";

        private string _bearerToken = "AAAAAAAAAAAAAAAAAAAAAE0tMwEAAAAAI2QW%2FZmImgXvGvH%2BJRGS9pOyE%2FI%3DfX8cXrY5VgD9Ka68WZmogFCM2NWRSu7TwSl9IVLLGAAfw5Qyih";


        public FacebookController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<FacebookAPI>
        [HttpGet]
        public async Task<FacebookDataDto> Get()
        {
            var url = $"https://api.twitter.com/2/users/{COMPANYID}/tweets?expansions=attachments.media_keys&media.fields=preview_image_url,url";
            var respons = await _client.GetAsync(url);
            _ = respons.Content.ReadAsStringAsync();

            var feed = JsonSerializer.Deserialize<FacebookAPIResponse>(await respons.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new FacebookDataDto()
            {
                Tekst = feed.data.FirstOrDefault().tekst
            };
        }




    }

}

