import React, {useState, useEffect} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import ArrowBackIcon from "components/Icons/ArrowBackIcon";
// material-ui icons
import Menu from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import LiveIconWhite from "components/Icons/LiveIconWhite";

// import ViewList from "@material-ui/icons/ViewList";
import ViewList from '@material-ui/icons/Dehaze';
import MenuIcon from "components/Icons/MenuIcon";

// core components
import AdminNavbarLinks from "./AdminNavbarLinks";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Calendar from "components/Calendar/Calendar";
import { Grid } from "@material-ui/core";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.js";
import CustomDateRangePicker from "../CustomDateRangePicker/CustomDateRangePicker";

import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(styles);

export default function OverviewAdminNavbar(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:1557px)');

  const { color, rtlActive, brandText } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  const sidebarMinimize =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive
    });

  const onBack = () => {

  }
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                className={"btn-36"}
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                className={"btn-36"}
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        {/* vehicle details navbar */}
        <Hidden smDown>
          <div  style={{display: matches ? "block" : "none"}}>
        {window.location.pathname.indexOf("/vehicle/123456") === -1 && <div className={classes.flex} >
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {brandText}
          </Button>
        </div>}
        {window.location.pathname.indexOf("/vehicle/123456") !== -1 &&
          <div style={{ display: "flex", flexDirection: "row" }}>
            <GridItem>
              <CustomDropdown
                hoverColor="primary"
                buttonText="Showing Drivers"
                buttonProps={{
                  round: true,
                  fullWidth: true,
                  style: { marginBottom: "0", background: "#FFFFFF", color: "#25345C", border: "1px solid #ECEEF0", boxShadow: "none" },
                }}
              />
            </GridItem>
            <Grid>
              <CustomDropdown
                hoverColor="primary"
                buttonText="Graph data"
                buttonProps={{
                  round: true,
                  fullWidth: true,
                  style: { marginBottom: "0", background: "#FFFFFF", color: "#25345C", border: "1px solid #ECEEF0", boxShadow: "none" },
                }}
              />
            </Grid>
            <GridItem style={{ paddingRight: "0px !important" }}>
              <CustomDateRangePicker/>
            </GridItem>
            <GridItem>
              <Button round className="btn-round-green w-84">
                <LiveIconWhite />
                    Live
              </Button>
            </GridItem>
          </div>
        }
        </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

OverviewAdminNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  brandText: PropTypes.string,
  miniActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  sidebarMinimize: PropTypes.func
};
