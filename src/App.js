import React, { Component } from "react";
import "./styles.css";
import Buttons from "./widgets/Buttons";
import Typography from "@material-ui/core/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

export default class App extends Component {
  render() {
    return (
      <div className="mainWeatherAppContainer">
        <Typography variant="h3" component="h2">
          WEATHER APP
        </Typography>
        <Stack spacing={2} direction="row" className="buttonsCity">
          <Buttons />
        </Stack>

        <div className="container">
          {/* WEATEHER COMPONENT */}
          <Card className="weather">
            <div className="container-inner">
              <div className="content-inner left-side">
                <Typography variant="h6">Bangalore, Karnataka</Typography>
                <Typography variant="subtitle2">As of 11:37 AM</Typography>
                <Typography variant="h2" style={{ marginTop: "20px" }}>
                  26
                </Typography>
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                  Haze
                </Typography>
                <Typography variant="subtitle2">
                  42% chance of rain until 12:30
                </Typography>
              </div>

              <div className="content-inner right-side">
                <Typography variant="h5">79</Typography>
                <Typography variant="subtitle2">Humidity</Typography>
                <Typography variant="h5" style={{ marginTop: "30px" }}>
                  28
                </Typography>
                <Typography variant="subtitle2">Feels like</Typography>
                <Typography variant="h5" style={{ marginTop: "30px" }}>
                  0 N
                </Typography>
                <Typography variant="subtitle2">Wind</Typography>
              </div>
            </div>
          </Card>

          {/* DETAIL COMPONENT */}
          <Card className="details">
            <div className="container-inner">
              <div className="content-inner left-side">
                <Typography variant="h6">Bangalore, Karnataka</Typography>
                <Typography variant="subtitle2">Details</Typography>
                <Typography variant="h6" style={{ marginTop: "30px" }}>
                  12.983, 77.583
                </Typography>
                <Typography variant="subtitle2">Co-ordinates</Typography>
                <Typography variant="h6" style={{ marginTop: "30px" }}>
                  Asia/Kolkata
                </Typography>
                <Typography variant="subtitle2">Time zone</Typography>
              </div>

              <div className="content-inner details-right-side">
                <Typography variant="h6">15-10-2021 12:11</Typography>
                <Typography variant="subtitle2">Local Time</Typography>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
