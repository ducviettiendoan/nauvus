import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button"
import { Divider } from "@material-ui/core";
import AddOutlined from "@material-ui/icons/AddOutlined";

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
  allCard: {
    overflowY: "scroll"
  },
  rowCard: {
    display: "flex",
    flexDirection: "row",
  },
  headerCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 0px !important",
    paddingBottom: "12px !important"
  },
  titleCard: {
    padding: "0px 0px !important",
    paddingLeft: "4px !important",
    fontWeight: "bold"
  },
  betaButton: {
    padding: "0px 0px !important"
  },
  descriptonCard: {
    padding: "0px 0px 16px 4px !important",
    color: "#25345C !important"
  },
  readMoreButton: {
    padding: "0px 0px 10px 4px !important"
  },
  screenBoardContainer: {
    padding: "0px 0px 18px 4px !important"
  },
  screenBoard: {
    height: "205px",
    background: "rgba(37, 52, 92, 0.05)",
    border: "1px dashed #25345C",
    boxSizing: "border-box",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  screenBoardTitle: {
    fontWeight: "bold",
  },
  footerCard: {
    padding: "18px 0px 0px 4px !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
};

const useStyles = makeStyles(styles);

export default function FeatureManagement() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} className={classes.allCard}>
          <GridContainer className={classes.rowCard}>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardBody xs={12} sm={6} md={6} >
                  <GridItem xs={12} sm={12} md={12} className={classes.headerCard} >
                    <GridItem className={classes.titleCard}>Customize Data Shown in Vehicle List</GridItem>
                    <GridItem className={classes.betaButton}>
                      <Button
                        round
                        className="btn-round-red-2 w-56 h-24"
                      >
                        Beta
                      </Button>
                    </GridItem>
                  </GridItem>

                  <GridItem className={classes.descriptonCard}>
                    With this feature, you can customize and see additional data on the Fleet Overview page, including idling duration,
                    fuel level, HoS drive time remaining, and HoS violation status.
                  </GridItem>
                  <GridItem className={classes.readMoreButton}>
                    <Button
                      round
                      className="btn-round-white-2 w-101 h-41"
                    >
                      Read More
                    </Button>
                  </GridItem>
                  <GridItem className={classes.screenBoardContainer}>
                    <GridItem className={classes.screenBoard}>
                      <GridItem className={classes.screenBoardTitle} >THIS IS A SCREEN</GridItem>
                    </GridItem>
                  </GridItem>
                  <Divider variant="fullWidth" />

                  <GridItem className={classes.footerCard}>
                    <Button
                      className="btn-round-white-3 w-122 h-41"
                      startIcon={<AddOutlined />}
                    >
                      Add Users
                    </Button>

                    <Button
                      round
                      className="btn-round-active w-122 h-41"
                    >
                      Send Feedback
                    </Button>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardBody xs={12} sm={6} md={6} >
                  <GridItem xs={12} sm={12} md={12} className={classes.headerCard} >
                    <GridItem className={classes.titleCard}>Customize Data Shown in Vehicle List</GridItem>
                    <GridItem className={classes.betaButton}>
                      <Button
                        round
                        className="btn-round-red-2 w-56 h-24"
                      >
                        Beta
                      </Button>
                    </GridItem>
                  </GridItem>

                  <GridItem className={classes.descriptonCard}>
                    With this feature, you can customize and see additional data on the Fleet Overview page, including idling duration,
                    fuel level, HoS drive time remaining, and HoS violation status.
                  </GridItem>
                  <GridItem className={classes.readMoreButton}>
                    <Button
                      round
                      className="btn-round-white-2 w-101 h-41"
                    >
                      Read More
                    </Button>
                  </GridItem>
                  <GridItem className={classes.screenBoardContainer}>
                    <GridItem className={classes.screenBoard}>
                      <GridItem className={classes.screenBoardTitle} >THIS IS A SCREEN</GridItem>
                    </GridItem>
                  </GridItem>
                  <Divider variant="fullWidth" />

                  <GridItem className={classes.footerCard}>
                    <Button
                      className="btn-round-white-3 w-122 h-41"
                      startIcon={<AddOutlined />}
                    >
                      Add Users
                    </Button>

                    <Button
                      round
                      className="btn-round-active w-122 h-41"
                    >
                      Send Feedback
                    </Button>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
          <GridContainer className={classes.rowCard}>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardBody xs={12} sm={6} md={6} >
                  <GridItem xs={12} sm={12} md={12} className={classes.headerCard} >
                    <GridItem className={classes.titleCard}>Customize Data Shown in Vehicle List</GridItem>
                    <GridItem className={classes.betaButton}>
                      <Button
                        round
                        className="btn-round-red-2 w-56 h-24"
                      >
                        Beta
                      </Button>
                    </GridItem>
                  </GridItem>

                  <GridItem className={classes.descriptonCard}>
                    With this feature, you can customize and see additional data on the Fleet Overview page, including idling duration,
                    fuel level, HoS drive time remaining, and HoS violation status.
                  </GridItem>
                  <GridItem className={classes.readMoreButton}>
                    <Button
                      round
                      className="btn-round-white-2 w-101 h-41"
                    >
                      Read More
                    </Button>
                  </GridItem>
                  <GridItem className={classes.screenBoardContainer}>
                    <GridItem className={classes.screenBoard}>
                      <GridItem className={classes.screenBoardTitle} >THIS IS A SCREEN</GridItem>
                    </GridItem>
                  </GridItem>
                  <Divider variant="fullWidth" />

                  <GridItem className={classes.footerCard}>
                    <Button
                      className="btn-round-white-3 w-122 h-41"
                      startIcon={<AddOutlined />}
                    >
                      Add Users
                    </Button>

                    <Button
                      round
                      className="btn-round-active w-122 h-41"
                    >
                      Send Feedback
                    </Button>
                  </GridItem>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card>
                <CardBody xs={12} sm={6} md={6} >
                  <GridItem xs={12} sm={12} md={12} className={classes.headerCard} >
                    <GridItem className={classes.titleCard}>Customize Data Shown in Vehicle List</GridItem>
                    <GridItem className={classes.betaButton}>
                      <Button
                        round
                        className="btn-round-red-2 w-56 h-24"
                      >
                        Beta
                      </Button>
                    </GridItem>
                  </GridItem>

                  <GridItem className={classes.descriptonCard}>
                    With this feature, you can customize and see additional data on the Fleet Overview page, including idling duration,
                    fuel level, HoS drive time remaining, and HoS violation status.
                  </GridItem>
                  <GridItem className={classes.readMoreButton}>
                    <Button
                      round
                      className="btn-round-white-2 w-101 h-41"
                    >
                      Read More
                    </Button>
                  </GridItem>
                  <GridItem className={classes.screenBoardContainer}>
                    <GridItem className={classes.screenBoard}>
                      <GridItem className={classes.screenBoardTitle} >THIS IS A SCREEN</GridItem>
                    </GridItem>
                  </GridItem>
                  <Divider variant="fullWidth" />

                  <GridItem className={classes.footerCard}>
                    <Button
                      className="btn-round-white-3 w-122 h-41"
                      startIcon={<AddOutlined />}
                    >
                      Add Users
                    </Button>

                    <Button
                      round
                      className="btn-round-active w-122 h-41"
                    >
                      Send Feedback
                    </Button>
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
