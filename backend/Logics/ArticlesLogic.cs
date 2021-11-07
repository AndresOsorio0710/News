using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using backend.Models;

namespace backend.Logics
{
    public class ArticleLogic
    {
        private readonly NewsContext dbContext;

       /* public ArticleLogic(NewsContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task Save(List<Article> _articles, Guid _histoyId)
        {
            try
            {
                foreach (Article article in _articles)
                {
                    article.HistoryId = _histoyId;
                    dbContext.Articles.Add(article);
                    await dbContext.SaveChangesAsync();
                }
            }
            catch (System.Exception error)
            {
                Console.WriteLine(error);
            }
        }

        public async Task<ActionResult<IEnumerable<Article>>> List(Guid _histoyId)
        {
            return await dbContext.Articles.Where(article => article.HistoryId == _histoyId).ToListAsync();
        }*/
    }
}