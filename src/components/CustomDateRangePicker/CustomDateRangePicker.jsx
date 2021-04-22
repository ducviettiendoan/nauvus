import React, {useEffect} from "react";
import moment from 'moment';
import {makeStyles} from "@material-ui/core/styles";
// import {DateRangePicker} from "materialui-daterange-picker";
import CalendarIcon from "../Icons/CalendarIcon";
import Button from "../CustomButtons/Button";
import Grid from "@material-ui/core/Grid";

import DateRangePicker from 'react-bootstrap-daterangepicker';
// you will need the css that comes with bootstrap@3. if you are using
// a tool like webpack, you can do the following:
import 'bootstrap/dist/css/bootstrap.css';
// you will also need the css that comes with bootstrap-daterangepicker
import 'bootstrap-daterangepicker/daterangepicker.css';
import './custom-datepicker.scss';

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
    display: "flex",
    alignItems: "center"
  },
  datePickerLabelStyle: {
    color: "#25345C !important",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "16.8px",
    padding: "12.5px 31px 12.5px 16px"
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
  const [state, setState] = React.useState({
    start: moment().subtract(29, 'days'),
    end: moment(),
  });
  const { start, end } = state;
  const handleCallback = (start, end) => {
    setState({ start, end });
  };
  const label =
    start.format('MMMM D, HH:MM A') + ' - ' + end.format('MMMM D, HH:MM A YYYY');

  return (
    <>
      {/* <div className={classes.datePickerStyle}>
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
      </div> */}
      <DateRangePicker
        initialSettings={{
          keepOpen: true,
          showDropdowns: true,
          timePicker: true,
          startDate: start.toDate(),
          endDate: end.toDate(),
          ranges: {
            'Last Hour': [
              moment().subtract(1, 'hour').toDate(),
              moment().subtract(1, 'hour').toDate(),
            ],
            Today: [moment().toDate(), moment().toDate()],
            Yesterday: [
              moment().subtract(1, 'days').toDate(),
              moment().subtract(1, 'days').toDate(),
            ],
            'Last 7 Days': [
              moment().subtract(6, 'days').toDate(),
              moment().toDate(),
            ],
            'Last 30 Days': [
              moment().subtract(29, 'days').toDate(),
              moment().toDate(),
            ],
            'This Month': [
              moment().startOf('month').toDate(),
              moment().endOf('month').toDate(),
            ],
            'Last Month': [
              moment().subtract(1, 'month').startOf('month').toDate(),
              moment().subtract(1, 'month').endOf('month').toDate(),
            ],
            'Last Year': [
              moment().subtract(1, 'year').startOf('year').toDate(),
              moment().subtract(1, 'year').endOf('year').toDate(),
            ],
          },
        }}
        onCallback={handleCallback}
      >
        <div className={classes.datePickerStyle}>
          <div className={classes.datePickerLabelStyle}>
            {label}
          </div>
          <Button className={classes.calendarButton} round justIcon>
            <CalendarIcon className={classes.calendarIcon}/>
          </Button>
        </div>
      </DateRangePicker>
    </>

  );
}

export default CustomDateRangePicker;