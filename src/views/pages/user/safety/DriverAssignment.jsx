import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
// utils
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core";
// tabs components
import Unassigned from "./driver-assignment/Unassigned";
import Assigned from "./driver-assignment/Assigned";
import TrainingImage from "./driver-assignment/TrainingImage";

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
    textAlign: "right",
  },
}))

function DriverAssignment(props) {
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
                <RoundedTabs tabs={["By Asset", "By Location", "By Recurring Route"]} tabValue={handleChangeTab} />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                <Button
                  round
                  className="btn-round-active mr-4"
                >
                  Ungroup by Vehicle
                </Button>
                <Calendar />
              </GridItem>
            </GridContainer>
            <Card>
              {value === 0 && <Unassigned />}
              {value === 1 && <Assigned />}
              {value === 2 && <TrainingImage />}
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ }) => {
  return {

  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DriverAssignment)