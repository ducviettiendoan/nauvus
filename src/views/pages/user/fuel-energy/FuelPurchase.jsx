import React from "react";
// @material-ui/core components
import { makeStyles, withStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { AppBar, Box, InputBase, Tabs, Typography,Tab } from "@material-ui/core";
import TableComponent from "../../../../components/Table/CustomTable";


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

const useStyles = makeStyles(styles);

const AntTabs = withStyles({
  root: {
    color: "#25345C",
    background: "white",
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

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


function defectCreateData(asset, currentLocation, lastDvirStatus, count, unresolvedDefects) {
  return { asset, currentLocation, lastDvirStatus, count, unresolvedDefects };
}

function dvirsCreateData(asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight) {
  return { asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight};
}

// const defectRows = [
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
//   defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
// ];

const divrsRows = [
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
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


export default function FuelPurchase() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const defectHeadCells = [
  //   { id: 'asset', numeric: false, disablePadding: true, label: 'Asset' },
  //   { id: 'currentLocation', numeric: true, disablePadding: false, label: 'Current Location' },
  //   { id: 'lastDvirStatus', numeric: true, disablePadding: false, label: 'Last Dvir Status' },
  //   { id: 'count', numeric: true, disablePadding: false, label: 'Count' },
  //   { id: 'unresolvedDefects', numeric: true, disablePadding: false, label: 'Unresolved Defects' },
  // ];


  
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>

              {/* <Card testimonial>
                <div className={classes.testimonialIcon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardTestimonialDescription}>
                    No Data APITokens
                  </h5>
                </CardBody>
                <CardFooter testimonial>
                  <h6 className={classes.cardCategory}>@nauvus</h6>
                </CardFooter>
              </Card> */}
            <GridItem xs={6}>
            <IconButton type="submit" aria-label="search">
              <SearchIcon/>
              </IconButton>
              <InputBase
                placeholder="Search Drivers"
              />
            </GridItem>

            <GridItem xs={6}>
              Months
              Days
            </GridItem>


          </GridContainer>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <AppBar className="safety-tab" position="static">
            <AntTabs  value={value} onChange={handleChange}>
              <AntTab label="All(15)" />
              <AntTab label="Verify(12)" />
              <AntTab label="Unverify(5)"  />
              <AntTab label="Processing(1)"/>
              <AntTab label="Invalid(10)"/>
            </AntTabs>
          </AppBar>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <TabPanel value={value} index={0} className="tabPanel">
            <TableComponent rows={divrsRows} headCells={dvirsHeadCells} />
          </TabPanel>
        </GridItem>

      </GridContainer>
    </div>
  );
}
