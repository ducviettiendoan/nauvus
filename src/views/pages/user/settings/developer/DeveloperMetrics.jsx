import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import EChart from "components/CustomLineChart/EChart";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";


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
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important",
    height: "90%",
  },
  bigCardGridItem: {
    padding: "0 8px!important",
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
const mockData = {
  title: {
    text: "API Volume"
  },
  series: [
    {
      color: '#27AE60',
      name: 'Successes',
      data: [
        ["2021-3-17 11:59:00", 288],
        ["2021-3-18 11:59:00", 291],
        ["2021-3-18 14:59:00", 301],
        ["2021-3-19 11:59:00", 291],
        ["2021-3-20 11:59:00", 292],
        ["2021-3-21 11:59:00", 282],
        ["2021-3-22 11:59:00", 278],
        ["2021-3-23 11:59:00", 286],
        ["2021-3-24 11:59:00", 288],
        ["2021-3-25 11:59:00", 288]
      ]
    },
    {
      color: '#E53935',
      name: 'Errors',
      data: [
        ["2021-3-17 11:59:00", 1],
        ["2021-3-18 11:59:00", 1],
        ["2021-3-19 11:59:00", 1],
        ["2021-3-20 11:59:00", 1],
        ["2021-3-21 11:59:00", 1],
        ["2021-3-22 11:59:00", 1],
        ["2021-3-23 11:59:00", 1],
        ["2021-3-24 11:59:00", 1],
        ["2021-3-25 11:59:00", 1]
      ]
    }
  ],
}

export default function DeveloperMetrics() {
  const classes = useStyles();
  return (
      <GridContainer className="developer-metric-wrapper">
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody className="body">
                  <GridContainer spacing={2} alignItems="stretch">
                    <GridItem className={classes.bigCardGridItem} xs={3}>
                      <Card className={classes.bigCard}>
                        <CardBody>
                          <h5 className={classes.boldBlueLeft + " pl-2 my-3"}>
                            Summary
                          </h5>
                          <GridContainer justify="space-between" className={classes.colorBlue}>
                            <GridItem>Progress</GridItem>
                            <GridItem className={classes.boldBlueLeft}>99.99%</GridItem>
                          </GridContainer>
                          <div className="mt-2 mb-4">
                            <BorderLinearProgress variant="determinate" value={99.99} />
                          </div>
                          <div className={"py-2 " + classes.fontSize16} >
                            <GridContainer justify="space-between">
                              <GridItem className={classes.colorGrey}>Availability Rate</GridItem>
                              <GridItem className={classes.boldBlueLeft}>99.99%</GridItem>
                            </GridContainer>
                            <hr className="my-2"/>
                            <GridContainer justify="space-between">
                              <GridItem className={classes.colorGrey}>Success Rate</GridItem>
                              <GridItem className={classes.boldBlueLeft}>99.99%</GridItem>
                            </GridContainer>
                          </div>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem className={classes.bigCardGridItem} xs={9}>
                      <Card className={classes.bigCard}>
                        <CardBody>
                          <EChart data={mockData} />
                        </CardBody>
                      </Card>
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
