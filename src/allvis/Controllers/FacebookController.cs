using allvis.Controllers.Dtos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace allvis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FacebookController : ControllerBase
    {
        private readonly HttpClient _client;

        private readonly string COMPANYID = "104301561786409";

        private string _bearerToken = "EAAFwlwGswr4BALvNeZBinGEP8arF4GYYWzz2xAjZChOeqWa8r8fZC1QI6OP9czSAJysrSPQepb5AipJRQ9bleLAJNUWZCS7YsEngGX2sJPCRKmaxZAWr4WBmdH6AdyJelqeN6dNqLBM6V0xHQnlehJ8gZCkJd6dfza1p4gZAgSVqgZDZD";

        private int _amountOfPost = 2;


        public FacebookController(IHttpClientFactory clientFactory)
        {
            _client = clientFactory.CreateClient();
            _client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _bearerToken);
        }


        // GET: api/<TwitterAPI>
        [HttpGet]
        public async Task<List<FacebookDataDto>> Get()
        {
            var url = $"https://graph.facebook.com/{COMPANYID}/feed?fields=full_picture,message";
            var response = await _client.GetAsync(url);

            try
            {
                var facebook = await response.Content.ReadAsStringAsync();
                var posts = JsonSerializer.Deserialize<FacebookAPIResponse>(facebook, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                var postlist = new List<FacebookDataDto>();

                for (int i = 0; i < _amountOfPost; i++)
                {
                    if(posts.data[i].full_picture == null)
                    {
                        postlist.Add(new FacebookDataDto
                        {
                            message = posts.data[i].message
                        
                        });
                    }
                    else
                    {
                        postlist.Add(new FacebookDataDto
                        {
                            message = posts.data[i].message,
                            full_picture = posts.data[i].full_picture
                        });

                    };
                }
                               
                return postlist;

            }
            catch (System.Exception ex)
            {

                throw;
            }
        }
    }

}
