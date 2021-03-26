import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Switch from "components/CustomSwitch/Switch.jsx"
import CustomSlider from "components/CustomSlider/CustomSlider"
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import { Divider, Grid } from "@material-ui/core";
import RadioButton from "../../../../Components/RadioButton";
import SearchBox from "../../../../../components/SearchBox/SearchBox";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important"
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "28px 0px 20px 0px !important"
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
    padding: "9px 0px 15px 0px !important",
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
    overflow: "hidden"
  },
  advancedSettings: {
    padding: "2px 0px 0px 0px !important",
    marginLeft: "-6px !important",
  },
  advancedTitle: {
    padding: "0px 0px 16px 0px !important",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C"
  },
  advancedTagContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  advancedChoice: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
    padding: "0px 0px 16px 0px !important",
  },
  tagChoice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 0px 0px 0px !important"
  },
  radioButtonGroup: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 0px 0px 0px !important"
  },
  inputWrapper: {
    textAlign: "right",
    padding: "0px 0px 0px 0px !important"
  },
  engineTitle: {
    padding: "0px 0px 16px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#25345C",
  },
  engineDescription: {
    padding: "0px 0px 24px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#B4B4B4",
  },
  sliderContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  buttonContainer: {
    padding: "0px 0px 27px 0px !important",
    display: "flex",
  },
};

const useStyles = makeStyles(styles);

export default function Configuration() {
  const classes = useStyles();

  const [checkedState, setCheckedState] = useState({
    deviceA: false,
    deviceB: false,
    deviceC: false,
    deviceD: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  const [sliderValue, setSliderValue] = useState({
    sliderA: 0,
  })

  const mock = ["deviceA", "deviceB", "deviceC", "deviceD"]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardBody className={classes.cardContainer}>
                  <GridItem xs={3} sm={3} md={3} className={classes.configTitle}>
                    Device Configuration
                  </GridItem>
                  {mock.map((device, i) => {
                    return (

                      <GridItem key={i} className={classes.cardMultipleContent}>
                        <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                          <CardBody className={classes.cardItem}>
                            <GridItem className={classes.headerItem}>
                              Enable Vehicle Battery Conservation Mode
                            </GridItem>
                            <GridItem className={classes.contentItem}>
                              By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle. This
                              is the recommended setting for most vehicles.
                              Vehicle Battery Conservation Mode further reduces consumption of the vehicle battery by the
                              Gateway when the vehicle is not in use, and is intended
                              for vehicles that are subject to battery drain under default settings.
                            </GridItem>
                            <GridItem className={classes.contentItem}>
                              When in Vehicle Battery Conservation Mode, Gateway functionality including WiFi hotspot
                              connectivity and camera video retrieval will not be available.
                              The Gateway will wake when vehicle motion resumes, resulting in reduced GPS tracking accuracy
                              at the beginning of a trip.
                            </GridItem>
                          </CardBody>
                          <Switch checked={checkedState[device]} onChange={handleChange} name={device} />
                        </GridItem>
                        {checkedState[device] === true
                          && (
                            <GridItem className={classes.advancedSettings}>
                              <GridItem className={classes.advancedTitle}>Advanced Settings</GridItem>
                              <GridItem className={classes.advancedTagContainer}>
                                <GridItem className={classes.advancedChoice}>Vehicles this applies to:</GridItem>
                                <GridItem className={classes.tagChoice}>
                                  <GridItem className={classes.radioButtonGroup}>
                                    <Grid item>
                                      <RadioButton checked={true} />
                                  All Vehicles
                                </Grid>
                                    <Grid item>
                                      <RadioButton checked={false} />
                                  Specific Tags
                                </Grid>
                                  </GridItem>
                                  <GridItem className={classes.inputWrapper}>
                                    <SearchBox placeholder={"Search contacts"} />
                                  </GridItem>
                                </GridItem>
                              </GridItem>
                              <GridItem className={classes.engineTitle}>Engine shut-off time</GridItem>
                              <GridItem className={classes.engineDescription}>Minimum time the engine must be off for Battery
                            Conservation Mode to be enabled.</GridItem>
                              <GridItem className={classes.sliderContainer}>
                                <CustomSlider valueSlider={sliderValue[device]} allSlider={sliderValue}
                                  setSliderValue={setSliderValue} name={device} />
                              </GridItem>
                              <GridItem className={classes.buttonContainer}>
                                <Button
                                  round
                                  className="btn-round-active w-62 mr-2"
                                >
                                  Save
                              </Button>
                                <Button
                                  round
                                  className="btn-round-white w-74 mr-2"
                                >
                                  Cancel
                              </Button>
                              </GridItem>
                            </GridItem>
                          )
                        }
                        <Divider variant="fullWidth" light />
                      </GridItem>

                    )
                  })}
                </CardBody>


              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
