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

import CameraIcon from "components/Icons/CameraIcon";
import VehicleMapIcon from "components/Icons/VehicleMapIcon";
import VehicleUserIcon from "components/Icons/VehicleUserIcon";
import VehicleLinkIcon from "components/Icons/VehicleLinkIcon";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";

import { Col, Row } from 'reactstrap';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  liContainer: {
    width: "330px",
    height: "103px",
    border: "1px solid #ECECF2",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "rgba(245, 245, 250, 0.4)",
    marginLeft: "29px",
    marginBottom: "8px"
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
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
  }
};

import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import VehicleDetails from "./VehicleDetails";

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

  return (
    <div ref={mainPanelVehicleSideBar}>
      <Divider />
      <Row>
        <Col><div className={ classes.txtMainDevice } style={{ padding: '23px'}}>Your recent for</div></Col>
        <Col style={{ textAlign: 'right', padding: '23px', marginRight: '23px'}} className={ classes.txtMainDevice }><div>Clear All</div></Col>
      </Row>

      <List>
        {props.vehicles.map((vehicle, index) => (
          <ListItem button key={index} className={ classes.liContainer }>
            <ListItemIcon className={ classes.cameraIcon }><CameraIcon /></ListItemIcon>
            <ListItemText style={{ marginLeft: "50px" }} primary={
              <>
                <div className={ classes.txtMainDevice}><span>{ vehicle.serialnumber }</span><span style={{ float: "right"}}>- km/h</span></div>
                <div className={ classes.txtSubDevice}><VehicleMapIcon /> <span style={{ top: "-2px", position: "absolute",     whiteSpace: 'nowrap', overflow: 'hidden',    textOverflow: 'ellipsis',    width: '100%',   right: '-21px' }}>{vehicle.formatted_address}</span></div>
                <Row className={ classes.txtSubDevice}>
                  <Col>
                  <VehicleUserIcon /> <span style={{ top: "-2px", position: "absolute" }}>---</span>
                  </Col>
                  <Col style={{ marginTop: "4px"}}>
                    <VehicleLinkIcon/> <span style={{ top: "-5px", position: "absolute" }}>---</span>
                  </Col>
                </Row>
              </>
            } />
          </ListItem>
        ))}
        { !props.vehicles.length && <div style={{ textAlign: 'center'}}><h5>No data</h5></div>}
      </List>
    </div>
  );
}

export default connect(
  ({ vehicle }: IRootState) => ({
    vehicles: vehicle.vehicles
  }),
  {
  }
)(VehicleSideBar);