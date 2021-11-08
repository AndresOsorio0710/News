import React, { useState, useEffect } from "react";
import HistoryService from "../../services/historyService";
import History from "../../models/history";
import ArticleMaster from "../article/articleMaster";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const HistoryList = () => {
  const [historys, setHistorys] = React.useState<History[]>([]);

  useEffect(() => {
    retrieveHistory();
  }, []);

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setHistorys(
        historys.map((history, i) => {
          if (i == index) {
            history.expanded = true;
          } else {
            history.expanded = false;
          }
          return history;
        })
      );
    };

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
        historys.map((history, i) => (
          <div key={i}>
            {
              <Accordion
                key={i}
                expanded={history.expanded}
                onChange={handleChange(i)}
              >
                <AccordionSummary>
                  <Typography>{history.city}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {history.info.map((article, i) => (
                    <div key={i}>
                      <ArticleMaster article={article} />
                    </div>
                  ))}
                </AccordionDetails>
              </Accordion>
            }
          </div>
        ))}
    </div>
  );
};

export default HistoryList;
