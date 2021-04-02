import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FormControl, Grid, IconButton, Select } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import DropDownIcon from "components/Icons/DropDownIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import FilterIcon from "components/Icons/FilterIcon";
import ColumnIcon from "components/Icons/ColumnIcon";
import Calendar from "components/Calendar/Calendar";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import RoundedTabs from "components/CustomTabs/RoundedTabs";

import Button from "components/CustomButtons/Button.js";
import { MoreHoriz } from "@material-ui/icons";

import {getPurchaseReport} from "reducers/fuel-energy";
import {IRootState} from 'reducers';
import {connect} from 'react-redux';

const styles = {
  headerLeft:{
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    paddingBottom: "20px !important",
    paddingRight: "0px !important",
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
  calendar: {
    marginLeft: "8px !important",
    marginRight: "9px !important",
  },
  
  filterButtonText: {
    fontWeight: 700,
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #25345C !important",
    borderRadius: "32px !important",
    width: "100px !important",
    minWidth: '100px !important',
    height: "40px",
    position: "absolute",
    right: "106px",
    marginRight: "106px",
    alignItems: "center !important"
  },
  columnButtonText: {
    fontWeight: 700,
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C",
    border: "1px solid #25345C !important",
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
    marginTop: 13,
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },

};

const useStyles = makeStyles(styles);

export function FuelPurchase(props) {
  const classes = useStyles();
  React.useEffect(() => {
    // Get list data
    props.getPurchaseReport();
  }, []);

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

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

  const formatVehicle = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatEfficiency = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatFuelUsed = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatEnergyUsed = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDistance = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDrivingElectric = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }


  const formatEstCarbonEmissions = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }


  const formatEstCost = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }


  const formatTotalEngineRunTime = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }


  const formatIdleTime = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

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
                  >
                    <GridItem
                      xs={3}
                      sm={3}
                      md={3}
                      className={classes.headerLeft}
                    >
                      <ToolboxButton placeholder={"Search Drivers"} />
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

                      {/* <FormControl variant="outlined" className="moreIcon"> */}
                      <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHoriz />
                  </Button>
                      {/* </FormControl> */}
                    
                    </GridItem>
                  </GridContainer>

                  <Grid container spacing={3} justifyContent="space-between">
                    <Grid
                      item
                      xs={6}
                      style={{ display: "flex", justifyContent: "flex-start" }}
                    >
                 
                 <RoundedTabs tabs={["All(15)", "Verified(12)", "Unverified(5)", "Processing(1)", "Invalid(10)"]} tabValue={handleChangeTab} />
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "right" }}>
                      
                    <GridItem xs={6}>
                          <IconButton className={classes.columnButtonText}>
                            <ColumnIcon className={classes.filterIcon} />
                        Manage Column
                        </IconButton>
                        </GridItem>
                        <GridItem xs={6}>
                          <IconButton className={classes.filterButtonText}>
                            <FilterIcon className={classes.filterIcon} />
                        Filter
                        </IconButton>
                        </GridItem>
                    </Grid>
                  </Grid>
                </CardBody>

                <ToolkitProvider
                  data={props.data}
                  columns={[
                    
                      {
                        dataField: "vehicle",
                        text: "Vehicle",
                        formatter: formatVehicle
                      },
                      {
                        dataField: "efficiency",
                        text: "Efficiency",
                        formatter: formatEfficiency
                      },
                      {
                        dataField: "fuelUsed",
                        text: "Fuel Used",
                        formatter: formatFuelUsed
                      },
                      {
                        dataField: "energyUsed",
                        text: "Energy Used",
                        formatter: formatEnergyUsed
                      },
                      {
                        dataField: "distance",
                        text: "Distance",
                        formatter: formatDistance
                      },
                      {
                        dataField: "drivingElectric",
                        text: "% Driving Electric",
                        formatter: formatDrivingElectric
                      },
                      {
                        dataField: "estCarbonEmissions",
                        text: "Est. Carbon Emissions",
                        formatter: formatEstCarbonEmissions
                      },
                      {
                        dataField: "estCost",
                        text: "Est. Cost",
                        formatter: formatEstCost
                      },
                      {
                        dataField: "totalEngineRunTime",
                        text: "Total Engine Run Time",
                        formatter: formatTotalEngineRunTime
                      },
                      {
                        dataField: "idleTime",
                        text: "Idle Time(%)",
                        formatter: formatIdleTime
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

export default connect(
  ({fuelEnergy}: IRootState) => ({
    data: fuelEnergy.purchaseReports
  }),
  {
    getPurchaseReport
  }
)(FuelPurchase);
