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
import CardFooter from "components/Card/CardFooter.js";
import TimelineIcon from '@material-ui/icons/Timeline';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "../../../../../components/CustomButtons/Button";
import EChart from "components/CustomLineChart/EChart";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Filter1Outlined, MoreHoriz} from "@material-ui/icons";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SearchBox from "../../../../../components/SearchBox/SearchBox";
import FilterIcon from "../../../../../components/Icons/FilterIcon";
import CardContent from "@material-ui/core/CardContent";

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
  topButton: {
    background: "white!important",
    color: "#25345C"
  },
  topButtonDisabled: {
    background: "white!important",
    color: "#C4C4C4!important"
  },

  displayFlex: {
    display: "flex",
    justifyContent: "space-between"
  },
  colorBlue: {
    color: "#25345C"
  },
  colorGrey: {
    color: "#C4C4C4"
  },
  colorGreen: {
    color: "#27AE60"
  },
  colorRed: {
    color: "#E53935"
  },
  boldBlueLeft: {
    color: "#25345C",
    fontWeight: "700",
    textAlign: "left"
  },
  fontSize16: {
    fontSize: "1rem!important"
  },
  chartAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  textEnd: {
    textAlign: "right"
  },
  textStart: {
    textAlign: "left"
  },
  noPadding: {
    padding: "0!important",
    margin: "0!important"
  },
  chartLegend: {
    fontSize: 12,
    verticalAlign: "baseline"
  },
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important"
    // margin: "0px 16px 20px 16px!important",
  }
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#F4BE5E',
  },
}))(LinearProgress);

const useStyles = makeStyles(styles);

export default function DeveloperMetrics() {
  const classes = useStyles();
  return (
      <GridContainer className="developer-metric-wrapper">
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody className="body">
                  <GridContainer spacing={2}>
                    <GridItem className={classes.bigCard} component={Card} xs={3}>
                          <h5 className={classes.boldBlueLeft + " pl-2 my-3"}>
                            Summary
                          </h5>
                          <div className={`${classes.displayFlex} ${classes.colorBlue}`}>
                            <div>Progress</div>
                            <div className={classes.boldBlueLeft}>99.99%</div>
                          </div>
                          <div className="mt-2 mb-4">
                            <BorderLinearProgress variant="determinate" value={99.99} />
                          </div>
                          <div className={"py-2 " + classes.fontSize16} >
                            <div className={classes.displayFlex}>
                              <div className={classes.colorGrey}>Availability Rate</div>
                              <div className={classes.boldBlueLeft}>99.99%</div>
                            </div>
                            <hr className="my-2"/>
                            <div className={classes.displayFlex}>
                              <div className={classes.colorGrey}>Success Rate</div>
                              <div className={classes.boldBlueLeft}>99.99%</div>
                            </div>
                          </div>
                    </GridItem>
                    <GridItem className={classes.bigCard} component={Card} xs={9}>
                          <GridContainer >
                            <GridItem xs={6}>
                              <h4 className={classes.boldBlueLeft + " my-4" }>
                                API Volume
                              </h4>
                            </GridItem>
                            <GridItem xs={6} className={classes.textEnd}>
                              <Button
                                  color="white"
                                  aria-label="edit"
                                  justIcon
                                  round
                                  className={`btn-36 ${classes.chartAction} mr-2`}
                              >
                                <TimelineIcon className={classes.colorBlue}/>
                              </Button>
                            </GridItem>
                            <GridItem xs={12} className={classes.textStart + " " + classes.colorBlue}>
                              <FiberManualRecordIcon className={ classes.chartLegend + " " + classes.colorGreen + " mr-1"}  />
                              Successes
                              <FiberManualRecordIcon className={ classes.chartLegend + " " + classes.colorRed +  " ml-3 mr-1"}  />
                              Errors
                            </GridItem>
                            <GridItem xs={12} className={classes.noPadding}>
                              <EChart/>
                            </GridItem>
                          </GridContainer>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem>
        </GridItem>
      </GridContainer>
  );
}
