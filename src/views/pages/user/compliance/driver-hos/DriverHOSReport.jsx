import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import LegendIcon from "components/Icons/LegendIcon";
import CustomSelect from "components/CustomSelect/CustomSelect"
import { getReportData, getDutyStatusData } from "reducers/compliance"
import { connect } from 'react-redux';
import Table from "components/Table/TableV1";
import ExpandedRow from "../../overview/components/ExpandedRow"
import Avatar from '@material-ui/core/Avatar';
import { MoreHoriz } from "@material-ui/icons";
// @material-ui/icons
// core components
const styles = {
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
  selectForm: {
    minWidth: "150px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0px 0px 0px 0px !important",
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 8,
  },
  expandButton: {
    marginRight: 8
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  details: {
    display: "flex",
    alignItems: "center",
    textAlign: "left"
  },
  legendIcon: {
    color: "#E53935"
  },
  textDetails: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginLeft: '8px',
    color: '#25345C',
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  greenAvatar: {
    background: "#27AE60 !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "25px 0px 26px 0px"
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
    display: "flex",
    alignItems: "center"
  },
  topHeaderButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
};

const useStyles = makeStyles(styles);

function DriverHOSReport(props) {
  const classes = useStyles();

  // table data
  useEffect(() => {
    props.getReportData()
    props.getDutyStatusData()
  }, [])

  const dutyColumns = [
    {
      title: 'Duty Status',
      key: 'dutyStatus',
      onHeaderCell: { className: classes.onHeaderCell },
      render: dutyStatus => (
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.greenAvatar}>D</Avatar>
          <div className={classes.textName}>{dutyStatus}</div>
        </div>
      ),
    },
    {
      title: 'Time in current status',
      key: 'currentTime',
      onHeaderCell: { className: classes.onHeaderCell },
      render: currentTime => <div className={classes.textSub}>{currentTime}</div>
    },
    {
      title: 'Vehicle name',
      key: 'vehicleName',
      onHeaderCell: { className: classes.onHeaderCell },
      render: vehicleName => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{vehicleName}</div>
        </div>
      )
    },
    {
      title: 'Time until break',
      key: 'timeUntilBreak',
      onHeaderCell: { className: classes.onHeaderCell },
      render: timeUntilBreak => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{timeUntilBreak}</div>
        </div>
      )
    },
    {
      title: 'Drive remaining',
      key: 'driveRemaining',
      onHeaderCell: { className: classes.onHeaderCell },
      render: driveRemaining => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{driveRemaining}</div>
        </div>
      )
    },
    {
      title: 'Cycle Remaining',
      key: 'cycleRemaining',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cycleRemaining =>
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{cycleRemaining}</div>
        </div>
    },
    {
      title: 'Cycle Tomorrow',
      key: 'cycleTomorrow',
      showExpandable: true,
      onHeaderCell: { className: classes.onHeaderCell },
      render: cycleTomorrow => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{cycleTomorrow}</div>
        </div>
      )
    }
  ]

  const reportColumns = [
    {
      title: 'Shift',
      key: 'shift',
      onHeaderCell: { className: classes.onHeaderCell },
      render: shift => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{shift}</div>
        </div>
      ),
    },
    {
      title: 'Driving',
      key: 'driving',
      onHeaderCell: { className: classes.onHeaderCell },
      render: driving => <div className={classes.alignItemsCenter}>
        <div className={classes.textSub}>{driving}</div>
      </div>
    },
    {
      title: 'In Violatiom',
      key: 'inViolation',
      onHeaderCell: { className: classes.onHeaderCell },
      render: inViolation => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{inViolation}</div>
        </div>
      )
    },
    {
      title: 'From',
      key: 'from',
      onHeaderCell: { className: classes.onHeaderCell },
      render: from => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{from}</div>
        </div>
      )
    },
    {
      title: 'To',
      key: 'to',
      onHeaderCell: { className: classes.onHeaderCell },
      render: to => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{to}</div>
        </div>
      )
    },
    {
      title: 'Details',
      key: 'details',
      onHeaderCell: { className: classes.onHeaderCell },
      render: details => <div className={classes.details}>
        <LegendIcon className={classes.legendIcon} />
        <div className={classes.textDetails}>{details}</div>
      </div>

    },
    {
      title: 'Date (EDT)',
      key: 'date',
      showExpandable: true,
      onHeaderCell: { className: classes.onHeaderCell },
      render: date => (
        <div className={classes.details}>
          <div className={classes.textSub}>{date}</div>
        </div>
      )
    }
  ]

  const listSelectValue = ["Email to custom recipient", "FMCSA Audit Transfer", "Email to FMCSA"]
  const [selectValue, setSelectValue] = useState("none");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value)
  }


  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getReportData({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getReportData({ page, pageSize });
    console.log(page, pageSize)
  }

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
          55 Activity
        </GridItem>
        <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Calendar />
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

      <Table
        columns={dutyColumns}
        dataSource={props.dutyData}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />

      <Table
        renderTitle={
          <div className={classes.gridTitle}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridContainer className={classes.headContainer}>
                  <GridItem>
                    <Calendar />
                  </GridItem>
                </GridContainer>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                <FormControl variant="outlined" className={classes.selectForm}>
                  <CustomSelect
                    selectProps={{
                      disableUnderline: true,
                    }}
                    listValues={listSelectValue}
                    selectValue={selectValue}
                    onChange={handleSelectChange}
                    placeholder={"Transfer Logs"}
                    customStyle={"logsSelect"}
                  />
                </FormControl>
                <Button
                  round
                  className={`btn-round-white w-101 h-41 ${classes.expandButton}`}
                >
                  Expand All </Button>
                <Button
                  round
                  className="btn-round-white w-101 h-41"
                > Collapse All </Button>
              </GridItem>
            </GridContainer>
          </div>
        }
        pagination={{
          total: props.reportTotal,
          current: props.reportPage,
          pageSize: props.reportPageSize,
          onChange: onPageChange,
          onShowSizeChange: onShowSizeChange
        }}
        columns={reportColumns}
        dataSource={props.reportData}
        // rowSelection
        expandedRowRender={(record) => {
          return (
            <div>
              <ExpandedRow details={record} />
            </div>
          )
        }}
        onHeaderRow={{
          className: classes.onHeaderRow
        }}
        onBodyRow={{
          className: classes.tableRow
        }}
      />
    </div>
  );
}

const mapStateToProps = ({ compliance }) => {
  return {
    reportData: compliance.reportData.data,
    reportPage: compliance.reportData.page,
    reportTotal: compliance.reportData.total,
    reportPageSize: compliance.reportData.pageSize,

    dutyData: compliance.dutyStatusData.data,
    dutyPage: compliance.dutyStatusData.page,
    dutyTotal: compliance.dutyStatusData.total,
    dutyPageSize: compliance.dutyStatusData.pageSize,
  };
};

const mapDispatchToProps = {
  getReportData,
  getDutyStatusData
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverHOSReport);