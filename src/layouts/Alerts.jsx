import React from "react";
import { ROUTE_PATH } from "config/constants";
import cx from "classnames";
import clsx from 'clsx';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

import routes from "user-routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/alertStyle.js";
import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { getUserInfo } from '../reducers/authentication';
import { setShowButtonBack } from "reducers/safety";
import ExtraAlertsSideBar from "components/Sidebar/ExtraAlertsSideBar";


var ps;

const useStyles = makeStyles(styles);

export function Safety(props) {
  const history = useHistory();
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");

  const [logo, setLogo] = React.useState(require("assets/img/logo_nauvus.svg"));

  const [fetchSession, setFetchSession] = React.useState(true);
  const alert = window.location.pathname.indexOf("/alert/alerts");

  React.useEffect(() => {
    if (alert !== -1) setMiniActive(true);
    else setMiniActive(false)
  }, [alert]);
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

  React.useEffect(() => {

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

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
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
      if (prop.layout === ROUTE_PATH.ALERT) {
        return <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      } else {
        return null;
      }
    });
  };
  const sidebarMinimize = () => setMiniActive(!miniActive);
  const onBack = () => props.history.goBack()
  const redirectLogin = () => history.push(ROUTE_PATH.AUTH + "/sign-in");

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const renderDataContent = () => {
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={props.extraSidebar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.extraSidebar}>
            <ExtraAlertsSideBar />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: props.extraSidebar,
          })}
        >
          <AdminNavbar
            sidebarMinimize={sidebarMinimize.bind(this)}
            miniActive={miniActive}
            brandText={getActiveRoute(routes)}
            handleDrawerToggle={handleDrawerToggle}
            showBack={props.showBack}
            onBack={onBack}
            {...rest}
          />
          <div className={classes.container}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from={ROUTE_PATH.ALERT} to={ROUTE_PATH.ALERT + "/alerts"} />
            </Switch>
          </div>
        </main>
      </div>
    )
  }


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
          {fetchSession ? props.isAuthenticated ? renderDataContent() : redirectLogin() : <Loading />}
        </div>
      </div>
    </>
  );
}
const mapStateToProps = ({ authentication, alerts }) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    extraSidebar: alerts.extraSidebar
  };
};

const mapDispatchToProps = {
  getUserInfo,
  setShowButtonBack
};

export default connect(mapStateToProps, mapDispatchToProps)(Safety);