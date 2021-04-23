import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomCreateWorkflow from "components/CustomCreateWorkflow/CustomCreateWorkflow";

const styles = {
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 16,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 17px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  cardMultipleContent: {
    paddingLeft: "12px !important",
    paddingBottom: "20px !important"
  },

  headItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 6px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  cardBody: {
    paddingTop: "5px",
  },
  divider: {
    width: "100%",
    margin: "24px 0 24px 0",
    borderTop: "1px solid #ECECF2"
  },



};

const useStyles = makeStyles(styles);

export default function DriverAppWorkflows() {
  const classes = useStyles();

  const handleChange = (event) => {
  };

  return (
    <GridContainer>
      <CardBody className={classes.cardBody}>
        <GridContainer className={classes.cardMultipleContent}>
          <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
            <GridItem className={classes.headerItem}>
              Start of Day
            </GridItem>
            <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
              Assign tasks for drivers to complete upon sign in.
            </GridItem>
            <CustomCreateWorkflow/>
          </GridItem>
          <hr className={classes.divider}/>

          <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
            <GridItem className={classes.headerItem}>
              Stop Arrival
            </GridItem>
            <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
              Assign tasks to route stops for drivers to complete upon arrival.
            </GridItem>
              <CustomCreateWorkflow/>
          </GridItem>
        </GridContainer>
      </CardBody>
    </GridContainer>
  );
}
