namespace backend.Models
{
    public class Weather
    {
        public Main main { get; set; }
        public Wind wind { get; set; }
        public double visibility { get; set; }
        public double timezone { get; set; }
    }
}