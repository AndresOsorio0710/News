using System;
using System.Net.Http;
using Newtonsoft.Json;
using System.Threading.Tasks;
using backend.Models;

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
            response = await client.GetStringAsync($"http://api.openweathermap.org/data/2.5/weather?q={_city}&units=metric&appid=d6cff0aeebb2050ae786067f65bf6ae3");
            newsResponse.Weather = JsonConvert.DeserializeObject<Weather>(response);
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