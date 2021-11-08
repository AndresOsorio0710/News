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
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import NewMaster from "./news/newMaster";
import HistoryMaster from "./historys/historyMaster";

function Master() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [content, setContent] = React.useState("");

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
      <AppBar position="static">
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
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={toggleDrawer()}
          onKeyDown={toggleDrawer()}
        >
          <List>
            <Link to={"/news"}>
              <ListItem button>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={"News"} />
              </ListItem>
            </Link>
            <Link to={"/history"}>
              <ListItem button>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary={"History"} />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Routes>
        <Route path="/news" element={<NewMaster />} />
        <Route path="/history" element={<HistoryMaster />} />
      </Routes>
    </Box>
  );
}

export default Master;
