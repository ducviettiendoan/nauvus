import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    min: 0,
    label: 'min',
  },
  {
    max: 251,
    // label: 'max',
  },
];

function valuetext(value) {
  return `${value} hours`;
}

export default function CustomSlider(props) {
  const { valueSlider, allSlider, setSliderValue, name } = props

  const classes = useStyles();

  const handleChange = (event, val) => {
    setSliderValue({...allSlider, [event.target.name]: val})
  }


  return (
    <div className={classes.root}>
      <Slider
        xs={10} sm={10} md={10}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="on"
        name={name}
        max={252}
        min={0}
        defaultValue={valueSlider}
        marks={marks}
        // value={valueSlider}
        onChange={handleChange}
      />
    </div>
  );
}