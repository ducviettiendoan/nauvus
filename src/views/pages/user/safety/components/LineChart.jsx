import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import LineChart from "components/CustomCrashLineChart/LineChart";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Table from "components/Table/TableV1";
import {getDriverDistanceData, getDrivingHoursData, getFuelUsage} from "reducers/compliance";
import {connect} from "react-redux";
import BarChart from "../../../../../components/CustomBarChart/BarChart";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";

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


  // const dataChart1 = [12,6,12,9,5.5,7.5,14,5,9,5.5,9,15,5,9,3.5,6];
  // const dataChart2 = [5,2.5,5,4,2,3,6,1.5,3.5,2,4,6,2,3.5,1,3];
  // const dataChart3 = [17,917,13,8,11,20.5,7,12.5,8,13.5,21,7,13.5,4.9,9];

  // React.useEffect(() => {
  //   // Get list data
  //   props.getDriverDistanceData(),
  //     props.getDrivingHoursData(),
  //     props.getFuelUsage()
  // }, []);

  return (
    <Grid container className={classes.barChartSpace}>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          {/*<CardContent className={classes.chartTop}>*/}
          {/*  <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>*/}
          {/*    <div className={classes.header}>8.3 h</div>*/}
          {/*    <div className={classes.subHeader}>Avg Hours Driven</div>*/}
          {/*  </Grid>*/}
          {/*</CardContent>*/}
          {/*<div className={classes.cardFooter}>*/}
          {/*  <Table*/}
          {/*    columns={columns1}*/}
          {/*    dataSource={props.dataChart1}*/}
          {/*    onHeaderRow={{*/}
          {/*      className: classes.onHeaderRow*/}
          {/*    }}*/}
          {/*    onBodyRow={{*/}
          {/*      // onClick: viewDetail,*/}
          {/*      className: classes.tableRow*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</div>*/}
          <GridContainer>
            <GridItem xs={12} className={classes.chartTitle}>Speed</GridItem>
            <GridItem xs={12}><LineChart/></GridItem>
          </GridContainer>
        </Card>

      </Grid>
    </Grid>

  )
};