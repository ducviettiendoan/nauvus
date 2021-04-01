import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  activityHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  activityTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  activityButton: {
    textAlign: "right",
  },
  textName: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    color: "#25345C",
    fontWeight: 400
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: 16,
    marginLeft: '24px',
    color: "#25345C",
    fontWeight: 400
  },
};

const dumpData = [
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },
  { logEvent: 'dolores.chambers@example.com', operation: "updated org id '74287':", date: 'March 17th, 12:16 am' },

];

const useStyles = makeStyles(styles);

export default function ActivityLog() {
  const classes = useStyles();

  const formatLogEvent = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatOperation = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
      <div className={classes.textSub}>changed MessagePushNotificationsEnabled from false to true.</div>
    </>
  }

  const formatDate = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>
                  <GridContainer className={classes.activityHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.activityTitle}>
                      120 events
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.activityButton}>
                      <GridItem xs={12} sm={12} md={12}>
                        <ToolboxButton placeholder={"Search events"} />
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <div>
                  <ToolkitProvider
                    data={ dumpData }
                    keyField="_id"
                    columns={[
                      {
                        dataField: "logEvent",
                        text: "Log Event",
                        formatter: formatLogEvent
                      },
                      {
                        dataField: "operation",
                        text: "Operation",
                        formatter: formatOperation
                      },
                      {
                        dataField: "date",
                        text: "Date",
                        formatter: formatDate
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
                </div>
              </Card>
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
