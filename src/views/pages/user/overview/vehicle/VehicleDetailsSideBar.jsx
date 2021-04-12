import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Divider from '@material-ui/core/Divider';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {InfoOutlined} from "@material-ui/icons";
import Button from "components/CustomButtons/Button";
import TruckIcon from "components/Icons/TruckIcon";
import LocationIcon from "components/Icons/LocationIcon";
import PhoneIcon from "components/Icons/PhoneIcon";
import RecordIcon from "components/Icons/RecordIcon";
import Accordion from "components/Accordion/Accordion";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import {Col, Row} from 'reactstrap';
import ArrowBackIcon from "components/Icons/ArrowBackIcon";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {useHistory} from "react-router-dom";
import {setOpenDrawer} from "reducers/overview"
import {connect} from "react-redux";
import {loadVehicles, loadVehiclesMock} from "reducers/vehicle";
import NavigationIcon from "components/Icons/NavigationIcon";
import livestream from "assets/img/livestream.png"


const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  sidebarContainer: {
    overflowY: "auto",
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
    position: "relative",
    fontWeight: 700,
  },
  txtSpeed: {
    fontWeight: 700,
    fontSize: "12px",
    lineHeight: "18px",
    color: "#27AE60",
  },
  cameraIcon: {
    position: "absolute",
    top: "20px",
    left: "25px"
  },
  alert: {
    background: "#ECEEF0",
    height: "120px",
    margin: "20px 0px !important"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0px "
  },
  cardHeaderTitle: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
  },
  cardSubHeaderTitle: {
    fontWeight: 700,
    fontSize: 12,
    color: "#B4B4B4",
  },
  cardItems: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0px",
  },
  cardItemsContent: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    paddingLeft: "10px"
  },
  cardItemsFooterTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
    paddingLeft: "10px"
  },
  cardItemsSubFooterTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: "#B4B4B4",
  },
  cardExpandHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "19px 0px"
  },
  cardExpandHeaderTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#25345C",
    textAlign: "left",
  },
  cardExpandHeaderSubTitle: {
    fontSize: 12,
    fontWeight: 700,
    color: "#25345C",
    textAlign: "right",
  },
  expandTitle: {
    alignItems: "center",
    marginTop: 19
  },
  expandTitleLeft: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  expandTitleRight: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  cardExpandContent: {
    paddingTop: "10px"
  },
  cardExpandFooterContent: {
    alignItems: "center",
    padding: "10px 0px"
  },
  cardExpandFooterTitle: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: 400,
    color: "#B4B4B4",
  },
  cardExpandFooterData: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: 700,
    color: "#25345C",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  txtInfoMain: {
    fontSize: 14,
    fontWeight: 400,
    color: "#25345C",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center",
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
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  selectField: {
    paddingTop: "18px"
  },
  loginTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
    padding: "16px 0px 0px 16px"
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  listCheck: {
    width: '100%',
  },
  listCheckItems: {
    paddingLeft: "0px",
    fontWeight: 400,
    fontSize: '12px',
    color: '#25345C',
  },
  expansionClasses: {
    padding: "0px 15px 0px 15px !important",
    borderBottom: "0px !important",
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
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
    margin: "0px !important"
  },
  expansionPanelClasses: {
    marginBottom: "4px !important"
  },
  expansionPanelClassesRounded: {
    border: "1px solid #ECEEF0",
    boxShadow: "inherit",
    borderBottomLeftRadius: "12px !important",
    borderBottomRightRadius: "12px !important",
    borderTopLeftRadius: "12px !important",
    borderTopRightRadius: "12px !important",
  },
  buttonFullWidth: {
    minWidth: "100%",
    background: "rgba(37, 52, 92, 0.1) !important"
  },
  sidebarContent: {
    padding: "0px 18px"
  },
  enRouteContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
}));

// const useStyles = makeStyles(styles);
var ps;

function VehicleDetailsSideBar(props) {
  const classes = useStyles();
  const history = useHistory()

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

  const [openInvite, setOpenInvite] = React.useState(false);
  const [selectValue, setSelectValue] = useState({
    stateProvince: "none",
  });

  const openEditDriver = () => {
    console.log("OPEN")
    setOpenInvite(true)
  }

  const closeEditDriver = () => {
    console.log("CLOSE")
    setOpenInvite(false)
  }

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const handleShowRecord = () => {
    props.setOpenDrawer(false)
    history.push("/o/driver-record/1234")
  }


  return (
    <div ref={mainPanelVehicleSideBar} className={classes.sidebarContainer}>
      <Divider/>
      <Row>
        <Col>
          <Button
            startIcon={<ArrowBackIcon/>}
            className="btn-round-white 2 w-84 h-41"
            style={{margin: "13px 0px 0px 16px"}}
            onClick={props.onBack}
          >
            Back
          </Button>
        </Col>
      </Row>
      <div className={classes.sidebarContent}>
        <Card className={classes.alert}>
          <CardBody>
            <div className="ml-4" style={{textAlign: "left"}}>
              <div className={classes.txtInfoMain}>
                No location data found for Mar 25, 12:00 AM - Mar 25, 11:59 PM
              </div>
              <div className={`mb-4 ${classes.txtInfoMain}`}>
                Showing last found location from Feb 8, 2021 2:17 AM
              </div>
            </div>
            <div style={{position: "absolute", top: "16px", left: "10px"}}>
              <InfoOutlined/>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.sidebarContent}>
        <Row className={classes.topHeader}>
          <Col className={classes.topHeaderTitle}>
            Driver details
          </Col>
          <Col className={classes.topHeaderButton}>
            <Button
              color="white"
              aria-label="edit"
              justIcon
              round
              className={`btn-36 ${classes.moreAction} mr-2`}
              onClick={handleOpenMore}
            >
              <MoreHorizontalIcon/>
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
              {({TransitionProps}) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list"
                  style={{transformOrigin: "0 0 0"}}
                >
                  <Paper className={classes.dropdown}>
                    <ClickAwayListener onClickAway={handleCloseMore}>
                      <MenuList role="menu">
                        <MenuItem className={classes.dropdownItem} onClick={openEditDriver}>
                          Edit Driver
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Col>
        </Row>
      </div>
      <div className={classes.sidebarContent}>
        <Card>
          <CardBody>
            <Row className={classes.cardHeader}>
              <Col xs={2}>
                <TruckIcon/>
              </Col>
              <Col xs={6}>
                <Row className={classes.cardHeaderTitle}>Ali Singh</Row>
                <Row className={classes.cardSubHeaderTitle}>Name</Row>
              </Col>
              <Col xs={4}>
                <Row>
                  <div className={classes.txtSubDevice}>
                    <span className={classes.txtSpeed}>43 km/h</span>&nbsp;<span>(120 Limit)</span>
                  </div>
                </Row>
              </Col>
            </Row>
            <Divider variant="fullWidth" light/>
            <div className={classes.cardItems}>
              <div>
                <LocationIcon/>
              </div>
              <div className={classes.cardItemsContent}>Tri-State Toolway, East Hazel Crest , IL</div>
            </div>
            <div className={classes.cardItems}>
              <div>
                <PhoneIcon/>
              </div>
              <div className={classes.cardItemsContent}>4046921660</div>
            </div>
            <div className={classes.cardItems}>
              <div>
                <RecordIcon/>
              </div>
              <div className={classes.cardItemsContent}>View Driver Record</div>
            </div>
            <div className={classes.cardItems}>
              <div className={classes.cardItemsSubFooterTitle}>
                Co Vehicle:
              </div>
              <div className={classes.cardItemsFooterTitle}>
                Vehicle 101
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={classes.sidebarContent}>
        <Button
          round
          className={`btn-round-white h-41 ${classes.buttonFullWidth}`}
          startIcon={<NavigationIcon/>}
        >
          Live Share
        </Button>
      </div>
      <div className={classes.sidebarContent}>
        <Card>
          <Accordion collapses={
            [
              {
                title:
                  <div className={classes.enRouteContainer}>
                    <div className={classes.cardExpandHeaderTitle}>
                      En Route
                    </div>
                    <div className={classes.cardExpandHeaderSubTitle}>
                      Taken at 12:02:46 PM
                    </div>
                  </div>,
                content:
                  <div style={{width: "100%"}}>
                    <img src={livestream}/>
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
      </div>
    </div>
  );
}

const mapStateToProps = ({vehicle, overview}) => {
  return {
    vehicles: vehicle.vehiclesMock,
    openDrawer: overview.openDrawer
  }
}

const mapDispatchToProps = {
  loadVehicles,
  loadVehiclesMock,
  setOpenDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetailsSideBar);