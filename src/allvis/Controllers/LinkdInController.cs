using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
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
        private readonly string clientid = "78xaaniius3n35";
        private readonly string clientSecret = "nNq2plrBZL2tlWlK";

        private string _bearerToken = "AQWGtmLnbn18f_7poA-zwFNCVBerHPNBBfz64qEJIlUS9u2H0cCP9XYbPdHJ4z4i4VBQblcbI53q07j63UxT-JNkttZHLAXO0F0oYKP6olEAM1ChyYKgR5IwTR2zcO_KHKFJ1WdJPK062_3WJv03ExrrwNdW8daMLq5prEVP7q1GF4QAAtUpAyz5UsxXKiR2xMkdOtABG537SFsmHrGJgMj0h5IihnvdcPMI7AygRwgcX2vUe6fSxmC_3supLMw8SWppnPoZyuC45qBZlTxkAglnSNQrwtyNlzMPiyvPcjx1cvFHIFY6xHr1k14pJTKpRDZG4Bh4soC_jL-fQHfhPqInSbMZSA";
        

        public LinkdinController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<LinkdinAPI>
        [HttpGet]
        public async Task<LinkdinDataDto> Get()
        {
            var url = $"https://api.linkedin.com/v2/organizations/{clientid}";
            var respons = await _client.GetAsync(url);
            _ = respons.Content.ReadAsStringAsync();

            var tweets = JsonSerializer.Deserialize<LinkdinAPIResponse>(await respons.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new LinkdinDataDto()
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

