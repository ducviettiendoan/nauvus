import 'date-fns';
import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CalendarIcon from "../Icons/CalendarIcon";

const styles = {
  datePickerStyle: {
    width: 162,
    marginRight: 8,
    "& > div::before ": {
      borderBottom: "0 !important"
    },
    "& > div > div > button": {
      marginBottom: 4,
      height: 40,
      width: 40,
      border: "1px solid rgba(18, 18, 18, 0.1)",
      background: "#FFFFFF"
    },
    marginTop: 8,
    padding: "5px 0px 0px 10px",
    height: 40,
    border: "1px solid rgba(18, 18, 18, 0.1)",
    borderRadius: "20px",
    background: "#FFFFFF",
    color: "#25345C !important"

  },
  calendarIcon: {
  }
}

const useStyles = makeStyles(styles);

export default function Calendar(props) {
  const classes = useStyles();

  let getTime = new Date().getTime();
  let DateTime = new Date(getTime);
  const [selectedDate, setSelectedDate] = React.useState(DateTime);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container={!props.isNotContainer} justify="flex-end" className="keyBoardDatePickerContainer">
          <KeyboardDatePicker
            className={classes.datePickerStyle}
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            keyboardIcon={<CalendarIcon className={classes.calendarIcon} />}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
}
