import React from "react"
import { InputBase, InputLabel, makeStyles, withStyles } from "@material-ui/core"
import Proptypes from "prop-types"

const TimeInput = withStyles((theme) => ({
  root: {
    width: "230px",
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ECEEF0',
    borderRadius: "12px",
    fontSize: 14,
    lineHeight: 17,
    width: '150px',
    padding: '10px 16px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    '&:focus': {
      borderColor: "#C4C4C4",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  timeRangeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "40px 0px 15px 0px"
  },
  container: {
    display: 'flex',
    flexDirection: "column"
  },
  inputLabel: {
    color: "#C4C4C4",
    fontSize: "18px",
    lineHeight: "17px",
  },
}))

function DateTimeRangePicker(props) {
  const { timeState, setTimeState } = props
  console.log(props)
  const classes = useStyles()

  const handleChangeTime = (event) => {
    setTimeState({
      ...timeState,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={classes.timeRangeContainer}>
      <form className={classes.container} noValidate>
        <InputLabel
          classes={{
            root: classes.inputLabel
          }}
          shrink htmlFor="start">
          Start time
        </InputLabel>
        <TimeInput
          id="start"
          name="start"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          classes={{
            root: classes.root,
          }}
          value={timeState.start}
          onChange={handleChangeTime}
        />
      </form>

      <form className={classes.container} noValidate>
        <InputLabel
          classes={{
            root: classes.inputLabel
          }}
          shrink htmlFor="end">
          End time
        </InputLabel>
        <TimeInput
          id="end"
          name="end"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          classes={{
            root: classes.root,
          }}
          value={timeState.end}
          onChange={handleChangeTime}
        />
      </form>
    </div>
  )
}

DateTimeRangePicker.propTypes = {
  timeState: Proptypes.object.isRequired,
  setTimeState: Proptypes.func.isRequired
}

export default DateTimeRangePicker