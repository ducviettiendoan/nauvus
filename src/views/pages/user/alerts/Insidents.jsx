import React from "react";
import { connect } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';

import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { getInsidents } from "reducers/alerts";

const useStyles = makeStyles((theme) => ({
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '24px',
    color: '#25345C'
  },
  textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
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
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  tableTitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
  },
  centerTitle: {
    display: "flex",
    alignItems: "center",
  },
  nearMeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "#fff",
    borderRadius: "50%",
    "&> svg": {
      fontSize: 16
    }
  },
  boxNearMeIcon: {
    display: "flex",
    justifyContent: "center",
  }
}));

export function Summary(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getInsidents();
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Cycle Tomorrow' },
    { key: 1, label: 'Cycle Remaining' },
  ]);

  const columns = [
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: cell => (
        <div className={classes.boxNearMeIcon}>
          <div
            className={classes.nearMeIcon}
            style={{
              background: cell ? "#E53935" : "#F4BE5E"
            }}
          >
            <NearMeOutlinedIcon />
          </div>
        </div>
      ),
    },
    {
      title: 'Alert ID',
      key: 'alertId',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: cell => <div className={classes.textName}>{cell}</div>
    },

    {
      title: 'Alert',
      key: 'alert',
      onHeaderCell: { className: classes.onHeaderCellNext }
    },

    {
      title: 'Source',
      key: 'source',
      onHeaderCell: { className: classes.onHeaderCellNext }
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: cell => (
        <div
          className={classes.textName}
          style={{ color: cell !== "Alerting" && "#B4B4B4" }}
        >
          {cell}
        </div>
      )
    },
    {
      title: 'Time',
      key: 'time',
      onHeaderCell: { className: classes.onHeaderCellNext }
    }
  ]

  const onPageChange = (page, pageSize) => {
    props.getInsidents({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getInsidents({ page, pageSize });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6} className={classes.centerTitle}>
                    <span className={classes.tableTitle}>148 drivers</span>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search driver" showFilter showColumn />
                  </Grid>
                </Grid>
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
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ alerts }) => {
  return {
    data: alerts.insidents.data,
    page: alerts.insidents.page,
    total: alerts.insidents.total,
    pageSize: alerts.insidents.pageSize
  };
};

const mapDispatchToProps = {
  getInsidents
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
