import React, { useState, useEffect } from "react";
import HistoryService from "../../services/historyService";
import History from "../../models/history";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TableContainer,
} from "@mui/material";
import ArticleList from "../article/articleList";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HistoryList = () => {
  const [historys, setHistorys] = useState<History[]>([]);

  useEffect(() => {
    retrieveHistory();
  }, []);

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setHistorys(
        historys.map((history, i) => {
          if (i == index) {
            history.expanded = !history.expanded;
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
    <Box>
      <TableContainer sx={{ maxHeight: 621 }}>
        {historys &&
          historys.map((history, i) => (
            <div key={i}>
              {
                <Accordion
                  key={i}
                  expanded={history.expanded}
                  onChange={handleChange(i)}
                  className="accordion1"
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={"panel{"+i+"bh-content"}
                    id={"panel"+i+"bh-header"}
                  >
                    <Typography variant="h6" className="title">
                      {history.city[0].toUpperCase() + history.city.slice(1)}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ArticleList articles={history.info} />
                  </AccordionDetails>
                </Accordion>
              }
            </div>
          ))}
      </TableContainer>
    </Box>
  );
};

export default HistoryList;
