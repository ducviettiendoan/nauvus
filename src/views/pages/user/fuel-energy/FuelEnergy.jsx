import React, {useState} from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//material-ui/lab components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import FilterIcon from "../../../../components/Icons/FilterIcon";
import ColumnIcon from "../../../../components/Icons/ColumnIcon";
import IconButton from '@material-ui/core/IconButton';

import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import RoundedTabs from "components/CustomTabs/RoundedTabs";

import Calendar from "../../../../components/Calendar/Calendar";
import { InfoOutlined, MoreHoriz } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";

const styles = {
  alert: {
    padding: "0 18px 0 18px"
  },
  txtInfoMain: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#25345C",
  },
  txtInfoSub: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: "400",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '24px',
    marginTop: '25px'
  },
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  filterButtonText: {
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
  filterIcon: {
    marginTop: 13,
  },
  searchButton: {
    display: "flex",
    justifyContent: "flex-start",
    "& > div": {
      marginRight: 8
    }
  },
  filterArea: {
    alignItems: "center",
    display: "flex",
  },
  filterComp: {
    display: "flex",
    justifyContent: "flex-end"
  }
};


const dumpData = [
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
];

const useStyles = makeStyles(styles);

export default function FuelEnergy() {
  const classes = useStyles();
  const [value, setValue] = useState();

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
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


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <div className={classes.alert}>
                  <Card >
                    <CardBody>
                      <div className="ml-5" style={{ textAlign: "left" }}>
                        <div className={classes.txtInfoMain}>
                          Efficiency Benchmarks
                        </div>
                        <div className={`mb-4 ${classes.txtInfoSub}`}>
                          Efficiency benchmarks are now available for select
                          vehicle makes and models. To turn on this feature, go
                          here.
                        </div>
                      </div>
                      <div style={{ position: "absolute", top: "16px" }}>
                        <InfoOutlined />
                      </div>
                    </CardBody>
                  </Card>
                </div>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={8} md={9} xl={10} className={classes.searchButton}>
                      <ToolboxButton placeholder={"Search Drivers"} />
                    </GridItem>
                    <GridItem xs={12} sm={4} md={3} xl={2} className={classes.filterArea}>
                      <Calendar className={classes.calendar} />
                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                      >
                        <MoreHoriz />
                      </Button>
                    </GridItem>

                  </GridContainer>

                </CardBody>

                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <RoundedTabs tabs={["Vehicle", "Driver"]} tabValue={handleChangeTab} />
                      </GridItem>
                      <GridItem>
                        <GridItem xs={6}>
                          <IconButton className={classes.manageColumnButton}>
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
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>

                <ToolkitProvider
                  data={dumpData}
                  keyField="_id"
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
                  {props => (
                    <div className="table table-settings">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                      />

                    </div>
                  )}
                </ToolkitProvider>
              </Card>
              <GenPaginationV1 pageSizeOptions={[10, 20, 30, 40]} showSizeChanger total={29} page={1} size={10} />

            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
