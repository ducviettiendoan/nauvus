import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CustomTimeline from "components/CustomTimeline/CustomTimeline"
import {connect} from "react-redux";
import {setOpenDrawer} from "reducers/overview";

const styles = {
  tripContainer: {
    marginBottom: "12px !important"
  },
  tripContent: {
      paddingLeft: "5px"
  },
  dest: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "400",
    display: "flex"
  },
  time: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 4
  },
  timeline: {
    position: "relative",
    right: "17px",
    maxWidth: "150px"
  }
}

const useStyles = makeStyles(styles)

export function Trips(props) {
  const classes = useStyles()

  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}>  Sante Drive, Vaughan, ON</div>
            <div className={classes.time}>  2:13 PM EDT</div>
      </div>,
      color: "green"
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
         <div className={classes.dest}>  111 Transam Terminal</div>
            <div className={classes.time}>  Apr 1, 2:57 PM EDT</div>
      </div>,
      color: "red"
    }
  ]

  const listTrips = ["0"]

  return (
    <div>
      {listTrips.map((trip, i) => {
        return (
          <div key={i} className={classes.tripContainer} >

            <div className={classes.timeline}>
              <CustomTimeline timelineContent={timelineContent} />
            </div>
          </div>
        )
      })}

    </div>
  )
}

const mapStateToProps = ({ overview }) => {
  return {
  };
};

const mapDispatchToProps = {
  setOpenDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(Trips);