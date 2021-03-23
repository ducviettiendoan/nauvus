import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//material-ui/lab components
import { Alert, AlertTitle } from '@material-ui/lab';
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import { withStyles } from '@material-ui/core/styles';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import AppBar from "@material-ui/core/AppBar";
import TableComponent from "../../../Components/Table";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import { InfoOutlined, MoreHoriz } from "@material-ui/icons";
import Button from "components/CustomButtons/Button.js";

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
    width: '40px !important',
    height: '40px !important',
    minWidth: '40px !important',
    marginTop: "-10px",
    marginRight: "10px"
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
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
};

const HeadCells = [
  { id: 'vehicle', numeric: false, disablePadding: true, label: 'Vehicle' },
  { id: 'efficiency', numeric: true, disablePadding: false, label: 'Efficiency' },
  { id: 'fuelUsed', numeric: true, disablePadding: false, label: 'Fuel Used' },
  { id: 'energyUsed', numeric: true, disablePadding: false, label: 'Energy Used' },
  { id: 'distance', numeric: true, disablePadding: false, label: 'Distance' },
  { id: 'drivingElectric', numeric: true, disablePadding: false, label: 'Driving Electric' },
  { id: 'carbonEmissions', numeric: true, disablePadding: false, label: 'Carbon Emissions' },
  { id: 'cost', numeric: true, disablePadding: false, label: 'Cost' },
  { id: 'totalEngineRunTime', numeric: true, disablePadding: false, label: 'Total Engine Run Time' },
  { id: 'idleTime', numeric: true, disablePadding: false, label: 'Distance' },
];

function createData(vehicle, efficiency, fuelUsed, energyUsed, distance, drivingElectric, carbonEmissions, cost, totalEngineRunTime, idleTime) {
  return { vehicle, efficiency, fuelUsed, energyUsed, distance, drivingElectric, carbonEmissions, cost, totalEngineRunTime, idleTime };
}

const rows = [
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
  createData('Vehicle 102', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
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

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function FuelEnergy() {
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

                <CardBody >
                  <Card>
                    <CardBody>
                      <div className="ml-5" style={{ textAlign: "left" }}>
                        <div className={classes.txtInfoMain}>Efficiency Benchmarks</div>
                        <div className={`mb-4 ${classes.txtInfoSub}`}>
                          Efficiency benchmarks are now available for select vehicle makes and models. To turn on this feature, go here.
                        </div>
                      </div>
                      <div style={{ position: "absolute", top: "16px" }}>
                        <InfoOutlined />
                      </div>
                    </CardBody>
                  </Card>
                  <Grid container spacing={3} justifyContent="space-between">
                    <Grid item xs={6} style={{ textAlign: "left" }}>
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
                          )
                        }}
                      />
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "right" }}>
                      <>
                        <Button
                          color="white"
                          aria-label="edit"
                          justIcon
                          round
                          className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                          <MoreHoriz />
                        </Button>
                      </>
                    </Grid>
                  </Grid>
                
                </CardBody>

                <GridContainer style={{ padding: 16 }}>
                  <GridItem xs={12} sm={12} md={12}>
                    <GridContainer>
                      <GridItem xs={6} sm={6} md={6}>
                        <AppBar position="static" className="appBar">
                          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="Vehicle" {...a11yProps(0)} />
                            <Tab label="Driver" {...a11yProps(1)} />
                          </Tabs>
                        </AppBar>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
                
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TabPanel value={value} index={0} className="tabPanel">
                      <TableComponent rows={rows} headCells={HeadCells} />
                    </TabPanel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                    <TabPanel value={value} index={1} className="tabPanel">
                      <TableComponent rows={rows} headCells={HeadCells} />
                    </TabPanel>
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
