import React, { useState, useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Link,
  TableContainer,
  Paper,
} from "@mui/material";
import Article from "../../models/article";

interface Props {
  articles: Array<Article>;
}

const ArticleList: React.FC<Props> = ({ articles }) => {
  const [articless, setArticless] = useState<Article[]>([]);

  useEffect(() => {
    setArticless(articles);
  }, []);

  const handleChange =
    (index: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setArticless(
        articless.map((article, i) => {
          if (i == index) {
            article.expanded = !article.expanded;
          } else {
            article.expanded = false;
          }
          return article;
        })
      );
    };

  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 500 }}>
        {articles &&
          articles.map((article, i) => (
            <Accordion
              key={i}
              expanded={article.expanded}
              onChange={handleChange(i)}
            >
              <AccordionSummary>
                {article.title ? (
                  <Typography>{article.title}</Typography>
                ) : (
                  <Typography>Title</Typography>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{article.description}</Typography>
                <Link href={article.url} underline="none">
                  Ver
                </Link>
              </AccordionDetails>
            </Accordion>
          ))}
      </TableContainer>
    </Paper>
  );
};

export default ArticleList;
