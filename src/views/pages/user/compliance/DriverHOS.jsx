import React from "react";
import classNames from "classnames"
// @material-ui/core components
import Accordion from "components/Accordion/Accordion";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import { connect } from 'react-redux';
import { getDriverHOS } from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import CircleIcon from "components/Icons/CircleIcon";
import Avatar from '@material-ui/core/Avatar';

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";

import ArrowRightBlueIcon from "components/Icons/ArrowRightBlueIcon"

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
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
  clearButton: {
    textTransform: "none",
    color: "#8CA2EE",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 12,
    fontWeight: 700,
    padding: 0,
    margin: "0px !important",
    "&:hover": {
      color: "#25345C"
    },
    "&:focus": {
      color: "#8CA2EE"
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
    width: "53px",
    height: "41px"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  hosData: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  greenAvatar: {
    background: "#27AE60 !important",
    marginRight: 8,
    fontSize: 14,
    fontWeight: 700,
  },
  grayAvatar: {
    background: "#ECEEF0 !important",
    color: "#B4B4B4",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
  },
  popperHeaderContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 5px 20px 5px !important"
  },
  popperHeader: {
    color: "#25345C",
    fontSize: "24px",
    lineHeight: "29px",
    fontWeight: "bold",
  },
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "300px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  dropdownItemVehicle: {
    marginLeft: "8px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "10px",
    paddingLeft: "0px !important",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  // accordion style
  expansionClasses: {
    padding: "0px 15px 0px 8px !important",
    borderBottom: "0px !important",
    minHeight: "20px !important",
    background: "#FAFAFA",
    "&:hover": {
      background: "#FAFAFA",
    },
    "&:focus": {
      background: "#FAFAFA",
    }
  },
  expansionContentClasses: {
    margin: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important",
    background: "#FAFAFA",
  },
  expansionPanelClassesRounded: {
    background: "#FAFAFA",
    border: "1px solid #ECEEF0",
    boxShadow: "inherit",
    marginBottom: "8px !important",
  },
  // checkedbox accordion style
  itemContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px !important"
  },
  tagTitle: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px"
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export function DriverHOS(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getDriverHOS();
  }, []);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Cycle Tomorrow' },
    { key: 1, label: 'Cycle Remaining' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: driver => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      title: 'Duty Status',
      key: 'dutyStatus',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: dutyStatus =>
        <div className={classes.alignItemsCenter}>
          <Avatar className={classes.greenAvatar}>D</Avatar>
          <div className={classes.textName}>{dutyStatus}</div>
        </div>
    },
    {
      title: 'Time In Current Status',
      key: 'timeCurrentStatus',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: timeCurrentStatus => <div className={classes.textEmail}>{timeCurrentStatus}</div>
    },
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: vehicle => <div className={classes.textEmail}>{vehicle}</div>
    },
    {
      title: 'Time Until Break',
      key: 'timeUntilBreak',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: timeUntilBreak => <div className={classes.textEmail}>{timeUntilBreak}</div>
    },
    {
      title: 'Drive Remaining',
      key: 'driveRemaining',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: driveRemaining => <div className={classes.textEmail}>{driveRemaining}</div>
    },
    {
      title: 'Shift Remaining',
      key: 'shiftRemaining',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: shiftRemaining => <div className={classes.textEmail}>{shiftRemaining}</div>
    },
    {
      title: 'Cycle Remaining',
      key: 'cycleRemaining',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: cycleRemaining => <div className={classes.textEmail}>{cycleRemaining}</div>
    },
    {
      title: 'Cycle Tomorrow',
      key: 'cycleTomorrow',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: cycleTomorrow => <div className={classes.textEmail}>{cycleTomorrow}</div>
    },
    {
      title: 'Driving In Violation (Today)',
      key: 'drivingInVio',
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: drivingInVio => <div className={classes.textEmail}>{drivingInVio}</div>
    }
  ]

  const onPageChange = (page, pageSize) => {
    console.log(page, pageSize)
    props.getDriverHOS({ page, pageSize });
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getDriverHOS({ page, pageSize });
    console.log(page, pageSize)
  }

  const viewDetail = (id) => {
    props.history.push(`/u/compliance/driver-hos-report/${id}`)
  }

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const listTags = {
    tags: ["Room", "No road", "In City"],
    dutyStatus: ["Driving", "On Duty", "Off Duty", "Personal Conveyance", "Sleeper Berth", "Disconnected", "Yard Move"],
    violations: ["Currently in violations", "Nearing Violation"]
  }

  const PopperFilter = (props) => {
    const { listTags } = props
    // checked box in popper
    const [checked, setChecked] = React.useState({
      tags: [1],
      dutyStatus: [1],
      violations: [1]
    });
    const handleToggle = (value) => (event) => {
      const currentIndex = checked[event.target.name].indexOf(value);
      const newChecked = { ...checked };
      if (currentIndex === -1) {
        newChecked[event.target.name].push(value);
      } else {
        newChecked[event.target.name].splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const handleClearBox = (value) => () => {
      setChecked({
        ...checked,
        [value]: [1]
      })
    }

    return (
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
            <Paper className={classes.dropdown && classes.dropdownVehicle}>
              <ClickAwayListener onClickAway={handleCloseMore}>
                <MenuList role="menu">
                  <Grid className={classes.popperHeaderContainer}>
                    <Grid className={classes.popperHeader}>Filter Options</Grid>
                    <ArrowRightBlueIcon />
                  </Grid>
                  <Grid xs={12} sm={12} md={12} className={classes.popperInput}>
                    <ToolboxButton placeholder="Search tags" />
                  </Grid>

                  <Accordion collapses={
                    [
                      {
                        title: <Grid style={{ width: "140px", display: "flex", justifyContent: "space-between" }}>
                          <Grid className={classes.tagTitle}>Tags</Grid>
                          <Button className={classes.clearButton} onClick={handleClearBox("tags")}>
                            Clear
                          </Button>
                        </Grid>,
                        content:
                          <div className={classes.cardExpandContent}>
                            {listTags.tags.map((value) => {
                              return (
                                <MenuItem key={value} className={classes.itemContainer}>
                                  <div className={classes.checkboxContainer}>
                                    <div className={classes.dropdownItemVehicle}>
                                      <Checkbox
                                        name="tags"
                                        edge="end"
                                        onChange={handleToggle(value)}
                                        checked={checked["tags"].indexOf(value) !== -1}
                                        checkedIcon={<CheckSquareOutlined />}
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    </div>
                                    <div className={classes.dropdownItemVehicle}>
                                      {value}
                                    </div>
                                  </div>
                                  <Avatar className={classes.grayAvatar}>5</Avatar>
                                </MenuItem>
                              );
                            })}
                          </div>
                      },
                    ]
                  }
                    expansionSummaryClasses={{
                      root: classes.expansionClasses,
                      content: classes.expansionContentClasses
                    }}
                    expansionPanelClasses={{
                      root: classes.expansionPanelClasses,
                    }}
                    expansionPanelRounded={{
                      rounded: classes.expansionPanelClassesRounded,
                    }}
                  />

                  <Accordion collapses={
                    [
                      {
                        title: <Grid style={{ width: "140px", display: "flex", justifyContent: "space-between" }}>
                          <Grid className={classes.tagTitle}>Duty Status</Grid>
                          <Button className={classes.clearButton} onClick={handleClearBox("dutyStatus")}>
                            Clear
                        </Button>
                        </Grid>,
                        content:
                          <div className={classes.cardExpandContent}>
                            {listTags.dutyStatus.map((value) => {
                              return (
                                <MenuItem key={value} className={classes.itemContainer}>
                                  <div className={classes.checkboxContainer}>
                                    <div className={classes.dropdownItemVehicle}>
                                      <Checkbox
                                        name="dutyStatus"
                                        edge="end"
                                        onChange={handleToggle(value)}
                                        checked={checked["dutyStatus"].indexOf(value) !== -1}
                                        checkedIcon={<CheckSquareOutlined />}
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    </div>
                                    <div className={classes.dropdownItemVehicle}>
                                      {value}
                                    </div>
                                  </div>
                                  <Avatar className={classes.grayAvatar}>5</Avatar>
                                </MenuItem>
                              );
                            })}
                          </div>
                      },
                    ]
                  }
                    expansionSummaryClasses={{
                      root: classes.expansionClasses,
                      content: classes.expansionContentClasses
                    }}
                    expansionPanelClasses={{
                      root: classes.expansionPanelClasses,
                    }}
                    expansionPanelRounded={{
                      rounded: classes.expansionPanelClassesRounded,
                    }}
                  />

                  <Accordion collapses={
                    [
                      {
                        title: <Grid style={{ width: "140px", display: "flex", justifyContent: "space-between" }}>
                          <Grid className={classes.tagTitle}>Violations</Grid>
                          <Button className={classes.clearButton} onClick={handleClearBox("violations")}>
                            Clear
                        </Button>
                        </Grid>,
                        content:
                          <div className={classes.cardExpandContent}>
                            {listTags.violations.map((value) => {
                              return (
                                <MenuItem key={value} className={classes.itemContainer}>
                                  <div className={classes.checkboxContainer}>
                                    <div className={classes.dropdownItemVehicle}>
                                      <Checkbox
                                        name="violations"
                                        edge="end"
                                        onChange={handleToggle(value)}
                                        checked={checked["violations"].indexOf(value) !== -1}
                                        checkedIcon={<CheckSquareOutlined />}
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    </div>
                                    <div className={classes.dropdownItemVehicle}>
                                      {value}
                                    </div>
                                  </div>
                                  <Avatar className={classes.grayAvatar}>5</Avatar>
                                </MenuItem>
                              );
                            })}
                          </div>
                      },
                    ]
                  }
                    expansionSummaryClasses={{
                      root: classes.expansionClasses,
                      content: classes.expansionContentClasses
                    }}
                    expansionPanelClasses={{
                      root: classes.expansionPanelClasses,
                    }}
                    expansionPanelRounded={{
                      rounded: classes.expansionPanelClassesRounded,
                    }}
                  />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    )
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <GridContainer justifyContent={"start"}>
                    <GridItem className={classes.hosData}>
                      <CircleIcon fill={"#FF808B"} />
                      <div>In Violation</div>
                    </GridItem>
                    <GridItem className={classes.hosData}>
                      <CircleIcon fill={"#E5B435"} />
                      <div>Nearing violation</div>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day" />
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon />
                  </Button>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite />
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
                    <ToolboxButton placeholder="Search driver" showFilter showColumn filterAction={handleOpenMore} />
                    <PopperFilter listTags={listTags} />
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
                onClick: viewDetail,
                className: classes.tableRow
              }}
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ compliance }) => {
  return {
    data: compliance.driverHOS.data,
    page: compliance.driverHOS.page,
    total: compliance.driverHOS.total,
    pageSize: compliance.driverHOS.pageSize
  };
};

const mapDispatchToProps = {
  getDriverHOS
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverHOS);
