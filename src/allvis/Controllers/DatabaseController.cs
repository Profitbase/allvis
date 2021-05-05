using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Newtonsoft.Json;
using allvis.Controllers.Dtos;
using DemoAzureTableRest.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DatabaseController : Controller
    {
        
        string StorageName = "allvisdatabase";
        string StorageKey = "bjmhQAtIq2Z+OBzZnNxEbnOctOATfwMD1aiYnEM2IjfX4D7McU5YyXc6RsTeWtVhhjosRStmh077tXzE3FK58w==";
        string TableName = "allvis";

        [HttpPost]
        // GET: /<controller>/

        public Database Index(Database database)
        {
            string jsonData;
            AzureTables.GetAllEntity(StorageName, StorageKey, TableName, out jsonData);
            MaterialUsage materialUsage = JsonConvert.DeserializeObject<MaterialUsage>(jsonData);

            return database;
        }
    }
    public class Database
    {
        public string lunchMonday { get; set; }
        public string lunchTuesday { get; set; }
        public string lunchWensday { get; set; }
        public string lunchThursday { get; set; }
    }
}
