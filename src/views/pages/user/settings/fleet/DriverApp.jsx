import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import DriverAppFeatures from "./driver-app/DriverAppFeatures";
import DriverAppGeneral from "./driver-app/DriverAppGeneral";
import DriverAppWorkflows from "./driver-app/DriverAppWorkflows";
import RoundedTabs from "components/CustomTabs/RoundedTabs";

const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    marginLeft: "15px"
  },
};

const useStyles = makeStyles(styles);

export default function DriverApp() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{paddingTop: "16px"}}>

      <RoundedTabs tabs={["General", "Features", "Workflows"]} tabValue={handleChangeTab}/>

      <Card style={{padding: "0px 20px", marginTop: "16px"}}>

        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer className={classes.topHeader}>
                  <GridItem xs={12} sm={11} md={6} xl={3} className={classes.topHeaderTitle}>

                  </GridItem>
                </GridContainer>
                {value === 0 && <DriverAppGeneral/>}
                {value === 1 && <DriverAppFeatures/>}
                {value === 2 && <DriverAppWorkflows/>}
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </Card>
    </div>
  );
}
