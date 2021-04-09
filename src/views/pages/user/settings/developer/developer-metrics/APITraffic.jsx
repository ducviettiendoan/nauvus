import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import EChart from "components/CustomLineChart/EChart";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "components/CustomButtons/Button";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import CloseIcon from "components/Icons/CloseIcon";
import { connect } from "react-redux";
import { getApiTraffic, getChartData } from "../../../../../../reducers/setting-developer";
import Table from "components/Table/TableV1";
import ToolboxButton from "components/CustomButtons/ToolboxButton";

const styles = {
  colorBlue: {
    color: "#25345C"
  },
  colorGrey: {
    color: "#C4C4C4"
  },
  boldBlueLeft: {
    color: "#25345C",
    fontWeight: "700",
    textAlign: "left"
  },
  fontSize16: {
    fontSize: "1rem!important"
  },
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important",
    height: "90%",
  },
  bigCardGridItem: {
    padding: "0 8px!important",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
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

export function APITraffic(props) {
  const classes = useStyles();

  const onShowSizeChange = (page, pageSize) => {
    props.getWebhook({ page, pageSize });
    console.log(page, pageSize)
  }

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getUserRoles({ page, pageSize });
  }

  React.useEffect(() => {
    // Get list data
    props.getApiTraffic();
    props.getChartData();
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'GBT' },
    { key: 1, label: '200' },
  ]);

  const handleDelete = (chipToDelete) => () => setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Request Time',
      key: 'requestTime',
      onHeaderCell: { className: classes.onHeaderCell },
      render: requestTime => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{requestTime}</div>
        </div>
      ),
    },
    {
      title: 'API Endpoint',
      key: 'apiEndpoint',
      onHeaderCell: { className: classes.onHeaderCell },
      render: apiEndpoint => <div className={classes.textSub}>{apiEndpoint}</div>
    },
    {
      title: 'Status Code',
      key: 'statusCode',
      onHeaderCell: { className: classes.onHeaderCell },
      render: statusCode => <div className={classes.textSub}>{statusCode}</div>
    },
    {
      title: 'Method',
      key: 'method',
      onHeaderCell: { className: classes.onHeaderCell },
      render: method => <div className={classes.textSub}>{method}</div>
    },
    {
      title: 'Duration',
      key: 'duration',
      onHeaderCell: { className: classes.onHeaderCell },
      render: duration => <div className={classes.textSub}>{duration}</div>
    },
    {
      title: 'API Token',
      key: 'apiToken',
      onHeaderCell: { className: classes.onHeaderCell },
      render: apiToken => <div className={classes.textSub}>{apiToken}</div>
    },
    {
      title: 'Request ID',
      key: 'reguestID',
      onHeaderCell: { className: classes.onHeaderCell },
      render: reguestID => <div className={classes.textSub}>{reguestID}</div>
    },

  ]

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      props.onShowDetail();
    }
  };

  console.log(props.chartData)

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
                        <div className={"py-2 " + classes.fontSize16}>
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Availability Rate</GridItem>
                            <GridItem className={classes.boldBlueLeft}>99.99%</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
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
                        {/* <EChart data={props.chartData}/> */}
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </CardBody>

              <Table
                renderTitle={
                  <CardBody>
                    <Grid container className={classes.gridTitle}>
                      <Grid item xs={12} sm={12} md={6}>
                        <Grid container className={classes.headContainer}>
                          <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                          <Grid item xl={10} className={classes.chipSelected}>
                            {chipData.map(data => (
                              <Chip
                                deleteIcon={<CloseIcon />}
                                label={data.label}
                                onDelete={handleDelete(data)}
                                className={classes.chip}
                              />
                            ))}
                            {chipData.length > 0 ?
                              (
                                <Button onClick={handleClearAll} className={classes.clearAll}>
                                  Clear All
                                </Button>
                              ) : ""}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                        <ToolboxButton placeholder="Search vehicle" showFilter />
                      </Grid>
                    </Grid>
                  </CardBody>

                }
                pagination={{
                  total: props.total,
                  current: props.page,
                  pageSize: props.pageSize,
                  onChange: onPageChange,
                  onShowSizeChange: onShowSizeChange
                }}
                columns={columns}
                dataSource={props.data}
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  className: classes.tableRow
                }}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = ({ settingDeveloper }) => {
  console.log(settingDeveloper.chartData)
  return {
    data: settingDeveloper.apiTraffics.data,
    page: settingDeveloper.apiTraffics.page,
    total: settingDeveloper.apiTraffics.total,
    pageSize: settingDeveloper.apiTraffics.pageSize,
    chartData: settingDeveloper.chartData.data
  };
};

const mapDispatchToProps = {
  getApiTraffic,
  getChartData
};

export default connect(mapStateToProps, mapDispatchToProps)(APITraffic);
