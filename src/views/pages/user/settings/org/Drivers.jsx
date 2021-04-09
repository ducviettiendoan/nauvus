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
import ActiveDrivers from "./drivers/ActiveDrivers";
import DeactivatedDriver from "./drivers/DeactivatedDriver";
import DiaLog from "components/CustomDialog/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/customDropdownStyle";
import EditDriverForm from "../../overview/drivers/EditDriverForm";
import OrganizationUpload from "components/CustomUpload/OrganizationUpload";

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
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
};

const useStyles = makeStyles((theme) => ({
  ...styles,
  ...customDropdownStyle(theme)
}));

export default function Drivers() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


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

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };



  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Active Drivers", "Deactivated Drivers"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <DiaLog
                      renderTitle={<h3 className={classes.dialogTitle}>Invite User</h3>}
                      handleClose={handleClose}
                      open={open}
                  >
                    <EditDriverForm handleClose={handleClose}/>
                  </DiaLog>
                  <DiaLog
                      renderTitle={<h3 className={classes.dialogTitle}>Upload CSV File</h3>}
                      handleClose={handleClose}
                      open={openUpload}
                  >
                    <p>Manage your drivers</p>
                    <p>
                      Manage your drivers via spreadsheet (.CSV file). You can choose to download your existing Drivers List or start from a Sample Template. Please refer to our Knowledge Base to learn more.
                    </p>
                    <OrganizationUpload />
                    <div className={classes.selectButton}>
                      <Button
                          type="button"
                          round
                          className="btn-round-active-2 mr-2"
                          onClick={handleClose}
                      > Cancel</Button>
                      <Button
                          round
                          className="btn-round-active mr-2"
                          type="submit"
                      > Preview</Button>
                    </div>
                  </DiaLog>
                  <Button
                      round
                      className="btn-round-active mr-2"
                      startIcon={<AddOutlined />}
                      onClick={() => setOpen(true)}
                  >
                    Add a Driver
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                    onClick={handleOpenMore}
                  >
                    <MoreHoriz/>
                  </Button>
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
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                    )}
                  </Popper>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <ActiveDrivers/>}
          {value === 1 && <DeactivatedDriver/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}