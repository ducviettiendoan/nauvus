import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

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
    marginTop: '16px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '7px',
    marginBottom: '8px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#FFFFFF",
    background: "rgba(229,57,53,0.85)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 87,
    height: 41
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
  status: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "left",
    display: 'inline-block'
  },
};

const dumpDataInvoice = [
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },
  {
    dueDate: '02/03/2021',
    po: "Signed Agreement",
    invoice: '30510326',
    amount: "$627.12",
    remainingBalance: "$14.05",
    status: "Overdue"
  },

];

const useStyles = makeStyles(styles);

export default function Invoice() {
  const classes = useStyles();

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
          <Card testimonial>
            <CardBody>
              <GridContainer className={classes.invoiceHeader}>
                <GridItem xs={3} sm={3} md={3} className={classes.invoiceTitle}>
                  21 Invoices
                </GridItem>
                <GridItem xs={9} sm={9} md={9} className={classes.invoiceButton}>
                  <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                    <SettingSearchBox placeholder={"Search contacts"}/>
                  </GridItem>
                </GridItem>
              </GridContainer>
            </CardBody>
            <ToolkitProvider
              data={dumpDataInvoice}
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
          <GenPaginationV1 total={29} page={1} size={10}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
