import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import OrganizationIcon from "components/Icons/OrganizationIcon";
import LanguageIcon from "components/Icons/LanguageIcon";
import ConnectionIcon from "components/Icons/ConnectionIcon";
import AdvancedIcon from "components/Icons/AdvancedIcon";
import DeleteButton from "components/CustomButtons/DeleteButton";
import Switch from "components/CustomSwitch/Switch.jsx"
import { Divider } from "@material-ui/core";

import { Row, Col } from "reactstrap";

const styles = {
  cardContainer: {
    marginTop: "15px !important",
    height: "calc(100vh - 100px)"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
  },
  areaGrow: {
    flexGrow: "1"
  },
  areaMenu: {
    width: "237px"
  },
  testimonialIcon: {
    color: "red",
    marginTop: "30px",
    "& svg": {
      width: "20px",
      height: "20px"
    }
  },
  footer: {
    position: 'absolute',
    bottom: '16px',
    width: '100%'
  },

  icons: {
    width: "22px",
    height: "22px",
    color: "#C4C4C4",
    "&:hover": {
        color: "#25345C"
    }
  },
  root: {
      width: '100%',
      // display: flex;
      alignItems: "center",
      //padding: "14px 16px",
      width: "237px",
      //height: "65px",
      background: "#FFFFFF",
      border: "1px solid #ECEEF0",
      boxSizing: "border-box",
      borderRadius: "12px",
      paddingTop: '0px',
      paddingBottom: '0px'
  },
  itemTextRoot: {
      marginTop: '-6px'
  },
  primaryText: {
      fontFamily: "Lato",
      fontWeight: "bold",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#25345C",
  },
  secondaryText: {
      fontFamily: "Lato",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "18px",
      color: "#C4C4C4",
  },
  iconRoot: {
      marginTop: "-8px",
      marginLeft: "-5px",
      minWidth: "29px",
  },
  listItemButton: {
      "&:hover": {
          background: 'none !important'
      }
  },
  listItemRoot: {
    paddingTop: '20px'
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "28px 0px 20px 0px !important"
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
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
  advancedSettings: {
    padding: "2px 0px 0px 0px !important",
    marginLeft: "-6px !important",
  },
  advancedTitle: {
    padding: "0px 0px 16px 0px !important",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C"
  },
  advancedTagContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  advancedChoice: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
    padding: "0px 0px 16px 0px !important",
  },
  tagChoice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 0px 0px 0px !important"
  },
  radioButtonGroup: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 0px 0px 0px !important"
  },
  inputWrapper: {
    textAlign: "right",
    padding: "0px 0px 0px 0px !important"
  },
  engineTitle: {
    padding: "0px 0px 16px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#25345C",
  },
  engineDescription: {
    padding: "0px 0px 24px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#B4B4B4",
  },
  sliderContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  buttonContainer: {
    padding: "0px 0px 27px 0px !important",
    display: "flex",
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },

  cardContainer: {
    padding: "0px 0px 0px 16px !important",
    marginTop: "15px !important",
    height: "calc(100vh - 100px)"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important"
  },
  centerSwitch: {
    position: "absolute !important",
    top: "0  !important", bottom: "0  !important", left: "0  !important", right: "0  !important",
    margin: "auto !important"
  }
};

const useStyles = makeStyles(styles);

export default function DriverAppGeneral() {
  const [tab, setTab] = React.useState(1);
  const classes = useStyles();

  const handleChange = (event) => {
  };

  return (
    <div>
      <Row>
        <Col>
          <Card className={classes.cardContainer}>
            <Row>
              <Col>
                  <div className={classes.contentContainer}>
                    <GridItem className={classes.cardMultipleContent}>
                        <GridItem xs={8} sm={8} md={8} className={classes.gridContent}>
                          <CardBody className={classes.cardItem}>
                            <GridItem className={classes.headerItem}>
                              Enable Vehicle Battery Conservation Mode
                            </GridItem>
                            <GridItem className={classes.contentItem}>
                              By default, the Samsara Vehicle Gateway uses a small amount of vehicle battery when idle. This
                              is the recommended setting for most vehicles.
                              Vehicle Battery Conservation Mode further reduces consumption of the vehicle battery by the
                              Gateway when the vehicle is not in use, and is intended
                              for vehicles that are subject to battery drain under default settings.
                            </GridItem>
                            <GridItem className={classes.contentItem}>
                              When in Vehicle Battery Conservation Mode, Gateway functionality including WiFi hotspot
                              connectivity and camera video retrieval will not be available.
                              The Gateway will wake when vehicle motion resumes, resulting in reduced GPS tracking accuracy
                              at the beginning of a trip.
                            </GridItem>
                          </CardBody>
                          <div style={{ position: "relative"}}>
                              <Switch onChange={handleChange} style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, margin: "auto" }}/>
                          </div>
                        </GridItem>
                        <Divider variant="fullWidth" light />
                    </GridItem>
                  </div>
              </Col>
            </Row>
            <Row className={ classes.footer }>
              <Col>
                <div style={{ marginLeft: '16px' }}>
                  <Button round className="btn-round-active w-178 mr-4">
                    Save
                  </Button>
                  <Button round className="btn-round-active-2">
                    Cancel
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
