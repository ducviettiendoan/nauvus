import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {IRootState} from 'reducers';
import {connect} from 'react-redux';
import {getDriverHOS, getViolations} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from '@material-ui/core/Card';
import Driver from"assets/img/bg-driving.png";
import LiveIconGreen from "../../../../../components/Icons/LiveIconGreen";


const useStyles = makeStyles((theme) => ({

  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },

  onlineButton:{
    background: "#25345C !important",
    borderRadius: "28px !important",
    padding: "14px 32px !important",
    textTransform: "initial !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    width: "100%",
  },
  offlineButton: {
    background: "rgba(37, 52, 92, 0.1) !important",
    borderRadius: "28px !important",
    padding: "14px 32px !important",
    textTransform: "initial !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    width: "100%",
    color: "#25345C",
  },
  userOnline: {
    color: "green",
    fontWeight: 700,
  },
  userOffline: {
    color: "red",
    fontWeight: 700,
  },
  time: {
    color: "#C4C4C4",
  },
  liveButton: {
    background: '#ECEEF0!important',
    borderRadius: "22px !important",
    textTransform: "initial !important",
    lineHeight: "17px !important",
    /* font-family: Lato!important; */
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    color: "#25345C!important",
    height: "30px",
    border: "none !important",
    marginLeft: "0px !important",
    width: "60px",
    position: "absolute",
    top: "5px",
    left: "25px",
  },
  liveButtonPosition: {
    position: "relative",
    marginBottom: 40
  },
  cardFont: {
    fontSize: "14px",
    fontWeight: 400,
  },
  cardFirstLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: "12px",
  },
  lineHeight: {
    paddingTop: "12px",
  },
  cardLastLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: '12px',
    marginBottom: "21px",
  },

}));

export default function CameraCard(props) {
  const {series,place,name,img,status} = props;
  const classes = useStyles();

  const userStatus = status.online ? <div className={classes.userOnline}>Driving</div> : <div className={classes.userOffline}>Offline</div>;
  const showLiveButton = status.online ?
    <Button round className={classes.liveButton}>
      Live
      <LiveIconGreen/>
    </Button>
    :
    null;
  const showDetailButton = status.online ?
    <Button round className={classes.onlineButton}>
      Copy Details
    </Button>
    :
    <Button round className={classes.offlineButton}>
      Update Settings
    </Button>

  return (
        <GridItem xs={12} sm={6} md={4} lg={3} className={classes.liveButtonPosition}>
          {showLiveButton}
          <img
            style={{ width: "100%"}}
            src={img}
            alt="picture"
          />
          <Grid container className={classes.cardFont}>
            <Grid item xs={12} className={classes.cardFirstLine}>
              {series}
              {userStatus}
            </Grid>
            <Grid item xs={12} className={classes.lineHeight}>{place}</Grid>
            <Grid item xs={12} className={classes.lineHeight}>{name}</Grid>
            <Grid item xs={12} className={classes.cardLastLine}>
              {status.name}
              <div className={classes.time}>{status.time} ago</div>
            </Grid>
            {showDetailButton}
          </Grid>
        </GridItem>
  );
}

