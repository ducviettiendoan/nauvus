import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import DotIcon from "components/Icons/DotIcon.jsx";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import CopyIcon from "components/Icons/CopyIcon";
import Link from "@material-ui/core/Link";

const styles = {
  webhookHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  developerGuideHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },
  webhookTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
  },
  webhookBtn: {
    textAlign: "right",
  },
  webhookGuide: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    marginBottom: "10px",
    color: "#25345C"
  },
  webhookSubGuide: {
    fontWeight: 400,
    fontSize: 16,
    textAlign: "left",
    marginBottom: "5px",
    color: "#25345C"
  },
  webhookIPList: {
    margin: "10px",
  },
  webhookIP: {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left",
    marginTop: 15,
    color: "#25345C"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '24px',
    marginTop: '25px'
  },
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '16px',
    lineHeight: '24px',
    margin: '16px',
    padding: "12px 14px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 71,
    height: '41px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  actionIcon: {
    marginTop: "10px"
  },
  ipText: {
    paddingBottom: "8px",
  },
  guideText: {
    paddingBottom: "8px",
    cursor: "pointer",
    color: "#0d6ede"
  },
  dotIcon: {
    fontSize: "15px"
  }
};

const dumpData = [
  {
    name: 'Webhook',
    url: 'https://example-webhook.com/',
    secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
    configAlert: "Stable",
  },
  {
    name: 'Webhook',
    url: 'https://example-webhook.com/',
    secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
    configAlert: "Stable",
  },
  {
    name: 'Webhook',
    url: 'https://example-webhook.com/',
    secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
    configAlert: "Stable",
  },
  {
    name: 'Webhook',
    url: 'https://example-webhook.com/',
    secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
    configAlert: "Stable",
  },
  {
    name: 'Webhook',
    url: 'https://example-webhook.com/',
    secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
    configAlert: "Stable",
  },
];


const useStyles = makeStyles(styles);

export default function Webhooks() {
  const classes = useStyles();

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatUrls = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatKey = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatConfigAlert = (cell, row) => {
    return <>
      <div className={classes.textStatus}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionIcon}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <CopyIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
      </div>
    )
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.webhookHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.webhookTitle}>
                  5 Webhooks
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.webhookBtn}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                  >
                    Add Webhook
                  </Button>
                </GridItem>
              </GridContainer>
              <Card testimonial>
                <ToolkitProvider
                  data={dumpData}
                  keyField="_id"
                  columns={[
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "url",
                      text: "URL",
                      formatter: formatUrls
                    },
                    {
                      dataField: "secretKey",
                      text: "Secret Key",
                      formatter: formatKey
                    },
                    {
                      dataField: "configAlert",
                      text: "Configured Alerts",
                      formatter: formatConfigAlert
                    },
                    {
                      dataField: "action",
                      text: "Actions",
                      formatter: addActionButton
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
                <CardBody style={{marginTop: '-40px'}}>
                  <GridContainer className={classes.webhookHeader}>
                    <GridItem className={classes.webhookGuide}>
                      Static Webhook IP addresses
                    </GridItem>
                    <GridItem className={classes.webhookSubGuide}>
                      Nauvus will post to your webhook URL using one of the following IP addresses. We strongly
                      encourage you to verify all signatures of incoming webhooks, but if you would also like to
                      restrict updates by IP address, then please consult the list below. This list is subject to
                      change, so please check back frequently.
                    </GridItem>
                    <GridContainer className={classes.webhookIPList}>
                      {/*Hard code ip data*/}
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <div className={classes.ipText}>35.166.166.111</div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <div className={classes.ipText}>34.209.175.36</div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <div className={classes.ipText}>52.32.199.170</div>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <div className={classes.ipText}>54.149.162.56</div>
                      </GridItem>
                    </GridContainer>
                  </GridContainer>
                  <GridContainer className={classes.developerGuideHeader}>
                    <GridItem className={classes.webhookGuide}>
                      Developer Guides
                    </GridItem>
                    <GridContainer className={classes.webhookIPList}>
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <Link className={classes.guideText}>Webhook Guide</Link>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                        <DotIcon className={classes.dotIcon}/>
                        <Link className={classes.guideText}>Webhook Reference</Link>
                      </GridItem>
                    </GridContainer>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
