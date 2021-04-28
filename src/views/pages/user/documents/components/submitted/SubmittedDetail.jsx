import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import SubmittedDocuments from "../SubmittedDocuments";
import DocumentTypes from "../DocumentTypes";
import CardDetail from "./CardDetail"
import { Card, Grid } from "@material-ui/core";

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
    alignItems: "center",
    overflow: "auto"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  // card
  cardContainer: {
    marginTop: "16px",
    borderRadius: "12px",
    boxShadow: "none !important",
    padding: "16px 0px 16px 0px"
  },
  textHeader: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "32px",
    color: "#25345C",
  },
  textPhotos: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "21px",
    color: "#B4B4B4",
  }
}));

export default function SubmittedDetail() {
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
                <GridItem xs={12} lg={6} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Submitted Documents (1)", "Archived Documents (0)", "Document Types (2)"]}
                    tabValue={handleChangeTab} />
                </GridItem>
                <GridItem xs={12} sm={8} md={6} lg={6} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day" />
                  <Button round className="btn-round-green h-42 w-84">
                    <LiveIconWhite />
                    Live
                  </Button>
                  <Button round className="btn-round-active h-42 w-178 ml-2 mr-2">
                    Create Document Type
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 w-42 ${classes.moreAction} mr-2`}
                    onClick={handleOpenMore}
                  >
                    <MoreHorizontalIcon />
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
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Schedule Emailed
                                Reports </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Download CSV </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Print </MenuItem>
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
          {value === 0 && <CardDetail />}
          {value === 1 && <SubmittedDocuments />}
          {value === 2 && <DocumentTypes />}
        </GridItem>
      </GridContainer>
    </div>
  );
}