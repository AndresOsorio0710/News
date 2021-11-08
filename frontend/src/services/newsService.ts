import http from "../http-common";
import News from "../models/news";

const get = (city: any) => {
  return http.get<News>(`/news//${city}`);
};

const NewsService = {
  get,
};

export default NewsService;
