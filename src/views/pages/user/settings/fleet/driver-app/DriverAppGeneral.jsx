import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import Switch from "components/CustomSwitch/Switch.jsx"
import { Divider} from "@material-ui/core";

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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: "2px"
  },
  createLinkButton: {
    background: "#25345C",
    color: "white",
    borderRadius: 28,
    textTransform: "none",
    height: 46,
    fontSize: 14,
    marginRight: 21,
    marginTop: 17,
    "&:hover": {
      background: "#25345C !important"
    },
    fontWeight: 700
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },

  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    marginLeft: "15px"
  },
  topHeaderButton: {
    textAlign: "right",
    
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  gridContent: {
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 0px 0px !important",
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
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
    paddingLeft: "20px",

  },
  headItem:{
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 6px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  switch:{
    position: "absolute",
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0, 
    margin: "auto",
  },
  cardBody:{
    paddingTop: "5px",
  },

  firstContentHeader:{
    color: "#C4C4C4", 
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "9px 0px 8px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  firstContent:{
    color: "#25345C",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 17px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  cardMultipleContent2:{
    paddingLeft: "6px !important"
  },

  contentItem2:{
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 8px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  
};

const useStyles = makeStyles(styles);

export default function DriverAppGeneral() {
  const classes = useStyles();

  const handleChange = (event) => {
  };

  return (
      <GridContainer>
          <CardBody className={classes.cardBody}> 
          <GridItem className={classes.cardMultipleContent} xs={4} sm={4} md={4} >
            <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
              <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                <GridItem className={classes.firstContentHeader}>
                  Driver Fleet ID
                </GridItem>
                <GridItem className={classes.firstContent}>
                  Aliplus
                </GridItem>
              </GridItem>
            </GridItem>
            <Divider variant="fullWidth" light />
          </GridItem>
            <GridItem className={classes.cardMultipleContent} xs={9} sm={9} md={9} >
                <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                  <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                    <GridItem className={classes.headerItem}>
                      Org vehicle search
                    </GridItem>
                    <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
                      Allow drivers to search for vehicles outside of their selection tag when connected to the internet. 
                    </GridItem>
                  </GridItem>
                  <Switch onChange={handleChange} className={classes.switch}/>
                </GridItem>
                <Divider variant="fullWidth" light />
            </GridItem>
            <GridItem className={classes.cardMultipleContent} xs={9} sm={9} md={9} >
              <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                  <GridItem className={classes.headerItem}>
                    Trailer Selection
                  </GridItem>
                  <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
                    Allow drivers to see and select trailers in the Samsara Driver app.
                  </GridItem>
                </GridItem>
                <Switch onChange={handleChange} className={classes.switch}/>               
              </GridItem>
              <Divider variant="fullWidth" light />
              </GridItem>
            <GridItem className={classes.cardMultipleContent} xs={9} sm={9} md={9} >
              <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                  <GridItem className={classes.headerItem}>
                    Driver Gamification
                  </GridItem>
                  <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
                    Enabling this will turn on the feature for all drivers using the mobile app. Drivers can be configured into peer groups within the Drivers Page. Unconfigured drivers will be grouped on an organization level.
                  </GridItem>
                </GridItem>
              </GridItem>
              <Divider variant="fullWidth" light />
              </GridItem>
            <GridItem className={classes.cardMultipleContent2} xs={9} sm={9} md={9} >
              <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                  <GridItem className={classes.headerItem}>
                    Driver Gamification
                  </GridItem>
                  <GridItem className={classes.contentItem2} xs={12} sm={12} md={12}>
                    Enabling this will turn on the feature for all drivers using the mobile app. Drivers can be configured into peer groups within the Drivers Page. Unconfigured drivers will be grouped on an organization level.
                  </GridItem>
                </GridItem>
                <Switch onChange={handleChange} className={classes.switch}/>               
              </GridItem>
              </GridItem>
            <GridItem className={classes.cardMultipleContent2} xs={9} sm={9} md={9} >
              <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
                  <GridItem className={classes.headerItem}>
                    Anonymize driver names
                  </GridItem>
                  <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
                    Hide the names of other drivers when viewing the driver leaderboard in the mobile app.
                  </GridItem>
                </GridItem>               
                <Switch onChange={handleChange} className={classes.switch}/>               
              </GridItem>
            </GridItem>
            <Button round className="btn-round-active mr-2">
              Save
            </Button>
            <Button round className="btn-round-active-2">
              Cancel
            </Button>
          </CardBody>
      </GridContainer>
  );
}
