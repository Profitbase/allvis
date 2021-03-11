using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Net;

namespace allvis.Controllers
{
    namespace allvis.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class NewsVgController : ControllerBase
        {
            private int _amountOfNeews = 2;




            // GET: api/<TwitterAPI>
            [HttpGet]
            public async  Task<List<NewsVgDataDto>> Get()
            {
            try
                {
                    string url = "https://www.vg.no/rss/feed/?categories=1068";

                    var webClient = new WebClient();
                    string result = webClient.DownloadString(url);

                    XDocument document = XDocument.Parse(result);

                    return (from descendant in document.Descendants("item")
                            select new NewsVgDataDto()
                            {
                                title = descendant.Element("title").Value,
                                description = descendant.Element("description").Value,
                                image = descendant.Element("image").Value,
                                category = descendant.Element("category").Value
                            }).Take(_amountOfNeews).ToList();
                }
                catch (System.Exception ex)
                {

                    throw;
                }
            }
        }
    }
}

