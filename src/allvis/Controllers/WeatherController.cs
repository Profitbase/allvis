﻿using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
        private readonly HttpClient _client;
        private readonly string API_KEY = "9b8ce979413024c433f966e90356148d";
        private readonly string City = "Sandnes";

        public WeatherController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
        }
        
        [HttpGet]
        public async Task<WeatherDto> Get()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"http://api.openweathermap.org/data/2.5/weather?q={City},No&appid={API_KEY}");
            var response = await _client.SendAsync(request);

            var weather = JsonSerializer.Deserialize<WeatherAPIResponse>(await response.Content.ReadAsStringAsync(), new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

            return new WeatherDto()
            {
                Description = GetUppercase(weather.Weather.FirstOrDefault().Description) ,
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
    

        private static string GetUppercase(string description)
        {  
            return char.ToUpper(description[0]) + description.Substring(1);
        }
    }


}
