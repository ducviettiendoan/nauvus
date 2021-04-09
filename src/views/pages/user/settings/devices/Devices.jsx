import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Gateway from "./devices/Gateway";
import Sensors from "./devices/Sensors";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import customDropdownStyle
  from "../../../../../assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import Users from "../org/user-roles/Users";
import PendingInvitations from "../org/user-roles/PendingInvitations";


const styles = {
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
};

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  ...styles
}))

export default function Devices() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleChangeTab = (newValue) => {
    setValue(newValue);
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

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Gateways", "Sensors"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                    onClick={() => setOpen(true)}
                  >
                    Activate Devices
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
                  </Button>}
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
                                <MenuItem className={classes.dropdownItem} onClick={() => setOpenUpload(true)} > Upload CSV </MenuItem>
                                <MenuItem className={classes.dropdownItem} onClick={handleCloseMore} > Download CSV </MenuItem>
                                <MenuItem className={classes.dropdownItem} onClick={handleCloseMore} > Purchase Devices </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                    )}
                  </Popper>
                </GridItem>
              </GridContainer>
              {value === 0 && <Gateway open={open} openUpload={openUpload} handleClose={handleClose}/>}
              {value === 1 && <Sensors open={open} handleClose={() => setOpen(false)}/>}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}