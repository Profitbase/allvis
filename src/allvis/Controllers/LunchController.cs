using allvis.Controllers.Data_Storage_Table;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LunchController : ControllerBase
    {
        private string lunchMonday;
        private string lunchTuesday;
        private string lunchWensday;
        private string lunchThursday;
        private string lunchFriday;

        public LunchController(IHttpClientFactory clientFactory)
        {
            
            lunchMonday = HandleAzureStorageTable.GetInstance.GetLunch("1", "sandnes").Result.lunchMonday;
            lunchTuesday = HandleAzureStorageTable.GetInstance.GetLunch("1", "sandnes").Result.lunchTuesday;
            lunchWensday = HandleAzureStorageTable.GetInstance.GetLunch("1", "sandnes").Result.lunchWensday;
            lunchThursday = HandleAzureStorageTable.GetInstance.GetLunch("1", "sandnes").Result.lunchThursday;
            lunchFriday = HandleAzureStorageTable.GetInstance.GetLunch("1", "sandnes").Result.lunchFriday;
        }

        [HttpGet]
        public async Task<String> Get()
        {
            DayOfWeek day = DateTime.Now.DayOfWeek;

            return Todayslunch(day);
        }

        private string Todayslunch(DayOfWeek day)
        {
            string lunch;
           
            if (day == DayOfWeek.Monday)
            {
                lunch = lunchMonday;
            }
            else if (day == DayOfWeek.Tuesday)
            {
                lunch = lunchTuesday;
            }
            else if (day == DayOfWeek.Wednesday)
            {
                lunch = lunchWensday;
            }
            else if (day == DayOfWeek.Thursday)
            {
                lunch = lunchThursday;
            }
            else if (day == DayOfWeek.Friday)
            {
                lunch = lunchFriday;
            }
            else
            {
                lunch = "Kantina er stengt";
            }
            return lunch;
        }
    }
}