using System;
using backend.Models;
using backend.Logics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private readonly NewsContext dbContext;
        private readonly HistoryLogic historyLogic;
        private readonly NewsLogic newsLogic;
        public IConfiguration Configuration { get; }
        public HistoryController(NewsContext _dbContext, IConfiguration configuration)
        {
            this.dbContext = _dbContext;
            this.historyLogic = new HistoryLogic(_dbContext);
            this.Configuration = configuration;
            this.newsLogic = new NewsLogic(this.Configuration.GetConnectionString("ApiKeyNews"), this.Configuration.GetConnectionString("ApiKeyWeather"));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoryResponse>>> GetHistory()
        {
            Console.WriteLine(Configuration.GetConnectionString("API_KEY"));
            List<History> historys = await dbContext.Historys.ToListAsync();
            List<HistoryResponse> historyResponses = new List<HistoryResponse>();
            foreach (History history in historys)
            {
                NewsResponse newsResponse = newsLogic.GetNewsResponse(history.City, history.Data);
                List<Article> articles = newsResponse.Articles;
                HistoryResponse historyResponse = new HistoryResponse();
                historyResponse.City = history.City;
                historyResponse.Info = articles;
                historyResponses.Add(historyResponse);
            }
            return historyResponses;
        }
    }
}