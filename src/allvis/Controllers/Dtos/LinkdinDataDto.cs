using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{
    public class LinkdinDataDto
    {
        public string text { get; set; }
        public string medium { get; set; }
        public string type { get; set; }

        public int? Id
        {
            get;
            set;
        }

        public string Name
        {
            get;
            set;
        }

        public String Industry
        {
            get;
            set;
        }

        public string CompanySize
        {
            get;
            set;
        }

        public string CompanyType
        {
            get;
            set;
        }
    }
}