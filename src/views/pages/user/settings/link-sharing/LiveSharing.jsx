import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TableComponent from "../../../../Components/Table"
import CustomInput from "../../../../../components/CustomInput/CustomInput"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SearchIcon from '@material-ui/icons/Search';

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import { AppBar, Box, Button, IconButton, InputAdornment, InputBase, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";

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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18
  },
  btnCreateLink: {
    padding: "5px, 10px",
    background: "#25345C",
    color: "white",
    borderRadius: 28,
    textTransform: "none",
    height: 46
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  btnSearchTable: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "50px",
    border: "1px solid #C4C4C4",
    float: "right",
    margin: "0, 0",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
};

const HeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'linkExpires', numeric: true, disablePadding: false, label: 'Link Expires' },
];

function createData(name, linkExpires) {
  return { name, linkExpires };
}

const rows = [
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
];

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
        <Typography>{children}</Typography>
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

const useStyles = makeStyles(styles);

export default function LiveSharing() {
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
                <CardBody className={classes.liveSharingHeader}>
                  <div className={classes.liveSharingTitle}>Live Sharing List</div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btnCreateLink}
                      startIcon={<ControlPointIcon />}
                    >
                      Create Link
                    </Button>
                  </div>
                </CardBody>


                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary" >
                  <Tab label="By Accet" {...a11yProps(0)} />
                  <Tab label="By Location" {...a11yProps(1)} />
                  <Tab label="By Recurring Route" {...a11yProps(2)} />
                </Tabs>


                <TabPanel value={value} index={0} className={classes.tableContainer} >

                  <div className={classes.btnSearchTable}>
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      placeholder="Search assets"
                    />
                  </div>

                  <TableComponent rows={rows} headCells={HeadCells} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>

                <TabPanel value={value} index={2}>
                  Item Three
                </TabPanel>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
