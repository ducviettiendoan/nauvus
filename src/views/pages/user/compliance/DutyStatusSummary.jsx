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
import {getDutyStatusSummaryData} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "../../../../components/Calendar/Calendar";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import LiveIconWhite from "../../../../components/Icons/LiveIconWhite";

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
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px",

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
  headerTitle: {
    fontWeight: 700,
    fontSize: "18px",
  }
}));

export function DutyStatusSummary(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getDutyStatusSummaryData();
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
  };

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);

  const columns = [
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: driver => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      title: 'Off Duty',
      key: 'offDuty',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: offDuty => <div className={classes.textName}>{offDuty}</div>
    },
    {
      title: 'Sleeper Berth',
      key: 'sleeperBerth',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: sleeperBerth => <div className={classes.textName}>{sleeperBerth}</div>
    },
    {
      title: 'Driving',
      key: 'driving',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: driving => <div className={classes.textName}>{driving}</div>
    },
    {
      title: 'On Duty',
      key: 'onDuty',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: onDuty => <div className={classes.textName}>{onDuty}</div>
    },
    {
      title: 'Yard Moveg',
      key: 'yardMoveg',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: yardMoveg => <div className={classes.textName}>{yardMoveg}</div>
    },
    {
      title: 'Personal Conveyanceg',
      key: 'personalConveyanceg',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: personalConveyanceg => <div className={classes.textName}>{personalConveyanceg}</div>
    },
  ]

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getDutyStatusData({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getDutyStatusData({page, pageSize});
    console.log(page, pageSize)
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <div className={classes.headerTitle}>Duty Status Summary Report</div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                    onClick={handleOpenMore}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                  <Popper
                    open={openMore}
                    anchorEl={anchorEl}
                    transition
                    disablePortal
                    placement="bottom-end"
                    className={classNames({
                      [classes.popperClose]: !anchorEl,
                      [classes.popperResponsive]: true,
                      [classes.popperNav]: true
                    })}
                  >
                    {({ TransitionProps }) => (
                      <Grow
                        {...TransitionProps}
                        id="profile-menu-list"
                        style={{ transformOrigin: "0 0 0" }}
                      >
                        <Paper className={classes.dropdown}>
                          <ClickAwayListener onClickAway={handleCloseMore}>
                            <MenuList role="menu">
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Schedule Emailed Reports </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Download CSV </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore} > Print </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
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
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.dutyStatusSummary.data,
    page: compliance.dutyStatusSummary.page,
    total: compliance.dutyStatusSummary.total,
    pageSize: compliance.dutyStatusSummary.pageSize,
  };
};

const mapDispatchToProps = {
  getDutyStatusSummaryData
};

export default connect(mapStateToProps, mapDispatchToProps)(DutyStatusSummary);
