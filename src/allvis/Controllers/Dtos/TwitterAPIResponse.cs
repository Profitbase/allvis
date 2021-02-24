using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{

    public class TwitterAPIResponse
    {
        public List <Datum> data { get; set; }
        public Includes includes { get; set; }
        public Meta meta { get; set; }
    }

    public class Includes
    {
        public List <Medium> media { get; set; }
    }

    public class Medium
    {
        public string media_key { get; set; }
        public string type { get; set; }
        public string url { get; set; }
        public string preview_image_url { get; set; }
    }

    public class Meta
    {
        public string oldest_id { get; set; }
        public string newest_id { get; set; }
        public int result_count { get; set; }
        public string next_token { get; set; }
    }

    public class Datum
    {
        public string id { get; set; }
        public string text { get; set; }
        public Attachments attachments { get; set; }
    }

    public class Attachments
    {
        public string[] media_keys { get; set; }
    }

}
