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
        private string access_token = "AQVnanJhLevLD51nmCsAJv6ZxnJV5qDnFp5HClVUiRhnzwtIWbs0PllPPl7VGS_Omwrrpcu3F-LZkTRBhiuo4atJaK7FMrebltjsxeIjBA7TqfV7bdH_LgcPce-UiPskCcMrVm7qgL3hjiym0GCn_cr1bSQXScPapW0pEi1dN8XlLX-J-Iijdh_JqGXxw7BNM76-T-bctcScuN5L2PO5UATO0v0Mt9FcxEIEX_vsZcZqGbBesWiZuJh__k8I10snWUrbLu6uJTCY3QydM3avvFYGaIxEem562jGLkT4kKJ0-eW8twKdhQB_NQ23m_a4N6MJnRSCebSx92nto0ZLTFi7TuKDbqw";
        private string COMPANYID = "70761";

        public LinkdinController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", access_token);
        }


        // GET: api/<LinkdinAPI>
        [HttpGet]
        public async Task<LinkdinDataDto> Get()
        {
            var url = $"https://api.linkedin.com/v1/companies/{COMPANYID}/updates?format=json";
            var response = await _client.GetAsync(url);

            var res = response.Content.ReadAsStringAsync();

            var posts = JsonSerializer.Deserialize<LinkdinAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new LinkdinDataDto()
            {
                
            };
        }

    }

}

