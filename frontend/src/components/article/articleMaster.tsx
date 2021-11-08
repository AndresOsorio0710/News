import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import Article from "../../models/article";
import {} from "../historys/historyList"

interface Props {
  article: Article;
}

const ArticleMaster: React.FC<Props> = ({ article }) => {
  const [articleNow, setArticleNow] = useState<Article>({
    title: "",
    content: "",
    url: "",
    description: "",
    urlToImage: "",
    expanded: false,
  });

  useEffect(() => {
    setArticleNow(article);
  }, []);

  const handleChange =
    () => (event: React.SyntheticEvent, newExpanded: boolean) => {
      article.expanded = !article.expanded;
      setArticleNow({
        title: articleNow.title,
        content: articleNow.content,
        url: articleNow.url,
        description: articleNow.description,
        urlToImage: articleNow.urlToImage,
        expanded: !articleNow.expanded,
      });
      console.log(article);
      console.log(articleNow);
    };
  return (
    <div>
      <Accordion expanded={articleNow.expanded} onChange={handleChange()}>
        <AccordionSummary>
          <Typography>
            {articleNow.title} {"" + articleNow.expanded}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{articleNow.content}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ArticleMaster;
