import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Switch from "components/CustomSwitch/Switch.jsx"
import GridContainer from "components/Grid/GridContainer";

const styles = {
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center"
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "10px 0px 20px 0px !important"
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "16px 0px 12px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    // overflow: "hidden",
    maxWidth: "428px",
  },
  divider: {
    width: "90%",
    borderTop: "1px solid #ECEEF0",
    margin: 0
  }
};

const useStyles = makeStyles(styles);

export default function ComplianceNotifications() {
  const classes = useStyles();

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };

  const [sliderValue, setSliderValue] = useState({
    sliderA: 0,
  })

  const handleSliderChange = (event) => {
    setSliderValue({...sliderValue, [event.target.name]: event.target.value})
  }

  return (
    <>
      <CardBody className={classes.cardContainer}>
        <GridItem className={classes.configTitle}>
          Notifications
        </GridItem>
        <GridContainer className={classes.cardMultipleContent}>
          <GridItem xs={12} sm={12} md={12} >
            <div className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Force Review of Unassigned HOS
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Require drivers to review Unassigned Driving
                </GridItem>
              </CardBody>
              <Switch name="checkedA"/>
            </div>

            <hr className={classes.divider}/>

            <div className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Force Manual Location For Duty Status Changes
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Enabling this will force drivers to enter a location when making a duty status
                  change if the ELD
                  does not automatically record one.
                </GridItem>
              </CardBody>
              <Switch name="checkedB"/>
            </div>

            <hr className={classes.divider}/>

            <div className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Drivers Can Edit Certified Log
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Allow drivers to edit certified logs.
                </GridItem>
              </CardBody>
              <Switch name="checkedD"/>
            </div>

            <hr className={classes.divider}/>

            <div className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Allow unregulated vehicles
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Enabling this will allow you to set specific vehicles as unregulated (non-CMV).
                  Naucus will not
                  generate unassigned segments nor trigger the automatic On Duty → Drive duty
                  status transition
                  for unregulated vehicle movements.
                </GridItem>
              </CardBody>
              <Switch name="checkedE"/>
            </div>

            <hr className={classes.divider}/>

            <div className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Enable Yard Move Auto-Duty
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Automatically transition drivers from Yard Move status to Driving status when
                  vehicle speed is
                  greater than 20 mph (32 kph).
                </GridItem>
              </CardBody>
              <Switch name="checkedF"/>
            </div>

            <hr className={classes.divider}/>

            <div xs={12} sm={12} md={12} className={classes.gridContent}>
              <CardBody className={classes.cardItem}>
                <GridItem className={classes.headerItem}>
                  Persistent Duty Status
                </GridItem>
                <GridItem className={classes.contentItem}>
                  Give drivers the option to keep their On Duty or Sleeper Berth duty status after
                  signing out of
                  the app.
                </GridItem>
              </CardBody>
              <Switch name="checkedG"/>
            </div>

            <hr className={classes.divider}/>

          </GridItem>
        </GridContainer>
      </CardBody>
    </>
  );
}
