import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Link} from "react-router-dom";

import Button from "components/CustomButtons/Button.js";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";
import DotIcon from "../../../../../components/Icons/DotIcon";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import {MoreHoriz} from "@material-ui/icons";

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
    margin: "30px 0 0 20px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  cardContainer: {
    padding: "0 20px"
  },
  textName: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '24px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: "11px"
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
    marginTop: '24px',
  },
  txtListItemPrimary: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: '"Lato", sans-serif',
    color: '#25345C'
  },
  txtListItemPrimarySub: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: '"Lato", sans-serif',
    color: '#25345C'
  },
  txtListHeader: {
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: '"Lato", sans-serif',
    color: '#25345C',
    paddingBottom: "16px !important",
    paddingTop: "10px"
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: '24px'
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  liveSharingButton: {
    textAlign: "right",
  },
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 16px 0px"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
};

const dumpData = [
  {email: 'alma.lawson@example.com', role: 'Super Admin'},
];

const useStyles = makeStyles(styles);
export default function Tags() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState("Name Tags A");

  const handleClick = (tabName) => {
    console.log(`on click tab: ${tabName}`)
    if (tabName === currentTab) {
      setOpen(!open);
    } else {
      setOpen(true);
      setCurrentTab(tabName);
    }
  };

  const isOpenList = (tabName) => {
    return open && currentTab === tabName;
  }

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatLinkExpires = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><DotIcon style={{color: "#7CE7AC"}}/></div>
        <div className={classes.textSub}>{cell}</div>
      </div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
      </>
    )
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card testmonial>
            <GridContainer className={classes.liveSharingHeader}>
              <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                Tag Lists (10)
              </GridItem>
              <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                <SettingSearchBox placeholder={"Search for tag or email"}/>
                {/* <Button
                  color="white"
                  aria-label="edit"
                  justIcon
                  round
                  className={`btn-36 ${classes.moreAction} mr-2`}
                >
                  <MoreHoriz />
                </Button> */}
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer className={classes.cardContainer}>

                  <GridItem xs={12} sm={3} md={3}>
                    <Card testmonial>
                      <CardBody>
                        <List
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                          subheader={
                            <ListSubheader component="div" id="nested-list-subheader" className={classes.txtListHeader}>
                              Tags list
                            </ListSubheader>
                          }
                          className={classes.root}
                        >
                          {/* Name Tags A */}
                          <ListItem button onClick={() => handleClick(`Name Tags A`)}>
                            <ListItemText primary="Name Tags A" classes={{primary: classes.txtListItemPrimary}}/>
                            {isOpenList(`Name Tags A`) ? <ExpandLess/> : <ExpandMore/>}
                          </ListItem>
                          <Collapse in={isOpenList(`Name Tags A`)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <Link to="/setting/org/user-roles">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 1"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/user-roles">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 2"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/drivers">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 3"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>

                          {/* Name Tags B */}
                          <ListItem button onClick={() => handleClick(`Name Tags B`)}>
                            <ListItemText primary="Name Tags B" classes={{primary: classes.txtListItemPrimary}}/>
                            {isOpenList(`Name Tags B`) ? <ExpandLess/> : <ExpandMore/>}
                          </ListItem>
                          <Collapse in={isOpenList(`Name Tags B`)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <Link to="/setting/org/general">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 1"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/user-roles">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 2"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/drivers">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 3"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>

                          {/* Name Tags C */}
                          <ListItem button onClick={() => handleClick(`Name Tags C`)}>
                            <ListItemText primary="Name Tags C" classes={{primary: classes.txtListItemPrimary}}/>
                            {isOpenList(`Name Tags C`) ? <ExpandLess/> : <ExpandMore/>}
                          </ListItem>
                          <Collapse in={isOpenList(`Name Tags C`)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <Link to="/setting/org/general">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 1"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/user-roles">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 2"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/drivers">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 3"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>

                          {/* Name Tags D */}
                          <ListItem button onClick={() => handleClick(`Name Tags D`)}>
                            <ListItemText primary="Name Tags D" classes={{primary: classes.txtListItemPrimary}}/>
                            {isOpenList(`Name Tags D`) ? <ExpandLess/> : <ExpandMore/>}
                          </ListItem>
                          <Collapse in={isOpenList(`Name Tags D`)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                <Link to="/setting/link-sharing/alert-contacts">
                                  <ListItemText primary="Alert Contacts"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </Link>
                              </ListItem>
                              <ListItem button className={classes.nested}>
                                <Link to="/setting/link-sharing/scheduled-reports">
                                  <ListItemText primary="Scheduled Reports"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </Link>
                              </ListItem>
                              <ListItem button className={classes.nested}>
                                <Link to="/setting/link-sharing/live-sharing">
                                  <ListItemText primary="Live Sharing"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </Link>
                              </ListItem>
                            </List>
                          </Collapse>

                          {/* Name Tags E */}
                          <ListItem button onClick={() => handleClick(`Name Tags E`)}>
                            <ListItemText primary="Name Tags E" classes={{primary: classes.txtListItemPrimary}}/>
                            {isOpenList(`Name Tags E`) ? <ExpandLess/> : <ExpandMore/>}
                          </ListItem>
                          <Collapse in={isOpenList(`Name Tags E`)} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <Link to="/setting/org/general">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 1"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/user-roles">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 2"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                              <Link to="/setting/org/drivers">
                                <ListItem button className={classes.nested}>
                                  <ListItemText primary="Names Tags 3"
                                                classes={{primary: classes.txtListItemPrimarySub}}/>
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                        </List>

                      </CardBody>
                    </Card>
                  </GridItem>

                  <GridItem xs={12} sm={9} md={9}>
                    <Card testmonial className={classes.cardInside}>
                      <CardBody>

                      </CardBody>

                      <ToolkitProvider
                        data={dumpData}
                        keyField="_id"
                        columns={[
                          {
                            dataField: "email",
                            text: "Email",
                            formatter: formatName
                          },
                          {
                            dataField: "role",
                            text: "Role",
                            formatter: formatLinkExpires
                          },
                          {
                            dataField: "action",
                            text: "Actions",
                            formatter: addActionButton
                          }
                        ]}
                      >
                        {props => (
                          <div className="table table-settings">
                            <BootstrapTable
                              {...props.baseProps}
                              bootstrap4={true}
                              bordered={false}
                            />
                            <Row className="justify-content-center">
                            </Row>
                          </div>
                        )}
                      </ToolkitProvider>

                    </Card>
                    <Card testmonial className={classes.cardInside}>
                      <CardBody>

                      </CardBody>
                      <ToolkitProvider
                        data={dumpData}
                        keyField="_id"
                        columns={[
                          {
                            dataField: "email",
                            text: "Email",
                            formatter: formatName
                          },
                          {
                            dataField: "role",
                            text: "Role",
                            formatter: formatLinkExpires
                          },
                          {
                            dataField: "action",
                            text: "Actions",
                            formatter: addActionButton
                          }
                        ]}
                      >
                        {props => (
                          <div className="table table-settings">
                            <BootstrapTable
                              {...props.baseProps}
                              bootstrap4={true}
                              bordered={false}
                            />
                            <Row className="justify-content-center">
                            </Row>
                          </div>
                        )}
                      </ToolkitProvider>

                    </Card>
                    <Card testmonial className={classes.cardInside}>
                      <CardBody>

                      </CardBody>
                      <ToolkitProvider
                        data={dumpData}
                        keyField="_id"
                        columns={[
                          {
                            dataField: "email",
                            text: "Email",
                            formatter: formatName
                          },
                          {
                            dataField: "role",
                            text: "Role",
                            formatter: formatLinkExpires
                          },
                          {
                            dataField: "action",
                            text: "Actions",
                            formatter: addActionButton
                          }
                        ]}
                      >
                        {props => (
                          <div className="table table-settings">
                            <BootstrapTable
                              {...props.baseProps}
                              bootstrap4={true}
                              bordered={false}
                            />
                            <Row className="justify-content-center">
                            </Row>
                          </div>
                        )}
                      </ToolkitProvider>

                    </Card>
                  </GridItem>

                </GridContainer>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
