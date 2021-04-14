import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import BarChart from "components/CustomBarChart/BarChart";
import complianceStyle from "../style/complianceStyle";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Table from "components/Table/TableV1";
import {getDriverDistanceData, getDrivingHoursData, getFuelUsage} from "reducers/compliance";
import {connect} from "react-redux";

const useStyles = makeStyles(complianceStyle);

export function BarChartCard(props) {
  // const {title, data, radio} = props;
  const classes = useStyles();

  const columns1 = [
    {
      title: 'Top Vehicles',
      key: 'topVehicles',
      onHeaderCell: {className: classes.headerFirst},
      render: topVehicles => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{topVehicles}</div>
        </div>
      ),
    },
    {
      title: 'Kilometers',
      key: 'kilometers',
      onHeaderCell: {className: classes.headerFirst},
      render: kilometers => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{kilometers}</div>
        </div>
      ),
    },
  ];

  const columns2 = [
    {
      title: 'Top Vehicles',
      key: 'topVehicles',
      onHeaderCell: {className: classes.headerFirst},
      render: topVehicles => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{topVehicles}</div>
        </div>
      ),
    },
    {
      title: 'Hours',
      key: 'hours',
      onHeaderCell: {className: classes.headerFirst},
      render: hours => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{hours}</div>
        </div>
      ),
    },
  ];

  const columns3 = [
    {
      title: 'Top Comsumers',
      key: 'topComsumers',
      onHeaderCell: {className: classes.headerFirst},
      render: topComsumers => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{topComsumers}</div>
        </div>
      ),
    },
    {
      title: 'Fuel Used',
      key: 'fuelUsed',
      onHeaderCell: {className: classes.headerFirst},
      render: fuelUsed => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{fuelUsed}</div>
        </div>
      ),
    },

    {
      title: 'Fuel Wasted',
      key: 'fuelWasted',
      onHeaderCell: {className: classes.headerFirst},
      render: fuelWasted => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{fuelWasted}</div>
        </div>
      ),
    },
  ];

  React.useEffect(() => {
    // Get list data
    props.getDriverDistanceData(),
    props.getDrivingHoursData(),
    props.getFuelUsage()
  }, []);

  return (
    <Grid container className={classes.barChartSpace}>
      <Grid item xs={4} sm={4} md={4}>
        <Card className={classes.barChartSize}>
          <CardHeader
            title={
              <Grid container>
                <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                  Driver Distance
                </Grid>
                <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                  <Link>View Details</Link>
                </Grid>
              </Grid>}
            className={classes.cardHeader}
          />
          <CardContent className={classes.chartTop}>
            <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
              <div className={classes.header}>785.6 km</div>
              <div className={classes.subHeader}>Avg Distance Driven</div>
            </Grid>
            <BarChart/>
          </CardContent>

          {/*Table*/}
          <Table

            columns={columns1}
            dataSource={props.dataChart1}
            onHeaderRow={{
              className: classes.onHeaderRow
            }}
            onBodyRow={{
              // onClick: viewDetail,
              className: classes.tableRow
            }}
          />
        </Card>

      </Grid>

      <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "center", borderRadius: "20px"}}>
        <Card className={classes.barChartSize}>
          <CardHeader
            title={
              <Grid container>
                <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                  Driving Hours
                </Grid>
                <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                  <Link>View Details</Link>
                </Grid>
              </Grid>}
            className={classes.cardHeader}
          />
          <CardContent className={classes.chartTop}>
            <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
              <div className={classes.header}>8.3 h</div>
              <div className={classes.subHeader}>Avg Hours Driven</div>
            </Grid>
            <BarChart/>
          </CardContent>
          <Table

            columns={columns2}
            dataSource={props.dataChart2}
            onHeaderRow={{
              className: classes.onHeaderRow
            }}
            onBodyRow={{
              // onClick: viewDetail,
              className: classes.tableRow
            }}
          />
        </Card>
      </Grid>

      <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "flex-end", borderRadius: "20px"}}>
        <Card className={classes.barChartSize}>
          <CardHeader
            title={
              <Grid container>
                <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                  Fuel Usage
                </Grid>
                <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                  <Link>View Details</Link>
                </Grid>
              </Grid>}
            className={classes.cardHeader}
          />
          <CardContent className={classes.chartTop}>
            <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
              <div className={classes.header}>3.1 gal</div>
              <div className={classes.subHeader}>Total Fuel Used</div>
            </Grid>
            <BarChart/>
          </CardContent>
          <Table

            columns={columns3}
            dataSource={props.dataChart3}
            onHeaderRow={{
              className: classes.onHeaderRow
            }}
            onBodyRow={{
              // onClick: viewDetail,
              className: classes.tableRow
            }}
          />
        </Card>
      </Grid>
    </Grid>

  )
};

const mapStateToProps = ({compliance}) => {
  return {
    //1
    dataChart1: compliance.driverDistance.data,
    pageChart1: compliance.driverDistance.page,
    totalChart1: compliance.driverDistance.total,
    pageSizeChart1: compliance.driverDistance.pageSize,

    //2
    dataChart2: compliance.drivingHours.data,
    pageChart2: compliance.drivingHours.page,
    totalChart2: compliance.drivingHours.total,
    pageSizeChart2: compliance.drivingHours.pageSize,

    //3
    dataChart3: compliance.fuelUsage.data,
    pageChart3: compliance.fuelUsage.page,
    totalChart3: compliance.fuelUsage.total,
    pageSizeChart3: compliance.fuelUsage.pageSize
  };
};

const mapDispatchToProps = {
  getDriverDistanceData,
  getDrivingHoursData,
  getFuelUsage,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarChartCard);

