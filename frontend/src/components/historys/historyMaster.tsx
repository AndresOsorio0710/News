import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HistoryList from "./historyList";
import HistoryIcon from "@mui/icons-material/History";

function HistoryMaster() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 8.5 }} className="page">
      <Box className="panel shadow">
        <Box className="header">
          <Grid container direction="row" alignItems="center" className="title">
            <HistoryIcon />
            <Typography variant="h6" align="inherit">
              History
            </Typography>
          </Grid>
        </Box>
        <Box className="inside">
          <HistoryList />
        </Box>
      </Box>
    </Box>
  );
}

export default HistoryMaster;
