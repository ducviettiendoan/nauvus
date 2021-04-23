import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import LineChart from "components/CustomCrashLineChart/LineChart";
import Card from "@material-ui/core/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const styles = {
  chartTitle: {
    fontSize: "15px",
    fontWeight: 600,
    fontFamily: "Lato",
    marginLeft: "60px",
    marginTop: "10px",
  }
};

export default function LineChartCard(props) {
  // const {title, data, radio} = props;
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <Grid container className={classes.barChartSpace}>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <GridContainer>
            <GridItem xs={12} className={classes.chartTitle}>Speed</GridItem>
            <GridItem xs={12}><LineChart/></GridItem>
          </GridContainer>
        </Card>

      </Grid>
    </Grid>

  )
};