import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import NewMaster from "./news/newMaster";
import HistoryMaster from "./historys/historyMaster";
import { makeStyles } from "@mui/styles";
import theme from "../temaConfig";

const useStyles = makeStyles(() => ({
  offset: theme.mixins.toolbar,
  sidebar: {
    background: "transparent",
    minHeight: "100%",
  },
  main: {
    marginBottom: 10,
  },
  li: {
    marginTop: 4,
  },
  a: {
    color: "#464646",
    display: "block",
    fontSize: "1.1em",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#607D8B",
      display: "block",
    },
  },
}));

function Master() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const classes = useStyles();

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      onShowDrawer();
    };

  const onShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={showDrawer} onClose={toggleDrawer()}>
        <Paper className={classes.sidebar}>
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
            className={classes.main}
          >
            <List className={classes.li}>
              <Link to={"/news"} className={classes.a}>
                <ListItem button>
                  <ListItemIcon className={"img"}>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"News"} />
                </ListItem>
              </Link>
              <Link to={"/history"} className={classes.a}>
                <ListItem button>
                  <ListItemIcon className={"img"}>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText primary={"History"} />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Paper>
      </Drawer>
      <Routes>
        <Route path="/news" element={<NewMaster />} />
        <Route path="/history" element={<HistoryMaster />} />
      </Routes>
    </Box>
  );
}

export default Master;
