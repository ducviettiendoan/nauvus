import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";


import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import EChart from "components/CustomLineChart/EChart";
import withStyles from "@material-ui/core/styles/withStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Tab, Tabs, Typography} from "@material-ui/core";
import Button from "../../../../../components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "../../../../../components/Icons/CloseIcon";
import SettingSearchBox from "../../../../../components/SearchBox/SettingSearchBox";
import FilterIcon from "../../../../../components/Icons/FilterIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import avatar from "../../../../../assets/img/faces/avatar.jpg";
import DotIcon from "../../../../../components/Icons/DotIcon";
import EditIcon from "../../../../../components/Icons/EditIcon";


const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  topButton: {
    background: "white!important",
    color: "#25345C"
  },
  topButtonDisabled: {
    background: "white!important",
    color: "#C4C4C4!important"
  },

  displayFlex: {
    display: "flex",
    justifyContent: "space-between"
  },
  colorBlue: {
    color: "#25345C"
  },
  colorGrey: {
    color: "#C4C4C4"
  },
  colorGreen: {
    color: "#27AE60"
  },
  colorRed: {
    color: "#E53935"
  },
  boldBlueLeft: {
    color: "#25345C",
    fontWeight: "700",
    textAlign: "left"
  },
  fontSize16: {
    fontSize: "1rem!important"
  },
  chartAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  textEnd: {
    textAlign: "right"
  },
  textStart: {
    textAlign: "left"
  },
  noPadding: {
    padding: "0!important",
    margin: "0!important"
  },
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important",
    height: "90%",
  },
  bigCardGridItem: {
    padding: "0 8px!important",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  headContainer: {
    display: "flex",
    alignItems: "center"
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
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub : {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
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
const mockData = {
  title: {
    text: "API Volume"
  },
  series: [
    {
      color: '#27AE60',
      name: 'Successes',
      data: [
        ["2021-3-17 11:59:00", 288],
        ["2021-3-18 11:59:00", 291],
        ["2021-3-18 14:59:00", 301],
        ["2021-3-19 11:59:00", 291],
        ["2021-3-20 11:59:00", 292],
        ["2021-3-21 11:59:00", 282],
        ["2021-3-22 11:59:00", 278],
        ["2021-3-23 11:59:00", 286],
        ["2021-3-24 11:59:00", 288],
        ["2021-3-25 11:59:00", 288]
      ]
    },
    {
      color: '#E53935',
      name: 'Errors',
      data: [
        ["2021-3-17 11:59:00", 1],
        ["2021-3-18 11:59:00", 1],
        ["2021-3-19 11:59:00", 1],
        ["2021-3-20 11:59:00", 1],
        ["2021-3-21 11:59:00", 1],
        ["2021-3-22 11:59:00", 1],
        ["2021-3-23 11:59:00", 1],
        ["2021-3-24 11:59:00", 1],
        ["2021-3-25 11:59:00", 1]
      ]
    }
  ],
}

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function DeveloperMetrics() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const tabs = [
    {
      id: 0,
      name: "API Traffic"
    },
    {
      id: 1,
      name: "Webhook Traffic"
    },
  ]

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'GBT'},
    {key: 1, label: '200'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const formatRequestTime = (cell, row) => {
    return <>
      <div className={ classes.textName }>{cell}</div>
    </>
  }

  const formatApiEndpoint = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatStatusCode = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatMethod = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatDuration = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatApiToken = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatReguestID = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const dumpData = [
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
    { requestTime: "49:30:00", apiEndpoint: 'Fleet/Vehicles', statusCode: '200', method: "GBT", duration: "0.153S", apiToken: "FleetMan", reguestID: "5ac4ed4d"},
  ];

  return (
    <GridContainer className="developer-metric-wrapper">
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={12} md={12} xl={12} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["API Traffic", "Webhook Traffic"]} tabValue={handleChangeTab}/>
              </GridItem>
            </GridContainer>
            <TabPanel value={value} index={0} className={classes.tableContainer}>
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
                            <BorderLinearProgress variant="determinate" value={99.99}/>
                          </div>
                          <div className={"py-2 " + classes.fontSize16}>
                            <GridContainer justify="space-between">
                              <GridItem className={classes.colorGrey}>Availability Rate</GridItem>
                              <GridItem className={classes.boldBlueLeft}>99.99%</GridItem>
                            </GridContainer>
                            <hr className="my-2"/>
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
                          <EChart data={mockData}/>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <GridContainer className={classes.headContainer}>
                        <GridItem xl={3} className={classes.userRolesTitle}>
                          {chipData.length} selected for
                        </GridItem>
                        <GridItem xl={8} className={classes.chipSelected}>
                          {
                            chipData.map(data => (
                              <Chip
                                deleteIcon={<CloseIcon/>}
                                label={data.label}
                                onDelete={handleDelete(data)}
                                className={classes.chip}
                              />
                            ))
                          }
                          {
                            chipData.length > 0
                              ?
                              (
                                <Button onClick={handleClearAll} className={classes.clearAll}>
                                  Clear All
                                </Button>
                              )
                              : ""
                          }
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                      <SettingSearchBox placeholder={"Search vehicle"}/>
                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                      >
                        <FilterIcon style={{marginTop: 10, marginLeft: 7, color: "#25345C"}}/>
                      </Button>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={dumpData}
                  keyField="_id"
                  columns={[
                    {
                      dataField: "requestTime",
                      text: "Request Time",
                      formatter: formatRequestTime
                    },
                    {
                      dataField: "apiEndpoint",
                      text: "Api Endpoint",
                      formatter: formatApiEndpoint
                    },
                    {
                      dataField: "statusCode",
                      text: "Status Code",
                      formatter: formatStatusCode
                    },
                    {
                      dataField: "method",
                      text: "Method",
                      formatter: formatMethod
                    },
                    {
                      dataField: "duration",
                      text: "Duration",
                      formatter: formatDuration
                    },
                    {
                      dataField: "apiToken",
                      text: "Api Token",
                      formatter: formatApiToken
                    },
                    {
                      dataField: "reguestID",
                      text: "Reguest ID",
                      formatter: formatReguestID
                    }
                  ]}
                >
                  {props => (
                    <div className="table table-settings">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}

                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Card testimonial>
                <CardBody>
                  <GridContainer>
                    No content
                  </GridContainer>
                </CardBody>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Card testimonial>
                <CardBody>
                  <GridContainer>
                    No content
                  </GridContainer>
                </CardBody>
              </Card>
            </TabPanel>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}
