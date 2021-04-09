import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
// @material-ui/icons
import ArrowBackIcon from "components/Icons/ArrowBackIcon";
// import Weekend from "@material-ui/icons/Weekend";
// core components
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer"
import GridItem from "components/Grid/GridItem"
import { connect } from "react-redux"
import { MoreHoriz } from "@material-ui/icons";
import Calendar from "components/Calendar/Calendar";
import DotIcon from "components/Icons/DotIcon";

import { getRecordData } from "reducers/setting-driver-record"
import { setOpenDrawer } from "reducers/overview"

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  tableContainer: {
    margin: "0px 16px 16px 16px !important"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
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
  chips: {
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
    padding: "20px",
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  dotIcon: {
    color: "#7CE7AC",
  },
  textTable: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  textStatus: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "25px 16px 0px 16px"
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
}))

function DriverRecord(props) {
  const classes = useStyles()

  useEffect(() => {
    props.setOpenDrawer(false)
    props.getRecordData()
  }, [])

  const [chipData, setChipData] = useState([
    { key: 0, label: 'App Login' },
    { key: 1, label: 'Status Change' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Activity',
      key: 'activity',
      onHeaderCell: { className: classes.onHeaderCell },
      render: activity => (
        <div className={classes.alignItemsCenter}>
          <div><DotIcon className={classes.dotIcon} /></div>
          <div className={classes.textTable}>{activity}</div>
        </div>
      ),
    },
    {
      title: 'At',
      key: 'at',
      onHeaderCell: { className: classes.onHeaderCell },
      render: at => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{at}</div>
        </div>
      ),
    },
    {
      title: 'Duration',
      key: 'duration',
      onHeaderCell: { className: classes.onHeaderCell },
      render: duration => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{duration}</div>
        </div>
      )
    },
    {
      title: 'Distance (Mi)',
      key: 'distance',
      onHeaderCell: { className: classes.onHeaderCell },
      render: distance => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{distance}</div>
        </div>
      )
    },
    {
      title: 'Location',
      key: 'location',
      onHeaderCell: { className: classes.onHeaderCell },
      render: location => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{location}</div>
        </div>
      )
    },
    {
      title: 'Notes',
      key: 'notes',
      onHeaderCell: { className: classes.onHeaderCell },
      render: notes => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{notes}</div>
        </div>
      )
    }
  ]

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.primaryHover);


  return (
    <GridContainer>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
          <Button
            startIcon={<ArrowBackIcon />}
            className="btn-round-white 2 w-84 h-41 mr-2"
            onClick={() => {
              props.history.push("/o/drivers")
            }}
          >
            Back
          </Button>
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
            onClick={handleOpenMore}
          >
            <MoreHoriz />
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
                      <MenuItem className={dropdownItem}> Upload CSV </MenuItem>
                      <MenuItem className={dropdownItem}> Download CSV </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sm={12} md={12} className={classes.tableContainer} >
        {props.data?.length > 0 && <Table
          renderTitle={
            <Grid container className={classes.gridTitle}>
              <Grid item xs={12} sm={12} md={6}>
                <Grid container className={classes.headContainer}>
                  <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                  <Grid item xl={10} className={classes.chipSelected}>
                    {chipData.map(data => (
                      <Chip
                        deleteIcon={<CloseIcon />}
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
                <ToolboxButton placeholder="Search activity" showFilter />
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
        />}
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = ({ driverRecord }) => {
  return {
    data: driverRecord.driverRecord.data,
    page: driverRecord.driverRecord.page,
    total: driverRecord.driverRecord.total,
    pageSize: driverRecord.driverRecord.pageSize
  };
};

const mapDispatchToProps = {
  getRecordData,
  setOpenDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverRecord);