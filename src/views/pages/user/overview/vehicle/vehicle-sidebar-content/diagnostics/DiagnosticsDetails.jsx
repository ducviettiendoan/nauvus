import React, { useEffect, useState } from "react";
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import { setOpenDiagnostics, setAnchorEl } from "reducers/overview"


const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "500px",
    paddingLeft: "16px",
    paddingRight: "16px",
    zIndex: "2000",
    position: "absolute",
    top: "68px",
    left: "380px"
  },

}));


function DiagnosticsDetails(props) {
  const classes = useStyles();

  const handleCloseMore = () => {
    props.setOpenDiagnostics(false)
    props.setAnchorEl(false)
  }

  return (
    <div>
      <Popper
        open={props.openDiagnostics}
        anchorEl={props.anchorEl}
        transition
        disablePortal
        placement="bottom"
        className={classNames({
          [classes.popperClose]: !props.anchorEl,
          [classes.popperResponsive]: true,
          [classes.popperNav]: true
        })}
      >
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{ transformOrigin: "0 0 0" }}
          >
            <Paper className={classes.dropdown && classes.dropdownVehicle}>
              <ClickAwayListener onClickAway={handleCloseMore}>
                <MenuList role="menu">


                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

const mapStateToProps = ({ overview }) => {
  return {
    openDiagnostics: overview.openDiagnostics,
    anchorEl: overview.anchorEl
  }
}

const mapDispatchToProps = {
  setOpenDiagnostics,
  setAnchorEl
}


export default connect(mapStateToProps, mapDispatchToProps)(DiagnosticsDetails);