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
    public class LunchController : ControllerBase
    {
        private string lunchMonday = "Taco";
        private string lunchTuesday = "Fisk";
        private string lunchWensday = "pasta";
        private string lunchThursday = "Pizza";
        private string lunchFriday = "Kebab";


        [HttpGet]
        public async Task<LunchDataDto> Get()
        {
            return new LunchDataDto()
            {
               lunchMonday = lunchMonday,
               lunchTuesday = lunchTuesday,
               lunchWensday = lunchWensday,
               lunchThursday = lunchThursday,
               lunchFriday = lunchFriday
            };
        }
    }


}