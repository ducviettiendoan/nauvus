import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import APITraffic from "./developer-metrics/APITraffic";
import WebhookTraffic from "./developer-metrics/WebhookTraffic";
import RequestDetails from "./developer-metrics/RequestDetails";


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
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
};

const useStyles = makeStyles(styles);

export default function DeveloperMetrics() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <GridContainer className="developer-metric-wrapper">
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={12} md={12} xl={12} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["API Traffic", "Webhook Traffic", "Request Details"]} tabValue={handleChangeTab}/>
              </GridItem>
            </GridContainer>
            {value === 0 && <APITraffic />}
            {value === 1 && <WebhookTraffic />}
            {value === 2 && <RequestDetails />}
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}
