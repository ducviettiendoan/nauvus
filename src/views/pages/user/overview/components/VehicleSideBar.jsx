import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Accordion from "components/Accordion/Accordion";
import ToolboxButton from "components/CustomButtons/ToolboxButton";

import CameraIcon from "components/Icons/CameraIcon";
import VehicleUserIcon from "components/Icons/VehicleUserIcon";
import VehicleLinkIcon from "components/Icons/VehicleLinkIcon";
import OpenInNewTabIcon from "components/Icons/OpenInNewTabIcon";
import LocationIcon from "components/Icons/LocationIcon";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";

import { connect } from 'react-redux';
import { loadVehicles, loadVehiclesMock } from 'reducers/vehicle';
import { Grid } from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import { MoreHoriz } from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import { primaryColor } from "assets/jss/material-dashboard-pro-react";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";

const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  sidebarContainer: {
    overflowY: "auto"
  },
  dropdownContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 16px 16px 16px !important",
    color: "#25345C",
    fontWeight: "bold"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  sidebarHeader: {
    width: "100%",
    height: "65px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 16px 16px 16px !important"
  },
  cardContainer: {
    width: "auto",
    // height: "103px",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "#FFFFFF",
    margin: "0px 15px 8px 15px !important"
  },
  liContainer: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "285px",
    height: "70px",
  },
  txtMainDevice: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    marginBottom: "7px"
  },
  txtSubDevice: {
    color: "#C4C4C4",
    fontSize: "12px",
    lineHeight: "21px",
    position: "relative"
  },
  cameraIcon: {
    position: "absolute",
    top: "20px",
    left: "25px"
  },
  txtSpeed: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "18px",
    color: "#27AE60",
  },
  expansionClasses: {
    padding: "0px 15px 0px 8px !important",
    borderBottom: "0px !important",
    marginTop: "4px !important",
    marginBottom: "4px !important",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    },
    "&:focus": {
      backgroundColor: "#FFFFFF",
      background: "#FFFFFF"
    }
  },
  expansionContentClasses: {
    marginTop: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important"
  },
  expansionPanelClassesRounded: {
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
    border: "1px solid #ECEEF0",
    boxShadow: "inherit"
  },
  cardExpandContent: {
    padding: "16px 0px 16px 0px !important",
    background: "#ECEEF0",
  },
  txtExpansion: {
    color: "#25345C",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "21px",
    paddingLeft: "3px"
  },
  expandedHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  dropdown: {
    borderRadius: "12px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
    width: "230px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  popperInput: {
    paddingBottom: "8px",
    paddingTop: "8px",
  },
  dropdownItem: {
    marginLeft: "8px",
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C',
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "10px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "0px !important"
  },
  chipContainer: {
    paddingBottom: "16px !important"
  },
  chips: {
    color: "#25345C",
    fontSize: "12px",
    marginRight: "5px"
  },
}))

var ps;
export function VehicleSideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      // setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelVehicleSideBar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);

  React.useEffect(() => {
    props.loadVehicles()
    props.loadVehiclesMock()
  }, [])

  // popper
  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const listTag = ["Tag 1", "Tag 2", "Tag 3"]

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setChipData([])
    newChecked.filter((item) => item != 1).map((chip, i) => {
      setChipData((prev) => [
        ...prev,
        {
          key: i,
          label: chip
        }
      ])
    })
  };

  // chip
  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    const newChecked = checked.filter((chip) => chip !== chipToDelete.label)
    console.log(chipToDelete)
    setChecked(newChecked)
  };

  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer} >
      <Divider />
      <div>
        <div>
          <Grid xs={12} sm={12} md={12} className={classes.sidebarHeader}>
            <ToolboxButton placeholder="Search asset" showFilter />
          </Grid>
          <Divider variant="fullWidth" light />
        </div>
      </div>

      <List>
        {/* {props.vehicles.map((vehicle, index) => (
          <ListItem button key={index} className={classes.liContainer}>
            <ListItemIcon className={classes.cameraIcon}><CameraIcon /></ListItemIcon>
            <ListItemText style={{ marginLeft: "50px" }} primary={
              <>
                <div className={classes.txtMainDevice}><span>{vehicle.serialnumber}</span><span style={{ float: "right" }}>- km/h</span></div>
                <div className={classes.txtSubDevice}><VehicleMapIcon /> <span style={{ top: "-2px", position: "absolute", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%', right: '-21px' }}>{vehicle.formatted_address}</span></div>
                <Row className={classes.txtSubDevice}>
                  <Col>
                    <VehicleUserIcon /> <span style={{ top: "-2px", position: "absolute" }}>---</span>
                  </Col>
                  <Col style={{ marginTop: "4px" }}>
                    <VehicleLinkIcon /> <span style={{ top: "-5px", position: "absolute" }}>---</span>
                  </Col>
                </Row>
              </>
            } />
          </ListItem>
        ))} */}

        <Grid className={classes.dropdownContainer}>
          <Grid>Your recent for: </Grid> &nbsp;
          <Grid>
            <Button
              color="white"
              aria-label="edit"
              justIcon
              round
              className={`btn-36 ${classes.moreAction} mr-2`}
              onClick={handleOpenMore}
            >
              <MoreHoriz />
            </Button>
            <Popper
              open={openMore}
              anchorEl={anchorEl}
              transition
              disablePortal
              placement="bottom-end"
              className={classNames({
                [classes.popperClose]: !anchorEl,
                [classes.popperResponsive]: true,
                [classes.popperNav]: true
              })}
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list"
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Paper className={classes.dropdown}>
                    <ClickAwayListener onClickAway={handleCloseMore}>
                      <MenuList role="menu">
                        <Grid xs={12} sm={12} md={12} className={classes.popperInput}>
                          <ToolboxButton placeholder="Search options" />
                        </Grid>
                        <Grid>Tags</Grid>

                        {listTag.map((value) => {
                          return (
                            <MenuItem key={value} className={classes.itemContainer}>
                              <div className={classes.dropdownItem}>
                                <Checkbox
                                  edge="end"
                                  onChange={handleToggle(value)}
                                  checked={checked.indexOf(value) !== -1}
                                  checkedIcon={<CheckSquareOutlined />}
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              </div>
                              <div className={classes.dropdownItem}>
                                {value}
                              </div>
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>

        <GridItem className={classes.chipContainer} >
          {chipData.map(data => (
            <Chip
              deleteIcon={<CloseIcon />}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chips}
            />
          ))}
        </GridItem>


        {props.vehicles.map((vehicle, index) => (
          <Card className={classes.cardContainer}>
            <Accordion collapses={
              [
                {
                  title:
                    <div>
                      <ListItem key={index} className={classes.liContainer}>
                        <div>
                          <ListItemIcon className={classes.cameraIcon}><CameraIcon /></ListItemIcon>
                          <ListItemText style={{ marginLeft: "50px" }} primary={
                            <>
                              <div className={classes.txtMainDevice}><span>{vehicle.id}</span><span style={{ float: "right" }}></span></div>
                              <div className={classes.txtSubDevice}><span style={{ top: "-2px", position: "absolute", whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{vehicle.vehicle}</span></div>
                            </>
                          } />
                        </div>
                        <div className={classes.txtSubDevice}>
                          <span className={classes.txtSpeed}>{vehicle.speed} -km/h</span>
                        </div>
                      </ListItem>
                    </div>,
                  content:
                    <div className={classes.cardExpandContent}>
                      <GridItem className={classes.expandedHeader}>
                        <div>
                          <LocationIcon />
                          <span className={classes.txtExpansion}>Tri-State Toolway, East Hazel Crest , IL</span>
                        </div>
                        <OpenInNewTabIcon />
                      </GridItem>
                      <GridItem>
                        <VehicleUserIcon />
                        <span className={classes.txtExpansion}>Grigory Mamadov</span>
                      </GridItem>
                      <GridItem>
                        <VehicleLinkIcon color="#25345C" />
                        <span className={classes.txtExpansion}>53280</span>
                      </GridItem>
                      <GridItem>
                        <span style={{ color: "#B4B4B4", fontSize: 12 }}>Co Driver:</span> &nbsp;
                        <span className={classes.txtExpansion}>Ali Singh</span>
                      </GridItem>
                    </div>
                },
              ]
            }
              expansionSummaryClasses={{
                root: classes.expansionClasses,
                content: classes.expansionContentClasses
              }}
              expansionPanelClasses={{
                root: classes.expansionPanelClasses,
              }}
              expansionPanelRounded={{
                rounded: classes.expansionPanelClassesRounded,
              }}
            />
          </Card>
        ))}

        {!props.vehicles.length && <div style={{ textAlign: 'center' }}><h5>No data</h5></div>}
      </List>
    </div>
  );
}

const mapStateToProps = ({ vehicle }) => {
  return {
    vehicles: vehicle.vehiclesMock,
  }
}

const mapDispatchToProps = {
  loadVehicles,
  loadVehiclesMock
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSideBar);