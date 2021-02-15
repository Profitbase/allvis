using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly HttpClient _client;
        private readonly string API_KEY = "9b8ce979413024c433f966e90356148d";

        public WeatherController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
        }
        // GET: api/<WeatherAPI>
        [HttpGet]
        public async Task<WeatherDto> Get()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"http://api.openweathermap.org/data/2.5/weather?q=Stavanger,No&appid={API_KEY}");
            var response = await _client.SendAsync(request);

            var weather = JsonSerializer.Deserialize<WeatherAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new WeatherDto()
            {
                Description = weather.Weather.FirstOrDefault().Description,
                Temperature = (int)(weather.Main.Temp - 273.15),
                Icon = GetIconName(weather.Weather.FirstOrDefault().Id)
            };
        }

        private string GetIconName(int rangeID)
        {
            string iconName;

            if (rangeID >= 200 && rangeID < 232)
            {
                iconName = "wi-thunderstorm";
            }
            else if (rangeID >= 300 && rangeID <= 321)
            {
                iconName = "wi-sleet";
            }
            else if (rangeID >= 500 && rangeID <= 521)
            {
                iconName = "wi-storm-showers";
            }
            else if (rangeID >= 600 && rangeID <= 622)
            {
                iconName = "wi-snow";
            }
            else if (rangeID >= 701 && rangeID <= 781)
            {
                iconName = "wi-fog";
            }
            else if (rangeID == 800)
            {
                iconName = "wi-day-sunny";
            }
            else
            {
                iconName = "wi-day-fog";
            }

            return iconName;
        }
    }
}
