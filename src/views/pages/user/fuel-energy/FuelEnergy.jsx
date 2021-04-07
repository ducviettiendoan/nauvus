import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//material-ui/lab components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "../../../../components/Calendar/Calendar";
import Button from "components/CustomButtons/Button.js";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import Vehicle from "./fuel-energy-parts/Vehicle.jsx";
import Drivers from "./fuel-energy-parts/Drivers.jsx";

const styles = {
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
    height: "38px",
    width: "91px"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },


};


const useStyles = makeStyles(styles);

export default function FuelEnergy() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

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
                  <RoundedTabs tabs={["Drivers", "Vehicle"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                </GridItem> 
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <Drivers/>}
          {value === 1 && <Vehicle/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}
