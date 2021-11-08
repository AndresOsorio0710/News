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
        private string keyNews { get; set; }
        private string keyWeather { get; set; }

        public NewsLogic(string _keyNews, string _keyWeather)
        {
            this.keyNews = _keyNews;
            this.keyWeather = _keyWeather;
        }

        public async Task<NewsResponse> GetArticles(string _city)
        {
            string response = "";
            NewsResponse newsResponse;
            string date = DateTime.Now.ToString("yyyy-MM-dd");
            try
            {
                string url = $"https://newsapi.org/v2/everything?q={_city}&from={date}&sortBy=publishedAt&apiKey={keyNews}";
                Console.WriteLine(url);
                response = await client.GetStringAsync(url);
                newsResponse = JsonConvert.DeserializeObject<NewsResponse>(response);
                response = await client.GetStringAsync($"http://api.openweathermap.org/data/2.5/weather?q={_city}&units=metric&appid={keyWeather}");
                newsResponse.Weather = JsonConvert.DeserializeObject<Weather>(response);
                return newsResponse;
            }
            catch (SystemException e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public NewsResponse GetNewsResponse(string _city, string _date)
        {
            NewsResponse newsResponse = JsonConvert.DeserializeObject<NewsResponse>(GetArticles(_city, _date).GetAwaiter().GetResult());
            return newsResponse;
        }

        private async Task<String> GetArticles(string _city, string _date)
        {
            string response = "";
            try
            {
                HttpClient client = new HttpClient();
                string url = String.Format($"https://newsapi.org/v2/everything?q={_city}&from={_date}&to={_date}&sortBy=publishedAt&apiKey={keyNews}");
                Console.WriteLine(url);
                response = await client.GetStringAsync(url);
                return response;
            }
            catch (SystemException e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }

}