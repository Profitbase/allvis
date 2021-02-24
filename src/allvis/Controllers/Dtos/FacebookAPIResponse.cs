using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{

    public class FacebookAPIResponse
    {
        public IEnumerable<FacebookDatum> data { get; set; }
        public FacebookInclude include { get; set; }
        public Meta meta { get; set; }
    }

    public class FacebookInclude
    {
        public Medium[] media { get; set; }
    }

    public class FacebookMedium
    {
        public string media_key { get; set; }
        public string type { get; set; }
        public string url { get; set; }
        public string preview_image_url { get; set; }
    }

    public class FacebookMeta
    {
        public string oldest_id { get; set; }
        public string newest_id { get; set; }
        public int result_count { get; set; }
        public string next_token { get; set; }
    }

    public class FacebookDatum
    {
        public string id { get; set; }
        public string tekst { get; set; }
        public Attachments attachments { get; set; }
    }

    public class FacebookAttachments
    {
        public string[] media_keys { get; set; }
    }

}
