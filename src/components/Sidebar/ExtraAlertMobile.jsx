import React from "react";
import { ROUTE_PATH } from "config/constants";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";

// @material-ui/icons
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "perfect-scrollbar/css/perfect-scrollbar.css";

const styles = {
  extraSidebarContainer: {
    padding: "0 18px",
    maxHeight: "80vh",
    overflow: "auto",
    marginTop: "20px",
  },
  extraSidebarSearchContainer: {
    height: "68px",
    borderBottom: "1px solid #25345c1f",
    marginLeft: "-18px",
    marginRight: "-18px",
  },
  btnSearch: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
  },
  txtListItemPrimary: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: '"Lato", sans-serif',
  },
  txtListItemPrimarySub: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: '"Lato", sans-serif',
    color: "#25345C",
  },
  active: {
    color: "#000",
    borderRadius: "28px",
    backgroundColor: "rgba(37, 52, 92, 0.1)",
  },
  activePoint: {
    position: "absolute",
    top: "17px",
    left: "-18px",
    borderRight: "2px solid #121212",
    height: "10px",
    borderRadius: "1px",
  },
  dropDown: {
    width: "100%",
    background: "white",
    border: "1px solid #c4c4c4",
    borderRadius: "4px",
    fontWeight: 700,
    color: "#25345C",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px",
    fontSize: "14px",
  },
  dropDownWrapper: {
    width: "100vw",
    padding: "16px",
    position: "sticky",
    top: "68px",
    zIndex: 1000,
    background: "white",
    borderTop: "1px solid #c4c4c4",
  },
  mobileDrawerPaper: {
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  anchorDrawer: {
    width: "25px",
    margin: "8px auto -20px auto",
    border: "3px solid #25345C !important",
    borderRadius: "5px",
  },
};

import { connect } from "react-redux";
import { loadVehicles } from "reducers/vehicle";
import { IRootState } from "reducers";
import { Link } from "react-router-dom";
import { Divider, Drawer } from "@material-ui/core";
import ArrowUpDownIcon from "../Icons/ArrowUpDownIcon";
import { setTab } from "../../reducers/alerts";
import { Insidents } from "../../views/pages/user/alerts/Insidents";
import { Configure } from "../../views/pages/user/alerts/Configure";
import ExtraAlertsSideBar from "./ExtraAlertsSideBar";

const useStyles = makeStyles(styles);
var ps;
export function ExtraAlertMobile(props) {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentLink, setCurrentLink] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState("");
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    initActive();
  }, []);

  React.useEffect(() => {
    switch (currentLink) {
      case ROUTE_PATH.SETTING + "/org/general":
        setCurrentPage("General");
        break;
      case ROUTE_PATH.SETTING + "/org/user-roles":
        setCurrentPage("User & Roles");
        break;
    }
  }, [currentLink]);
  const initActive = () => {
    setCurrentLink(location.pathname);
  };

  const renderListItem = (text, tab) => {
    return (
      <div style={{ position: "relative" }}>
        <ListItem
          button
          onClick={() => setTab(tab)}
          className={classes.nested}
          classes={{ selected: classes.active }}
        >
          <ListItemText
            primary={text}
            classes={{ primary: classes.txtListItemPrimarySub }}
          />
        </ListItem>
      </div>
    );
  };

  const toggleDrawer = (bool) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(bool);
  };

  const onClickListItem = (link) => {
    setOpen(false);
    setCurrentLink(link);
    history.push(link);
  };

  return (
    <>
      <React.Fragment>
        <div className={classes.dropDownWrapper}>
          <div className={classes.dropDown} onClick={toggleDrawer(true)}>
            <div>{currentPage}</div>
            <ArrowUpDownIcon />
          </div>
        </div>
        <Drawer
          classes={{ paper: classes.mobileDrawerPaper }}
          anchor={"bottom"}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <div className={classes.anchorDrawer}></div>
          <div className={classes.extraSidebarContainer}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              {/* General */}
              <ListItem>
                <ListItemText
                  primary="ALERTS"
                  classes={{ primary: classes.txtListItemPrimary }}
                />
              </ListItem>
              <List component="div" disablePadding>
                {renderListItem("Alerts", 1)}
                {renderListItem("Configure", 2)}
              </List>
            </List>
          </div>
        </Drawer>
        {/* {tab === 1 && <ExtraAlertsSideBar />}
        {tab === 2 && <Configure />}   */}
      </React.Fragment>
    </>
  );
}

const mapStateToProps = ({ vehicle, alerts }) => {
  return {
    vehicles: vehicle.vehicles,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraAlertMobile);
