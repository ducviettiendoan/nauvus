import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import safetyChartStyle from "./safetyChartStyle";
import CardHeader from "@material-ui/core/CardHeader";
import { Grid } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "@material-ui/core/Card";
import Button from "components/CustomButtons/Button.js";
import CustomPieChart from "components/CustomPieChart/CustomPieChart";

const useStyles = makeStyles(safetyChartStyle);


export default function PieChartCard(props) {
  const { title, data } = props
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <GridContainer className={classes.titleContainer}>
        <Grid className={classes.safetyTitle}>Safety Score</Grid>
        <Button
          round
          className="btn-round-gray"
        >
          Dec 28 - Jan 27
        </Button>
      </GridContainer>

      <CustomPieChart
        title={title}
        data={data}
        style={{ paddingTop: "20px" }}
      />

      <CardHeader
        title={<>
          <hr className={classes.divider} />
          <GridContainer className={classes.headerContainer}>
            <Grid xs={12} sm={6} md={6} style={{ borderRight: "1px solid #ECECF2" }}>
              <Grid className={classes.cardHeaderTitle}>1,715,590 km</Grid>
              <Grid className={classes.cardHeaderSubTitle}>Distance Driven</Grid>
            </Grid>
            {/* <Divider orientation="vertical" /> */}
            <Grid xs={12} sm={6} md={6}>
              <Grid className={classes.cardHeaderTitle}>19,608h 4m</Grid>
              <Grid className={classes.cardHeaderSubTitle}>Time Driven</Grid>
            </Grid>
          </GridContainer>
        </>}

        className={classes.cardHeader}
      />

    </Card>
  )
}
