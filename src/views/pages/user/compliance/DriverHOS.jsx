import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, Grid, Icon, IconButton, Select } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { MoreHoriz } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";
import DropDownIcon from "components/Icons/DropDownIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import FilterIcon from "components/Icons/FilterIcon";
import ColumnIcon from "components/Icons/ColumnIcon";

import CircleIcon from "components/Icons/CircleIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Calendar from "components/Calendar/Calendar";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
    marginLeft: "-10px",
    marginRight: "5px"
  },
  manageColumnButton: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    maxWidth: "180px !important",
    minWidth: "180px !important",
    height: "40px",
    position: "absolute",
    right: "10px",
    marginRight: "10px",
    alignItems: "center !important",
  },
  filterIcon: {
    marginTop: '10px !important',
    marginRight: '0 !important'
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20px !important",
    paddingRight: "0px !important",
  },
  hosData: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C"
  },
  buttonSearch: {
    border: "1px solid #C4C4C4 !important",
  },
  selectForm: {
    width: "100%",
    height: "44px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0x !important",
    border: "1px solid #ECEEF0 !important",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF !important",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 15,
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

  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 5,
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
  textSub: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    marginLeft: "24px",
    paddingTop: "12px !important",
    color: "#25345C",
  },
  textTags: {
    lineHeight: "24px",
    marginTop: "16px",
    marginBottom: "15px",
    marginLeft: "24px",
    padding: "12px 14px",
    color: "white",
    background: "#25345C",
    borderRadius: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 40,
    height: "41px",
    fontSize: "16px",
  },
  calendar: {
    marginLeft: "8px !important",
    marginRight: "9px !important",
  },
  button:{
    background:" #fff !important",
    borderRadius: "28px !important",
    textTransform: "initial !important",
    fontSize: "13px !important",
    lineHeight: "17px !important",
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    color: "#25345C!important",
    boxShadow: "none !important",
    border: "1px solid #ECEEF0 !important",
    width: "100px !important",
  },
  manageColumnButton: {
    fontWeight: "700",
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    maxWidth: "180px !important",
    minWidth: '180px !important',
    height: "42px",
    position: "absolute",
    right: "10px",
    marginRight: "10px",
    alignItems: "center !important",
  },

  filterButtonText1: {
    fontWeight: "700",
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    width: "97px !important",
    minWidth: '100px !important',
    height: "42px",
    position: "absolute",
    right: "106px",
    marginRight: "106px",
    alignItems: "center !important"
  },
};


const dumpData = [
  {
    id: 1,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 2,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 3,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 4,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 5,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 6,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 7,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 8,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },
  {
    id: 9,
    driver: "Ali Singh",
    dutyStatus: "OFF",
    timeInCurrentStatus: "3:04",
    vihicle: "1",
    timeUntilBreak: "8:00",
    driveRemaining: "7:41",
    shiftRemaining: "7:41",
    cycleRemaining: "69:07",
    cycleTomorrow: "69:07",
    drivingInViolation: "1",
  },

];

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DriverHOS() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };

  const [selectValue, setSelectValue] = React.useState({
    selectA: "none",
  });

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };


  const formatName = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatUserName = (cell, row) => {
    return (
      <>
        <div className={classes.textTags}>{cell}</div>
      </>
    );
  };

  const formatTags = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatPeerGroup = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatPhone = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatDLState = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatDLNumber = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const selectRow = {
    mode: "checkbox",
    clickToSelect: true,
    style: { background: "linear-gradient(0deg,#ECEEF0,#ECEEF0)" },
    classes: "customSelectRow",
    selectionHeaderRenderer: ({ indeterminate, ...rest }) => (
      <input
        type="checkbox"
        className={classes.indeterminateIcon}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        {...rest}
      />
    ),
    selectionRenderer: ({ mode, ...rest }) => (
      <input className={classes.checkBoxIcon} type={mode} {...rest} />
    ),
  };

  const name = "selectA";
  const listValues = [
    "Needs Coaching",
    "Needs Review",
    "Needs Recognition",
    "Coached",
    "Reviewed",
    "Regconized",
    "Dismissed",
  ];
  const placeholder = "1.1 Weeks";
  const selectValue1 = selectValue.selectA;

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>
                  <GridContainer
                    style={{ padding: "0 16px", alignItems: "center" }}
                  >
                    <GridItem
                      xs={3}
                      sm={3}
                      md={3}
                      className={classes.searchBar}
                    >
                      <GridContainer justifyContent={"start"}>
                        <GridItem
                          xs={6}
                          sm={6}
                          md={6}
                          className={classes.hosData}
                        >
                          <CircleIcon
                            style={{
                              color: "FF808B",
                              fontSize: 30,
                              marginTop: 18,
                            }}
                          />
                          <div>In Violation</div>
                        </GridItem>
                        <GridItem
                          xs={6}
                          sm={6}
                          md={6}
                          className={classes.hosData}
                        >
                          <CircleIcon
                            style={{
                              color: "E5B435",
                              fontSize: 30,
                              marginTop: 18,
                            }}
                          />
                          <div>Nearing violation</div>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                    <GridItem
                      xs={9}
                      sm={9}
                      md={9}
                      className={classes.headerRight}
                    >
                      <FormControl variant="outlined">
                        <Select
                          className={classes.selectForm}
                          fullWidth
                          disableUnderline
                          classes={{ root: classes.select }}
                          MenuProps={menuProps}
                          IconComponent={() => (
                            <DropDownIcon className={classes.dropDownIcon} />
                          )}
                          value={selectValue1}
                          onChange={handleChange}
                          name={name}
                        >
                          {selectValue1 === "none" && (
                            <option
                              value="none"
                              disabled
                              style={{ display: "none" }}
                            >
                              {placeholder}
                            </option>
                          )}
                          {listValues.map((value, i) => (
                            <MenuItem key={i} value={i}>
                              {value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl
                        variant="outlined"
                        className={classes.calendar}
                      >
                        <Calendar />
                      </FormControl>

                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction}`}
                    
                      >
                        <MoreHoriz />
                      </Button>
                        
                      <FormControl variant="outlined">  
                        <Button round className="btn-round-green">
                          Live
                        </Button>
                      </FormControl>
                    
                    </GridItem>
                  </GridContainer>

                  <Grid container spacing={3} justifyContent="space-between">
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                 
                      <ToolboxButton placeholder={"Search Drivers"} />
                    </Grid>

                      <Grid item xs={6} style={{ textAlign: "right" }}>
                        <GridItem xs={6}>
                          <IconButton className={classes.manageColumnButton}>
                            <ColumnIcon className={classes.filterIcon} />
                            Manage Column
                          </IconButton>
                        </GridItem>

                        <GridItem xs={6}>
                          <IconButton className={classes.filterButtonText1}>
                            <FilterIcon className={classes.filterIcon} />
                            Filter
                          </IconButton>
                        </GridItem>
                      </Grid>
                  </Grid>
                </CardBody>

                <ToolkitProvider
                  data={dumpData}
                  columns={[
                    {
                      dataField: "driver",
                      text: "Driver",
                      formatter: formatName,
                    },
                    {
                      dataField: "dutyStatus",
                      text: "Duty Status",
                      formatter: formatUserName,
                    },
                    {
                      dataField: "timeInCurrentStatus",
                      text: "Time In Current Status",
                      formatter: formatTags,
                    },
                    {
                      dataField: "vihicle",
                      text: "Vihicle",
                      formatter: formatPeerGroup,
                    },
                    {
                      dataField: "timeUntilBreak",
                      text: "Time Until Break",
                      formatter: formatPhone,
                    },
                    {
                      dataField: "driveRemaining",
                      text: "Drive Remaining",
                      formatter: formatDLState,
                    },
                    {
                      dataField: "shiftRemaining",
                      text: "Shift Remaining",
                      formatter: formatDLNumber,
                    },
                    {
                      dataField: "cycleRemaining",
                      text: "Cycle Remaining",
                      formatter: formatDLNumber,
                    },
                    {
                      dataField: "cycleTomorrow",
                      text: "Cycle Tomorrow",
                      formatter: formatDLNumber,
                    },
                    {
                      dataField: "drivingInViolation",
                      text: "Driving In Violation",
                      formatter: formatDLNumber,
                    },
                  ]}
                >
                  {(props) => (
                    <div className="table table-settings">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                        keyField="id"
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}
