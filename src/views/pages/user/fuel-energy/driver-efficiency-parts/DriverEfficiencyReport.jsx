import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "components/CustomButtons/Button";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import CloseIcon from "components/Icons/CloseIcon";
import { connect } from "react-redux";
import { getDriverEfficiencyReport } from "../../../../../reducers/fuel-energy";
import Table from "components/Table/TableV1";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CardHeader from "@material-ui/core/CardHeader";
import ReportLineChart from "./ReportLineChart"
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";

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
    padding: "16px 8px!important",

  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
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
    '&:hover': {
      cursor: "pointer"
    }
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: '#25345C'
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
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
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    fontWeight: 400,
  },
  textEmail: {
      display: "flex",
      justifyContent: "center",
      fontSize: '16px',
      lineHeight: '24px',
      color: '#25345C',
      paddingLeft: "12px",
      fontWeight: 400,
  },
  textName: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#25345C',
      paddingLeft: "12px"

  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
},
onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
    textAlign: 'center'
},
title: {
  color: "#25345C",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "bold",
},
titleContainer: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  marginBottom: "20px"
},

cardHeaderTitle: {
  color: "#25345C",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "bold",
  textAlign: "center"
},
cardHeaderSubTitle: {
  color: "#C4C4C4",
  fontSize: "14px",
  lineHeight: "21px",
  fontWeight: "normal",
  textAlign: "center"
},
cardHeader: {
  backgroundColor: "#FFFFFF",
  // padding: "0px 35px 16px 35px",
},
headerContainer: {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "16px"
},
noPadding: {
  padding: "0!important",
  margin: "0!important"
},
moreAction: {
  background: "#FFFFFF !important",
  border: "1px solid #ECEEF0 !important"
},
buttonContainer: {
  display: "flex",
  alignItems: "center",
},
moreAction: {
  background: "#FFFFFF !important",
  border: "1px solid #ECEEF0 !important",
},
topHeader: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 16
},
topHeaderTitle: {
  textAlign: "left",
  fontWeight: 700,
  fontSize: 18,
  color: "#25345C",
  padding: "0 16px !important",
  height: "38px",
  width: "91px"
},
topHeaderButton: {
  textAlign: "right !important",
  display: "flex",
  alignItems: "center"
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

export function DriverEfficiencyReport(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getDriverEfficiencyReport();
  }, []);

  const [chipData, setChipData] = useState([
    {key: 0, label: 'Alexandr Luchin'},
  ]);

  const handleDelete = (chipToDelete) => () => setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));

  const handleClearAll = () => {
    setChipData([])
  }

  const columns=[
    {
      key: "driver",
      title: "Driver",
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: (driver) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      key: "overall",
      title: "Overall",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: overall => <div className={classes.textEmail}>{overall}</div>
    },
    {
      key: "cruisecontrol",
      title: "Cruise Control",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: cruisecontrol => <div className={classes.textEmail}>{cruisecontrol}</div>
    },
    {
      key: "coasting",
      title: "Coasting (Any Gear)",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: coasting => <div className={classes.textEmail}>{coasting}</div>
    },
    {
      key: "hightorque",
      title: "High Torque",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: hightorque => <div className={classes.textEmail}>{hightorque}</div>
    },
    {
      key: "idling",
      title: "Idling",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: idling => <div className={classes.textEmail}>{idling}</div>
    },
    {
      key: "anticipation",
      title: "Anticipation",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: anticipation => <div className={classes.textEmail}>{anticipation}</div>
    },
    {
      key: "greenband",
      title: "Green Band",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: greenband => <div className={classes.textEmail}>{greenband}</div>
    },
    {
      key: "overspeed",
      title: "Over Speed",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: overspeed => <div className={classes.textEmail}>{overspeed}</div>
    },
    {
      key: "drivingtime",
      title: "Driving Time",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: drivingtime => <div className={classes.textEmail}>{drivingtime}</div>
    },
    {
      key: "engineOnTime",
      title: "Engine On Time",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: engineOnTime => <div className={classes.textEmail}>{engineOnTime}</div>
    },
  ]

  return (
    <GridContainer className="developer-metric-wrapper">
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Drivers", "Vehicle"]} />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem> 
              </GridContainer>
            <Card testimonial>
              <CardBody className="body">
              <Grid container className={classes.gridTitle}> 
                <Grid item xs={12} sm={12} md={4}>
                          <Grid container className={classes.headContainer}>
                            <Grid item xl={2}
                                  className={classes.userRolesTitle}> {chipData.length} selected
                              for </Grid>
                            <Grid item xl={10} className={classes.chipSelected}>
                              {chipData.map(data => (
                                <Chip
                                  deleteIcon={<CloseIcon/>}
                                  label={data.label}
                                  onDelete={handleDelete(data)}
                                  className={classes.chips}
                                />
                              ))}
                              {chipData.length > 0 ?
                                (
                                  <Button onClick={handleClearAll}
                                          className={classes.clearAll}>
                                    Clear All
                                  </Button>
                                ) : ""}
                            </Grid>
                          </Grid>
                        </Grid>                   
                  <Grid xs={12} sm={12} md={8} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search driver" showFilter showColumn/>
                  </Grid>
                </Grid>
                <GridContainer spacing={2} alignItems="stretch">
                  <GridItem className={classes.bigCardGridItem} xs={3}>
                    <Card className={classes.bigCard}>
                      <CardBody>
                      <GridContainer className={classes.titleContainer}>
                      <Grid className={classes.title}>Summary</Grid>
                      <Button
                      round
                      className="btn-round-gray"
                      >
                       Dec 28 - Jan 27
                      </Button>
                      </GridContainer>
                        <GridContainer justify="space-between" className={classes.colorBlue}>
                          <GridItem>Progress</GridItem>
                          <GridItem className={classes.boldBlueLeft}>50%</GridItem>
                        </GridContainer>
                        <div className="mt-2 mb-4">
                          <BorderLinearProgress variant="determinate" value={50} />
                        </div>
                        <div className={"py-2 " + classes.fontSize16}>
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Greenband</GridItem>
                            <GridItem className={classes.boldBlueLeft}>100</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Anticipation</GridItem>
                            <GridItem className={classes.boldBlueLeft}>100</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>High Torque</GridItem>
                            <GridItem className={classes.boldBlueLeft}>100</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Idling</GridItem>
                            <GridItem className={classes.boldBlueLeft}>100</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Coasting (any gear)</GridItem>
                            <GridItem className={classes.boldBlueLeft}>100</GridItem>
                          </GridContainer>
                          <hr className="my-2" />
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Time Over Speed</GridItem>
                            <GridItem className={classes.boldBlueLeft}>59</GridItem>
                          </GridContainer>
                        </div>
                        <CardHeader
                        title={<>
                        <hr className="my-2" />
                        <GridContainer className={classes.headerContainer}>
                        <Grid xs={12} sm={6} md={6} style={{ borderRight: "1px solid #ECECF2" }}>
                         <Grid className={classes.cardHeaderTitle}>3h 20m</Grid>
                        <Grid className={classes.cardHeaderSubTitle}>Driving Time</Grid>
                        </Grid>
                        <Grid xs={12} sm={6} md={6}>
                        <Grid className={classes.cardHeaderTitle}>3h 20m</Grid>
                        <Grid className={classes.cardHeaderSubTitle}>Driving Time</Grid>
                        </Grid>
                        </GridContainer>
                        </>}
      />
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem className={classes.bigCardGridItem} xs={9}>
                      <ReportLineChart title={"Trends"}/>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <Table
                columns={columns}
                dataSource={props.data}
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  className: classes.tableRow,
                  onClick: props.onShowDetail,
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

const mapStateToProps = ({ fuelEnergy }) => {
  return {
    data: fuelEnergy.driverEfficiencyReport.data,
    page: fuelEnergy.driverEfficiencyReport.page,
    total: fuelEnergy.driverEfficiencyReport.total,
    pageSize: fuelEnergy.driverEfficiencyReport.pageSize,
  };
};

const mapDispatchToProps = {
  getDriverEfficiencyReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverEfficiencyReport);
