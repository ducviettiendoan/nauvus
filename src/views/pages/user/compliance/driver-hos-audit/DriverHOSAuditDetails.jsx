import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {connect} from 'react-redux';
import {getHOSAuditReport} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import Avatar from "@material-ui/core/Avatar";
import Initials from "components/Initials/Initials";

const useStyles = makeStyles((theme) => ({
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400
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
  greenAvatar: {
    background: "#27AE60 !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
}));



export function DriverHOSAuditDetails(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getHOSAuditReport();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Edit Type',
      key: 'editType',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: editType => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{editType}</div>
        </div>
      ),
    },
    {
      title: 'Updated At',
      key: 'updatedAt',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: updatedAt => <div className={classes.textEmail}>{updatedAt}</div>
    },
    {
      title: 'Updated By',
      key: 'updatedBy',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: updatedBy => <div className={classes.textEmail}>{updatedBy}</div>
    },
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: vehicle => <div className={classes.textEmail}>{vehicle}</div>
    },
    {
      title: 'Duty Status',
      key: 'status',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: status =>
        <div className={classes.alignItemsCenter}>
          <Initials str={status} size="36px"/>
          <div className={classes.textName}>{status}</div>
        </div>
    },
    {
      title: 'At',
      key: 'at',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: at => <div className={classes.textEmail}>{at}</div>
    },
    {
      title: 'Until',
      key: 'until',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: until => <div className={classes.textEmail}>{until}</div>
    },
    {
      title: 'Action',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: action => <div className={classes.textEmail}>{action}</div>
    },
    {
      title: 'Mobile Device',
      key: 'mobileDevice',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: mobileDevice => <div className={classes.textEmail}>{mobileDevice}</div>
    },
  ]

  const onShowSizeChange = (page, pageSize) => {
    props.getHOSAuditReport({ page, pageSize });
  }

  const onPageChange = (page, pageSize) => {
    props.getHOSAuditReport({ page, pageSize });
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  148 Logs
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                      <Grid item xl={10} className={classes.chipSelected}>
                        {chipData.map(data => (
                          <Chip
                            deleteIcon={<CloseIcon/>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                            className={classes.chips}
                          />
                        ))}
                        {chipData.length > 0 ?
                          (
                            <Button onClick={handleClearAll} className={classes.clearAll}>
                              Clear All
                            </Button>
                          ) : ""}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search driver" showFilter showColumn/>
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

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.HOSAuditReport.data,
    page: compliance.HOSAuditReport.page,
    total: compliance.HOSAuditReport.total,
    pageSize: compliance.HOSAuditReport.pageSize
  };
};

const mapDispatchToProps = {
  getHOSAuditReport
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverHOSAuditDetails);