import React, {useState} from "react";
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
import Button from "components/CustomButtons/Button.js";
import AddOutlined from "@material-ui/icons/AddOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import ExportCustomReport from "./reports/ExportCustomReport";
import DiaLog from "components/CustomDialog/Dialog";


const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    padding: "0 16px !important",  
    marginBottom: "0px !important",
  },
  topHeaderButton: {
    textAlign: "right",
    
  },
  titleHeader: {
    fontSize: "18px",
    lineHeight: "22px",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: "4"
  },
  detail: {
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 12
  },
  listCard: {
    border: "1px solid rgba(236, 238, 240, 1)",
    borderRadius: "10px",
    marginBottom: 8
  },
  dialogTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26.4px",
    color: "#25345C"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4"
  },
  editHeader: {
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

export default function Reports() {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState("Activity");

  const handleClick = (tabName) => {
    console.log(`on click tab: ${tabName}`);
    if (tabName === currentTab) {
      setOpen(!open);
    } else {
      setOpen(true);
      setCurrentTab(tabName);
    }
  };

  const isOpenList = (tabName) => {
    return open && currentTab === tabName;
  };

  const openAssignHOS = () => {
    setOpenForm(true)
  }

  const closeAssignHOS = () => {
    setOpenForm(false)
  }

  return (
    <div>
       <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={4} xl={2} className={classes.topHeaderTitle}>
                <SettingSearchBox className={classes.searchBox} style={{marginBottom: "0"}} placeholder="Search reports by name or category" />
                 
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined />}
                    onClick={openAssignHOS}
                  >
                    Create Custom Report
                  </Button>
                </GridItem>
              </GridContainer>
              <Card>
                <CardBody>
                  <List
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                          className={classes.root}
                        >
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Activity`)}
                          >
                            <ListItemText
                              primary="Activity"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Activity`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Activity`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Activity Summary`)}
                          >
                            <ListItemText
                              primary="Activity Summary"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Activity Summary`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Activity Summary`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Trip History`)}
                          >
                            <ListItemText
                              primary="Trip History"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Trip History`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Trip History`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Jurisdiction Mileage`)}
                          >
                            <ListItemText
                              primary="Jurisdiction Mileage"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Jurisdiction Mileage`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Jurisdiction Mileage`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Start/Stop`)}
                          >
                            <ListItemText
                              primary="Start/Stop"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Start/Stop`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Start/Stop`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Privacy Sessions`)}
                          >
                            <ListItemText
                              primary="Privacy Sessions"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Privacy Sessions`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Privacy Sessions`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Time On Site`)}
                          >
                            <ListItemText
                              primary="Time On Site"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Time On Site`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Time On Site`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Co-Location`)}
                          >
                            <ListItemText
                              primary="Co-Location"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Co-Location`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Co-Location`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Fleet Benchmarks`)}
                          >
                            <ListItemText
                              primary="Fleet Benchmarks"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Fleet Benchmarks`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Fleet Benchmarks`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Track distance, driving hours, visits, and other details of your assets and drivers.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Assets`)}
                          >
                            <ListItemText
                              primary="Assets"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Assets`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Assets`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Keep track of asset usage to improve efficiency across your fleet.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Driver Compliance`)}
                          >
                            <ListItemText
                              primary="Driver Compliance"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Driver Compliance`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Driver Compliance`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>View and manage your drivers’ HOS logs, violations, and history in real-time.</GridItem>

                          </Collapse>
                          </div>
                          <div className={classes.listCard} >
                          <ListItem
                            button
                            onClick={() => handleClick(`Driver Safety`)}
                          >
                            <ListItemText
                              primary="Driver Safety"
                              classes={{primary: classes.titleHeader}}
                            />
                            {isOpenList(`Driver Safety`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Driver Safety`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <GridItem className={classes.detail}>Understand safety scores and trends for harsh events, speeding, and coaching.</GridItem>

                          </Collapse>
                          </div>
                        </List>
                </CardBody>

              </Card>
            </GridItem>
          </GridContainer>
          <DiaLog
          fullWidth={true}
          maxWidth="sm"
          renderTitle={<div className={classes.editHeader}>
          <h3 className={classes.dialogTitle}>Export Custom Report</h3>
          <p className={classes.dialogSubTitle}>Custom Report</p>
          </div>}
          handleClose={closeAssignHOS}
          open={openForm}
          >
        <ExportCustomReport handleClose={closeAssignHOS}/>
      </DiaLog>
        </GridItem>
      </GridContainer>

    </div>
  );
}
