import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import AddOutlined from "@material-ui/icons/AddOutlined";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import { connect } from "react-redux";
import { getScheduleReport } from "reducers/setting-link-sharing";
import Table from "components/Table/TableV1";

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
    marginTop: 10

  },
  liveSharingButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
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
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  actionIcon: {
    marginTop: "10px"
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  onHeaderCell: {
    fontWeight: "bold"
  },

  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  gridTitle: {
    padding: "20px"
  },
};

const useStyles = makeStyles(styles);

function ScheduleReports(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getScheduleReport();
  }, []);

  const onShowSizeChange = (page, pageSize) => {
    props.getScheduleReport({ page, pageSize });
    console.log(page, pageSize)
  }

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getScheduleReport({ page, pageSize });
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: name => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{name}</div>
        </div>
      ),
    },
    {
      title: 'Repeat',
      key: 'repeat',
      onHeaderCell: { className: classes.onHeaderCell },
      render: repeat => <div className={classes.textSub}>{repeat}</div>
    },
    {
      title: 'Send At',
      key: 'sendAt',
      onHeaderCell: { className: classes.onHeaderCell },
      render: sendAt => <div className={classes.textSub}>{sendAt}</div>
    },
    {
      title: 'Recipients',
      key: 'recipients',
      onHeaderCell: { className: classes.onHeaderCell },
      render: recipients => <div className={classes.textSub}>{recipients}</div>
    },
    {
      title: 'Target',
      key: 'target',
      onHeaderCell: { className: classes.onHeaderCell },
      render: target => <div className={classes.textSub}>{target}</div>
    },
    {
      title: 'Created By',
      key: 'createdBy',
      onHeaderCell: { className: classes.onHeaderCell },
      render: createdBy => <div className={classes.textSub}>{createdBy}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  Scheduled Reports  List
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined />}
                  >
                    Add a Scheduled Report
                  </Button>
                </GridItem>
              </GridContainer>
              <Table
                renderTitle={
                  <GridContainer justify="space-between" className={classes.gridTitle}>
                    <GridItem className={classes.liveSharingTitle}>
                      22 reports
                    </GridItem>
                    <GridItem className={classes.liveSharingButton}>
                      <ToolboxButton placeholder={"Search scheduled reports"} />
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
                onHeaderRow={{
                  className: classes.onHeaderRow
                }}
                onBodyRow={{
                  className: classes.tableRow
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ settingLinkSharing }) => {
  return {
    data: settingLinkSharing.scheduleReports.data,
    page: settingLinkSharing.scheduleReports.page,
    total: settingLinkSharing.scheduleReports.total,
    pageSize: settingLinkSharing.scheduleReports.pageSize
  };
};

const mapDispatchToProps = {
  getScheduleReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleReports);
