import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import { MoreHoriz } from "@material-ui/icons";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";

import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import CopyIcon from "components/Icons/CopyIcon";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { pagination } from 'utils/common-utils';
import { Row } from "reactstrap";
import Paging from "components/Pagination/Paging";
import Pagination from "components/Pagination/Pagination";
import PaginationV2 from "components/Pagination/PaginationV2";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import ArrowUpIcon from "components/Icons/ArrowUpIcon";

const styles = {
  cardTitle,
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
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
  },
  textName : {
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
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
  { name: 'Esther Howard', phone: "(347) 555-0133", email: 'debra.holt@example.com'},
];

const useStyles = makeStyles(styles);

export default function AlertContacts(props) {
  const classes = useStyles();

  const formatName = (cell, row) => {
    return <>
      <div className={ classes.textName }>{cell}</div>
    </>
  }

  const formatPhone = (cell, row) => {
    return <>
      <div className={ classes.textSub }>{cell}</div>
    </>
  }

  const formatEmail = (cell, row) => {
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
                      Alert Contacts List
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <Button
                        round
                        className="btn-round-active mr-2"
                        startIcon={<AddOutlined />}
                      >
                        Add contact
                      </Button>
                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                      >
                        <MoreHoriz />
                      </Button>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                      <SettingSearchBox placeholder={"Search contacts"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <div>
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
                          dataField: "phone",
                          text: "Phone",
                          formatter: formatPhone
                        },
                        {
                          dataField: "email",
                          text: "Email",
                          formatter: formatEmail
                        },
                        {
                            dataField: "action",
                            text: "",
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
                </div>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
