import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Link,
  TableContainer,
  Paper,
} from "@mui/material";
import Article from "../../models/article";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <TableContainer sx={{ maxHeight: 480 }}>
        {articles &&
          articles.map((article, i) => (
            <Accordion
              key={i}
              expanded={article.expanded}
              onChange={handleChange(i)}
              className="accordion2"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel{" + i + "bh-content"}
                id={"panel" + i + "bh-header"}
              >
                {article.title ? (
                  <Typography variant="body2" className="title">
                    {article.title}
                  </Typography>
                ) : (
                  <Typography>Title</Typography>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="caption">{article.description}</Typography>
                <Link href={article.url} underline="none" className="look">
                  {"\n"}Look{">>>"}
                </Link>
              </AccordionDetails>
            </Accordion>
          ))}
      </TableContainer>
    </Paper>
  );
};

export default ArticleList;
