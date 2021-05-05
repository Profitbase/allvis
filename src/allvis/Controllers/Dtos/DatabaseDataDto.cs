using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Cryptography;
using System.Text;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace allvis.Controllers.Dtos
{
    public class AzureTables
    {
        public static int GetAllEntity(string storageAccount, string accessKey, string resourcePath, out string jsonData)
        {
            string uri = @"https://" + storageAccount + ".table.core.windows.net/" + resourcePath;

            // Web request   
            HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(uri);

            int query = resourcePath.IndexOf("?");
            if (query > 0)
            {
                resourcePath = resourcePath.Substring(0, query);
            }

            request = getRequestHeaders("GET", request, storageAccount, accessKey, resourcePath);

            // Execute the request  
            try
            {
                using (HttpWebResponse response = (HttpWebResponse)request.GetResponse())
                {
                    using (System.IO.StreamReader r = new System.IO.StreamReader(response.GetResponseStream()))
                    {
                        jsonData = r.ReadToEnd();
                        return (int)response.StatusCode;
                    }
                }
            }
            catch (WebException ex)
            {
                // get the message from the exception response  
                using (System.IO.StreamReader sr = new System.IO.StreamReader(ex.Response.GetResponseStream()))
                {
                    jsonData = sr.ReadToEnd();
                    // Log res if required  
                }

                return (int)ex.Status;
            }
        }


        public static HttpWebRequest getRequestHeaders(string requestType, HttpWebRequest Newrequest, string storageAccount, string accessKey, string resource, int Length = 0)
        {
            HttpWebRequest request = Newrequest;

            switch (requestType.ToUpper())
            {
                case "GET":
                    request.Method = "GET";
                    request.ContentType = "application/json";
                    request.ContentLength = Length;
                    request.Accept = "application/json;odata=nometadata";
                    request.Headers.Add("x-ms-date", DateTime.UtcNow.ToString("R", System.Globalization.CultureInfo.InvariantCulture));
                    request.Headers.Add("x-ms-version", "2015-04-05");
                    request.Headers.Add("Accept-Charset", "UTF-8");
                    request.Headers.Add("MaxDataServiceVersion", "3.0;NetFx");
                    request.Headers.Add("DataServiceVersion", "1.0;NetFx");
                    break;

            }

            string sAuthorization = getAuthToken(request, storageAccount, accessKey, resource);
            request.Headers.Add("Authorization", sAuthorization);
            return request;
        }


        public static string getAuthToken(HttpWebRequest request, string storageAccount, string accessKey, string resource)
        {
            try
            {
                string sAuthTokn = "";

                string stringToSign = request.Headers["x-ms-date"] + "\n";

                stringToSign += "/" + storageAccount + "/" + resource;

                HMACSHA256 hasher = new HMACSHA256(Convert.FromBase64String(accessKey));

                sAuthTokn = "SharedKeyLite " + storageAccount + ":" + Convert.ToBase64String(hasher.ComputeHash(Encoding.UTF8.GetBytes(stringToSign)));

                return sAuthTokn;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}