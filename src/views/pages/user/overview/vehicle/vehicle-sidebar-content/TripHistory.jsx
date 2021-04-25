import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import customDropdownStyle
  from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import Divider from "@material-ui/core/Divider";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Trips from "./trip-history/Trips";
import Routes from "./trip-history/Trips";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  cardExpandHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "19px 0px"
  },
  cardExpandHeaderTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#25345C",
    textAlign: "left",
  },
  expansionClasses: {
    padding: "0px 15px 0px 15px !important",
    borderBottom: "0px !important",
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    }
  },
  expansionContentClasses: {
    margin: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important"
  },
  expansionPanelClassesRounded: {
    border: "1px solid #ECEEF0",
    boxShadow: "inherit",
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
  },
  enRouteContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownContent: {
    margin: "8px 0px 8px 0px !important "
  },
  sensorContent: {
    padding: "0px 15px 15px 15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  sensorDataTitle: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#B4B4B4',
  },
  sensorData: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  diagContent: {
    padding: "15px 15px 15px 15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewAllDiag: {
    fontWeight: 700,
    fontSize: '12px',
    color: '#25345C',
    cursor: "pointer"
  },
}));

export default function TripHistory() {
  const classes = useStyles()

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (newValue) => {
    setValue(newValue)
  }

  return (
    <Card className={classes.dropdownContent}>
      <Accordion collapses={
        [
          {
            title:
              <div className={classes.enRouteContainer}>
                <div className={classes.cardExpandHeaderTitle}>
                  Trip History
                </div>
              </div>,
            content:
              <div>
                <Divider variant="fullWidth" light/>
                <RoundedTabs tabs={["Trips", "Routes"]} tabValue={handleChangeTab}/>
                {value === 0 && <Trips/>}
                {value === 1 && <Routes/>}
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