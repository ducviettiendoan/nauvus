import React, { useState } from "react";
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Grid } from "@material-ui/core";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Calendar from "components/Calendar/Calendar";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Button from "components/CustomButtons/Button.js";
import {getFuelPurchase} from "reducers/fuel-energy";
import { connect } from "react-redux";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import Table from "components/Table/TableV1";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";

import Avatar from '@material-ui/core/Avatar';
import Accordion from "components/Accordion/Accordion";
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
  headRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    fontWeight: 400,
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
  select: {
    color: "#25345C",
    fontWeight: 700,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    color: "#25345C",
    marginLeft: "24px",
    paddingTop: "12px !important",
  },
  calendar: {
    marginLeft: "8px !important",
    marginRight: "9px !important",
  },
  filterIcon: {
    marginTop: 13,
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px",
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#25345C",
    paddingLeft: "12px",
  },
  textStatus: {
    fontSize: "14px",
    lineHeight: "24px",
    paddingLeft: "0px !important",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "53px",
    height: "41px",
  },
  textEmail: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: 400,
  },
  gridTitle: {
    padding: "20px",
  },
}));

export function FuelPurchase(props) {
  const classes = useStyles();

  const onPageChange = (page, pageSize) => {
    props.getFuelPurchase()({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getFuelPurchase()({page, pageSize});
  }

  const [chipData, setChipData] = useState([
    {key: 0, label: 'Vehicle 101'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  React.useEffect(() => {
    props.getFuelPurchase();
  }, []);

  const [tab, setTab] = useState();

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };

  const listTags = {
    tags: ["Room", "No road", "In City"],
    dutyStatus: ["Driving", "On Duty", "Off Duty", "Personal Conveyance", "Sleeper Berth", "Disconnected", "Yard Move"],
    violations: ["Currently in violations", "Nearing Violation"]
  }

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
      setOpenMore(true)
      setAnchorEl(event.currentTarget);
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
                    <ArrowRightBlueIcon onClick={handleCloseMore}/>
                    
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
  

  const columns = [
    {
      title: "Vehicle",
      key: "vehicle",
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: (vehicle) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{vehicle}</div>
        </div>
      ),
    },
    {
      title: "Efficiency",
      key: "efficiency",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (efficiency) => (
        <div className={classes.textEmail}>{efficiency}</div>
      ),
    },
    {
      title: "Fuel Used",
      key: "fuelUsed",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (fuelUsed) => <div className={classes.textEmail}>{fuelUsed}</div>,
    },
    {
      title: "Energy Used",
      key: "energyUsed",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (energyUsed) => (
        <div className={classes.textEmail}>{energyUsed}</div>
      ),
    },
    {
      title: "Distance",
      key: "distance",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (distance) => <div className={classes.textEmail}>{distance}</div>,
    },
    {
      title: "% Driving Electric",
      key: "drivingElectric",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (drivingElectric) => (
        <div className={classes.textEmail}>{drivingElectric}</div>
      ),
    },
    {
      title: "Est. Carbon Emissions",
      key: "estCarbonEmissions",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (estCarbonEmissions) => (
        <div className={classes.textEmail}>{estCarbonEmissions}</div>
      ),
    },
    {
      title: "Est. Costning",
      key: "estCost",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (estCost) => <div className={classes.textEmail}>{estCost}</div>,
    },
    {
      title: "Total Engine Run Time",
      key: "totalEngineRunTime",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (totalEngineRunTime) => (
        <div className={classes.textEmail}>{totalEngineRunTime}</div>
      ),
    },
    {
      title: "Idle Time (%)",
      key: "idleTime",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (idleTime) => <div className={classes.textEmail}>{idleTime}</div>,
    },
  ];

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer className={classes.topHeader}>
                    <GridItem
                      xs={12}
                      sm={11}
                      md={8}
                      xl={6}
                      className={classes.topHeaderTitle}
                    >
                      <RoundedTabs
                        tabs={[
                          "All(15)",
                          "Verified(12)",
                          "Unverified(5)",
                          "Processing(1)",
                          "Invalid(10)",
                        ]}
                        tabValue={handleChangeTab}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={4}
                      md={4}
                      xl={6}
                      className={classes.topHeaderButton}
                    >
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
                      <Grid item xs={12} sm={12} md={4}>
                          <Grid container className={classes.headContainer}>
                            <Grid item xl={2}
                                  className={classes.userRolesTitle}> {chipData.length} selected
                              for </Grid>
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
                                  <Button onClick={handleClearAll}
                                          className={classes.clearAll}>
                                    Clear All
                                  </Button>
                                ) : ""}
                            </Grid>
                          </Grid>
                        </Grid>
                      <Grid
                        xs={12}
                        sm={12}
                        md={8}
                        className={classes.headRight}
                      >
                        <ToolboxButton
                          placeholder="Search driver"
                          showFilter 
                          showColumn
                          filterAction={handleOpenMore}
                        />
                        <PopperFilter listTags={listTags} />
                      </Grid>
                    </Grid>
                  }
                  columns={columns}
                  dataSource={props.data}
                  onHeaderRow={{
                    className: classes.onHeaderRow,
                  }}
                  onBodyRow={{
                    className: classes.tableRow,
                  }}
                  pagination={{
                    total: props.total,
                    current: props.page,
                    pageSize: props.pageSize,
                    onChange: onPageChange,
                    onShowSizeChange: onShowSizeChange
                  }}

                />
                
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({fuelEnergy}) => {
  console.log(fuelEnergy.fuelPurchase.data);
  return {
    data: fuelEnergy.fuelPurchase.data,
    page: fuelEnergy.fuelPurchase.page,
    total: fuelEnergy.fuelPurchase.total,
    pageSize: fuelEnergy.fuelPurchase.pageSize
  };
};

const mapDispatchToProps = {
  getFuelPurchase
};

export default connect(mapStateToProps, mapDispatchToProps)(FuelPurchase);