import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from "components/Accordion/Accordion";
import ToolboxButton from "components/CustomButtons/ToolboxButton";

import CameraIcon from "components/Icons/CameraIcon";
import VehicleUserIcon from "components/Icons/VehicleUserIcon";
import VehicleLinkIcon from "components/Icons/VehicleLinkIcon";
import OpenInNewTabIcon from "components/Icons/OpenInNewTabIcon";
import LocationIcon from "components/Icons/LocationIcon";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";

import {connect} from 'react-redux';
import {loadVehicles, loadVehiclesMock} from 'reducers/vehicle';
import {Grid} from "@material-ui/core";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import {useHistory} from "react-router-dom";
import {setOpenDrawer} from "reducers/overview"
import CustomTagDropdown from "components/CustomDropdown/CustomTagDropdown";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  sidebarContainer: {
    overflowY: "auto"
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 16px 16px 16px !important",
    color: "#25345C",
    fontWeight: "bold"
  },
  sidebarHeader: {
    width: "100%",
    height: "66px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 16px 16px 16px !important"
  },
  cardContainer: {
    width: "auto",
    // height: "103px",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "#FFFFFF",
    margin: "0px 15px 8px 15px !important"
  },
  liContainer: {
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
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
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
  expansionPanelClassesRounded: {
    border: "1px solid #ECEEF0",
    boxShadow: "inherit"
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
  },
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "0px !important"
  },
}))

var ps;

export function VehicleSideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();
  const history = useHistory()

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
    props.setOpenDrawer()
  }, [])

  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer}>
      <div>
        <div>
          <Grid xs={12} sm={12} md={12} className={classes.sidebarHeader}>
            <ToolboxButton placeholder="Search asset" showFilter/>
          </Grid>
          <Divider variant="fullWidth" light/>
        </div>
      </div>

      <List>
        <div style={{ paddingLeft: '16px', paddingRight: '20px' }}>
          <CustomTagDropdown tags = { ["Title", "Title 2", "Title 3"] } />
        </div>
        {props.vehicles.map((vehicle, index) => (
          <Card className={classes.cardContainer}>
            <Accordion collapses={
              [
                {
                  title:
                    <div>
                      <ListItem key={index} className={classes.liContainer}>
                        <div>
                          <ListItemIcon className={classes.cameraIcon}><CameraIcon/></ListItemIcon>
                          <ListItemText style={{marginLeft: "50px"}} primary={
                            <>
                              <div className={classes.txtMainDevice}><span>{vehicle.id}</span><span
                                style={{float: "right"}}/></div>
                              <div className={classes.txtSubDevice}><span style={{
                                top: "-2px",
                                position: "absolute",
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '100%'
                              }}>{vehicle.vehicle}</span></div>
                            </>
                          }/>
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
                          <LocationIcon/>
                          <span className={classes.txtExpansion}>Tri-State Toolway, East Hazel Crest , IL</span>
                        </div>
                        <Link to={ "/o/vehicle/123456" }>
                          <OpenInNewTabIcon/>
                        </Link>
                      </GridItem>
                      <GridItem>
                        <VehicleUserIcon/>
                        <span className={classes.txtExpansion}>Grigory Mamadov</span>
                      </GridItem>
                      <GridItem>
                        <VehicleLinkIcon color="#25345C"/>
                        <span className={classes.txtExpansion}>53280</span>
                      </GridItem>
                      <GridItem>
                        <span style={{color: "#B4B4B4", fontSize: 12}}>Co Driver:</span> &nbsp;
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
                         root: classes.expansionPanelClasses,
                       }}
                       expansionPanelRounded={{
                         rounded: classes.expansionPanelClassesRounded,
                       }}
            />
          </Card>
        ))}

        {!props.vehicles.length && <div style={{textAlign: 'center'}}><h5>No data</h5></div>}
      </List>
    </div>
  );
}

const mapStateToProps = ({vehicle, overview}) => {
  return {
    vehicles: vehicle.vehiclesMock,
    openDrawer: overview.openDrawer
  }
}

const mapDispatchToProps = {
  loadVehicles,
  loadVehiclesMock,
  setOpenDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSideBar);