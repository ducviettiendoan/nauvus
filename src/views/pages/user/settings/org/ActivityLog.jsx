import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getActivityLogs} from "reducers/setting-org";
import Table from "components/Table/TableV1";

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
  gridTitle: {
    padding: "20px",
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: "#25345C"
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
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
  tableTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#25345C",
    display: "flex",
    alignItems: "center",
  }
};

const useStyles = makeStyles(styles);

export function ActivityLog(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getActivityLogs();
  }, []);

  const onPageChange = (page, pageSize) => {
    props.getActivityLogs({ page, pageSize });
  }
  const onShowSizeChange = (page, pageSize) => {
    props.getActivityLogs({ page, pageSize });
  }
  const columns = [
    {
      title: 'Log Event',
      key: 'logEvent',
      onHeaderCell: { className: classes.onHeaderCell },
      render: event => (
            <div className={classes.textName}>{event}</div>
      ),
    },
    {
      title: 'Operation',
      key: 'operation',
      onHeaderCell: { className: classes.onHeaderCell },
      render: operation => (
          <>
            <div className={classes.textName}>{`updated org id '${operation.id}': `}</div>
            <div className={classes.textName}>{operation.operation}</div>
          </>
      )
    },
    {
      title: 'Date',
      key: 'date',
      onHeaderCell: { className: classes.onHeaderCell },
      render: roles => (
          <div className={classes.textName}>{roles}</div>
      )
    },
  ];

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                  <Table
                      renderTitle={
                        <GridContainer justify="space-between" className={classes.gridTitle}>
                          <GridItem className={classes.tableTitle}>
                            {props.total} Events
                          </GridItem>
                          <GridItem className={classes.headLeft}>
                            <ToolboxButton placeholder="Search events"/>
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
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingOrg}: IRootState) => ({
    data: settingOrg.activityLogs.data,
    page: settingOrg.activityLogs.page,
    total: settingOrg.activityLogs.total,
    pageSize: settingOrg.activityLogs.pageSize
  }),
  {
    getActivityLogs
  }
)(ActivityLog);