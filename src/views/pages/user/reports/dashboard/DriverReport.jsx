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
import {getDrivingDistanceData,getDrivingHoursData,getChartData} from "reducers/report";
import {connect} from "react-redux";

const useStyles = makeStyles(complianceStyle);

function DriverReport(props) {
  // const {title, data, radio} = props;

  React.useEffect(() => {
    // Get list data
      props.getDrivingDistanceData(),
      props.getDrivingHoursData(),
      props.getChartData()
  }, []);

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const columns1 = [
    {
      title: 'Top Vehicle',
      key: 'topVehicle',
      onHeaderCell: {className: classes.headerFirst},
      render: lastUtilized => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{lastUtilized}</div>
        </div>
      ),
    },
    {
      title: 'Miles',
      key: 'miles',
      onHeaderCell: {className: classes.headerFirst},
      render: utilization => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{utilization}</div>
        </div>
      ),
    },
  ];

  const columns2 = [
    {
      title: 'Top Vehicle',
      key: 'topVehicle',
      onHeaderCell: {className: classes.headerFirst},
      render: mostDormant => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{mostDormant}</div>
        </div>
      ),
    },
    {
      title: 'Hours',
      key: 'hours',
      onHeaderCell: {className: classes.headerFirst},
      render: dormancyTime => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{dormancyTime}</div>
        </div>
      ),
    },
  ];

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
                    Driving Distance
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
        <Grid item xs={4} sm={4} md={4} style={{display: "flex", justifyContent: "flex-end", borderRadius: "20px"}}></Grid>
      </Grid>
      </Card>
    </div>
  )
};

const mapStateToProps = ({report}) => {
  return {
    //1
    dataChart1: report.drivingDistance.data,
    pageChart1: report.drivingDistance.page,
    totalChart1: report.drivingDistance.total,
    pageSizeChart1: report.drivingDistance.pageSize,

    //2
    dataChart2: report.hoursData.data,
    pageChart2: report.hoursData.page,
    totalChart2: report.hoursData.total,
    pageSizeChart2: report.hoursData.pageSize,

    dataChart: report.chartData.data,
  };
};

const mapDispatchToProps = {
  getChartData,
  getDrivingDistanceData,
  getDrivingHoursData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverReport);
