import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import CloseIcon from "components/Icons/CloseIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

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
    text: "Webhook Volume"
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

export default function WebhookTraffic(props) {
  const classes = useStyles();

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
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatPayloadType = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatStatusCode = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDuration = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatWebhookName = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatRequestID = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const dumpData = [
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
    {
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    },
  ];

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      props.onShowDetail();
    }
  };

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
                          <BorderLinearProgress variant="determinate" value={99.99}/>
                        </div>
                        <div className={"py-2 " + classes.fontSize16}>
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Success Rate</GridItem>
                            <GridItem className={classes.boldBlueLeft}>0.00%</GridItem>
                          </GridContainer>
                          <hr className="my-2"/>
                          <GridContainer justify="space-between">
                            <GridItem className={classes.colorGrey}>Total Traffic</GridItem>
                            <GridItem className={classes.boldBlueLeft}>1</GridItem>
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
                      <GridItem xl={2} className={classes.userRolesTitle}>
                        {chipData.length} selected for
                      </GridItem>
                      <GridItem xl={10} className={classes.chipSelected}>
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
                  <GridItem xs={12} sm={12} md={6}>
                    <ToolboxButton placeholder={"Search vehicle"} showFilter/>
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
                    dataField: "payloadType",
                    text: "Payload Type",
                    formatter: formatPayloadType
                  },
                  {
                    dataField: "statusCode",
                    text: "Status Code",
                    formatter: formatStatusCode
                  },
                  {
                    dataField: "duration",
                    text: "Duration",
                    formatter: formatDuration
                  },
                  {
                    dataField: "webhookName",
                    text: "WebhookName",
                    formatter: formatWebhookName
                  },
                  {
                    dataField: "requestID",
                    text: "Request ID",
                    formatter: formatRequestID
                  }
                ]}
              >
                {props => (
                  <div className="table table-settings">
                    <BootstrapTable
                      {...props.baseProps}
                      bootstrap4={true}
                      bordered={false}
                      rowEvents={rowEvents}
                    />
                  </div>
                )}
              </ToolkitProvider>
            </Card>
          </GridItem>
        </GridContainer>
      </GridItem>
      <GridItem>
      </GridItem>
    </GridContainer>
  );
}
