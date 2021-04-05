import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {IRootState} from 'reducers';
import {connect} from 'react-redux';
import {getHOSAuditTransfer} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";

const useStyles = makeStyles((theme) => ({
  chipOption: {
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
    fontWeight: 400,
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
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
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
  textRequestDate: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
  },
  textNormal: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400,
  },
  textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    paddingLeft: "0px !important",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "90px",
    height: "41px"
  },
}));

export function HOSAuditTransfer(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getHOSAuditTransfer();
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
      title: 'Requested At',
      key: 'requestedAt',
      onHeaderCell: {className: classes.onHeaderCell},
      render: requestedAt => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textRequestDate}>{requestedAt.date}</div>
          <div className={classes.textNormal}>{requestedAt.time}</div>
          <div className={classes.textNormal}>{requestedAt.service}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: status => <div className={classes.textStatus}>{status}</div>
    },
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: driver => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textNormal}>{driver.name}</div>
          <div className={classes.textNormal}>{driver.driverID}</div>
        </div>
      ),
    },
    {
      title: 'Date Requested',
      key: 'dateRequested',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: dateRequested => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textBold}>{dateRequested.date_1}</div>
          <div className={classes.textBold}>{dateRequested.date_2}</div>
        </div>
      ),
    },
    {
      title: 'Comment',
      key: 'comment',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: comment => <div className={classes.textNormal}>{comment}</div>
    },
    {
      title: 'Internal Tools',
      key: 'internalTools',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: tool => <div className={classes.textNormal}>{tool}</div>
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
                  135 Requests
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
            {props.data.length > 0 && <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.chipOption}> {chipData.length} selected for </Grid>
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
                    <ToolboxButton placeholder="Search request" showFilter showColumn/>
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
            }
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({compliance}: IRootState) => ({
    data: compliance.HOSAuditTransfer
  }),
  {
    getHOSAuditTransfer
  }
)(HOSAuditTransfer);
