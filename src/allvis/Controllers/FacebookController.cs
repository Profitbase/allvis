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

        private readonly string ACCESS_TOKEN = "EAAD8HeVAWZCkBAMdJQmq67x1x0APoBwCsImALhkViu6tQRfdIMR1kq7QbZAMXtZCTL8I5FJpyO3jkUzO3lfULUaCXNo7XZCSEuhhmW7lB7KHvfEyHYT7TqVQMdFMPZAtsdzzESdVhMAZBZA7EZBHj47Bk7wKYAIvLX0YLfs2ecahuvwFLZBL9rQI8qc6osgvS7ZAVq8iZBKZCLmfN49ljkPvabnaAaaG0lV6mpyiDZA5YZBfHmuwypmdG47GNn";

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
            var url = $"https://graph.facebook.com/oauth/access_token?client_id=277205330451449&client_secret=c80e7c7fe59d62a7600cfd8e88dace85&grant_type=9f68604c17080473ed56678a123faa1a ";
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

