import React, { useState, useEffect } from "react";
import HistoryService from "../../services/historyService";
import History from "../../models/history";

const HistoryList = () => {
  const [historys, setHistorys] = React.useState<History[]>([]);

  useEffect(() => {
    retrieveHistory();
  }, []);

  const retrieveHistory = () => {
    HistoryService.get()
      .then((response: any) => {
        setHistorys(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h1>History</h1>
      {historys &&
        historys.map((history, i) => <h5 key={i}>{history.city} {
            history.info.map((article,i)=>(
                <div key={i}>
                    <h6>{article.title}</h6>
                </div>
            ))
        }</h5>)}
    </div>
  );
};

export default HistoryList;
