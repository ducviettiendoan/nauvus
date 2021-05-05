import React from "react";
import { connect } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { getInsidents } from "reducers/alerts";
import Card from "components/Card/Card.js";
import { Col, Row } from "reactstrap";
import GeneralOrganization from "../settings/org/components/GeneralOrganization";
import GeneralLanguageRegion from "../settings/org/components/GeneralLanguageRegion";
import GeneralConnection from "../settings/org/components/GeneralConnection";
import GeneralAdvanced from "../settings/org/components/GeneralAdvanced";
import ConfigureDetails from './ConfigureDetails';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8,
    },
  },
  textName: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "24px",
    color: "#25345C",
  },
  textBold: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: 700,
  },
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px",
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  tableTitle: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
  },
  centerTitle: {
    display: "flex",
    alignItems: "center",
  },
  nearMeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    color: "#fff",
    borderRadius: "50%",
    "&> svg": {
      fontSize: 16,
    },
  },
  boxNearMeIcon: {
    display: "flex",
  },
  cardConfigure: {
    height: "100%",
  },
  cardContainer: {
    marginTop: "15px !important",
    // height: "calc(100vh - 100px)"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
  },
  areaGrow: {
    flexGrow: "1",
    marginRight: "59px",
  },
  areaMenu: {
    [theme.breakpoints.up("md")]: {
      width: "237px",
    },
  },
  footer: {
    // position: 'absolute',
    // bottom: '16px',
    marginTop: "16px",
    marginBottom: "16px",
    width: "100%",
  },
  icons: {
    width: "22px",
    height: "22px",
    color: "#C4C4C4",
  },
  iconsActive: {
    width: "22px",
    height: "22px",
    color: "#25345C",
  },
  root: {
    width: "100%",
    alignItems: "center",
    background: "#FFFFFF",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  itemTextRoot: {
    marginTop: "-6px",
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
    // marginLeft: "-5px",
    [theme.breakpoints.up("md")]: {
      minWidth: "32px",
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "19px",
    },
  },
  listItemButton: {
    "&:hover": {
      background: "none !important",
    },
  },
  listItemRoot: {
    paddingTop: "20px",
  },
}));

export function Configure(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
  }, []);

  const [tab, setTab] = React.useState(1);

  return (
    <div className={classes.cardConfigure}>
      <Row>
        <Col>
          <Card className={classes.cardContainer}>
            <Row>
              <Col>
                <div className={classes.contentContainer}>
                  <div className={classes.areaGrow}>
                    {tab === 1 && <ConfigureDetails />}
                    {tab === 2 && <ConfigureDetails />}
                    {tab === 3 && <ConfigureDetails />}
                    {tab === 4 && <ConfigureDetails />}
                    {tab === 5 && <ConfigureDetails />}
                    {tab === 6 && <ConfigureDetails />}
                    {tab === 7 && <ConfigureDetails />}
                    {tab === 8 && <ConfigureDetails />}
                    {tab === 9 && <ConfigureDetails />}
                    {tab === 10 && <ConfigureDetails />}
                  </div>
                  <div className={classes.areaMenu}>
                    <List className={classes.root}>
                      <ListItem
                        button
                        onClick={() => setTab(1)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Device Unplugged"
                            secondary="New Device Unplugged Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(2)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Device Battery Level"
                            secondary="New Device Battery Level Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(3)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Geofence"
                            secondary="New Geofence Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(4)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Speed"
                            secondary="New Speed Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(5)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Fault Codes"
                            secondary="New Fault Codes Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(6)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Vehicle Engine Idle"
                            secondary="New Vehicle Engine Idle Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(7)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Vehicle Battery"
                            secondary="New Vehicle Battery Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(8)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Movement"
                            secondary="New Movement Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(9)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                        style={{ borderBottom: "1px solid #ECEEF0" }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Unsafe DVIR"
                            secondary="New Unsafe DVIR Alert"
                          />
                        </Hidden>
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => setTab(10)}
                        classes={{
                          root: classes.listItemRoot,
                          button: classes.listItemButton,
                        }}
                      >
                        <Hidden smDown implementation="css">
                          <ListItemText
                            classes={{
                              root: classes.itemTextRoot,
                              primary: classes.primaryText,
                              secondary: classes.secondaryText,
                            }}
                            primary="Safe DVIR with Defects"
                            secondary="New Safe DVIR with Defects Alert"
                          />
                        </Hidden>
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

const mapStateToProps = ({ alerts }) => {
  return {};
};

const mapDispatchToProps = {
  getInsidents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Configure);
