using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Article
    {
        /*[Key, Column("articleId"), JsonProperty("id")]
        public Guid ArticleId { get; set; }
        [Column("historyId"), JsonProperty("historyId")]
        public Guid HistoryId { get; set; }
        [Column("title"), JsonProperty("title")]*/
        public string Title { get; set; }
        //[Column("content"), JsonProperty("content")]
        public string Content { get; set; }
        //[Column("author"), JsonProperty("author")]
        //[Column("country"), JsonProperty("country")]
        public string Description { get; set; }
        // [Column("country"), JsonProperty("country")]
        public string Url { get; set; }
        //[Column("country"), JsonProperty("country")]
        public string UrlToImage { get; set; }
        //[Column("country"), JsonProperty("country")]
        //public DateTime PublishedAt { get; set; }
        //public History History { get; set; }
    }
}