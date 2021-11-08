import Article from "./article";

export default interface History {
  city: string;
  info: Array<Article>;
  expanded?: boolean;
}
