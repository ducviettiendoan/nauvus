import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, Grid, Icon, IconButton, Select } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { MoreHoriz } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";


import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import TableComponent from "../../../Components/Table";
import FilterIcon from "../../../../components/Icons/FilterIcon";
import ColumnIcon from "../../../../components/Icons/ColumnIcon";




const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
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
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
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
    marginLeft: "0 !important;"
  },
  toogleDrawer: {
    color: "#25345C !important",
    background: "white",
    width: '60px !important',
    height: '40px !important',
    minWidth: '60px !important',
    marginTop: "-10px",
    marginRight: "10px"
  },
  filterButtonText: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    width: "100px !important",
    minWidth: '100px !important',
    height: "40px",
    position: "absolute",
    right: "106px",
    marginRight: "106px",
    alignItems: "center !important"
  },
  filterButtonText2: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #C4C4C4 !important",
    borderRadius: "32px !important",
    maxWidth: "180px !important",
    minWidth: '180px !important',
    height: "40px",
    position: "absolute",
    right: "10px",
    marginRight: "10px",
    alignItems: "center !important",
  },
  filterIcon: {
    marginTop: 13
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "20px !important"
  },
  selectForm: {
    width: "138px",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "&::before": {
      borderBottom: "0px"
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF"
    },
    "&:hover": {
      borderBottom: "0px"
    },
    marginRight: 8
  },
  hosData: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    fontWeight: "bold",
    color: "#25345C",
    fontSize: "14px",
  },
  buttonBar: {
    display:"flex", alignItems: "center", justifyContent: "flex-end", paddingRight: " 0 !important"
  }
};

const HeadCells = [
  { id: 'driver', numeric: false, disablePadding: true, label: 'Driver' },
  { id: 'dutyStatus', numeric: true, disablePadding: false, label: 'Duty Status' },
  { id: 'timeInCurrentStatus', numeric: true, disablePadding: false, label: 'Time In Current Status' },
  { id: 'vehicle', numeric: true, disablePadding: false, label: 'Vehicle' },
  { id: 'timeUntilBreak', numeric: true, disablePadding: false, label: 'Time Until Break' },
  { id: 'driveRemaining', numeric: true, disablePadding: false, label: 'Drive Remaining' },
  { id: 'shiftRemaining', numeric: true, disablePadding: false, label: 'Shift Remaining' },
  { id: 'cycleRemaining', numeric: true, disablePadding: false, label: 'Cycle Remaining' },
  { id: 'cycleTomorrow', numeric: true, disablePadding: false, label: 'Cycle Tomorrow' },
  { id: 'drivingInViolation', numeric: true, disablePadding: false, label: 'Driving In Violation (Today)' },
];

const rows = [
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
  { driver: 'Ali Singh', dutyStatus: "OFF", timeInCurrentStatus: "3:04", vehicle: 1, timeUntilBreak: "8:00", driveRemaining: "7:41", shiftRemaining: "7:41", cycleRemaining: "69:07", cycleTomorrow: "69:07", drivingInViolation: 1 },
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DriverHOS() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>

                  <GridContainer style={{ padding: "0 16px", alignItems: "center" }}>
                    <GridItem xs={12} md={6} className={classes.searchBar}>
                      <GridContainer style={{ textAlign: "left" }}>
                        <GridItem xs={4} sm={2} md={3} xl={2} className={classes.hosData}>
                          Violations
                        </GridItem>
                        <GridItem xs={6} sm={4} md={5} xl={4} className={classes.hosData}>
                          Missing Certifications
                        </GridItem>
                        {/* <GridItem xs={0} sm={2} md={2} className={classes.hosData}>

                        </GridItem> */}
                      </GridContainer>
                    </GridItem>
                    <GridItem xs={12} md={6} className={classes.headerRight}>
                      <GridContainer>
                        <GridItem md={12} className={classes.buttonBar}>
                        <FormControl variant="outlined">
                            <Select
                              native
                              value={"1"}
                              // onChange={handleChange}
                              // label="Age"
                              className={classes.selectForm}
                            >
                              <option value={1}>1.1 Weeks</option>
                            </Select>
                          </FormControl>
                        <FormControl variant="outlined">
                            <Select
                              native
                              value={"1"}
                              // onChange={handleChange}
                              // label="Age"
                              className={classes.selectForm}
                            >
                              <option value={1}>Days</option>
                            </Select>
                          </FormControl>
                          <FormControl variant="outlined" className="moreIcon">
                            <IconButton>
                              <MoreHoriz fontSize="large" />
                            </IconButton>
                          </FormControl>
                          <FormControl variant="outlined">
                            <Button variant="contained" size="large" className="liveButton">
                              Live
                              </Button>
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>


                  <Grid container spacing={3} justifyContent="space-between">
                    <GridItem style={{ textAlign: "left" }}>
                      <CustomInput
                        formControlProps={{
                          className: classes.btnSearchOnMap
                        }}
                        inputProps={{
                          id: "btn-search-on-map",
                          placeholder: "Search",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Search className={classes.inputAdornmentIcon} />
                            </InputAdornment>
                          ),
                          // onChange: event => {
                          //   setUsername(event.target.value);
                          // },
                        }}
                      />
                    </GridItem>
                    <GridItem style={{ textAlign: "right" }}>
                      <GridItem>
                        <IconButton className={classes.filterButtonText2}>
                          <ColumnIcon className={classes.filterIcon}/>
                        Manage Column
                        </IconButton>
                      </GridItem>
                      <GridItem>
                        <IconButton className={classes.filterButtonText}>
                          <FilterIcon className={classes.filterIcon}/>
                        Filter
                        </IconButton>
                      </GridItem>

                    </GridItem>
                  </Grid>

                </CardBody>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TableComponent rows={rows} headCells={HeadCells} />
                  </GridItem>
                </GridContainer>

              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
