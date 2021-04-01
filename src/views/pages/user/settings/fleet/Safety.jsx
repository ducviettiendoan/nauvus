import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import SafetyScore from "./safety/SafetyScore"
import SafetyHarshEvents from "./safety/SafetyHarshEvents"
import SafetyEventDetection from "./safety/SafetyEventDetection"
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";
import SafetyCoaching from "./safety/SafetyCoaching";

const styles = {
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
                  <RoundedTabs tabs={["Safety Score", "Harsh Events", "Event Detection", "Coaching"]}
                               tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<EditIcon/>}
                  >
                    Edit Individual Vehicles
                  </Button>
                </GridItem>
              </GridContainer>
              {value === 0 && <SafetyScore/>}
              {value === 1 && <SafetyHarshEvents/>}
              {value === 2 && <SafetyEventDetection/>}
              {value === 3 && <SafetyCoaching />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
