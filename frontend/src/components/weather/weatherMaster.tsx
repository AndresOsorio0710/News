import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Weather from "../../models/weather";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AirIcon from "@mui/icons-material/Air";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
interface Props {
  weather: Weather;
}

const WeatherMaster: React.FC<Props> = ({ weather }) => {
  const [dateNow, setDateNow] = useState<Date>();

  useEffect(() => {
    let date = new Date();
    date.setHours(date.getHours() + 5);
    date.setSeconds(date.getSeconds() + weather.timezone);
    setDateNow(date);
  }, []);

  return (
    <Box className="panel shadow">
      <Box className="header">
        <Grid container direction="row" alignItems="center" className="title">
          <WbSunnyIcon />
          <Typography variant="h6" align="inherit">
            Weather
          </Typography>
        </Grid>
      </Box>
      <Box className="inside">
        <Grid container justifyContent="center" className="item">
          {weather.clouds.all < 25 ? (
            <Grid item alignItems="center">
              <Typography variant="h6" align="center">
                Clear Sky
              </Typography>
            </Grid>
          ) : weather.clouds.all < 75 ? (
            <Grid item>
              <Typography variant="h6" align="center">
                Partly Cloudy Sky
              </Typography>
            </Grid>
          ) : (
            <Grid item alignItems="center">
              <Typography variant="h6" align="inherit">
                Cloudy Sky
              </Typography>
            </Grid>
          )}
          {weather.wind.speed < 40 ? (
            <Grid item alignItems="center">
              <Typography variant="h6" align="inherit">
                {".  -  "}Gentle Breeze.
              </Typography>
            </Grid>
          ) : weather.wind.speed < 70 ? (
            <Grid item alignItems="center">
              <Typography variant="h6" align="inherit">
                {".  -  "}Strong Breeze.
              </Typography>
            </Grid>
          ) : weather.wind.speed < 120 ? (
            <Grid item alignItems="center">
              <Typography variant="h6" align="inherit">
                {".  -  "}Very Strong Breeze
              </Typography>
            </Grid>
          ) : (
            <Grid item alignItems="center">
              <Typography variant="h6" align="inherit">
                {".  -  "}Hurricane.
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid container justifyContent="center" className="item">
          <Typography>
            The high will be {Math.trunc(weather.main.temp_max)}°C, the low will
            be {Math.trunc(weather.main.temp_min)}°C.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="item"
            >
              <DeviceThermostatIcon />
              <Typography variant="h6" align="inherit">
                {Math.trunc(weather.main.temp)}ºC
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="item"
            >
              <AirIcon />
              <Typography variant="h6" align="inherit">
                {weather.wind.speed}m/s ENE
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="item"
            >
              <ExploreIcon />
              <Typography variant="h6" align="inherit">
                {weather.wind.deg}º
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="item"
            >
              <ArrowCircleDownIcon />
              <Typography variant="h6" align="inherit">
                {weather.main.pressure} hPa
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              className="item"
            >
              <Typography variant="h6" align="inherit">
                Hummidity: {weather.main.humidity}%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className="item">
          <Typography variant="h4" align="inherit">
            {dateNow?.getHours()}:
            {dateNow && dateNow.getMinutes() < 10
              ? "0" + dateNow?.getMinutes()
              : dateNow?.getMinutes()}
          </Typography>
        </Grid>
        <Grid container justifyContent="center" className="item">
          <EmojiPeopleIcon />
          <Typography variant="h6" align="center">
          {weather.main.feels_like}ºC
          </Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default WeatherMaster;
