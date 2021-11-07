using System.Threading.Tasks;
using backend.Models;
using backend.Logics;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("news/api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly NewsContext dbContext;
        static NewsLogic newsLogic = new NewsLogic();
        private readonly HistoryLogic historyLogic;

        public NewsController(NewsContext _dbContext)
        {
            dbContext = _dbContext;
            historyLogic = new HistoryLogic(_dbContext);
        }

        [HttpGet("{_city}")]
        public async Task<ActionResult> GetNews(string _city)
        {
            var result = await newsLogic.GetArticles(_city);
            await historyLogic.Save(_city);
            return Ok(result);
        }

    }
}