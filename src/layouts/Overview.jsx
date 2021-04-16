import React from "react";
import cx from "classnames";
import clsx from 'clsx';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { ROUTE_PATH } from "config/constants";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import OverviewAdminNavbar from "components/Navbars/OverviewAdminNavbar";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Drawer from '@material-ui/core/Drawer';

import routes from "user-routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/overviewStyle.js";

import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { getUserInfo } from '../reducers/authentication';
import { setOpenDrawer, setOpenDiagnostics, setAnchorEl } from '../reducers/overview';
import { IRootState } from '../reducers';
import Button from '@material-ui/core/Button';
import VehicleSideBar from "views/pages/user/overview/components/VehicleSideBar";
import ProximitySideBar from "views/pages/user/overview/proximity/ProximitySideBar";
import { ExtraDriverDetailsSideBar } from "../views/pages/user/overview/components/ExtraDriverDetailsSideBar";
import DriverSideBar from "../views/pages/user/overview/drivers/DriverSideBar";
import DriverRecord from "../views/pages/user/overview/drivers/DriverRecord";
import VehicleDetailsSideBar from "../views/pages/user/overview/vehicle/VehicleDetailsSideBar";
import DiagnosticsDetails from "../views/pages/user/overview/vehicle/vehicle-sidebar-content/diagnostics/DiagnosticsDetails"

var ps;

const useStyles = makeStyles(styles);

export function Overview(props) {
  const history = useHistory();
  const { ...rest } = props;
  // states and functions
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  // const [hasImage, setHasImage] = React.useState(true);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  const [logo, setLogo] = React.useState(require("assets/img/logo_nauvus.svg"));

  const [fetchSession, setFetchSession] = React.useState(false);
  const isTripTimeline = window.location.pathname.indexOf("/o/trip-timeline/on-going");

  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  // React.useEffect(() => {

  // });

  React.useEffect(() => {
    console.log(`fetchSession: ${fetchSession}`);

    async function fetchUserInfo() {
      try {
        await props.getUserInfo();
      } catch (e) {
      } finally {
        setFetchSession(true);
        console.log(`fetchSession: ${fetchSession}`);
        console.log(props.isAuthenticated);
      }
    }

    fetchUserInfo();

    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
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
    if (isTripTimeline !== -1) {
      setMiniActive(true);
    }
  }, [isTripTimeline]);
  // functions for changeing the states from components
  const handleImageClick = image => {
    setImage(image);
  };
  const handleColorClick = color => {
    setColor(color);
  };
  const handleBgColorClick = bgColor => {
    switch (bgColor) {
      case "white":
        setLogo(require("assets/img/logo.svg"));
        break;
      default:
        setLogo(require("assets/img/logo-white.svg"));
        break;
    }
    setBgColor(bgColor);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getRoute = () => {
    return window.location.pathname !== "/o/overview";
  };
  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        } else {
          let path = routes[i].path
          if (window.location.href.indexOf(routes[i].layout + path.toString().slice(0, -3)) !== -1) {
            return routes[i].name;
          }
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/o") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const onBackTable = () => {
    props.history.push("/o/drivers/")
    props.setOpenDrawer(false)
  }

  const onBackVehicle = () => {
    props.history.push("/o/overview")
  }

  const renderDataContent = () => {
    return (
      <>
        <div className="layout-container">
          <div className={classes.root}>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={props.openDrawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {window.location.pathname === "/o/overview" && <VehicleSideBar />}
              {window.location.pathname.indexOf("/o/drivers") !== -1 && <DriverSideBar onBack={onBackTable} />}
              {window.location.pathname.indexOf("/o/proximity") !== -1 && <ProximitySideBar />}
              {window.location.pathname.indexOf("/o/driver-record/") !== -1 && <DriverRecord />}
              {window.location.pathname.indexOf("/o/vehicle/") !== -1 && <VehicleDetailsSideBar onBack={onBackVehicle} />}
            </Drawer>
            <DiagnosticsDetails
              openMore={props.openDiagnostics}
              setOpenMore={props.setOpenDiagnostics}
              anchorEl={props.anchorEl}
              setAnchorEl={props.setAnchorEl}
            />
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: props.openDrawer,
              })}
            >
              {isTripTimeline === -1 && (
                <OverviewAdminNavbar
                  sidebarMinimize={sidebarMinimize.bind(this)}
                  miniActive={miniActive}
                  brandText={getActiveRoute(routes)}
                  handleDrawerToggle={handleDrawerToggle}
                  {...rest}
                />
              )}
              <div style={{ position: 'relative' }}>
                <Switch>
                  {getRoutes(routes)}
                  <Redirect from="/o" to="/o/overview" />
                </Switch>
              </div>
            </main>
          </div>
        </div>
      </>
    )
  }

  const redirectLogin = () => {
    history.push(ROUTE_PATH.AUTH + "/sign-in");
  }
  console.log("miniActive::"+miniActive);
  return (
    <>
      <div className={classes.wrapper}>
        {fetchSession && props.isAuthenticated &&
          <Sidebar
            routes={routes}
            logoText={"Nauvus"}
            logo={logo}
            image={image}
            handleDrawerToggle={handleDrawerToggle}
            open={mobileOpen}
            color={color}
            bgColor={bgColor}
            miniActive={miniActive}
            {...rest}
          />
        }
        <div className={mainPanelClasses} ref={mainPanel}>
          {fetchSession ?
            <>
              {props.isAuthenticated ?
                <>
                  {props.extraSidebar ?
                    <>
                      <div id="main">
                        <div className="extraSidebar">div1</div>
                        <div className="extraContainer">{renderDataContent()}</div>
                      </div>
                    </> :
                    <>
                      {renderDataContent()}
                    </>
                  }
                </> :
                <>
                  {redirectLogin()}
                </>
              }
            </> :
            <>
              <Loading />
            </>
          }
        </div>
      </div>
    </>
  );
}

export default connect(
  ({ authentication, overview }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    openDrawer: overview.openDrawer,
    openDiagnostics: overview.openDiagnostics,
    anchorEl: overview.anchorEl,
    openDriverDetails: overview.openDriverDetails,
    openDriver: overview.openDriver
  }),
  {
    getUserInfo,
    setOpenDrawer,
    setOpenDiagnostics,
    setAnchorEl
  }
)(Overview);