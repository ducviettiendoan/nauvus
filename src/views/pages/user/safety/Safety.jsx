import React from "react";
// @material-ui/core components
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import PropTypes from 'prop-types';
import SafetyCard from "./Card.jsx"
import CustomInput from "components/CustomInput/CustomInput.js";
import Tab from '@material-ui/core/Tab';
import "./Safety.css";
import ReplayIcon from '@material-ui/icons/Replay';
import Button from "@material-ui/core/Button"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

import {
  cardTitle,
  roseColor,
} from "assets/jss/material-dashboard-pro-react.js";
import { AppBar, Box, InputBase, Tabs, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FilterIcon from "../../../../components/Icons/FilterIcon";

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
    // fontStyle: italics
    color: "#999999"
  },
};

// const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  btnSearchOnMap: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "40px",
    border: "1px solid #C4C4C4",
    marginBottom:"0 !important"
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;",
  },
  headerLeft: {
    display: "flex",
    justifyContent: "flex-start"
  }
}));

const AntTabs = withStyles((theme) => ({
  root: {
    color: "#25345C",
    background: "white",
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
}))((props) => <Tabs  {...props}/>) ;

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
export default function Safety(){
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
                <CardBody className="body">
                  <GridContainer style={{padding: 16}}>
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer style={{padding: "0 16px",alignItems: "center"}}>
                        <GridItem xs={8} sm={10} md={10}>
                          <AppBar className="safety-tab" position="static">
                            <AntTabs variant="scrollable" scrollButtons="auto" scrollButtons="on" value={value} onChange={handleChange}>
                              <AntTab label="Inbox List" {...a11yProps(0)} />
                              <AntTab label="Resolved List" {...a11yProps(1)} />
                              <AntTab label="Dismissed" {...a11yProps(2)} />
                              <AntTab label="Starred" {...a11yProps(3)} />
                            </AntTabs>
                          </AppBar>
                        </GridItem>
                        <GridItem xs={4} sm={2} md={2} className="headerRight">
                          <FormControl variant="outlined" className="moreIcon">
                            <IconButton>
                              <MoreHorizIcon fontSize="large" />
                            </IconButton>
                          </FormControl>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <GridContainer style={{padding: 16}}>
                    <GridItem xs={12} sm={12} md={12}>
                      <GridContainer style={{padding: "0 16px",alignItems: "center"}}>
                        <GridItem xs={6} sm={6} md={6} className={classes.headerLeft}>
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
                        </GridItem>
                        <GridItem xs={6} sm={6} md={6} className="headerRight">
                          <IconButton className="filterButtonText">
                            <FilterIcon className="filterIcon"/>
                            Filter
                          </IconButton>
                        </GridItem>
                      </GridContainer>
                    </GridItem>
                  </GridContainer>
                  <TabPanel value={value} index={0}>
                    <SafetyCard/>
                    <SafetyCard/>
                    <SafetyCard/>
                    <Button variant="contained" size="large" className="reloadButton">
                      <ReplayIcon/>
                    </Button>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                  </TabPanel>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
