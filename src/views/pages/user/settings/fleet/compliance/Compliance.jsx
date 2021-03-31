import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import Card from "components/Card/Card.js";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Row, Col} from "reactstrap";
import ComplianceCarrierInfo from "./ComplianceCarrierInfo";
import ComplianceNotifications from "./ComplianceNotifications";
import ComplianceRuleSet from "./ComplianceRuleSet";

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
    width: "237px",
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
  listItemButton: {
    "&:hover": {
      background: 'none !important'
    }
  },
  listItemRoot: {
    paddingTop: '20px'
  },
};

const useStyles = makeStyles(styles);

export default function Compliance() {
  const [tab, setTab] = React.useState(1);
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
                    {tab === 1 && <ComplianceCarrierInfo/>}
                    {tab === 2 && <ComplianceNotifications/>}
                    {tab === 3 && <ComplianceRuleSet/>}
                  </div>
                  <div className={classes.areaMenu}>
                    <List className={classes.root}>
                      <ListItem button
                                onClick={() => setTab(1)}
                                classes={{root: classes.listItemRoot, button: classes.listItemButton}}
                                style={{borderBottom: '1px solid #ECEEF0'}}>
                        <ListItemText classes={{
                          root: classes.itemTextRoot,
                          primary: classes.primaryText,
                          secondary: classes.secondaryText
                        }} primary="Carrier Information"
                                      secondary="Information set here will be displayed in roadside inspections and in the transferred US DOT datafile. To override these fields for specific drivers, please visit Driver Settings."/>
                      </ListItem>
                      <ListItem button
                                onClick={() => setTab(2)}
                                classes={{root: classes.listItemRoot, button: classes.listItemButton}}
                                style={{borderBottom: '1px solid #ECEEF0'}}>
                        <ListItemText classes={{
                          root: classes.itemTextRoot,
                          primary: classes.primaryText,
                          secondary: classes.secondaryText
                        }} primary="Notification"
                                      secondary="Keep track of asset usage to improve efficiency across your fleet."/>
                      </ListItem>
                      <ListItem button
                                onClick={() => setTab(3)}
                                classes={{root: classes.listItemRoot, button: classes.listItemButton}}
                                style={{borderBottom: '1px solid #ECEEF0'}}>
                        <ListItemText classes={{
                          root: classes.itemTextRoot,
                          primary: classes.primaryText,
                          secondary: classes.secondaryText
                        }} primary="Driver Ruleset" secondary="HOS rules for drivers."/>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
