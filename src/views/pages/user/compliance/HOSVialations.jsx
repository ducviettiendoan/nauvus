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
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "components/CustomButtons/Button.js";
import DropDownIcon from "components/Icons/DropDownIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import {
  cardTitle,
  roseColor,
} from "assets/jss/material-dashboard-pro-react.js";
import FilterIcon from "../../../../components/Icons/FilterIcon";
import ColumnIcon from "../../../../components/Icons/ColumnIcon";
import CircleIcon from "../../../../components/Icons/CircleIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Calendar from "../../../../components/Calendar/Calendar";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0",
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem",
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px",
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px",
    },
  },
  iconRose: {
    color: roseColor,
  },
  marginTop30: {
    marginTop: "30px",
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999",
  },
  searchMapContainer: {
    position: "absolute",
    top: "10px",
    left: "10px",
  },
  btnSearchOnMap: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "40px",
    border: "1px solid #C4C4C4",
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;",
  },
  toogleDrawer: {
    color: "#25345C !important",
    background: "white",
    width: "60px !important",
    height: "40px !important",
    minWidth: "60px !important",
    marginTop: "-10px",
    marginRight: "10px",
  },
  filterButtonText: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    width: "100px !important",
    minWidth: "100px !important",
    height: "40px",
    position: "absolute",
    right: "106px",
    marginRight: "106px",
    alignItems: "center !important",
  },
  filterButtonText2: {
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
    width: 12,
    height: 12,
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20px !important",
    paddingRight: "0px !important",
  },
  selectForm: {
    width: "138px",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 8,
  },
  hosData: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#25345C",
    fontSize: "18px",
    fontWeight: 700,
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
    /* font-family: Lato!important; */
    fontStyle: "normal!important",
    fontWeight: "bold!important",
    color: "#25345C!important",
    boxShadow: "none !important",
    border: "1px solid #ECEEF0 !important",
    width: "100px !important",
  }
};


const dumpData = [
  {
    id: 1,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 2,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 3,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 4,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 5,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 6,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 7,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 8,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
  },
  {
    id: 9,
    driver: "John Smith",
    violationsType:"Missing Driver Certification",
    date:"Aug 21, 2010",
    start: "9:00AM",
    end: "9:23AM",
    duration: "17m 28s",
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
        <div className={classes.textSub}>{cell}</div>
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
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatPhone = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
      </>
    );
  };

  const formatDLState = (cell, row) => {
    return (
      <>
        <div className={classes.textName}>{cell}</div>
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
                          {/* <CircleIcon
                            style={{
                              color: "FF808B",
                              fontSize: 30,
                              marginTop: 18,
                            }}
                          /> */}
                          <div>In Violation</div>
                        </GridItem>
                        <GridItem
                          xs={6}
                          sm={6}
                          md={6}
                          className={classes.hosData}
                        >
                          {/* <CircleIcon
                            style={{
                              color: "E5B435",
                              fontSize: 30,
                              marginTop: 18,
                            }}
                          /> */}
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

                      <FormControl variant="outlined" className="moreIcon">
                        <IconButton style={{ width: "42px", height: "42px" }}>
                          <MoreHorizIcon
                            fontSize="small"
                            style={{ color: "#25345C" }}
                          />
                        </IconButton>
                      </FormControl>
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
                      
                      <Grid item xs={6}>
                        
                        <Button
                          round
                          className= {`${classes.button} ${classes.filterButtonText2}`}
                          startIcon={<ColumnIcon
                            fontSize='large'
                            className={classes.filterIcon}/>}
                        >
                          Manage Column
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        
                        <Button
                          round
                          className= {`${classes.button} ${classes.filterButtonText}`}
                          startIcon={<FilterIcon
                            fontSize='large'
                            className={classes.filterIcon}/>}
                        >
                          Filter
                        </Button>
                      </Grid>
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
                      dataField: "violationsType",
                      text: "Violations Type",
                      formatter: formatUserName,
                    },
                    {
                      dataField: "date",
                      text: "Date",
                      formatter: formatTags,
                    },
                    {
                      dataField: "start",
                      text: "Start",
                      formatter: formatPeerGroup,
                    },
                    {
                      dataField: "end",
                      text: "End",
                      formatter: formatPhone,
                    },
                    {
                      dataField: "duration",
                      text: "Duration",
                      formatter: formatDLState,
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
