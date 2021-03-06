using System.Collections.Generic;

namespace backend.Models
{
    public class NewsResponse
    {
        public string Status { get; set; }
        public int TotalResults { get; set; }
        public List<Article> Articles { get; set; }
        public Weather Weather { get; set; }
    }
}