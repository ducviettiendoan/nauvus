import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import RoundedTabs from "components/CustomTabs/RoundedTabs";
import DriverEfficiency from "./fuel-energy/DriverEfficiency";
import FuelCards from "./fuel-energy/FuelCards";
import FuelCost from "./fuel-energy/FuelCost";
import VehicleFuelTypes from "./fuel-energy/VehicleFuelTypes";

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
};

const useStyles = makeStyles(styles);

export default function FuelEnergy() {
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
                  <RoundedTabs tabs={["Driver Efficiency", "Fuel Cost", "Fuel Cards", "Vehicle Fuel Types"]}
                               tabValue={handleChangeTab}/>
                </GridItem>
              </GridContainer>
              {value === 0 && <DriverEfficiency/>}
              {value === 1 && <FuelCost/>}
              {value === 2 && <FuelCards/>}
              {value === 3 && <VehicleFuelTypes/>}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
