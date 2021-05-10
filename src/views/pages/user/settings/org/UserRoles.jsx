import React, { useEffect, useState } from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Fade from '@material-ui/core/Fade';
import Popper from "@material-ui/core/Popper";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import { MoreHoriz } from "@material-ui/icons";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Users from "./user-roles/Users";
import Roles from "./user-roles/Roles";
import PendingInvitations from "./user-roles/PendingInvitations";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  
}));

export default function UserRoles() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
    setOpen(false)
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false)
    setOpenMore(false)
    setOpenUpload(false)
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);
  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Users", "Roles", "Pending Invitations"]} tabValue={handleChangeTab} />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined />}
                    onClick={() => setOpen(true)}
                  >
                    {value === 1 ? "Add Role" : "Invite User"}
                  </Button>
                  {value === 0 && <Button
                      color="white"
                      aria-label="edit"
                      justIcon
                      round
                      className={`btn-36 ${classes.moreAction} mr-2`}
                      onClick={handleOpenMore}
                  >
                    <MoreHoriz/>
                  </Button>
                  }
                  <Popper
                    open={openMore}
                    anchorEl={anchorEl}
                    transition
                    disablePortal
                    placement="bottom-end"
                    className={classNames({
                      [classes.popperClose]: !anchorEl,
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
                        <Paper className={classes.dropdown}>
                          <ClickAwayListener onClickAway={handleCloseMore}>
                            <MenuList role="menu">
                              <MenuItem className={dropdownItem} onClick={() => setOpenUpload(true)} > Upload CSV </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Download CSV </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </GridItem>

              </GridContainer>
            </GridItem>
          </GridContainer >
          {value === 0 && <Users open={open} openUpload={openUpload} handleClose={handleClose} />}
          {value === 1 && <Roles open={open} handleClose={() => setOpen(false)} />}
          {value === 2 && <PendingInvitations open={open} handleClose={() => setOpen(false)} />}
        </GridItem >
      </GridContainer >
    </div >
  );
}