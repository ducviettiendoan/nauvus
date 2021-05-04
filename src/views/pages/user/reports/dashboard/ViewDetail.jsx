import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import LiveIconWhite from "components/Icons/LiveIconWhite";
import GridContainer from "components/Grid/GridContainer";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import GridItem from "components/Grid/GridItem";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import Button from "components/CustomButtons/Button";
import FilterButton from "components/CustomButtons/FilterButton";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
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
import {blackColor, hexToRgb, primaryColor, whiteColor} from "assets/jss/material-dashboard-pro-react";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";


const useStyles = makeStyles((theme) => ({
...customDropdownStyle(theme),
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
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
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
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
},
gridTitle: {
    padding: "20px"
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
headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
    marginBottom: "0 !important",
    marginRight: 8
    }
},
onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "15px"
},
onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
},
textEmail: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "0px"
},
textBold: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 700,
},
tableRow: {
    '&:nth-of-type(even)': {
    backgroundColor: "#fbfbfb",
    },
},
onHeaderRow: {
    background: "#ECEEF0",
},
alignItemsCenter: {
    display: "flex",
    alignItems: "center",
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
card:{
  height: "700px",
  borderRadius: "12px",
  marginTop: "16px",  
  padding: "0, 16px !important",
},
containerCard: {
  marginLeft: "16px !important",
},
contentTitle: {
  fontSize: 16,
  color: "#25345C",
  fontWeight: 700,
  marginLeft: "8px",
  
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
dropdown: {
    borderRadius: "3px",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
    top: "100%",
    zIndex: "1000",
    minWidth: "181px",
    height: "40px",
    padding: "5px 0",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: whiteColor,
    backgroundClip: "padding-box"
},
popperClose: {
    pointerEvents: "none",
    display: "none !important"
},
popperNav: {
    [theme.breakpoints.down("sm")]: {
    position: "static !important",
    left: "unset !important",
    top: "unset !important",
    transform: "none !important",
    willChange: "unset !important",
    "& > div": {
        boxShadow: "none !important",
        marginLeft: "0rem",
        marginRight: "0rem",
        transition: "none !important",
        marginTop: "0px !important",
        marginBottom: "0px !important",
        padding: "0px !important",
        backgroundColor: "transparent !important",
        "& ul li": {
        color: "#212529 !important",
        margin: "10px 15px 0!important",
        padding: "10px 15px !important",
        "&:hover": {
            backgroundColor: "hsla(0,0%,78%,.2)",
            boxShadow: "none"
        }
        }
    }
    }
},
popperResponsive: {
    zIndex: "1200",
    [theme.breakpoints.down("sm")]: {
        zIndex: "1640",
        position: "static",
        float: "none",
        width: "auto",
        marginTop: "0",
        backgroundColor: "transparent",
        border: "0",
        boxShadow: "none",
        color: "black"
    }
},
contentCard:{
    marginTop: "30px",
}
}));

export default function ViewDetail(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

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
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={6} xl={6} className={classes.topHeaderTitle}>
          <RoundedTabs tabs={["Asset","Driver"]} tabValue={handleChangeTab}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={6} xl={6} className={classes.topHeaderButton}>
          <Calendar placeholder="Day"/>
          <FilterButton filterAction={handleOpenMore}/>
            <PopperFilter listTags={listTags}/>
          {/* <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
            // onClick={handleOpenMore}
          >
            <FilterButton filterAction={handleOpenMore}/>
            <PopperFilter listTags={listTags}/>
          </Button> */}
          <Button round className="btn-round-green w-84">
            <LiveIconWhite/>
            Live
          </Button>
        </GridItem>
      </GridContainer>

      <Card className={classes.card}>
          <Grid container className={classes.containerCard}>
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

            <Grid item xs={12} sm={12} className={classes.contentCard}>
                <div className={classes.contentTitle}>No assets</div>
            </Grid>
        </Grid>
      </Card>

    </div>
  )
};


