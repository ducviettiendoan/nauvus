import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import SubmittedDocuments from "./components/SubmittedDocuments";
import DocumentTypes from "./components/DocumentTypes";
import DiaLog from "components/CustomDialog/Dialog";
import Checkbox from "@material-ui/core/Checkbox";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import {Grid} from "@material-ui/core";


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
    alignItems: "center",
    overflow: "auto"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  dialogTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26.4px",
    color: "#25345C"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4"
  },
  editHeader: {
    textAlign: "center"
  },
  footer: {
    marginTop: "5px",
  },
  buttonSetting: {
    height: "74ps !important",
    margin: "4px"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  checkboxContainer: {
    padding: "0px !important",
    borderRadius: "22px",
    border: "1px solid #F4F4F4",
    paddingLeft: "30% !important",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "unset"
    },
    "&:focus": {
      backgroundColor: "unset"
    },
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
      backgroundColor: "unset !important"
    }
  },
  checkBoxRow: {
    display: "flex",
    flexDirection: "row",
    columnGap: "15px",
    marginBottom: "20px"
  }
}));

export default function Documents() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);

  // dialog
  const [openDialog, setOpenDialog] = useState(false)

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  // checkbox
  const [checked, setChecked] = useState([])

  const handleToggle = (value) => (event) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} lg={6} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Submitted Documents (1)", "Archived Documents (0)", "Document Types (2)"]}
                               tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={8} md={6} lg={6} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button round className="btn-round-green h-42 w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                  <Button
                    round
                    className="btn-round-active h-42 w-178 ml-2 mr-2"
                    onClick={handleOpenDialog}
                  >
                    Create Document Type
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 w-42 ${classes.moreAction} mr-2`}
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
                    {({TransitionProps}) => (
                      <Grow
                        {...TransitionProps}
                        id="profile-menu-list"
                        style={{transformOrigin: "0 0 0"}}
                      >
                        <Paper className={classes.dropdown}>
                          <ClickAwayListener onClickAway={handleCloseMore}>
                            <MenuList role="menu">
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Schedule Emailed
                                Reports </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Download CSV </MenuItem>
                              <MenuItem className={dropdownItem} onClick={handleCloseMore}> Print </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <SubmittedDocuments/>}
          {value === 1 && <SubmittedDocuments/>}
          {value === 2 && <DocumentTypes/>}
        </GridItem>
      </GridContainer>
      <DiaLog
        fullWidth={true}
        maxWidth="sm"
        renderTitle={<div className={classes.editHeader}>
          <h3 className={classes.dialogTitle}>Create from a standard document type</h3>
          <p className={classes.dialogSubTitle}>Create from a standard document type</p>
        </div>}
        handleClose={handleCloseDialog}
        open={openDialog}
      >
        <Grid className={classes.checkBoxRow}>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="assident"
                  edge="end"
                  onChange={handleToggle("assident")}
                  checked={checked.indexOf("assident") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Assident
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="citation"
                  edge="end"
                  onChange={handleToggle("citation")}
                  checked={checked.indexOf("citation") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Citation
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.checkBoxRow}>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="proof"
                  edge="end"
                  onChange={handleToggle("proof")}
                  checked={checked.indexOf("proof") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Proof of Delivery
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="bill"
                  edge="end"
                  onChange={handleToggle("bill")}
                  checked={checked.indexOf("bill") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Bill of Landing
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid className={classes.checkBoxRow}>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="receipt"
                  edge="end"
                  onChange={handleToggle("receipt")}
                  checked={checked.indexOf("receipt") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Fuel Receipt
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <div className={classes.checkboxContainer}>
              <div className={classes.dropdownItemVehicle}>
                <Checkbox
                  name="ticket"
                  edge="end"
                  onChange={handleToggle("ticket")}
                  checked={checked.indexOf("ticket") !== -1}
                  checkedIcon={<CheckSquareOutlined/>}
                  classes={{
                    checked: classes.checked,
                    root: classes.checkRoot
                  }}
                />
              </div>
              <div className={classes.dropdownItemVehicle}>
                Scale Ticket
              </div>
            </div>
          </Grid>
        </Grid>

        <div className={classes.footer}>
          <div className={classes.selectButton}>
            <Button
              type="button"
              round
              className={`btn-round-active-2 ${classes.buttonSetting}`}
              onClick={handleCloseDialog}
            > Cancel
            </Button>
            <Button
              round
              className={`btn-round-active ${classes.buttonSetting}`}
              type="submit"
            >Custom Type</Button>
          </div>
        </div>
      </DiaLog>
    </div>
  );
}