import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from "components/Accordion/Accordion";

import CameraIcon from "components/Icons/CameraIcon";
import VehicleMapIcon from "components/Icons/VehicleMapIcon";
import VehicleUserIcon from "components/Icons/VehicleUserIcon";
import VehicleLinkIcon from "components/Icons/VehicleLinkIcon";
import OpenInNewTabIcon from "components/Icons/OpenInNewTabIcon";
import LocationIcon from "components/Icons/LocationIcon";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";
import { Col, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { loadVehicles, loadVehiclesMock } from 'reducers/vehicle';

const styles = {
  cardContainer: {
    width: "330px",
    // height: "103px",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "#FFFFFF",
    margin: "auto",
    marginBottom: "8px",
  },
  liContainer: {
    borderRadius: "12px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "285px",
    height: "70px",
  },
  txtMainDevice: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    marginBottom: "7px"
  },
  txtSubDevice: {
    color: "#C4C4C4",
    fontSize: "12px",
    lineHeight: "21px",
    position: "relative"
  },
  cameraIcon: {
    position: "absolute",
    top: "20px",
    left: "25px"
  },
  txtSpeed: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#27AE60",
  },
  expansionClasses: {
    padding: "0px 15px 0px 8px !important",
    borderBottom: "0px !important",
    marginTop: "4px !important",
    marginBottom: "4px !important",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    }
  },
  expansionContentClasses: {
    marginTop: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important"
  },
  cardExpandContent: {
    padding: "16px 0px 16px 0px !important",
    background: "#ECEEF0",
  },
  txtExpansion: {
    color: "#25345C",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "21px",
    paddingLeft: "3px"
  },
  expandedHeader: {
    display: "flex",
    justifyContent: "space-between"
  }
};

const useStyles = makeStyles(styles);
var ps;
export function VehicleSideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      // setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelVehicleSideBar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);

  React.useEffect(() => {
    props.loadVehicles()
    props.loadVehiclesMock()
  }, [])

  return (
    <div ref={mainPanelVehicleSideBar}>
      <Divider />
      <Row>
        <Col><div className={classes.txtMainDevice} style={{ padding: '23px' }}>Your recent for</div></Col>
        <Col style={{ textAlign: 'right', padding: '23px', marginRight: '23px' }} className={classes.txtMainDevice}><div>Clear All</div></Col>
      </Row>

      <List>
        {/* {props.vehicles.map((vehicle, index) => (
          <ListItem button key={index} className={classes.liContainer}>
            <ListItemIcon className={classes.cameraIcon}><CameraIcon /></ListItemIcon>
            <ListItemText style={{ marginLeft: "50px" }} primary={
              <>
                <div className={classes.txtMainDevice}><span>{vehicle.serialnumber}</span><span style={{ float: "right" }}>- km/h</span></div>
                <div className={classes.txtSubDevice}><VehicleMapIcon /> <span style={{ top: "-2px", position: "absolute", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', right: '-21px' }}>{vehicle.formatted_address}</span></div>
                <Row className={classes.txtSubDevice}>
                  <Col>
                    <VehicleUserIcon /> <span style={{ top: "-2px", position: "absolute" }}>---</span>
                  </Col>
                  <Col style={{ marginTop: "4px" }}>
                    <VehicleLinkIcon /> <span style={{ top: "-5px", position: "absolute" }}>---</span>
                  </Col>
                </Row>
              </>
            } />
          </ListItem>
        ))} */}

        {props.vehicles.map((vehicle, index) => (
          <Card className={classes.cardContainer}>
            <Accordion collapses={
              [
                {
                  title:
                    <div>
                      <ListItem key={index} className={classes.liContainer}>
                        <div>
                          <ListItemIcon className={classes.cameraIcon}><CameraIcon /></ListItemIcon>
                          <ListItemText style={{ marginLeft: "50px" }} primary={
                            <>
                              <div className={classes.txtMainDevice}><span>{vehicle.id}</span><span style={{ float: "right" }}></span></div>
                              <div className={classes.txtSubDevice}><span style={{ top: "-2px", position: "absolute", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{vehicle.vehicle}</span></div>
                            </>
                          } />
                        </div>
                        <div className={classes.txtSubDevice}>
                          <span className={classes.txtSpeed}>{vehicle.speed} -km/h</span>
                        </div>
                      </ListItem>
                    </div>,
                  content:
                    <div className={classes.cardExpandContent}>
                      <GridItem className={classes.expandedHeader}>
                        <div>
                          <LocationIcon />
                          <span className={classes.txtExpansion}>Tri-State Toolway, East Hazel Crest , IL</span>
                        </div>
                        <OpenInNewTabIcon />
                      </GridItem>
                      <GridItem>
                        <VehicleUserIcon />
                        <span className={classes.txtExpansion}>Grigory Mamadov</span>
                      </GridItem>
                      <GridItem>
                        <VehicleLinkIcon color="#25345C" />
                        <span className={classes.txtExpansion}>53280</span>
                      </GridItem>
                      <GridItem>
                        <span style={{ color: "#B4B4B4", fontSize: 12 }}>Co Driver:</span> &nbsp;
                        <span className={classes.txtExpansion}>Ali Singh</span>
                      </GridItem>
                    </div>
                },
              ]
            }
              expansionSummaryClasses={{
                root: classes.expansionClasses,
                content: classes.expansionContentClasses
              }}
              expansionPanelClasses={{
                root: classes.expansionPanelClasses
              }}
            />
          </Card>
        ))}

        {!props.vehicles.length && <div style={{ textAlign: 'center' }}><h5>No data</h5></div>}
      </List>
    </div>
  );
}

const mapStateToProps = ({ vehicle }) => {
  return {
    vehicles: vehicle.vehiclesMock,
  }
}

const mapDispatchToProps = {
  loadVehicles,
  loadVehiclesMock
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSideBar);