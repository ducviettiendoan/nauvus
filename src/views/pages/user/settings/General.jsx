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

import { Row, Col } from "reactstrap";
import OrganizationUpload from "components/CustomUpload/OrganizationUpload";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

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
  }
};

const useStyles = makeStyles(styles);

export default function Settings() {
  const classes = useStyles();
  return (
    <div>
      <Row>
        <Col>
          <Card className={classes.cardContainer}>
            <Row>
              <Col>
                  <div className={classes.contentContainer}>
                    <div className={classes.areaGrow}>
                      <OrganizationUpload />
                      <div>
                        <Row style={{marginTop: '20px', paddingRight: '16px'}}>
                          <Col>
                            <TextField
                              id="standard-full-width"
                              label="Organisation name"
                              placeholder="Global Company"
                              fullWidth
                              margin="normal"
                              InputLabelProps={{
                                shrink: true,
                                classes: { root: classes.textFieldRoot }
                              }}
                              InputProps={{
                                classes: { input: classes.textInputRoot }
                              }}
                            />
                          </Col>
                          <Col>
                            <TextField
                                id="standard-full-width1"
                                label="Driver Fleet ID"
                                placeholder="Driver Fleet ID"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                  shrink: true,
                                  classes: { root: classes.textFieldRoot }
                                }}
                                InputProps={{
                                  classes: { input: classes.textInputRoot }
                                }}
                              />
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className={classes.areaMenu}>
                      <List className={classes.root}>
                        <ListItem button classes={{ root: classes.listItemRoot, button: classes.listItemButton }} style={{ borderBottom: '1px solid #ECEEF0' }}>
                            <ListItemIcon classes={{ root: classes.iconRoot }}>
                                <OrganizationIcon className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText classes={{ root: classes.itemTextRoot, primary: classes.primaryText, secondary: classes.secondaryText }} primary="Organization Information" secondary="Profile foto, name & language" />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItemRoot, button: classes.listItemButton }} style={{ borderBottom: '1px solid #ECEEF0' }}>
                            <ListItemIcon classes={{ root: classes.iconRoot }}>
                                <LanguageIcon className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText classes={{ root: classes.itemTextRoot, primary: classes.primaryText, secondary: classes.secondaryText }} primary="Language and Region" secondary="Description" />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItemRoot, button: classes.listItemButton }} style={{ borderBottom: '1px solid #ECEEF0' }}>
                            <ListItemIcon classes={{ root: classes.iconRoot }}>
                                <ConnectionIcon className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText classes={{ root: classes.itemTextRoot, primary: classes.primaryText, secondary: classes.secondaryText }} primary="Connection" secondary="Description" />
                        </ListItem>
                        <ListItem button classes={{ root: classes.listItemRoot, button: classes.listItemButton }}>
                            <ListItemIcon classes={{ root: classes.iconRoot }}>
                                <AdvancedIcon className={classes.icons} />
                            </ListItemIcon>
                            <ListItemText classes={{ root: classes.itemTextRoot, primary: classes.primaryText, secondary: classes.secondaryText }} primary="Advanced" secondary="Description" />
                        </ListItem>
                      </List>
                    </div>
                  </div>
              </Col>
            </Row>
            <Row className={ classes.footer }>
              <Col>
                <div style={{ marginLeft: '16px' }}>
                  <Button round className="btn-round-active w-178 mr-4">
                    Update Settings
                  </Button>
                  <Button round className="btn-round-active-2">
                    Cancel
                  </Button>
                </div>
              </Col>
              <Col>
                <div><DeleteButton /></div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
