import Article from "./article";
import Weather from "./weather";

export default interface News {
  ststus: string;
  totalResults: number;
  articles: Array<Article>;
  weather: Weather;
}
