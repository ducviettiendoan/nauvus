import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import vehicleSidebarContentStyle from "./vehicleSidebarContentStyle"

const useStyle = makeStyles(vehicleSidebarContentStyle)

export default function Gateway() {
  const classes = useStyle()

  return (
    <Card className={classes.dropdownContent}>
      <Accordion collapses={
        [
          {
            title:
              <div className={classes.enRouteContainer}>
                <div className={classes.cardExpandHeaderTitle}>
                  Gateway
                </div>
              </div>,
            content:
              <div>
                <div className={classes.gatewayContent}>
                  <div className={classes.gatewayContentTitle}>
                    GR9X-6AN-3N5
                  </div>
                  <div className={classes.gatewayContentSubTitle}>
                    VG34 · Last connected 2 months ago
                  </div>
                </div>
                <Divider variant="fullWidth" light/>
                <div className={classes.gatewayFooter}>
                  <div className={classes.sensorDataTitle}>
                    Connected hotspot clients
                  </div>
                  <div className={classes.sensorData}>
                    0
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