import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {DateRangePicker} from "materialui-daterange-picker";
import CalendarIcon from "../Icons/CalendarIcon";
import Button from "../CustomButtons/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  datePickerStyle: {
    width: 162,
    marginRight: 8,
    "& > div::before ": {
      borderBottom: "0 !important"
    },

    marginTop: 8,
    height: 41,
    border: "1px solid rgba(18, 18, 18, 0.1)",
    borderRadius: "20px",
    background: "#FFFFFF",
    color: "#25345C !important",
    textAlign: "end"
  },
  calendarIcon: {
    color: "#25345C"
  },
  menu: {
    position: "absolute",
    left: "20px"
  },
  calendarButton: {
    margin: 0,
    height: 40,
    width: 40,
    border: "1px solid rgba(18, 18, 18, 0.1)",
    borderRight: "none",
    background: "#FFFFFF"
  },

}

const useStyles = makeStyles(styles);

const CustomDateRangePicker = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  useEffect(() => {
    console.log(dateRange)
  }, [dateRange])

  const toggle = () => setOpen(!open);
  return (
    <>
      <div className={classes.datePickerStyle}>
        {/*<Grid container>*/}
        {/*  <Grid xs={12} item>{dateRange.startDate.toISOString()}</Grid>*/}
        {/*  <Grid xs={12} item>{dateRange.endDate.toISOString()}</Grid>*/}
        {/*</Grid>*/}
        <Button className={classes.calendarButton} onClick={toggle} round justIcon>
          <CalendarIcon className={classes.calendarIcon}/>
        </Button>
      </div>
      <div className={classes.menu}>
        <DateRangePicker
          open={open}
          toggle={toggle}
          onChange={(range) => setDateRange(range)}
        />
      </div>
    </>

  );
}

export default CustomDateRangePicker;