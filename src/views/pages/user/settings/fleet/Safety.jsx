import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import EditIcon from "components/Icons/EditIcon";
import {Divider, Grid, Typography} from "@material-ui/core";
import CustomSwitch from "../../../../../components/CustomSwitch/Switch";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardFooter from "../../../../../components/Card/CardFooter";
import PropTypes from "prop-types";
import CustomSelect from "../../../../../components/CustomSelect/CustomSelect";

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
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    textAlign: "right",
  },
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    padding: "28px 0px 20px 0px !important"
  },
  headerWithButton: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    justifyContent: "space-between"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  vehicleHeaderContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    marginTop: "30px !important",
    padding: "0px 0px 0px 0px !important",
  },
  vehicleSelect: {
    padding: "0px 0px 0px 0px !important",
  },
};

function TabPanel(props) {
  const {children, value, index, ...other} = props;

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

const useStyles = makeStyles(styles);

export default function Safety() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };

  const tabs = [
    {
      id: 0,
      name: "Safety Score"
    },
    {
      id: 1,
      name: "Harsh Events"
    },
    {
      id: 2,
      name: "Event Detection"
    },
    {
      id: 3,
      name: "Coaching"
    },
  ]

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={tabs} tabValue={handleChangeTab} />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<EditIcon />}
                  >
                    Edit Individual Vehicles
                  </Button>
                </GridItem>
              </GridContainer>

              <TabPanel value={value} index={0}>
                <Card>
                  <CardBody className={classes.cardContainer}>
                    <GridItem className={classes.cardMultipleContent}>
                      <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                        <CardBody className={classes.cardItem}>
                          <GridItem className={classes.headerWithButton}>
                            <GridItem className={classes.headerItem}>
                              Safety Score Configuration
                            </GridItem>
                            <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA" />
                          </GridItem>
                          <GridItem className={classes.contentItem}>
                            Set relative importance of safety scores and weights of safety infractions
                          </GridItem>
                          <Button
                              round
                              className="btn-round-white-2"
                          >
                            Configure Scores
                          </Button>
                        </CardBody>

                      </GridItem>
                      <Divider variant="fullWidth" light/>
                    </GridItem>
                  </CardBody>

                </Card>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Card>
                  <CardBody className={classes.cardContainer}>
                    <GridItem className={classes.cardMultipleContent}>
                      <GridItem xs={12} sm={12} md={12} className={classes.vehicleHeaderContainer}>
                        <GridItem className={classes.vehicleHeader}>Vehicle Type</GridItem>
                        <GridItem className={classes.vehicleSelect}>
                          <CustomSelect values={["Automatic", "2", "3"]} />
                        </GridItem>
                      </GridItem>
                    </GridItem>
                  </CardBody>

                </Card>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Card>
                  <CardBody>
                    <h5 className={classes.cardTestimonialDescription}>
                      No Data
                    </h5>
                  </CardBody>
                </Card>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Card testimonial>
                  <div className={classes.testimonialIcon}>
                    <FormatQuote />
                  </div>
                  <CardBody>
                    <h5 className={classes.cardTestimonialDescription}>
                      No Data
                    </h5>
                  </CardBody>
                  <CardFooter testimonial>
                    <h6 className={classes.cardCategory}>@nauvus</h6>
                  </CardFooter>
                </Card>
              </TabPanel>

            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
