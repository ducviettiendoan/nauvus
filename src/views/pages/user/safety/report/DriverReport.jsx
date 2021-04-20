import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CheckedIcon from "components/Icons/CheckedIcon";
import CloseIcon from "components/Icons/CloseIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import Chip from "@material-ui/core/Chip";
import { Grid, makeStyles } from "@material-ui/core";
import ReportPieChart from "../components/safety-report/ReportPieChart"
import ReportLineChart from "../components/safety-report/ReportLineChart"
// utils
import { connect } from "react-redux"


const useStyles = makeStyles((theme) => ({
  cardContainer: {
    paddingTop: "16px",
    paddingBottom: "16px"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  driversNumber: {
    color: "#25345C",
    fontSize: "16px",
    lineHeight: "32px",
    fontWeight: "bold"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
    }
  },
  gridCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 16px 10px 16px"
  },
}))

function DriverReport(props) {
  const classes = useStyles()


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card className={classes.cardContainer}>
              <GridItem className={classes.headerContainer}>
                <Grid xs={12} sm={12} md={5} className={classes.driversNumber}>
                  148 drivers
                </Grid>
                <Grid xs={12} sm={12} md={5} className={classes.headLeft}>
                  <ToolboxButton placeholder="Search vehicles" showFilter />
                </Grid>
              </GridItem>
              <GridContainer
                className={classes.gridCardContainer}
              >
                <GridItem xs={12} sm={12} md={4} style={{ paddingRight: "16px" }}>
                  <ReportPieChart
                    title={"Progress"}
                    data={[{
                      value: 65,

                      itemStyle: {
                        color: "#95A4B9",
                      },

                      detail: {
                        offsetCenter: ['0%', '0%'],
                        formatter: '{value}%',
                        fontSize: 21,
                        fontWeight: 700,
                        fontFamily: 'Lato',
                      }
                    }]}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <ReportLineChart title={"Fleet Trends"} />
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ }) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverReport)