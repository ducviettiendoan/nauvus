import React from "react";
import { ROUTE_PATH } from "config/constants";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames"

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import List from '@material-ui/core/List';
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Button from "components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem"
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import { Row } from 'reactstrap';
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Switch from "components/CustomSwitch/Switch.jsx"
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from '@material-ui/core/ListItem';
import CustomTagDropdown from "components/CustomDropdown/CustomTagDropdown";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  extraSidebarContainer: {
    background: "#FFFFFF",
  },
  extraSidebarSearchContainer: {
    display: "flex",
    height: '68px',
    justifyContent: "center",
    alignItems: "center",
    borderBottom: '1px solid #ECEEF0',
  },
  messagesContainer: {
    padding: "16px 0px 16px 0px"
  },
  chatContainer: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px 16px",
    marginBottom: "16px"
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginRight: "16px"
  },
  chatName: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    paddingBottom: "4px",
  },
  chatRole: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
  },
  chatTime: {
    float: "right",
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "17px",
  },
  chatTitle: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
    paddingBottom: "4px",
  },
  chatThumbnail: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "15px",
  },
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "0px !important"
  },
  listItem: {
    borderBottom: "#ECEEF0 solid 1px",
    padding: "8px 16px"
  },
  listItemText: {
    fontWeight: 600,
    fontSize: 14,
    paddingRight: 8,
    "& > p": {
      marginBottom: 8
    },
    "& > p:last-child": {
      color: "#B4B4B4"
    }
  }
}))

export function ExtraMessagesSideBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.extraSidebarContainer}>
      <div className={classes.extraSidebarSearchContainer}>
        <ToolboxButton placeholder="Search drivers" showFilter />
      </div>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.messagesContainer}
      >
        <div style={{ paddingLeft: '16px', paddingRight: '20px'}}>
          <CustomTagDropdown tags = { ["Title", "Title 2", "Title 3"] } />
        </div>
        {/* listItem */}
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle/Asset speed is about speed limit by 25 km/h</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>

        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle unplugged</p>
            <p>Tag Trucks, City Dmitry Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle engine is idle</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle fuel level has decreased dramatically</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Harsh event occurred</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
        <ListItem className={classes.listItem}>
          <div className={classes.listItemText}>
            <p>Vehicle fuel level has decreased dramatically</p>
            <p>All gateways in this organisation Dmitri Protas, Vadim Hohlov</p>
          </div>
          <Switch name="device1" />
        </ListItem>
      </List>
    </div>
  );
}

const mapStateToProps = ({ messages }) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtraMessagesSideBar);