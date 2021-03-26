import React from "react";
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import TableComponent from "../../../../../components/Table/CustomTable";
import DropDownIcon from "../../../../../components/Icons/DropDownIcon";

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

const defectRows = [
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
  {asset : 'Vehicle 101',currentLocation: "8.1 mi SSE Rockford, IL",lastDvirStatus: "Safe",count: 1,unresolvedDefects: "Fuel Sysrem Feb 20, 5:13 AM"},
];

const divrsRows = [
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"},
  {asset : '115',currentDriver: "Shahid Mamino",makeModel: "Freightline R/SCT 120",batteryVoltage: 14.3,engineHours: "46,567",odometer :"69,469",checkEngineLight: "Off"}
];

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    padding: 0
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tabs : {
    border: 0
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  button: {
    width: "100px",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "& > select": {
      width: "100%",
      zIndex: "1000",
      paddingRight: "0px !important"
    },
    "&::before": {
      borderBottom: "0px"
    },
    "& > select:focus": {
      backgroundColor: "unset"
    },
    "& > fieldset": {
      border: 0
    },
    "&:hover": {
      borderBottom: "0px"
    },
    marginRight: 8
  },
  dropDownIcon: {
    position:"absolute",
    right: 0,
    color: "#C4C4C4",
    cursor: "pointer"
  }
}));

export default function TableMaintenance() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const defectHeadCells = [
    { id: 'asset', numeric: false, disablePadding: true, label: 'Asset',formatter: 'Asset' },
    { id: 'currentLocation', numeric: true, disablePadding: false, label: 'Current Location',formatter: 'Current Location' },
    { id: 'lastDvirStatus', numeric: true, disablePadding: false, label: 'Last Dvir Status',formatter: 'Last Dvir Status' },
    { id: 'count', numeric: true, disablePadding: false, label: 'Count',formatter: 'Count' },
    { id: 'unresolvedDefects', numeric: true, disablePadding: false, label: 'Unresolved Defects',formatter: 'Unresolved Defects' },
  ];
  const dvirsHeadCells = [
    { id: 'asset', numeric: false, disablePadding: true, label: 'Asset' },
    { id: 'currentDriver', numeric: true, disablePadding: false, label: 'Current Driver' },
    { id: 'makeModel', numeric: true, disablePadding: false, label: 'Make/Model' },
    { id: 'batteryVoltage', numeric: true, disablePadding: false, label: 'Battery Voltage' },
    { id: 'engineHours', numeric: true, disablePadding: false, label: 'Engine Hours' },
    { id: 'odometer', numeric: true, disablePadding: false, label: 'Odometer (Mi)' },
    { id: 'checkEngineLight', numeric: true, disablePadding: false, label: 'Check Engine Light' },
  ];
  return (
    <div>
      <GridContainer style={{padding: 16}}>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <AppBar position="static" className="appBar">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  <Tab label="Defects" {...a11yProps(0)} />
                  <Tab label="DVIRs" {...a11yProps(1)} />
                </Tabs>
              </AppBar>
            </GridItem>
            <GridItem xs={6} sm={6} md={6} className={classes.headerRight}>
              <FormControl variant="outlined">
                <Select
                  native
                  value={"1"}
                  className={classes.button}
                  IconComponent={() => (
                    <DropDownIcon className={classes.dropDownIcon} />
                  )}
                >
                  <option value={1}>Tags</option>
                </Select>
              </FormControl>
              <FormControl variant="outlined">
                <Select
                  native
                  value={"1"}
                  className={classes.button}
                  IconComponent={() => (
                    <DropDownIcon className={classes.dropDownIcon} />
                  )}
                >
                  <option value={1}>Defects</option>
                  <option value={2}>Faults</option>
                </Select>
              </FormControl>
            </GridItem>
          </GridContainer>

        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TabPanel value={value} index={0} className="tabPanel">
            <TableComponent rows={defectRows} headCells={defectHeadCells}/>
          </TabPanel>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <TabPanel value={value} index={1} className="tabPanel">
            <TableComponent rows={divrsRows} headCells={dvirsHeadCells}/>
          </TabPanel>
        </GridItem>
      </GridContainer>
    </div>
  );
}
