import React from "react";
import { ROUTE_PATH } from "config/constants";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {Link} from "react-router-dom";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Button from "components/CustomButtons/Button";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import DotIcon from "components/Icons/DotIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {connect} from "react-redux";
import {getTags} from "reducers/setting-org";
import Table from "components/Table/TableV1";
import DiaLog from "components/CustomDialog/Dialog";
import AddAdminForm from "./tags/AddAdminForm";

const styles = {
  cardContainer: {
    padding: "0 20px",
  },
  textName: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#25345C",
  },
  textSub: {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "11px",
    fontWeight: "400",
  },
  iconButton: {
    "&:hover": {
      color: "#25345C !important",
    },
  },
  txtListItemPrimary: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: '"Lato", sans-serif',
    color: "#25345C",
  },
  txtListItemPrimarySub: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: '"Lato", sans-serif',
    color: "#25345C",
  },
  txtListHeader: {
    fontWeight: "700",
    fontSize: "14px",
    lineHeight: "21px",
    fontFamily: '"Lato", sans-serif',
    color: "#25345C",
    paddingBottom: "16px !important",
    paddingTop: "10px",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
  },
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 16px 0px",
  },
  addAction: {
    background: "#25345C !important",
    marginTop: "2px",
    height: "42px!important",
    padding: "0px 22px !important",
  },
  deleteIcon: {
    color: "#C4C4C4",
    width: "24px",
    height: "24px",
    margin: "10px 10px 5px 18px",
  },
  flexIcon: {
    display: "flex",
    justifyContent: "flex-end",
  },
  centerSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: "16px"
  },
  centerTag: {
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "400",
  },
  pushLeft: {
    color: "#C4C4C4",
    fontWeight: "400",
  },
  editIcon: {
    color: "#ffffff",
    width: "22px !important",
    height: "22px !important",
    marginTop: "0px",
  },
  deleteIcon2: {
    color: "#C4C4C4",
    width: "24px !important",
    height: "24px !important",
    margin: "0px",
    marginTop: "2px"
  },
  buttonContainer: {
    paddingTop: "15px !important",
    marginTop: "4px !important",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
};


const useStyles = makeStyles(styles);

export function Tags(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getTags();
  }, []);

  const [openAdd, setOpenAdd] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const [currentTab, setCurrentTab] = React.useState("Name Tags A");

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


  const columns = [
    {
      title: 'Email',
      key: 'email',
      onHeaderCell: { className: classes.onHeaderCell },
      render: cell => <div className={classes.textName}>{cell}</div>,
    },
    {
      title: 'Role',
      key: 'role',
      onHeaderCell: { className: classes.onHeaderCell },
      render: (cell) => {
        return (
        <>
          <div className={classes.alignItemsCenter}>
            <div>
              <DotIcon style={{color: "#7CE7AC"}}/>
            </div>
            <div className={classes.textSub}>{cell}</div>
          </div>
        </>
        )
      }
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
          <>
            <Button justIcon color="twitter" simple>
              <EditIcon
                  className={classes.iconButton}
                  style={{color: "#ffffff", width: "22px", height: "22px"}}
              />
            </Button>
            <Button justIcon color="google" simple>
              <DeleteIcon
                  className={classes.iconButton}
                  style={{color: "#C4C4C4", width: "24px", height: "24px"}}
              />
            </Button>
          </>
      )
    }
  ];

  return (
    <div>
      <GridContainer>
        <DiaLog
            renderTitle={<h3 className={classes.dialogTitle}>Add Admin</h3>}
            handleClose={() => {setOpenAdd(false)}
            }
            open={openAdd}
        >
          <AddAdminForm handleClose={() => {setOpenAdd(false)}}/>
        </DiaLog>
        <GridItem xs={12} sm={12} md={12}>
          <Card testmonial>
            <GridContainer className={classes.liveSharingHeader}>
              <GridItem
                xs={4}
                sm={4}
                md={4}
                className={classes.liveSharingTitle}
              >
                Tag Lists (10)
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <ToolboxButton placeholder={"Search for tag or email"} showFilter showTrash/>
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
                            <ListSubheader
                              component="div"
                              id="nested-list-subheader"
                              className={classes.txtListHeader}
                            >
                              Tags list
                            </ListSubheader>
                          }
                          className={classes.root}
                        >
                          {/* Name Tags A */}
                          <ListItem
                            button
                            onClick={() => handleClick(`Name Tags A`)}
                          >
                            <ListItemText
                              primary="Name Tags A"
                              classes={{primary: classes.txtListItemPrimary}}
                            />
                            {isOpenList(`Name Tags A`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Name Tags A`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <Link to={ ROUTE_PATH.SETTING + "/org/user-roles"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 1"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/user-roles"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 2"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/drivers"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 3"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                          {/* Name Tags B */}
                          <ListItem
                            button
                            onClick={() => handleClick(`Name Tags B`)}
                          >
                            <ListItemText
                              primary="Name Tags B"
                              classes={{primary: classes.txtListItemPrimary}}
                            />
                            {isOpenList(`Name Tags B`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Name Tags B`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <Link to={ ROUTE_PATH.SETTING + "/org/general"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 1"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/user-roles"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 2"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/drivers"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 3"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                          {/* Name Tags C */}
                          <ListItem
                            button
                            onClick={() => handleClick(`Name Tags C`)}
                          >
                            <ListItemText
                              primary="Name Tags C"
                              classes={{primary: classes.txtListItemPrimary}}
                            />
                            {isOpenList(`Name Tags C`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Name Tags C`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <Link to={ ROUTE_PATH.SETTING + "/org/general"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 1"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/user-roles"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 2"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/drivers"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 3"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                          {/* Name Tags D */}
                          <ListItem
                            button
                            onClick={() => handleClick(`Name Tags D`)}
                          >
                            <ListItemText
                              primary="Name Tags D"
                              classes={{primary: classes.txtListItemPrimary}}
                            />
                            {isOpenList(`Name Tags D`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Name Tags D`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <ListItem button className={classes.nested}>
                                <Link to={ ROUTE_PATH.SETTING + "/link-sharing/alert-contacts"}>
                                  <ListItemText
                                    primary="Alert Contacts"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </Link>
                              </ListItem>
                              <ListItem button className={classes.nested}>
                                <Link to={ ROUTE_PATH.SETTING + "/link-sharing/scheduled-reports"}>
                                  <ListItemText
                                    primary="Scheduled Reports"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </Link>
                              </ListItem>
                              <ListItem button className={classes.nested}>
                                <Link to={ ROUTE_PATH.SETTING + "/link-sharing/live-sharing"}>
                                  <ListItemText
                                    primary="Live Sharing"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </Link>
                              </ListItem>
                            </List>
                          </Collapse>
                          {/* Name Tags E */}
                          <ListItem
                            button
                            onClick={() => handleClick(`Name Tags E`)}
                          >
                            <ListItemText
                              primary="Name Tags E"
                              classes={{primary: classes.txtListItemPrimary}}
                            />
                            {isOpenList(`Name Tags E`) ? (
                              <ExpandLess/>
                            ) : (
                              <ExpandMore/>
                            )}
                          </ListItem>
                          <Collapse
                            in={isOpenList(`Name Tags E`)}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List component="div" disablePadding>
                              <Link to={ ROUTE_PATH.SETTING + "/org/general"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 1"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/user-roles"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 2"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                              <Link to={ ROUTE_PATH.SETTING + "/org/drivers"}>
                                <ListItem button className={classes.nested}>
                                  <ListItemText
                                    primary="Names Tags 3"
                                    classes={{
                                      primary: classes.txtListItemPrimarySub,
                                    }}
                                  />
                                </ListItem>
                              </Link>
                            </List>
                          </Collapse>
                        </List>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={9} md={9}>
                      <Table
                          renderTitle={
                            <CardBody>
                            <GridContainer>
                              <GridItem xs={2} sm={2} md={4} lg={1} xl={3} className={classes.centerTag}>
                                Tags
                              </GridItem>
                              <GridItem xs={9} sm={9} md={5} lg={9} xl={7} className={classes.centerSection}>
                                <GridItem className={classes.pushLeft}>
                                  1 vehicle
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 trailer
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 address
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 driver
                                </GridItem>
                              </GridItem>
                              <GridItem xs={1} sm={1} md={3} lg={2} xl={2} className={classes.flexIcon}>
                                <Button
                                    justIcon
                                    color="twitter"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <EditIcon className={classes.editIcon}/>
                                </Button>
                                <Button
                                    justIcon
                                    color="google"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <DeleteIcon
                                      className={`${classes.iconButton} ${classes.deleteIcon2}`}
                                  />
                                </Button>

                                <Button
                                    round
                                    justIcon
                                    className={`btn-36 ${classes.addAction} mr-2`}
                                    onClick={() => {setOpenAdd(true)}}
                                >
                                  <AddOutlined style={{color: "#C4C4C4"}}/>
                                </Button>
                              </GridItem>
                            </GridContainer>
                            </CardBody>


                              }
                          columns={columns}
                          dataSource={props.data}
                          onHeaderRow={{ className: classes.onHeaderRow }}
                          onBodyRow={{ className: classes.tableRow }}
                      />
                    <Table
                        renderTitle={
                          <CardBody>
                            <GridContainer>
                              <GridItem xs={2} sm={2} md={4} lg={1} xl={3} className={classes.centerTag}>
                                Tags
                              </GridItem>
                              <GridItem xs={9} sm={9} md={5} lg={9} xl={7} className={classes.centerSection}>
                                <GridItem className={classes.pushLeft}>
                                  1 vehicle
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 trailer
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 address
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 driver
                                </GridItem>
                              </GridItem>
                              <GridItem xs={1} sm={1} md={3} lg={2} xl={2} className={classes.flexIcon}>
                                <Button
                                    justIcon
                                    color="twitter"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <EditIcon className={classes.editIcon}/>
                                </Button>
                                <Button
                                    justIcon
                                    color="google"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <DeleteIcon
                                      className={`${classes.iconButton} ${classes.deleteIcon2}`}
                                  />
                                </Button>

                                <Button
                                    round
                                    justIcon
                                    className={`btn-36 ${classes.addAction} mr-2`}
                                    onClick={() => {setOpenAdd(true)}}
                                >
                                  <AddOutlined style={{color: "#C4C4C4"}}/>
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </CardBody>


                        }
                        columns={columns}
                        dataSource={props.data}
                        onHeaderRow={{ className: classes.onHeaderRow }}
                        onBodyRow={{ className: classes.tableRow }}
                    />
                    <Table
                        renderTitle={
                          <CardBody>
                            <GridContainer>
                              <GridItem xs={2} sm={2} md={4} lg={1} xl={3} className={classes.centerTag}>
                                Tags
                              </GridItem>
                              <GridItem xs={9} sm={9} md={5} lg={9} xl={7} className={classes.centerSection}>
                                <GridItem className={classes.pushLeft}>
                                  1 vehicle
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 trailer
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 address
                                </GridItem>
                                <GridItem className={classes.pushLeft}>
                                  1 driver
                                </GridItem>
                              </GridItem>
                              <GridItem xs={1} sm={1} md={3} lg={2} xl={2} className={classes.flexIcon}>
                                <Button
                                    justIcon
                                    color="twitter"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <EditIcon className={classes.editIcon}/>
                                </Button>
                                <Button
                                    justIcon
                                    color="google"
                                    simple
                                    className={classes.buttonContainer}
                                >
                                  <DeleteIcon
                                      className={`${classes.iconButton} ${classes.deleteIcon2}`}
                                  />
                                </Button>

                                <Button
                                    round
                                    justIcon
                                    className={`btn-36 ${classes.addAction} mr-2`}
                                    onClick={() => {setOpenAdd(true)}}
                                >
                                  <AddOutlined style={{color: "#C4C4C4"}}/>
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </CardBody>


                        }
                        columns={columns}
                        dataSource={props.data}
                        onHeaderRow={{ className: classes.onHeaderRow }}
                        onBodyRow={{ className: classes.tableRow }}
                    />
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

export default connect(
  ({settingOrg}) => ({
    data: settingOrg.tags.data
  }),
  {
    getTags
  }
)(Tags);