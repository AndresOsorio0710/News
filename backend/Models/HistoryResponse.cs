using Newtonsoft.Json;
using System.Collections.Generic;

namespace backend.Models
{
    public class HistoryResponse
    {
        [JsonProperty("city")]
        public string City { get; set; }
        [JsonProperty("info")]
        public List<Article> Info { get; set; }    
        [JsonProperty("expanded")]
        public bool Expanded {get;set;}    
    }
}