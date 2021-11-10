using System.Threading.Tasks;
using backend.Models;
using backend.Logics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly NewsLogic newsLogic;
        private readonly HistoryLogic historyLogic;
        public IConfiguration Configuration { get; }

        public NewsController(NewsContext _dbContext, IConfiguration configuration)
        {
            this.historyLogic = new HistoryLogic(_dbContext);
            this.Configuration = configuration;
            this.newsLogic = new NewsLogic(this.Configuration.GetConnectionString("ApiKeyNews"), this.Configuration.GetConnectionString("ApiKeyWeather"));
        }

        [HttpGet("{_city}")]
        public async Task<ActionResult> GetNews(string _city)
        {
            var result = await this.newsLogic.GetArticles(_city);
            await this.historyLogic.Save(_city);
            return Ok(result);
        }

    }
}