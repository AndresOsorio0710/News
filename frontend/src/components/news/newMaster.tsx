import React, {
  useState,
  ChangeEvent,
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
import ArticleIcon from "@mui/icons-material/Article";
import SearchIcon from "@mui/icons-material/Search";
import ArticleList from "../article/articleList";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import WeatherMaster from "../weather/weatherMaster";

function NewMaster() {
  const [city, setCity] = useState("");
  const [news, setNews] = useState<News>();


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCity(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNews(undefined);
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
    <Box sx={{ flexGrow: 1, marginTop: 8.5 }} className="page">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} xl={3}>
          <Box sx={{ flexGrow: 1 }} className="panel shadow">
            <Box sx={{ flexGrow: 1 }} className="header">
              <Grid
                container
                direction="row"
                alignItems="center"
                className="title"
              >
                <ManageSearchIcon />
                <Typography variant="h6" align="inherit">
                  Check city
                </Typography>
              </Grid>
            </Box>
            <Box sx={{ flexGrow: 1 }} className="inside">
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
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
                {news ? <WeatherMaster weather={news?.weather} /> : null}
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} xl={9}>
          <Box className="panel shadow">
            <Box className="header">
              <Grid
                container
                direction="row"
                alignItems="center"
                className="title"
              >
                <ArticleIcon />
                <Typography variant="h6" align="inherit">
                  Articles
                </Typography>
              </Grid>
            </Box>
            <Box className="inside">
              {news ? <ArticleList articles={news?.articles} /> : null}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewMaster;
