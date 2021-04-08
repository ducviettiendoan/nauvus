import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import {connect} from "react-redux";
import {IRootState} from "../../../../../../reducers";
import {getInvoice} from "reducers/setting-org";
import Table from "components/Table/TableV1";

const styles = {
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
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
  status: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "left",
    display: 'inline-block'
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: "#25345C"
  },
  tableTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#25345C",
    display: "flex",
    alignItems: "center",
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
  gridTitle: {
    padding: "20px",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },

};

const useStyles = makeStyles(styles);

export function Invoice(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getInvoice();
  }, []);

  const onPageChange = (page, pageSize) => {
    props.getInvoice({ page, pageSize });
  }
  const onShowSizeChange = (page, pageSize) => {
    props.getInvoice({ page, pageSize });
  }

  const columns = [
    {
      title: 'Due Date',
      key: 'dueDate',
      onHeaderCell: { className: classes.onHeaderCell },
      render: dueDate => (
          <div className={classes.textSub}>{dueDate}</div>
      ),
    },
    {
      title: 'PO',
      key: 'po',
      onHeaderCell: { className: classes.onHeaderCell },
      render: po => (
          <div className={classes.textSub}>{po}</div>
      )
    },
    {
      title: 'Invoice',
      key: 'invoice',
      onHeaderCell: { className: classes.onHeaderCell },
      render: invoice => (
          <div className={classes.textSub}>{invoice}</div>
      )
    },
    {
      title: 'Amount',
      key: 'amount',
      onHeaderCell: { className: classes.onHeaderCell },
      render: amount => (
          <div className={classes.textSub}>{amount}</div>
      )
    },
    {
      title: 'Remaining Balance',
      key: 'remainingBalance',
      onHeaderCell: { className: classes.onHeaderCell },
      render: remainingBalance => (
          <div className={classes.textSub}>{remainingBalance}</div>
      )
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: { className: classes.onHeaderCell },
      render: status => (
          <div className={classes.textStatus}>{status}</div>
      )
    },
  ];
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Table
              renderTitle={
                <GridContainer justify="space-between" className={classes.gridTitle}>
                  <GridItem className={classes.tableTitle}>
                    {props.total} Invoices
                  </GridItem>
                  <GridItem className={classes.headLeft}>
                    <ToolboxButton placeholder="Search Invoice"/>
                  </GridItem>
                </GridContainer>
              }
              pagination={{
                total: props.total,
                current: props.page,
                pageSize: props.pageSize,
                onChange: onPageChange,
                onShowSizeChange: onShowSizeChange
              }}
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{ className: classes.onHeaderRow }}
              onBodyRow={{ className: classes.tableRow }}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingOrg}: IRootState) => ({
    data: settingOrg.invoices.data,
    page: settingOrg.invoices.page,
    total: settingOrg.invoices.total,
    pageSize: settingOrg.invoices.pageSize
  }),
  {
    getInvoice
  }
)(Invoice);