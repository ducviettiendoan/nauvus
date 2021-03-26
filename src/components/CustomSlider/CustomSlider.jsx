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

const marks = [
  {
    value: 0,
    label: <GridItem className="slider-mark min-mark padding-0">min</GridItem>,
  },
  {
    value: 252,
    label: <GridItem className="slider-mark max-mark padding-0">max</GridItem>,
  }
];

function valuetext(value) {
  return `${value} hours`;
}

function labelText(value) {
  return `${value} hours`;
}

function valueLabelFormat(value) {
  return (
    <GridItem className="slider-thumb-container padding-0">
      <GridItem className="slider-thumb-header pading-0">{value} hours</GridItem>
      <GridItem className="slider-thumb-content padding-0">
        {Math.floor(value / 24)} days {value % 24} hours
      </GridItem>
    </GridItem>
  );
}

export default function CustomSlider(props) {
  const { valueSlider, allSlider, setSliderValue, name } = props

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
        defaultValue={84}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={1}
        valueLabelDisplay="on"
        name={name}
        marks={marks}
        min={0}
        max={252}
        getAriaLabel={labelText}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
      />
    </GridItem>
  );
}
