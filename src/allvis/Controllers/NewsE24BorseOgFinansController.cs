using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Net;
using allvis.Controllers.Dtos;

namespace allvis.Controllers
{
    namespace allvis.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        public class NewsE24BorsOgFinansController : ControllerBase
        {
            private int _amountOfNeews = 2;




            // GET: api/<TwitterAPI>
            [HttpGet]
            public async Task<List<NewsE24DataDto>> Get()
            {
                try
                {
                    string url = "https://e24.no/rss2/?seksjon=boers-og-finans";

                    var webClient = new WebClient();
                    string result = webClient.DownloadString(url);

                    XDocument document = XDocument.Parse(result);

                    return (from descendant in document.Descendants("item")
                            select new NewsE24DataDto()
                            {
                                title = descendant.Element("title").Value,
                                description = descendant.Element("description").Value,
                                category = descendant.Element("category").Value,
                                image = descendant.Element("image").Value
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
