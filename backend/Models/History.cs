using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class History
    {
        [Key, Column("historyId"), JsonProperty("id")]
        public Guid HistoryId { get; set; }
        [Required, Column("city"), JsonProperty("city"), StringLength(80, ErrorMessage = "City cannot be longer than 80 characters.")]
        public string City { get; set; }
        [Required, Column("data"), JsonProperty("data")]
        public string Data { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        [Required, Column("dateSave"), JsonProperty("date")]
        public DateTime DateSave { get; set; }

        //public List<Article> Articles{get;set;}
        /*public History(string _city)
        {
            HistoryId = Guid.NewGuid();
            City = _city;
            DateSave = DateTime.Now;
        }*/
    }
}