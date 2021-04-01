import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CustomSwitch from "components/CustomSwitch/Switch"
import CustomSlider from "components/CustomSlider/CustomSlider"
import Button from "components/CustomButtons/Button.js";

const styles = {
  cardContainer: {
    padding: "0px 16px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingBottom: "20px !important",
  },
  vehicleHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    marginTop: "30px !important",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleSelect: {
    padding: "0px 0px 0px 0px !important",
  },
  sensitivityHeader: {
    padding: "20px 0px 8px 0px !important",
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
  },
  sensitivityContainer: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    justifyContent: "space-between",
  },
  sensitivityContent: {
    padding: "0px 0px 0px 0px !important",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#B4B4B4"
  },
  harshCardContainer: {
    padding: "0px 0px 16px 0px !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "16px"
  },
  chilrenCardContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  chilrenCardContent: {
    padding: "0px 0px 27px 0px !important",
  },
  childrenHeader: {
    padding: "24px 0px 32px 24px !important",
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
  },
  childrenAcceleration: {
    padding: "0px 0px 20px 24px !important",
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
  },
  sliderContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  oneSliderElement: {
    padding: "0px 0px 0px 0px !important",
  },
  sliderDetail: {
    padding: "0px 24px 23px 24px !important",
  },
  buttonContainer: {
    padding: "0px 0px 0px 24px !important",
    display: "flex",
  },
}

const useStyles = makeStyles(styles)

export default function SafetyHarshEvents() {
  const classes = useStyles(styles)

  const [selectValue, setSelectValue] = useState("none");

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };

  const sliderComponents = [
    {
      label: "Harsh Acceleration",
      name: "acceleration"
    },
    {
      label: "Harsh Brake",
      name: "brake"
    },
    {
      label: "Harsh Turn",
      name: "turn"
    }
  ]

  const [passenger, setPassenger] = useState({
    acceleration: 0,
    brake: 0,
    turn: 0,
  })

  const [lightVehicle, setLightVehicle] = useState({
    acceleration: 0,
    brake: 0,
    turn: 0,
  })

  const [heavyDuty, setHeavyDuty] = useState({
    acceleration: 0,
    brake: 0,
    turn: 0,
  })

  return (
    <Card>
      <CardBody className={classes.cardContainer}>
        <GridItem className={classes.cardMultipleContent}>
          <GridItem xs={12} sm={12} md={12} className={classes.vehicleHeaderContainer}>
            <GridItem className={classes.vehicleHeader}>Vehicle Type</GridItem>
            <GridItem className={classes.vehicleSelect}>
              <CustomSelect listValues={["Automatic", "2", "3"]} selectValue={selectValue}
                            setSelectValue={setSelectValue}/>
            </GridItem>
            <GridItem className={classes.sensitivityHeader}>Harsh Event Sensitivity</GridItem>
            <GridItem className={classes.sensitivityContainer}>
              <GridItem className={classes.sensitivityContent} xs={12} sm={10} md={10}>
                Our recommended settings improve the relevance of harsh events you see in the Safety Inbox. Move sliders
                left or right to change the sensitivity for
                harsh event detection. MAX will increase the number of events in your Safety Inbox, and OFF will not
                upload events of that type.
              </GridItem>
              <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA"/>
            </GridItem>
            {checkedState.checkedA === true
            && (
              <GridItem xs={12} sm={12} md={12} spacing={16} className={classes.harshCardContainer}>

                <GridItem xs={12} sm={4} md={4} className={classes.chilrenCardContainer}>
                  <Card className={classes.chilrenCardContent}>
                    <GridItem className={classes.childrenHeader}>Passenger</GridItem>
                    <GridItem className={classes.sliderContainer}>
                      {sliderComponents.map((item, i) =>
                        <GridItem className={classes.oneSliderElement} key={i}>
                          <GridItem className={classes.childrenAcceleration}>{item.label}</GridItem>
                          <GridItem className={classes.sliderDetail}>
                            <CustomSlider
                              allSlider={passenger}
                              type={"sensitivity"}
                              step={0.01}
                              min={0} max={5}
                              sliderDefaultValue={1.08}
                              setSliderValue={setPassenger}
                              name={item.name}/>
                          </GridItem>
                        </GridItem>
                      )}
                    </GridItem>
                    <GridItem className={classes.buttonContainer}>
                      <Button
                        round
                        className="btn-round-active w-77 mr-2"
                      >
                        Save
                      </Button>
                      <Button
                        round
                        className="btn-round-white w-77 mr-2"
                      >
                        Cancel
                      </Button>
                    </GridItem>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} className={classes.chilrenCardContainer}>
                  <Card className={classes.chilrenCardContent}>
                    <GridItem className={classes.childrenHeader}>Heavy Duty</GridItem>
                    <GridItem className={classes.sliderContainer}>
                      {sliderComponents.map((item, i) =>
                        <GridItem className={classes.oneSliderElement} key={i}>
                          <GridItem className={classes.childrenAcceleration}>{item.label}</GridItem>
                          <GridItem className={classes.sliderDetail}>
                            <CustomSlider
                              allSlider={heavyDuty}
                              type={"sensitivity"}
                              step={0.01}
                              min={0} max={5}
                              sliderDefaultValue={1.08}
                              setSliderValue={setHeavyDuty}
                              name={item.name}/>
                          </GridItem>
                        </GridItem>
                      )}
                    </GridItem>
                    <GridItem className={classes.buttonContainer}>
                      <Button
                        round
                        className="btn-round-active w-77 mr-2"
                      >
                        Save
                      </Button>
                      <Button
                        round
                        className="btn-round-white w-77 mr-2"
                      >
                        Cancel
                      </Button>
                    </GridItem>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} className={classes.chilrenCardContainer}>
                  <Card className={classes.chilrenCardContent}>
                    <GridItem className={classes.childrenHeader}>Light Vehicle</GridItem>
                    <GridItem className={classes.sliderContainer}>
                      {sliderComponents.map((item, i) =>
                        <GridItem className={classes.oneSliderElement} key={i}>
                          <GridItem className={classes.childrenAcceleration}>{item.label}</GridItem>
                          <GridItem className={classes.sliderDetail}>
                            <CustomSlider
                              allSlider={lightVehicle}
                              type={"sensitivity"}
                              step={0.01}
                              min={0} max={5}
                              sliderDefaultValue={1.08}
                              setSliderValue={setLightVehicle}
                              name={item.name}/>
                          </GridItem>
                        </GridItem>
                      )}
                    </GridItem>
                    <GridItem className={classes.buttonContainer}>
                      <Button
                        round
                        className="btn-round-active w-77 mr-2"
                      >
                        Save
                      </Button>
                      <Button
                        round
                        className="btn-round-white w-77 mr-2"
                      >
                        Cancel
                      </Button>
                    </GridItem>
                  </Card>
                </GridItem>
              </GridItem>
            )
            }
          </GridItem>
        </GridItem>
      </CardBody>
    </Card>
  )
}