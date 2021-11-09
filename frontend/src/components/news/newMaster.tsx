import React, {
  useState,
  ChangeEvent,
  FormEventHandler,
  FormEvent,
} from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  InputBase,
} from "@mui/material";
import News from "../../models/news";
import NewsService from "../../services/newsService";

import SearchIcon from "@mui/icons-material/Search";
import ArticleList from "../article/articleList";
function NewMaster() {
  const [city, setCity] = useState("");
  const [news, setNews] = useState<News>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCity(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    retriveNews();
  };

  const retriveNews = () => {
    NewsService.get(city)
      .then((response: any) => {
        setNews(response.data);
        console.log(response.data);
        console.log(news?.weather.main);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={3}>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" className="title">
                Consultar
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
                onSubmit={handleSubmit}
              >
                <InputBase
                  required
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search News"
                  id="city"
                  name="city"
                  value={city}
                  onChange={handleInputChange}
                />
                <IconButton
                  type="submit"
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography variant="h6" className="title">
                Wearther
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={9}>
          <Box>
            <Box>
              <Typography variant="h6" className="title">
                News
              </Typography>
            </Box>
            <Box>{news ? <ArticleList articles={news?.articles} /> : null}</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewMaster;
