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
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
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
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
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
  }
}));

export default function CameraCard(props) {
  const {series,place,name,status} = props;
  const classes = useStyles();

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }


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
      Update Settings
    </Button>
    :
    <Button round className={classes.offlineButton}>
      Update Settings
    </Button>

  return (
    <div>
        <GridItem xs={12} sm={12} sm={12} style={{position: "relative"}}>
          {showLiveButton}
          <img
            style={{ width: "100%", height: "300px"}}
            src={Driver}
            alt="picture"
          />
          <Grid container style={{ fontSize: "14px", fontWeight: 400}}>
            <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
              {series}
              {userStatus}
            </Grid>
            <Grid item xs={12}>{place}</Grid>
            <Grid item xs={12}>{name}</Grid>
            <Grid item xs={12} style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
              {status.name}
              <div className={classes.time}>{status.time} min ago</div>
            </Grid>
            {showDetailButton}
          </Grid>
        </GridItem>
    </div>
  );
}

