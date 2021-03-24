import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
    borderBottom: '1px solid #25345c1f'
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
  }
};

import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);
var ps;
export function ExtraSideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState("ORGANIZATION");

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
    return open && currentTab === tabName;
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
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Settings
            </ListSubheader>
          }
          className={classes.root}
        >
          {/* General */}
          <ListItem button onClick={() => handleClick(`ORGANIZATION`)}>
            <ListItemText primary="ORGANIZATION" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`ORGANIZATION`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`ORGANIZATION`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/setting/org/general">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="General" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/user-roles">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="User & Role" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/drivers">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Drivers" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/tags">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Tags" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/feature-management">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Feature Management" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/activity-log">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Activity Log" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/apps">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Apps" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
              <Link to="/setting/org/billing">
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Billing" classes={ {primary: classes.txtListItemPrimarySub} }/> 
                </ListItem>
              </Link>
            </List>
          </Collapse>

          {/* Devices */}
          <ListItem button onClick={() => handleClick(`DEVICES`)}>
            <ListItemText primary="DEVICES" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVICES`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVICES`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link to="/setting/device/devices">
                  <ListItemText primary="Devices" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/device/configuration">
                  <ListItemText primary="Configuration" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
            </List>
          </Collapse>

          {/* Fleet */}
          <ListItem button onClick={() => handleClick(`FLEET`)}>
            <ListItemText primary="FLEET" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`FLEET`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`FLEET`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/driver-app">
                  <ListItemText primary="Driver App" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/safety">
                  <ListItemText primary="Safety" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/compliance">
                  <ListItemText primary="Compliance" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/dispatch">
                  <ListItemText primary="Dispatch" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/fuel-energy">
                  <ListItemText primary="Fuel & Energy" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/driver-activity">
                  <ListItemText primary="Driver Activity" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/add-geo">
                  <ListItemText primary="Addresses/Geofences" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/fleet/maps">
                  <ListItemText primary="Maps" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
            </List>
          </Collapse>

          {/* Links & Sharing */}
          <ListItem button onClick={() => handleClick(`LinksSharing`)}>
            <ListItemText primary="LINKS & SHARING" classes={ {primary: classes.txtListItemPrimary} }  />
            {isOpenList(`LinksSharing`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`LinksSharing`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link to="/setting/link-sharing/alert-contacts">
                  <ListItemText primary="Alert Contacts" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/link-sharing/scheduled-reports">
                  <ListItemText primary="Scheduled Reports" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/link-sharing/live-sharing">
                  <ListItemText primary="Live Sharing" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
            </List>
          </Collapse>

          {/* Developer */}
          <ListItem button onClick={() => handleClick(`DEVELOPER`)}>
            <ListItemText primary="DEVELOPER" classes={ {primary: classes.txtListItemPrimary} } />
            {isOpenList(`DEVELOPER`) ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isOpenList(`DEVELOPER`)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Link to="/setting/developer/metrics">
                  <ListItemText primary="Developer Metrics" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/developer/api-tokens">
                  <ListItemText primary="API Tokens" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Link to="/setting/developer/webhooks">
                  <ListItemText primary="Webhooks" classes={ {primary: classes.txtListItemPrimarySub} }/>
                </Link>
              </ListItem>
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