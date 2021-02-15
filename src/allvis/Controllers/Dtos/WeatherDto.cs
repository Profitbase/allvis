using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{
    public class WeatherDto
    {
        public int Temperature { get; set;  }
        public string Description { get; set; }
        public string Icon { get; set; }

    }
}
