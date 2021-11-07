using System;
using System.Net.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Logics
{
    public class NewsLogic
    {
        HttpClient client = new HttpClient();
        public async Task<NewsResponse> GetArticles(string _city)
        {
            string date = DateTime.Now.ToString("yyyy-MM-dd");
            string url = String.Format($"https://newsapi.org/v2/everything?q={_city}&from={date}&sortBy=publishedAt&apiKey=72a543937116474086018577296dd60f");
            Console.WriteLine(url);
            string response = await client.GetStringAsync(url);
            NewsResponse newsResponse = JsonConvert.DeserializeObject<NewsResponse>(response);
            return newsResponse;
        }

        public NewsResponse GetNewsResponse(string _city, string _date)
        {
            NewsResponse newsResponse = JsonConvert.DeserializeObject<NewsResponse>(GetArticles(_city, _date).GetAwaiter().GetResult());
            return newsResponse;
        }

        private async Task<String> GetArticles(string _city, string _date)
        {
            HttpClient client = new HttpClient();
            string url = String.Format($"https://newsapi.org/v2/everything?q={_city}&from={_date}&to={_date}&sortBy=publishedAt&apiKey=72a543937116474086018577296dd60f");
            Console.WriteLine(url);
            string response = await client.GetStringAsync(url);

            return response;
        }
    }

}