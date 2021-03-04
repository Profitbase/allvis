﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace allvis.Controllers.Dtos
{

    public class FacebookAPIResponse
    {
        public List<FacebookDatum> data { get; set; }
        public FacebookIncludes includes { get; set; }
        public FacebookMeta meta { get; set; }
    }

    public class FacebookIncludes
    {
        public List<FacebookMedium> media { get; set; }
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
        public string text { get; set; }
        public FacebookAttachments attachments { get; set; }
    }

    public class FacebookAttachments
    {
        public string[] media_keys { get; set; }
    }

}
