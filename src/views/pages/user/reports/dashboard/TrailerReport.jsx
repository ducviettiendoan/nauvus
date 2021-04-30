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
import {getUtilizationData,getDormancyData,getDetentionData,getChartData} from "reducers/report";
import {connect} from "react-redux";

const useStyles = makeStyles(complianceStyle);

function TrailerReport(props) {
  // const {title, data, radio} = props;
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const columns1 = [
    {
      title: 'Last Utilized',
      key: 'lastUtilized',
      onHeaderCell: {className: classes.headerFirst},
      render: lastUtilized => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{lastUtilized}</div>
        </div>
      ),
    },
    {
      title: 'Utilization',
      key: 'utilization',
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
      title: 'Most Dormant',
      key: 'mostDormant',
      onHeaderCell: {className: classes.headerFirst},
      render: mostDormant => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{mostDormant}</div>
        </div>
      ),
    },
    {
      title: 'Dormancy Time',
      key: 'dormancyTime',
      onHeaderCell: {className: classes.headerFirst},
      render: dormancyTime => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{dormancyTime}</div>
        </div>
      ),
    },
  ];

  const columns3 = [
    {
      title: 'Most Efficient Vehicles',
      key: 'mostEfficientVehicles',
      onHeaderCell: {className: classes.headerFirst},
      render: mostEfficientVehicles => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{mostEfficientVehicles}</div>
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


  React.useEffect(() => {
    // Get list data
    props.getUtilizationData(),
      props.getDormancyData(),
      props.getDetentionData(),
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
                    Utilization
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>28%</div>
                <div className={classes.subHeader}>Average Utilization</div>
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
                    Dormancy
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>2 months</div>
                <div className={classes.subHeader}>Average Dormancy</div>
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
                    Detention
                  </Grid>
                  <Grid item xs={4} sm={12} md={4} className={classes.cardHeaderSubTitle}>
                    <Link>View Details</Link>
                  </Grid>
                </Grid>}
              className={classes.cardHeader}
            />
            <CardContent className={classes.chartTop}>
              <Grid xs={12} sm={12} md={12} style={{textAlign: 'center'}}>
                <div className={classes.header}>5.1 MPG</div>
                <div className={classes.subHeader}>Average Detention</div>
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
      </Card>
    </div>
  )
};

const mapStateToProps = ({report}) => {
  return {
    //1
    dataChart1: report.utilization.data,
    pageChart1: report.utilization.page,
    totalChart1: report.utilization.total,
    pageSizeChart1: report.utilization.pageSize,

    //2
    dataChart2: report.dormancy.data,
    pageChart2: report.dormancy.page,
    totalChart2: report.dormancy.total,
    pageSizeChart2: report.dormancy.pageSize,

    //3
    dataChart3: report.detention.data,
    pageChart3: report.detention.page,
    totalChart3: report.detention.total,
    pageSizeChart3: report.detention.pageSize,

    dataChart: report.chartData.data,
  };
};

const mapDispatchToProps = {
  getChartData,
  getUtilizationData,
  getDormancyData,
  getDetentionData,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailerReport);
