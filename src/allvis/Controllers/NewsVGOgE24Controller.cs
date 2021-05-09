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
        public class NewsVGOgE24Controller : ControllerBase
        {
            private int _amountOfNeews = 1;

            [HttpGet]
            public async  Task<List<NewsVGOgE24DataDto>> Get(int source)
            {
            try
                {
                    var sources = new Dictionary<NewsSources, string>
                    {
                        { NewsSources.VG_News,  "https://www.vg.no/rss/feed/?categories=1068" },
                        { NewsSources.VG_Sport, "https://www.vg.no/rss/feed/?categories=1072"},
                        { NewsSources.VG_Tech, "https://www.vg.no/rss/feed/?categories=1107" },
                        { NewsSources.E24_Aksjetips,  "https://e24.no/rss2/?seksjon=aksjetips" },
                        { NewsSources.E24_BorsOgFinans, "https://e24.no/rss2/?seksjon=boers-og-finans"},
                    };

                    string url = sources[(NewsSources)source];

                    var webClient = new WebClient();
                    string result = webClient.DownloadString(url);

                    XDocument document = XDocument.Parse(result);

                    return (from descendant in document.Descendants("item")
                            select new NewsVGOgE24DataDto()
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

