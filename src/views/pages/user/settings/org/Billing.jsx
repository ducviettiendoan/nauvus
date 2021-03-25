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

import SettingSearchBox from "components/SearchBox/SettingSearchBox";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Row } from "reactstrap";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import avatar from "assets/img/faces/avatar.jpg";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

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
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '12px',
    marginBottom: '14px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#FFFFFF",
    background: "rgba(229,57,53,0.85)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 87
  },
  invoiceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invoiceTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  invoiceButton: {
    textAlign: "right",
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
  },
  tabStyles: {
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tabItemStyles: {
    backgroundColor: "#FFFFFF",
    position: 'relative',
    display: 'block',
    border: '1px inner',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '12px 22px 12px 22px',
    color: '#555555',
    height: 'auto',
    marginRight: '8px',
    float: 'none',
    textTransform: 'none !important',
    minWidth: 'auto !important',
    minHeight: '41px !important',
    fontWeight: 700,
    fontSize: 14,
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  avatarImage : {
    width : 40,
    height: 40,
    borderRadius: "50%",
    
  },
  status: {
    textAlign: "left",
    padding: '0 !important'
  },
  avatar: {
    padding: '0 !important',
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const dumpData = [
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },
  { dueDate: '02/03/2021', po: "Signed Agreement", invoice: '30510326', amount: "$627.12", remainingBalance: "$14.05", status: "Overdue" },

];

const useStyles = makeStyles(styles);

export default function Billing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const formatDueDate = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatPO = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatInvoice = (cell, row) => {
    return <>

      <div className={classes.textSub}>{cell}</div>

    </>
  }

  const formatAmount = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatRemainingBalance = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatStatus = (cell, row) => {
    return <>
      <div className={classes.textStatus}>{cell}</div>
    </>
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={12} md={12} className={classes.topHeaderTitle}>
              <Tabs
                value={value}
                onChange={handleChange}
                className={classes.tabStyles}
                indicatorColor=""
                position="static"
                variant="scrollable"
              >
                <Tab
                  className={classes.tabItemStyles}
                  label="Summary" {...a11yProps(0)}
                >
                  Summary
                    </Tab>
                <Tab
                  className={classes.tabItemStyles}
                  label="Invoice" {...a11yProps(1)}
                >
                  Invoice
                </Tab>
              </Tabs>
              

                
                <TabPanel value={value} index={1} className={classes.tableContainer} >
                <Card testimonial>
                <CardBody>
                  <GridContainer className={classes.invoiceHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.invoiceTitle}>
                      21 Assets
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.invoiceButton}>
                      <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                        <SettingSearchBox placeholder={"Search contacts"} />
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={dumpData}
                  keyField="_id"
                  columns={[
                    {
                      dataField: "dueDate",
                      text: "Due Date",
                      formatter: formatDueDate
                    },
                    {
                      dataField: "po",
                      text: "PO",
                      formatter: formatPO
                    },
                    {
                      dataField: "invoice",
                      text: "Invoice",
                      formatter: formatInvoice
                    },
                    {
                      dataField: "amount",
                      text: "Amount",
                      formatter: formatAmount
                    },
                    {
                      dataField: "remainingBalance",
                      text: "Remaining Balance",
                      formatter: formatRemainingBalance
                    },
                    {
                      dataField: "status",
                      text: "Status",
                      formatter: formatStatus
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
                <GenPaginationV1 total={29} page={1} size={10} />
                </TabPanel>

                <TabPanel value={value} index={0} className={classes.tableContainer} >
                  <Card>
                  <GridContainer className={classes.userHeader} xs={6} sm={6} md={6}>
                    <GridItem xs={2} sm={2} md={2} className={classes.avatar}>
                    <div><img src={avatar} alt="user-avatar" className={classes.avatarImage}/></div>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} className={classes.status}>
                    <GridContainer xs={12} sm={12} md={12}>
                      <GridItem xs={12} sm={12} md={12} className={classes.status}>
                      Account status, Johnny Bowers
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12} className={classes.status}>
                      Your account is current
                      </GridItem>
                    </GridContainer>
                    </GridItem>
                    
                    <GridItem className={classes.helpButton}> 

                    </GridItem>
                  </GridContainer>
                    
                  </Card>
                </TabPanel>
              
              
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
