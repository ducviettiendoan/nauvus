import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableComponent from "components/Table/CustomTable"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";
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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  liveSharingButton: {
    textAlign: "right",
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
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  }
};

const dumpData = [
  { name: 'Driver Report', repeat: "Weekly", sendAt: 'Friday 12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
  { name: 'IFTA', repeat: "Monthly", sendAt: '12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
  { name: 'Driver Report', repeat: "Weekly", sendAt: 'Friday 12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
  { name: 'IFTA', repeat: "Monthly", sendAt: '12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
  { name: 'Driver Report', repeat: "Weekly", sendAt: 'Friday 12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
  { name: 'IFTA', repeat: "Monthly", sendAt: '12:00 PM EET', recipients: 2, target : 'Entire Group', createdBy : 'Tatle'},
];

const useStyles = makeStyles(styles);

export default function ScheduledReports() {
  const classes = useStyles();

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
              <Card testimonial>
                <CardBody>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                      Scheduled Reports  List
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <Button
                        round className="btn-round-active"
                        startIcon={<ControlPointIcon />}
                      >
                        Add a Scheduled Report
                      </Button>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                      <SettingSearchBox placeholder={"Search scheduled reports"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={ dumpData }
                  keyField="_id"
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
                        <GenPaginationV1 total={ 200 } page={ 1 } size={ 10 } />
                      </Row>
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
