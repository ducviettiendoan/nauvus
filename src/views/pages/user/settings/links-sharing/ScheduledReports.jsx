import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {connect} from "react-redux";
import {IRootState} from "../../../../../reducers";
import {getAlertContact, getScheduleReport} from "../../../../../reducers/setting-link-sharing";
import {AlertContacts} from "./AlertContacts";
const styles = {
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: '2px'
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
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
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  }
};

const useStyles = makeStyles(styles);

export function ScheduledReports(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getScheduleReport();
  }, []);

  const formatName = (cell, row) => {
    return <>
      <div className={ classes.textName }>{cell}</div>
    </>
  }

  const formatRepeat = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatSendAt = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatRecipients = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatTarget = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatCreatedBy = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={ classes.iconButton } style={{color:"#ffffff", width: '22px', height: '22px'}} />
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={ classes.iconButton } style={{color:"#C4C4C4", width: '24px', height: '24px'}} />
        </Button>
      </>
    )
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>

              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  Schedule Reports List
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined />}
                  >
                    Add Schedule Reports
                  </Button>
                </GridItem>
              </GridContainer>
              <Card>
                <CardBody style={{ height: '74px' }}>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                      2 reports
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <ToolboxButton placeholder={"Search scheduled reports"} />
                    </GridItem>
                  </GridContainer>

                </CardBody>
                <ToolkitProvider
                  data={ props.data }
                  columns={[
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "repeat",
                      text: "Repeat",
                      formatter: formatRepeat
                    },
                    {
                      dataField: "sendAt",
                      text: "Send At",
                      formatter: formatSendAt
                    },
                    {
                      dataField: "recipients",
                      text: "Recipients",
                      formatter: formatRecipients
                    },
                    {
                      dataField: "target",
                      text: "Target",
                      formatter: formatTarget
                    },
                    {
                      dataField: "createdBy",
                      text: "Created By",
                      formatter: formatCreatedBy
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
                        keyField="id"
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
              <GenPaginationV1 total={29} page={1} size={10} />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingLinkSharing}: IRootState) => ({
    data: settingLinkSharing.scheduleReports
  }),
  {
    getScheduleReport
  }
)(ScheduledReports);
