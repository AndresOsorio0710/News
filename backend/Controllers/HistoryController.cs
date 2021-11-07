using System;
using backend.Models;
using backend.Logics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.Net.Http;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HistoryController : ControllerBase
    {
        private readonly NewsContext dbContext;
        private readonly HistoryLogic historyLogic;
        private readonly NewsLogic newsLogic;
        public HistoryController(NewsContext _dbContext)
        {
            dbContext = _dbContext;
            historyLogic = new HistoryLogic(_dbContext);
            newsLogic = new NewsLogic();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<HistoryResponse>>> GetHistory()
        {
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
        [HttpGet("{id}")]
        public async Task<ActionResult<HistoryResponse>> GetHistory(Guid id)
        {
            History history = historyLogic.Get(id);
            NewsResponse newsResponse = newsLogic.GetNewsResponse(history.City, history.Data);
            List<Article> articles = newsResponse.Articles;
            HistoryResponse historyResponse = new HistoryResponse();
            historyResponse.City = history.City;
            historyResponse.Info = articles;
            return Ok(historyResponse);
        }
    }
}