import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { MoreHoriz } from "@material-ui/icons";
import GridContainer from "components/Grid/GridContainer";
import Chip from "@material-ui/core/Chip";
import classNames from "classnames";
import CloseIcon from "components/Icons/CloseIcon";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import Button from "components/CustomButtons/Button";
import {blackColor, hexToRgb, primaryColor, whiteColor} from "assets/jss/material-dashboard-pro-react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Fade from '@material-ui/core/Fade';
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles((theme) => ({
...customDropdownStyle(theme),
topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    padding: "0 5px",
},
topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
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

headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
    marginBottom: "0 !important",
    marginRight: 8
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

contentCard:{
    marginTop: "30px",
},
moreAction: {
  background: "#25345C !important",
  border: "1px solid #ECEEF0 !important"
},
}));

export default function CustomReportName(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  // const handleOpenMore = (event) => {
  //   setOpenMore(true)
  //   setAnchorEl(event.currentTarget);
  // }

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

  const [openMore, setOpenMore] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
    setOpen(false)
  };

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }

  const handleClose = () => {
    setOpen(false)
    setOpenMore(false)
    setOpenUpload(false)
  }

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={6} xl={6} className={classes.topHeaderTitle}>
          Name
        </GridItem>
        <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
            <Calendar placeholder="Day"/>
            <Button
                color="white"
                aria-label="edit"
                justIcon
                round
                className={`btn-36 ${classes.moreAction} mr-2`}
                onClick={handleOpenMore}
            >
            <MoreHoriz/>
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
                        <MenuItem className={dropdownItem} >Export</MenuItem>
                        <MenuItem className={dropdownItem} >Schedule Custom Report</MenuItem>
                        <MenuItem className={dropdownItem} >Edit Save Report</MenuItem>
                        <MenuItem className={dropdownItem} >Delete Report</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
        </Grid>
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


