import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Switch from "components/CustomSwitch/Switch.jsx";
import {Divider} from "@material-ui/core";
import Logo from "assets/img/logo_nauvus_text.svg";

import {
  cardTitle,
} from "assets/jss/material-dashboard-pro-react.js";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardFooter from "../../../../../components/Card/CardFooter";
import Gateway from "../devices/devices/Gateway";
import Sensors from "../devices/devices/Sensors";
import AvailableApps from "./apps/AvailableApps";
import EnabledApps from "./apps/EnabledApps";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0",
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem",
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px",
  },
  marginTop30: {
    marginTop: "30px",
  },
  button: {
    textTransform: "none",
    borderRadius: "22px",
    width: "100%",
    height: "100%",
    fontSize: "14px",
    padding: "12px 22px",
  },

  enabledButton: {
    backgroundColor: "#FFFFFF",
    opacity: "0.4",
  },
  cardContainer: {
    padding: "0px 0px 0px `16px `!important",
    marginRight: "20px",
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important",
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "10px 0px 20px 0px !important",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important",
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  switchButton: {
    display: "flex",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "80px",
    padding: "12px 10px 0px 0px",
  },

  flexGrid: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: "0px !important",
  },

  tabsContainer: {
    paddingTop: "16px !important",
    paddingLeft: "0px !important"
  }
};

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(styles);

export default function Apps() {
  const classes = useStyles();
  const [checkedState, setCheckedState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridItem className={classes.tabsContainer}>
        <RoundedTabs tabs={["Available Apps", "Enabled Apps (1)"]} tabValue={handleChangeTab}/>
      </GridItem>
      { value === 0 && <AvailableApps />}
      { value === 1 && <EnabledApps />}
    </div>
  );
}
