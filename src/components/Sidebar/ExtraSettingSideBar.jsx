import React from "react";
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
    if (window.location.href.indexOf("/setting/org") > -1) {
      setCurrentTab("ORGANIZATION");
    } else if (window.location.href.indexOf("/setting/device") > -1) {
      setCurrentTab("DEVICES");
    } else if (window.location.href.indexOf("/setting/fleet") > -1) {
      setCurrentTab("FLEET");
    } else if (window.location.href.indexOf("/setting/link-sharing") > -1) {
      setCurrentTab("LinksSharing");
    } else if (window.location.href.indexOf("/setting/developer") > -1) {
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
              { renderListItem("General", "/setting/org/general") }
              { renderListItem("User & Roles", "/setting/org/user-roles") }
              { renderListItem("Drivers", "/setting/org/drivers") }
              { renderListItem("Tags", "/setting/org/tags") }
              { renderListItem("Feature Management", "/setting/org/feature-management") }
              { renderListItem("Activity Log", "/setting/org/activity-log") }
              { renderListItem("Apps", "/setting/org/apps") }
              { renderListItem("Billing", "/setting/org/billing") }
            </List>
          </Collapse>

          {/* Devices */}
          <ListItem button onClick={() => handleClick(`DEVICES`)}>
            <ListItemText primary="DEVICES" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVICES`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVICES`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Devices", "/setting/device/devices") }
              { renderListItem("Configuration", "/setting/device/configuration") }
            </List>
          </Collapse>

          {/* Fleet */}
          <ListItem button onClick={() => handleClick(`FLEET`)}>
            <ListItemText primary="FLEET" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`FLEET`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`FLEET`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Driver App", "/setting/fleet/driver-app") }
              { renderListItem("Safety", "/setting/fleet/safety") }
              { renderListItem("Compliance", "/setting/fleet/compliance") }
              { renderListItem("Dispatch", "/setting/fleet/dispatch") }
              { renderListItem("Fuel & Energy", "/setting/fleet/fuel-energy") }
              { renderListItem("Driver Activity", "/setting/fleet/driver-activity") }
              { renderListItem("Addresses/Geofences", "/setting/fleet/add-geo") }
              { renderListItem("Maps", "/setting/fleet/maps") }
            </List>
          </Collapse>

          {/* Links & Sharing */}
          <ListItem button onClick={() => handleClick(`LinksSharing`)}>
            <ListItemText primary="LINKS & SHARING" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`LinksSharing`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`LinksSharing`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Alert Contacts", "/setting/link-sharing/alert-contacts") }
              { renderListItem("Scheduled Reports", "/setting/link-sharing/scheduled-reports") }
              { renderListItem("Live Sharing", "/setting/link-sharing/live-sharing") }
            </List>
          </Collapse>

          {/* Developer */}
          <ListItem button onClick={() => handleClick(`DEVELOPER`)}>
            <ListItemText primary="DEVELOPER" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVELOPER`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVELOPER`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              { renderListItem("Developer Metrics", "/setting/developer/metrics") }
              { renderListItem("API Tokens", "/setting/developer/api-tokens") }
              { renderListItem("Webhooks", "/setting/developer/webhooks") }
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