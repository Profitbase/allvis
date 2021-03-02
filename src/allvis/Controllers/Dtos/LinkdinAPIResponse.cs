using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{

    public class LinkdinAPIResponse
    {
        public List<LinkdinDatum> data { get; set; }
        public LinkdinIncludes includes { get; set; }
        public LinkdinMeta meta { get; set; }
    }

    public class LinkdinIncludes
    {
        public List<LinkdinMedium> media { get; set; }
    }

    public class LinkdinMedium
    {
        public string media_key { get; set; }
        public string type { get; set; }
        public string url { get; set; }
        public string preview_image_url { get; set; }
    }

    public class LinkdinMeta
    {
        public string oldest_id { get; set; }
        public string newest_id { get; set; }
        public int result_count { get; set; }
        public string next_token { get; set; }
    }

    public class LinkdinDatum
    {
        public string id { get; set; }
        public string text { get; set; }
        public LinkdinAttachments attachments { get; set; }
    }

    public class LinkdinAttachments
    {
        public string[] media_keys { get; set; }
    }

}
