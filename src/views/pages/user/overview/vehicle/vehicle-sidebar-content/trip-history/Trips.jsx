import React from 'react'
import Button from "components/CustomButtons/Button";
import historytrip from "assets/img/triphistory.png";
import {makeStyles} from "@material-ui/core/styles";
import TripImageIcon from "components/Icons/TripImageIcon";

const styles = {
  showImageButton: {
    position: "absolute",
    marginTop: 11,
    marginLeft: 16
  },
  tripHeadData: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tripContent: {
    padding: "0px 15px 7" +
      "px 15px",
    display: "flex",
    alignItems: "flex-start"
  },
  tripTitle: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C'
  },
  tripSubTitle: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#27AE60'
  },
  tripTextBold: {
    fontWeight: 700,
    fontSize: '12px',
    color: '#25345C'
  },
  tripText: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C'
  },
  tripTextGray: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4'
  },
}

const useStyles = makeStyles(styles)

export default function Trips() {
  const classes = useStyles()
  return (
    <div>
      <div>
        <Button
          round
          className={`btn-round-active h-36 w-166 ${classes.showImageButton}`}
          startIcon={<TripImageIcon/>}
        >
          Show trip images
        </Button>
        <img src={historytrip}/>
        <div className={classes.tripHeadData}>
          <div className={classes.tripTitle}>
            11m 51s
          </div>
          <div className={classes.tripSubTitle}>
            0.1 km
          </div>
        </div>
        <div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>10:38 AM (59s)</span>&nbsp;&nbsp;<span className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>Mar 22, 10:37 AM</span>&nbsp;&nbsp;<span
            className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Driver:</span>&nbsp;<span className={classes.tripText}>Bashir Said Isse</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Trailer:</span>&nbsp;<span
            className={classes.tripText}>5382</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          round
          className={`btn-round-active h-36 w-166 ${classes.showImageButton}`}
          startIcon={<TripImageIcon/>}
        >
          Show trip images
        </Button>
        <img src={historytrip}/>
        <div className={classes.tripHeadData}>
          <div className={classes.tripTitle}>
            11m 51s
          </div>
          <div className={classes.tripSubTitle}>
            0.1 km
          </div>
        </div>
        <div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>10:38 AM (59s)</span>&nbsp;&nbsp;<span className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>Mar 22, 10:37 AM</span>&nbsp;&nbsp;<span
            className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Driver:</span>&nbsp;<span className={classes.tripText}>Bashir Said Isse</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Trailer:</span>&nbsp;<span
            className={classes.tripText}>5382</span>
          </div>
        </div>
      </div>
      <div>
        <Button
          round
          className={`btn-round-active h-36 w-166 ${classes.showImageButton}`}
          startIcon={<TripImageIcon/>}
        >
          Show trip images
        </Button>
        <img src={historytrip}/>
        <div className={classes.tripHeadData}>
          <div className={classes.tripTitle}>
            11m 51s
          </div>
          <div className={classes.tripSubTitle}>
            0.1 km
          </div>
        </div>
        <div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>10:38 AM (59s)</span>&nbsp;&nbsp;<span className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextBold}>Mar 22, 10:37 AM</span>&nbsp;&nbsp;<span
            className={classes.tripText}>TransAm Yard Co</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Driver:</span>&nbsp;<span className={classes.tripText}>Bashir Said Isse</span>
          </div>
          <div className={classes.tripContent}>
            <span className={classes.tripTextGray}>Co Trailer:</span>&nbsp;<span
            className={classes.tripText}>5382</span>
          </div>
        </div>
      </div>
    </div>
  )
}