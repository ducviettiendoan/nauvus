import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import vehicleSidebarContentStyle from "./vehicleSidebarContentStyle";

const useStyles = makeStyles(vehicleSidebarContentStyle);

export default function Sensor() {
  const classes = useStyles()

  return (
    <Card className={classes.dropdownContent}>
      <Accordion collapses={
        [
          {
            title:
              <div className={classes.enRouteContainer}>
                <div className={classes.cardExpandHeaderTitle}>
                  Sensor
                </div>
              </div>,
            content:
              <div>
                <div className={classes.sensorContent}>
                  <div className={classes.sensorDataTitle}>
                    Sensor Name
                  </div>
                  <div className={classes.sensorData}>
                    Trailing 101
                  </div>
                </div>
                <div className={classes.sensorContent}>
                  <div className={classes.sensorDataTitle}>
                    Sensor ID
                  </div>
                  <div className={classes.sensorData}>
                    3FA6P0PU5HR226082
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