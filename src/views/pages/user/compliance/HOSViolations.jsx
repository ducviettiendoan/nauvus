import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Calendar from "../../../../components/Calendar/Calendar";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "../../../../components/Icons/LiveIconWhite";
import RoundedTabs from "../../../../components/CustomTabs/RoundedTabs";
import Violations from "./hos-violation/Violations";
import MissingCertifications from "./hos-violation/MissingCertifications";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import Users from "../settings/org/user-roles/Users";
import BarChartCard from "./compliance-card/BarChartCard";

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
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
}));

export default function HOSViolations() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
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
                  <RoundedTabs tabs={["Violations", "MissingCertifications", "Chart"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                    onClick={handleOpenMore}
                  >
                    <MoreHorizontalIcon/>
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
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Schedule Emailed Reports </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Download CSV </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Print </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <Violations/>}
          {value === 1 && <MissingCertifications/>}
          {value===2 && <BarChartCard/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}