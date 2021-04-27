import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {useHistory} from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import ArrowRightBlueIcon from "components/Icons/ArrowRightBlueIcon";
import Accordion from "components/Accordion/Accordion";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Avatar from "@material-ui/core/Avatar";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import {getDefectsData} from "reducers/maintainance";
import {connect} from "react-redux";

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
  textEmail2: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#C4C4C4",
    fontWeight: 400,
    marginLeft: "10px !important",
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
  textStatus2: {
    border: "1px solid #ECEEF0 !important",
    fontSize: '14px',
    lineHeight: '24px',
    padding: "0px !important",
    color: "#25345C",
    background: "#FFFFFF",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "95px",
    height: "40px"
  },
  dropdownVehicle: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "300px",
    paddingLeft: "12px",
    paddingRight: "12px",
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
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  tagTitle: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "19px"
  },
  grayAvatar: {
    background: "#ECEEF0 !important",
    color: "#B4B4B4",
    marginRight: 8,
    fontSize: 12,
    fontWeight: 700,
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
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
}));

export function Defects(props) {
  const classes = useStyles();
  const history = useHistory();

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Standard Admin'},
    {key: 1, label: 'Full admin'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  };

  const viewDetail = () => {
    history.push("/u/maintenance/driver-vehicle-inspection-report/vehicle101")
    console.log("clicked")
  }

  React.useEffect(() => {
    // Get list data
    props.getDefectsData();
  }, []);

  const columns = [
    {
      title: 'Asset',
      key: 'asset',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: asset => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{asset}</div>
        </div>
      ),
    },
    {
      title: 'Current Location',
      key: 'currentLocation',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: currentLocation => <div className={classes.textEmail}>{currentLocation}</div>
    },
    {
      title: 'Last Dvir Status',
      key: 'lastDvirStatus',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: lastDvirStatus => <div className={classes.textStatus}>{lastDvirStatus}</div>
    },
    {
      title: 'Count',
      key: 'count',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: count => <div className={classes.textEmail}>{count}</div>
    },
    {
      title: 'Unresolved Defects',
      key: 'unresolvedDefects',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: unresolvedDefects => (
        <div>
          <span className={classes.textEmail}>{unresolvedDefects}</span>
          <span className={classes.textEmail2}>Feb 20, 5:13 AM</span>
        </div>
      )
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: () => <div className={classes.textStatus2}>Last Dvir</div>
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

  const listTags = {
    tags: ["Room", "No road", "In City"],
    dutyStatus: ["Driving", "On Duty", "Off Duty", "Personal Conveyance", "Sleeper Berth", "Disconnected", "Yard Move"],
    violations: ["Currently in violations", "Nearing Violation"]
  }

  const PopperFilter = (props) => {
    const {listTags} = props
    // checked box in popper
    const [checked, setChecked] = React.useState({
      tags: [1],
      dutyStatus: [1],
      violations: [1]
    });
    const handleToggle = (value) => (event) => {
      const currentIndex = checked[event.target.name].indexOf(value);
      const newChecked = {...checked};
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
        {({TransitionProps}) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{transformOrigin: "0 0 0"}}
          >
            <Paper className={classes.dropdown && classes.dropdownVehicle}>
              <ClickAwayListener onClickAway={handleCloseMore}>
                <MenuList role="menu">
                  <Grid className={classes.popperHeaderContainer}>
                    <Grid className={classes.popperHeader}>Filter Options</Grid>
                    <ArrowRightBlueIcon/>
                  </Grid>
                  <Grid xs={12} sm={12} md={12} className={classes.popperInput}>
                    <ToolboxButton placeholder="Search tags"/>
                  </Grid>

                  <Accordion collapses={
                    [
                      {
                        title: <Grid style={{width: "140px", display: "flex", justifyContent: "space-between"}}>
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
                                        checkedIcon={<CheckSquareOutlined/>}
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
                        title: <Grid style={{width: "140px", display: "flex", justifyContent: "space-between"}}>
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
                                        checkedIcon={<CheckSquareOutlined/>}
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
                        title: <Grid style={{width: "140px", display: "flex", justifyContent: "space-between"}}>
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
                                        checkedIcon={<CheckSquareOutlined/>}
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
                    <ToolboxButton placeholder="Search asset" showFilter showColumn filterAction={handleOpenMore}/>
                    <PopperFilter listTags={listTags}/>
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={props.data}
              pageSize={7}
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

const mapStateToProps = ({maintainance}) => {
  return {
    data: maintainance.defects.data,
    page: maintainance.defects.page,
    total: maintainance.defects.total,
    pageSize: maintainance.defects.pageSize
  };
};

const mapDispatchToProps = {
  getDefectsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Defects);