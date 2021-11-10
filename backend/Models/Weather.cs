using System;
namespace backend.Models
{
    public class Weather
    {
        public Main Main { get; set; }
        public Wind Wind { get; set; }
        public Clouds Clouds { get; set; }
        public int Dt { get; set; }
        public double Visibility { get; set; }
        public double Timezone { get; set; }
    }

}