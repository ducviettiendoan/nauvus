import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {DateRangePicker} from "materialui-daterange-picker";
import CalendarIcon from "../Icons/CalendarIcon";
import Button from "../CustomButtons/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  datePickerStyle: {
    minWidth: 162,
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
    textAlign: "end",
    // display: "flex",
    // justifyContent: "space-between"
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
  date: {
    textAlign: "center",
    fontWeight: 400,
  },
  divider: {
    width: "10px",
    borderTop: " 2px solid #25345C",
    marginTop: "0",
    marginBottom: "0",
  }

}

const useStyles = makeStyles(styles);

const CustomDateRangePicker = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState({});

  const toggle = () => setOpen(!open);
  return (
    <>
      <div className={classes.datePickerStyle}>
        {/*In case want to display date range*/}
        {/*<Grid container>*/}
        {/*  <Grid xs={12} className={classes.date} item>{dateRange.startDate && dateRange.startDate.toDateString().slice(4)}</Grid>*/}
        {/*  <Grid xs={12} className={classes.date} item>*/}
        {/*    <hr className={classes.divider}/>*/}
        {/*  </Grid>*/}
        {/*  <Grid xs={12} className={classes.date} item>{dateRange.endDate && dateRange.endDate.toDateString().slice(4)}</Grid>*/}
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