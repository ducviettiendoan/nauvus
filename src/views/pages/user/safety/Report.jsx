import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
// @material-ui/icons
import { MoreHoriz } from "@material-ui/icons";
// utils
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core";
// tabs components
import DriverReport from "./report/components/DriverReport";
import VehicleReport from "./report/components/VehicleReport";


const useStyles = makeStyles((theme) => ({
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
}))

export default function Report(props) {
  const classes = useStyles()

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["Driver", "Vehicle"]} tabValue={handleChangeTab} />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                <Calendar isNotContainer={true} />
                <Button
                  color="white"
                  aria-label="edit"
                  justIcon
                  round
                  className={`btn-36 ${classes.moreAction} mr-2`}
                >
                  <MoreHoriz />
                </Button>
              </GridItem>
            </GridContainer>
            {value === 0 && <DriverReport />}
            {value === 1 && <VehicleReport />}
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  )
}