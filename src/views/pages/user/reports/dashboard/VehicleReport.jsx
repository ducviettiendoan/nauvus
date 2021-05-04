import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import BarChart from "components/CustomBarChart/BarChart";
import complianceStyle from "../../compliance/style/complianceStyle";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Link from "@material-ui/core/Link";
import CardContent from "@material-ui/core/CardContent";
import Table from "components/Table/TableV1";
import {getVehicleDriverDistanceData, getVehicleDrivingHoursData, getVehicleFuelUsage,getVehicleFuelEfficiency,getIdealHour,getChartData} from "reducers/report";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles(complianceStyle);

function VehicleReport(props) {
  // const {title, data, radio} = props;
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const viewDetail = (id) => {
    history.push(`/u/report/viewdetail`)
  };

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

  const columns4 = [
    {
      title: 'Least Efficiency',
      key: 'leastEfficiency',
      onHeaderCell: {className: classes.headerFirst},
      render: leastEfficiency => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{leastEfficiency}</div>
        </div>
      ),
    },
    {
      title: 'Efficiency',
      key: 'efficiency',
      onHeaderCell: {className: classes.headerFirst},
      render: efficiency => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{efficiency}</div>
        </div>
      ),
    },
  ];

  const columns5 = [
    {
      title: 'Top Idealer',
      key: 'topIdealer',
      onHeaderCell: {className: classes.headerFirst},
      render: topIdealer => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{topIdealer}</div>
        </div>
      ),
    },
    {
      title: 'Idle Time',
      key: 'idealTime',
      onHeaderCell: {className: classes.headerFirst},
      render: idealTime => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{idealTime}</div>
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
    props.getVehicleDriverDistanceData(),
      props.getVehicleDrivingHoursData(),
      props.getVehicleFuelUsage(),
      props.getVehicleFuelEfficiency(),
      props.getIdealHour(),
      props.getChartData()
  }, []);

  return (
    <div>
      <Card className={classes.topCard}>
      <Grid container className={classes.barChartSpace}>
        {/*1st chart*/}
        <Grid item xs={4} sm={4} md={4} style={{display:"flex", justifyContent: "flex-start", borderRadius: "20px"}}>
          <Card className={classes.barChartSize}>
            <CardHeader
              title={
                <Grid container>
                  <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                    Driving Hours
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link onClick={viewDetail}>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>8.3 h</div>
                <div className={classes.subHeader}>Avg Hours Driven</div>
              </Grid>
              {props.dataChart&&props.dataChart.length&& <BarChart data={props.dataChart[0]}/>}
            </CardContent>
            <div className={classes.cardFooter}>
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
            </div>
          </Card>
        </Grid>

        {/*2nd chart*/}
        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "center", borderRadius: "20px"}}>
          <Card className={classes.barChartSize}>
            <CardHeader
              title={
                <Grid container>
                  <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                    Driving Hours
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link onClick={viewDetail}>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>8.3 h</div>
                <div className={classes.subHeader}>Avg Hours Driven</div>
              </Grid>
              {props.dataChart&&props.dataChart.length&& <BarChart data={props.dataChart[1]}/>}
            </CardContent>
            <div className={classes.cardFooter}>
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
            </div>
          </Card>
        </Grid>

        {/*3rd chart*/}
        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "flex-end", borderRadius: "20px"}}>
          <Card className={classes.barChartSize}>
            <CardHeader
              title={
                <Grid container>
                  <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                    Fuel Usage
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link onClick={viewDetail}>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>3.1 gal</div>
                <div className={classes.subHeader}>Total Fuel Used</div>
              </Grid>
              {props.dataChart&&props.dataChart.length&& <BarChart data={props.dataChart[2]}/>}
            </CardContent>

            <div className={classes.cardFooter}>
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
            </div>
          </Card>
        </Grid>
      </Grid>

      <Grid container className={classes.barChartSpace}>
        {/*4th chart*/}
        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "flex-start", borderRadius: "20px"}}>
          <Card className={classes.barChartSize}>
            <CardHeader
              title={
                <Grid container>
                  <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                    Fuel Efficiency
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link onClick={viewDetail}>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>33.4 l/100 km</div>
                <div className={classes.subHeader}>Avg Efficiency</div>
              </Grid>
              {props.dataChart&&props.dataChart.length&& <BarChart data={props.dataChart[3]}/>}
            </CardContent>
            <div className={classes.cardFooter}>
              <Table
                columns={columns4}
                dataSource={props.dataChart4}
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  // onClick: viewDetail,
                  className: classes.tableRow
                }}
              />
            </div>
          </Card>
        </Grid>

        {/*5th chart*/}
        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "center", borderRadius: "20px"}}>
          <Card className={classes.barChartSize}>
            <CardHeader
              title={
                <Grid container>
                  <Grid item xs={8} sm={12} md={8} className={classes.cardHeaderTitle}>
                    Idle Hours
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link onClick={viewDetail}>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>8.3 h</div>
                <div className={classes.subHeader}>Avg Hours Driven</div>
              </Grid>
              {props.dataChart&&props.dataChart.length&& <BarChart data={props.dataChart[4]}/>}
            </CardContent>
            <div className={classes.cardFooter}>
              <Table
                columns={columns5}
                dataSource={props.dataChart5}
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  // onClick: viewDetail,
                  className: classes.tableRow
                }}
              />
            </div>
          </Card>
        </Grid>

        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "flex-end", borderRadius: "20px"}}>
        </Grid>
      </Grid>
      </Card>
    </div>
  )
};

const mapStateToProps = ({report}) => {
  return {
    //1
    dataChart1: report.driverDistance.data,
    pageChart1: report.driverDistance.page,
    totalChart1: report.driverDistance.total,
    pageSizeChart1: report.driverDistance.pageSize,

    //2
    dataChart2: report.drivingHours.data,
    pageChart2: report.drivingHours.page,
    totalChart2: report.drivingHours.total,
    pageSizeChart2: report.drivingHours.pageSize,

    //3
    dataChart3: report.fuelUsage.data,
    pageChart3: report.fuelUsage.page,
    totalChart3: report.fuelUsage.total,
    pageSizeChart3: report.fuelUsage.pageSize,

    dataChart4: report.fuelEfficiency.data,
    pageChart4: report.fuelEfficiency.page,
    totalChart4: report.fuelEfficiency.total,
    pageSizeChart4: report.fuelEfficiency.pageSize,

    dataChart5: report.idealHour.data,
    pageChart5: report.idealHour.page,
    totalChart5: report.idealHour.total,
    pageSizeChart5: report.idealHour.pageSize,

    dataChart: report.chartData.data,
  };
};

const mapDispatchToProps = {
  getVehicleDriverDistanceData,
  getVehicleDrivingHoursData,
  getVehicleFuelUsage,
  getVehicleFuelEfficiency,
  getIdealHour,
  getChartData
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleReport);
