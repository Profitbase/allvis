using System;

namespace allvis.Controllers.Dtos
{
    public class FacebookAPIResponse
    {
        public FacebookDatum[] data { get; set; }
        public Paging paging { get; set; }
    }

    public class Paging
    {
        public Cursors cursors { get; set; }
    }

    public class Cursors
    {
        public string before { get; set; }
        public string after { get; set; }
    }

    public class FacebookDatum
    {
        public string full_picture { get; set; }
        public string message { get; set; }
        public string id { get; set; }
    }
}