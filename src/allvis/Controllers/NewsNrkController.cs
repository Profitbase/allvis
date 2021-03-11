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
        public class NewsNrkController : ControllerBase
        {
            private int _amountOfNeews = 2;

            // GET: api/<TwitterAPI>
            [HttpGet]
            public async Task<List<NewsNrkDataDto>> Get()
            {
                try
                {
                    string url = "https://www.nrk.no/nyheter/siste.rss";

                    var webClient = new WebClient();
                    string result = webClient.DownloadString(url);

                    XDocument document = XDocument.Parse(result);

                    var data = document.Descendants("item").Select(c => c).Take(_amountOfNeews).ToList();

                    List<NewsNrkDataDto> nyheter = new List<NewsNrkDataDto>();


                    foreach (XElement item in data)
                    {
                        var imgurl = "";
                        var enclosure = item.Element("enclosure");
                        string description = null;
                        string title = null;
                        string pubDate = null;

                        if (enclosure != null)
                        {
                            foreach (XAttribute atter in enclosure.Attributes())
                            {
                                if (atter.Name.LocalName == "url")
                                {
                                    imgurl = atter.Value;
                                    break;
                                }
                            }
                        }

                        if (item.Element("description") != null)
                        {
                            description = item.Element("description").Value;
                        }
                        if (item.Element("title") != null)
                        {
                            title = item.Element("title").Value;
                        }
                        if (item.Element("pubDate") != null)
                        {
                            pubDate = item.Element("pubDate").Value;
                        }



                        nyheter.Add(new NewsNrkDataDto
                        {
                            description = description,
                            title = title,
                            pubDate = pubDate,
                            url = imgurl
                        });



                    };

                    return nyheter;
                }
                catch (System.Exception ex)
                {

                    throw;
                }
            }
        }
    }
}