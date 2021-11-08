import http from "../http-common";
import History from "../models/history";

const get = () => {
  return http.get<Array<History>>(`/history`);
};

const HistoryService = {
  get,
};

export default HistoryService;
