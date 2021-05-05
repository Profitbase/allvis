using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DemoAzureTableRest.Models
{
    public class MaterialUsage
    {
        public List<MaterialUsageDetails> Value { get; set; }
    }

    public class MaterialUsageDetails
    {
        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTime Timestamp { get; set; }
        public string lunchMonday { get; set; }
        public string lunchTuesday { get; set; }
        public string lunchWensday { get; set; }
        public string lunchThursday { get; set; }

    }
}
