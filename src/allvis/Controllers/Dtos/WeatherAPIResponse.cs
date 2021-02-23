using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{
    public class WeatherAPIResponse
    {
        public IEnumerable<InnerWeather> Weather { get; set; }
        
        public InnerMain Main { get; set; }

        public class InnerWeather
        {
            public int Id { get; set; }
            public string Description { get; set; }
        }

        public class InnerMain
        {
            public float Temp { get; set; }
        }
    }
}
