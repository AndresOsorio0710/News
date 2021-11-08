import Article from "./article";

export default interface News {
  ststus: string;
  totalResults: number;
  articles: Array<Article>;
}
