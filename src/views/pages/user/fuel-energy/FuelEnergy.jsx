import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//material-ui/lab components
import { Alert, AlertTitle } from '@material-ui/lab';
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { withStyles } from '@material-ui/core/styles';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

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
  }
};

const columns = [
  { id: 'vehicle', label: 'Vehicle', minWidth: 150 },
  { id: 'efficiency', label: 'Efficiency', minWidth: 100 },
  {
    id: 'fuelUsed',
    label: 'Fuel Used',
    minWidth: 80,
  },
  {
    id: 'energyUsed',
    label: 'Energy Used',
    minWidth: 100,
    // align: 'right',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'distance',
    label: 'Distance',
    minWidth: 100,
    // align: 'right',
    // format: (value) => value.toFixed(2),
  },
  { id: 'drivingElectric', label: '%Driving Electric', minWidth: 50 },
  { id: 'carbonEmissions', label: 'Est. Carbon Emissions', minWidth: 100 },
  { id: 'cost', label: 'Est. Cost', minWidth: 100 },
  { id: 'totalEngineRunTime', label: 'Total Engine Run Time', minWidth: 100 },
  { id: 'idleTime', label: 'Idle Time(%)', minWidth: 100 },
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
  createData('Vehicle 101', '39.1 MPG', '2.0 gal', '0.0 kWh', '78.1 mi', '0.0', '39.2 lb', 'C$10.76', '3h 20m', '10s (0.1%)'),
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
      {/* {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )} */}
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
                  <h5 className={classes.cardTestimonialDescription} style={{ textAlign: "left" }}>
                    <Alert severity="info" style={{background: "white", borderStyle: "solid", borderColor: "#C4C4C4"}}>
                      <AlertTitle>Efficiency Benchmarks</AlertTitle>
                    Efficiency benchmarks are now available for select vehicle makes and models. To turn on this feature, go here.
                    </Alert>

                      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <AntTab label="Vehicle" {...a11yProps(0)} />
                        <AntTab label="Driver" {...a11yProps(1)} />
                      </Tabs>
                    
                  </h5>
                </CardBody>
                <Paper className={classes.root}>
                  <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead >
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              style={{
                                minWidth: column.minWidth, background: "#ECEEF0", fontWeight: "bold"
                              }}
                            >
                              {column.label}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                          return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                  />
                </Paper>
                <CardFooter testimonial>
                  <h6 className={classes.cardCategory}>@nauvus</h6>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
