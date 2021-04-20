import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import customDropdownStyle
  from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import vehicleSidebarContentStyle from "./vehicleSidebarContentStyle";

const useStyles = makeStyles(vehicleSidebarContentStyle)

export default function AssetStats() {
  const classes = useStyles()

  return (
    <Card className={classes.dropdownContent}>
      <Accordion collapses={
        [
          {
            title:
              <div className={classes.enRouteContainer}>
                <div className={classes.cardExpandHeaderTitle}>
                  Asset Stats
                </div>
              </div>,
            content:
              <div className={classes.sensorContent}>
                <div className={classes.sensorDataTitle}>
                  VIN
                </div>
                <div className={classes.sensorData}>
                  3FA6P0PU5HR226082
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