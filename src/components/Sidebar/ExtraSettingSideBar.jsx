import React from "react";
import { ROUTE_PATH } from "config/constants";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation  } from "react-router-dom";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import CustomSearchInput from "components/CustomInput/CustomSearchInput";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon18 from "components/Icons/SearchIcon18";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";

import { Col, Row } from 'reactstrap';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  extraSidebarContainer: {
    padding: '0 18px'
  },
  extraSidebarSearchContainer: {
    height: '68px',
    borderBottom: '1px solid #25345c1f',
    marginLeft: '-18px',
    marginRight: '-18px',
  },
  btnSearch: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '17px'
  },
  txtListItemPrimary: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: '"Lato", sans-serif'
  },
  txtListItemPrimarySub: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: '"Lato", sans-serif',
    color: '#25345C'
  },
  active: {
    color: "#000",
    borderRadius: "28px",
    backgroundColor: "rgba(37, 52, 92, 0.1)"
  },
  activePoint: {
    position: "absolute",
    top: "17px",
    left: "-18px",
    borderRight: "2px solid #121212",
    height: "10px",
    borderRadius: "1px",
  }
};

import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);
var ps;
export function ExtraSideBar(props) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState("ORGANIZATION");
  const [currentLink, setCurrentLink] = React.useState("");

  React.useEffect(() => {
    initActive();
  }, []);

  const handleClick = (tabName) => {
    console.log(`on click tab: ${tabName}`)
    if (tabName === currentTab) {
      setOpen(!open);
    } else {
      setOpen(true);
      setCurrentTab(tabName);
    }
  };

  const isOpenList = (tabName) => {
    return (open && currentTab === tabName);
  }

  const initActive = () => {
    setCurrentLink(location.pathname);
    if (window.location.href.indexOf(ROUTE_PATH.SETTING + "/org") > -1) {
      setCurrentTab("ORGANIZATION");
    } else if (window.location.href.indexOf(ROUTE_PATH.SETTING + "/device") > -1) {
      setCurrentTab("DEVICES");
    } else if (window.location.href.indexOf(ROUTE_PATH.SETTING + "/fleet") > -1) {
      setCurrentTab("FLEET");
    } else if (window.location.href.indexOf(ROUTE_PATH.SETTING + "/link-sharing") > -1) {
      setCurrentTab("LinksSharing");
    } else if (window.location.href.indexOf(ROUTE_PATH.SETTING + "/developer") > -1) {
      setCurrentTab("DEVELOPER");
    }
  }

  const checkActive = (link) => {
    console.log(`checkActive`)
    return (link === currentLink ? true : false)
  }
  
  const onClickListItem = (link) => {
    setCurrentLink(link);
    history.push(link);
  }

  const renderListItem = (text, link) => {
    return (
      <div style={{ position: "relative" }}>
        <ListItem button onClick={ () => onClickListItem(link) } className={classes.nested} classes={{ selected: classes.active }} selected={ link === currentLink }>
          <ListItemText primary={ text } classes={ {primary: classes.txtListItemPrimarySub} }/> 
        </ListItem>
        { link === currentLink && <div className={ classes.activePoint}></div> }
      </div>
    )
  }

  return (
    <>
      <div className={ classes.extraSidebarContainer }>
        <Row className={ classes.extraSidebarSearchContainer }>
          <Col>
            <CustomSearchInput />
          </Col>
        </Row>
        
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          {/* General */}
          <ListItem button onClick={() => handleClick(`ORGANIZATION`)}>
            <ListItemText primary="ORGANIZATION" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`ORGANIZATION`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`ORGANIZATION`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("General", ROUTE_PATH.SETTING + "/org/general") }
              { renderListItem("User & Roles", ROUTE_PATH.SETTING + "/org/user-roles") }
              { renderListItem("Drivers", ROUTE_PATH.SETTING + "/org/drivers") }
              { renderListItem("Tags", ROUTE_PATH.SETTING + "/org/tags") }
              { renderListItem("Feature Management", ROUTE_PATH.SETTING + "/org/feature-management") }
              { renderListItem("Activity Log", ROUTE_PATH.SETTING + "/org/activity-log") }
              { renderListItem("Apps", ROUTE_PATH.SETTING + "/org/apps") }
              { renderListItem("Billing", ROUTE_PATH.SETTING + "/org/billing") }
            </List>
          </Collapse>

          {/* Devices */}
          <ListItem button onClick={() => handleClick(`DEVICES`)}>
            <ListItemText primary="DEVICES" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVICES`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVICES`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Devices", ROUTE_PATH.SETTING + "/device/devices") }
              { renderListItem("Configuration", ROUTE_PATH.SETTING + "/device/configuration") }
            </List>
          </Collapse>

          {/* Fleet */}
          <ListItem button onClick={() => handleClick(`FLEET`)}>
            <ListItemText primary="FLEET" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`FLEET`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`FLEET`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Driver App", ROUTE_PATH.SETTING + "/fleet/driver-app") }
              { renderListItem("Safety", ROUTE_PATH.SETTING + "/fleet/safety") }
              { renderListItem("Compliance", ROUTE_PATH.SETTING + "/fleet/compliance") }
              { renderListItem("Dispatch", ROUTE_PATH.SETTING + "/fleet/dispatch") }
              { renderListItem("Fuel & Energy", ROUTE_PATH.SETTING + "/fleet/fuel-energy") }
              { renderListItem("Driver Activity", ROUTE_PATH.SETTING + "/fleet/driver-activity") }
              { renderListItem("Addresses/Geofences", ROUTE_PATH.SETTING + "/fleet/add-geo") }
              { renderListItem("Maps", ROUTE_PATH.SETTING + "/fleet/maps") }
            </List>
          </Collapse>

          {/* Links & Sharing */}
          <ListItem button onClick={() => handleClick(`LinksSharing`)}>
            <ListItemText primary="LINKS & SHARING" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`LinksSharing`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`LinksSharing`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Alert Contacts", ROUTE_PATH.SETTING + "/link-sharing/alert-contacts") }
              { renderListItem("Scheduled Reports", ROUTE_PATH.SETTING + "/link-sharing/scheduled-reports") }
              { renderListItem("Live Sharing", ROUTE_PATH.SETTING + "/link-sharing/live-sharing") }
            </List>
          </Collapse>

          {/* Developer */}
          <ListItem button onClick={() => handleClick(`DEVELOPER`)}>
            <ListItemText primary="DEVELOPER" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVELOPER`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVELOPER`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Developer Metrics", ROUTE_PATH.SETTING + "/developer/metrics") }
              { renderListItem("API Tokens", ROUTE_PATH.SETTING + "/developer/api-tokens") }
              { renderListItem("Webhooks", ROUTE_PATH.SETTING + "/developer/webhooks") }
            </List>
          </Collapse>
        </List>
      </div>
    </>
  );
}

export default connect(
  ({ vehicle }: IRootState) => ({
    vehicles: vehicle.vehicles
  }),
  {
  }
)(ExtraSideBar);