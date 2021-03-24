import React from "react";
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

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import { Divider } from "@material-ui/core";

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
    paddingLeft: "6px !important"
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
};

const useStyles = makeStyles(styles);

export default function Configuration() {
  const classes = useStyles();

  const [checkedState, setCheckedState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

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


                  <GridItem className={classes.cardMultipleContent}>
                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent} >
                      <CardBody className={classes.cardItem}>
                        <GridItem className={classes.headerItem} >
                          Enable Vehicle Battery Conservation Mode
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                          By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle.
                        </GridItem>
                      </CardBody>
                      <Switch checked={checkedState.checkedA} onChange={handleChange} name="checkedA" />
                    </GridItem>
                    <Divider variant="fullWidth" light />


                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent} >
                      <CardBody className={classes.cardItem}>
                        <GridItem className={classes.headerItem} >
                          Enable Vehicle Battery Conservation Mode
                    </GridItem>
                      <GridItem className={classes.contentItem} >
                        By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle.
                      </GridItem>
                      </CardBody>
                      <Switch checked={checkedState.checkedB} onChange={handleChange} name="checkedB" />
                    </GridItem>
                    <Divider variant="fullWidth" light />


                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent} >
                      <CardBody className={classes.cardItem}>
                        <GridItem className={classes.headerItem} >
                          Enable Vehicle Battery Conservation Mode
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                          By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle.
                        </GridItem>
                      </CardBody>
                      <Switch checked={checkedState.checkedC} onChange={handleChange} name="checkedC" />
                    </GridItem>
                    <Divider variant="fullWidth" light />


                    <GridItem xs={12} sm={12} md={12} className={classes.gridContent} >
                      <CardBody className={classes.cardItem}>
                        <GridItem className={classes.headerItem} >
                          Enable Vehicle Battery Conservation Mode
                        </GridItem>
                        <GridItem className={classes.contentItem} >
                          By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle.
                        </GridItem>
                      </CardBody>
                      <Switch checked={checkedState.checkedD} onChange={handleChange} name="checkedD" />
                    </GridItem>
                    <Divider variant="fullWidth" light />
                  </GridItem>
                </CardBody>

              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
