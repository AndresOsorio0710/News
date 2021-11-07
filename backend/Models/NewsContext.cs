using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class NewsContext : DbContext
    {

        public NewsContext(DbContextOptions<NewsContext> options) :
        base(options)
        {

        }

        public DbSet<History> Historys { get; set; }
    }
}