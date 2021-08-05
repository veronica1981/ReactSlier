import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: 400
  }
});

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        backgroundColor: "white",
        height: "25px",
        width: "25px",
        marginTop: "-10px",
        boxShadow: "0.2px 0.2px 3px 1px #ccc"
      },
      track: {
        color: "red",
        height: "5px"
      },
      rail: {
        color: "#D3D3D3",
        height: "5px"
      },
      markLabel: {
        color: "red"
      }
    }
  }
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([23, 39]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Parameter
      </Typography>
      <ThemeProvider theme={muiTheme}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          style={{ color: "red" }}
        />
      </ThemeProvider>
    </div>
  );
}
