import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "../../../../../components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import SettingSearchBox from "../../../../../components/SearchBox/SettingSearchBox";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";

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
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
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
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
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
                      <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                        <SettingSearchBox placeholder={"Search events"} />
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
                        <Row className="justify-content-center">
                          {/* <PaginationV2
                                        pages={[
                                          { text: <ArrowDownIcon/>, arrow : true,disabled : true },
                                          { text: <ArrowLeftIcon/>, arrow : true,disabled : true },
                                          { active: true, text: 1 },
                                          { text: 2 },
                                          { text: 3 },
                                          { text: 4 },
                                          { text: 5 },
                                          { text: <ArrowRightIcon/>, arrow : true },
                                          { text: <ArrowUpIcon/>, arrow : true },
                                        ]}
                                      /> */}
                        </Row>
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
