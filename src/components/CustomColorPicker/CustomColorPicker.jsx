import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";

const styles = {
  colorSelect: {
    height: 24,
    width: 24,
    marginRight: 12,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

  },
  colorSelected: {
    height: 12,
    width: 12,
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.75)"
  },
  colorPicker: {
    display: "flex",
    marginTop: 16
  }
}

const useStyles = makeStyles(styles)

const CustomColorPicker = (props) => {
  const classes = useStyles()
  const defaultColors = ["#5AD0D9", "#E77FF0", "#FAD2B9", "#D78526", "#4284D1"]
  const colors = props.colors || defaultColors
  const initialColor = props.value || colors[0]
  const [selectedColor, setSelectedColor] = useState(initialColor)
  const handleClick = (color) => {
    setSelectedColor(color)
    props.onChange(color)
  }
  return(
    <div className={classes.colorPicker}>
      {colors.map((color) => {
        return(
          <div style={{background: color}} className={classes.colorSelect} onClick={() => handleClick(color)}>
            { selectedColor === color && <div className={classes.colorSelected}></div>}
          </div>
        )
      })}
    </div>
  )
}

export default CustomColorPicker