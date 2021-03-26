import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Switch from "components/CustomSwitch/Switch.jsx";
import { Divider } from "@material-ui/core";
import Logo from "assets/img/logo_nauvus_text.svg";

import {
  cardTitle,
} from "assets/jss/material-dashboard-pro-react.js";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

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
  marginTop30: {
    marginTop: "30px",
  },
  button: {
    textTransform: "none",
    borderRadius: "22px",
    width: "100%",
    height: "100%",
    fontSize: "14px",
    padding: "12px 22px",
  },

  enabledButton: {
    backgroundColor: "#FFFFFF",
    opacity: "0.4",
  },
  cardContainer: {
    padding: "0px 0px 0px `16px `!important",
    marginRight: "20px",
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important",
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "10px 0px 20px 0px !important",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important",
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  switchButton: {
    display: "flex",
    alignItems: "center",
  },
  tabStyles: {
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
  },

  image:{
      width: "100%",
      height: "80px",
      padding: "12px 10px 0px 0px",
  },

  flexGrid:{
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: "0px !important",
  },

  tabItemStyles: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    display: "block",
    border: "1px inner",
    borderRadius: "30px",
    textAlign: "center",
    transition: "all .5s",
    padding: "12px 22px 12px 22px",
    color: "#25345C",
    height: "auto",
    marginRight: "8px",
    float: "none",
    textTransform: "none !important",
    minWidth: "auto !important",
    minHeight: "41px !important",
    fontWeight: 700,
    marginTop: "16px",
    fontSize: 14,
    "&$selected": {
      "&, &:hover": {
        color: "#FFFFFF",
        backgroundColor: "#00acc1",
        boxShadow: "0 7px 10px -5px rgba(76, 175, 80, 0.4)",
      },
    },
  },
};

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
      {value === index && <Typography>{children}</Typography>}
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

const useStyles = makeStyles(styles);

export default function Apps() {
  const classes = useStyles();
  const [checkedState, setCheckedState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChangeTab}
        className={classes.tabStyles}
        indicatorColor=""
        position="static"
        variant="scrollable"
      >
        <Tab
          className={classes.tabItemStyles}
          label="Available Apps"
          {...a11yProps(0)}
        >
          Available Apps
        </Tab>
        <Tab
          className={`${classes.tabItemStyles} ${classes.enabledButton}`}
          label="Enabled Apps (1)"
          {...a11yProps(1)}
        >
          Enabled Apps (1)
        </Tab>
      </Tabs>

      <TabPanel value={value} index={0}>
        <Card testmonial>
          <CardBody className={classes.cardContainer}>
            <GridItem className={classes.cardMultipleContent}>
              <CardBody className={classes.cardItem}>
                <GridContainer spacing={3}>
                  <GridItem xs={12} sm={3} md={3} lg={2} xl={1}>
                    <img
                      className={classes.image}
                      src={Logo}
                      alt="picture"
                    />
                  </GridItem>

                  <GridItem xs={11} sm={9} md={9} lg={10} xl={11}>
                    <GridContainer className={classes.gridContent}>
                      <GridItem
                        xs={9}
                        sm={8}
                        md={9}
                      >
                        <GridItem className={classes.headerItem}>
                          Nauvus App Marketplace
                        </GridItem>
                        <GridItem className={classes.contentItem}>
                          Visit our app Marketplace for more information about
                          all the intergrations that work with Samsara. Some
                          Samsara intergrations are only available by contacting
                          the vender directly
                        </GridItem>
                      </GridItem>

                      <GridItem
                        xs={3}
                        sm={4}
                        md={3}
                        className={classes.flexGrid}
                      >
                        <Button round className="btn-round-gray w-150 h-41">
                          Go to Marketplace
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <Divider variant="fullWidth" light />
              <GridContainer>
                <GridItem xs={12} sm={3} md={3} lg={2} xl={1}>
                  <img
                    className={classes.image}
                    src={Logo}
                    alt="picture"
                  />
                </GridItem>

                <GridItem
                  xs={11}
                  sm={8}
                  md={9}
                  lg={10}
                  xl={11}
                  className={classes.gridContent}
                >
                  <CardBody className={classes.cardContainer}>
                    <GridItem className={classes.headerItem}>
                      Nauvus App Market
                    </GridItem>
                    <GridItem className={classes.contentItem}>
                      Visit our app Marketplace for more information about all
                      the intergrations that work with Samsara. Some Samsara
                      intergrations are only available by contacting the vender
                      directly
                    </GridItem>
                  </CardBody>
                  <Switch
                    checked={checkedState.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                  />
                </GridItem>
              </GridContainer>
              <Divider variant="fullWidth" light style={{ marginTop: '-10px' }} />
            </GridItem>
          </CardBody>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card testmonial>
          <CardBody>No Data</CardBody>
        </Card>
      </TabPanel>
    </div>
  );
}
