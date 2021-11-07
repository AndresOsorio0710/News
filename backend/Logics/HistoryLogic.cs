using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using backend.Models;

namespace backend.Logics
{
    public class HistoryLogic
    {
        private readonly NewsContext dbContext;

        public HistoryLogic(NewsContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task<History> Save(string _city)
        {
            History _history = new History();
            _history.HistoryId = Guid.NewGuid();
            _history.City = _city;
            _history.DateSave = DateTime.Now;
            _history.Data = DateTime.Now.ToString("yyyy-MM-dd");
            Console.WriteLine(_history.Data);
            try
            {
                if (validateHistory(_history))
                {
                    dbContext.Historys.Add(_history);
                    await dbContext.SaveChangesAsync();
                    Console.WriteLine("OK");
                }
                Console.WriteLine("YA EXISTE");
                return _history;
            }
            catch (System.Exception error)
            {
                Console.WriteLine("SALIO MAL: " + error);
                return null;
                throw;
            }
        }

        public async Task<ActionResult<IEnumerable<History>>> List()
        {
            return await dbContext.Historys.ToListAsync();
        }

        public History Get(Guid _historyId)
        {
            return dbContext.Historys.Where(history => (history.HistoryId==_historyId)).FirstOrDefault();
        }

        private Boolean validateHistory(History _history)
        {
            var count = dbContext.Historys
            .Where(history => (
                history.City.Equals(_history.City)
                && history.Data.Equals(_history.Data)
                )).Count();
            if (count > 0)
            {
                return false;
            }
            return true;
        }
    }
}