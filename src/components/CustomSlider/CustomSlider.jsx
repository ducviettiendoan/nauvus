import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import GridItem from "components/Grid/GridItem.js";


const useStyles = makeStyles({
  root: {
    marginTop: "25px",
    marginBottom: "15px",
    padding: "0px 0px 0px 0px !important",
    color: "#fff"
  },
  valueLabel: {
    background: "none",
    borderRadius: "12px",
    // width: "100px",
    top: "-50px",
    "& div": {
      padding: "0px 0px 0px 0px !important"
    }
  },
  rail: {
    height: "8px",
    background: "#25345C",
    borderRadius: "12px"
  },
  track: {
    // width: "389px",
    height: "8px",
    background: "#25345C",
    borderRadius: "12px"
  },
  thumb: {
    width: "20px",
    height: "20px",
    background: "#25345C",
    borderRadius: "10px",
    border: "4px solid #ECEEF0"
  }
});

function valuetext(value) {
  return `${value} hours`;
}

function labelText(value) {
  return `${value} hours`;
}

export default function CustomSlider(props) {
  const { allSlider, setSliderValue, name, type, step, min, max, sliderDefaultValue } = props

  const valueLabelFormat = (value) => {
    switch (type) {
      case "hours":
        return (
          <GridItem className="slider-thumb-container padding-0">
            <GridItem className="slider-thumb-header pading-0">{value} hours</GridItem>
            <GridItem className="slider-thumb-content padding-0">
              {Math.floor(value / 24)} days {value % 24} hours
            </GridItem>
          </GridItem>
        );

      case "sensitivity":
        return (
          <GridItem className="slider-thumb-container padding-0">
            <GridItem className="slider-thumb-header pading-0">{value} G</GridItem>
          </GridItem>
        )

      default:
        break;
    }
  }

  const marks = [
    {
      value: min,
      label: <GridItem className="slider-mark min-mark padding-0">min</GridItem>,
    },
    {
      value: max,
      label: <GridItem className="slider-mark max-mark padding-0">max</GridItem>,
    }
  ];

  const classes = useStyles();

  const handleChange = (event, val) => {
    setSliderValue({ ...allSlider, [event.target.name]: val })
  }

  return (
    <GridItem className={classes.root} xs={12} sm={12} md={12} >
      <Slider
        classes={{
          root: classes.root,
          valueLabel: classes.valueLabel,
          rail: classes.rail,
          track: classes.track,
          thumb: classes.thumb
        }}
        defaultValue={sliderDefaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={step}
        valueLabelDisplay="on"
        name={name}
        marks={marks}
        min={min}
        max={max}
        getAriaLabel={labelText}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
      />
    </GridItem>
  );
}
