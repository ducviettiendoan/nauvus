import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import vehicleSidebarContentStyle from "./vehicleSidebarContentStyle";

const useStyles = makeStyles(vehicleSidebarContentStyle);

export default function Diagnostics() {
  const classes = useStyles()

  return (
    <Card className={classes.dropdownContent}>
      <Accordion collapses={
        [
          {
            title:
              <div className={classes.enRouteContainer}>
                <div className={classes.cardExpandHeaderTitle}>
                  Diagnostics
                </div>
              </div>,
            content:
              <div>
                <div className={classes.diagContent}>
                  <div className={classes.sensorDataTitle}>
                    Seatbelt (Driver)
                  </div>
                  <div className={classes.sensorData}>
                    Unbuckled
                  </div>
                </div>
                <Divider variant="fullWidth" light/>
                <div className={classes.diagContent}>
                  <div className={classes.sensorDataTitle}>
                    Engine State
                  </div>
                  <div className={classes.sensorData}>
                    Running
                  </div>
                </div>
                <Divider variant="fullWidth" light/>
                <div className={classes.diagContent}>
                  <div className={classes.sensorDataTitle}>
                    Engine Check Light
                  </div>
                  <div className={classes.sensorData}>
                    Off
                  </div>
                </div>
                <Divider variant="fullWidth" light/>
                <div className={classes.diagContent}>
                  <div className={classes.sensorDataTitle}>
                    Odemeter
                  </div>
                  <div className={classes.sensorData}>
                    1,073,173 km
                  </div>
                </div>
                <Divider variant="fullWidth" light/>
                <div className={classes.diagContent}>
                  <div className={classes.sensorDataTitle}>
                    Fuel
                  </div>
                  <div className={classes.sensorData}>
                    60%
                  </div>
                </div>
                <div className={classes.diagContent}>
                  <div className={classes.viewAllDiag}>
                    View all 16 diagnostics
                  </div>
                </div>
              </div>
          },
        ]
      }
                 expansionSummaryClasses={{
                   root: classes.expansionClasses,
                   content: classes.expansionContentClasses
                 }}
                 expansionPanelClasses={{
                   root: classes.expansionPanelClasses,
                 }}
                 expansionPanelRounded={{
                   rounded: classes.expansionPanelClassesRounded,
                 }}
      />
    </Card>
  )
}