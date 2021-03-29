import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import EditIcon from "components/Icons/EditIcon";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import SafetyScore from "./components/SafetyScore"
import SafetyHarshEvents from "./components/SafetyHarshEvents"
import SafetyEventDetection from "./components/SafetyEventDetection"

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    textAlign: "right",
  },
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    padding: "28px 0px 20px 0px !important"
  },
  headerWithButton: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    justifyContent: "space-between"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  vehicleHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    marginTop: "30px !important",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleSelect: {
    padding: "0px 0px 0px 0px !important",
  },
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(styles);

export default function Safety() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

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
                  <RoundedTabs tabs={["Safety Score", "Harsh Events", "Event Detection", "Coaching"]} tabValue={handleChangeTab} />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<EditIcon />}
                  >
                    Edit Individual Vehicles
                  </Button>
                </GridItem>
              </GridContainer>

              {value === 0 && <SafetyScore />}
              {value === 1 && <SafetyHarshEvents />}
              {value === 2 && <SafetyEventDetection />}

            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
