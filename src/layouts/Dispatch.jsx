import React from "react";
import cx from "classnames";
import clsx from 'clsx';
import {ROUTE_PATH} from "config/constants";
import {Switch, Route, Redirect, useHistory} from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Drawer from '@material-ui/core/Drawer';

import routes from "user-routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/overviewStyle.js";
import {connect} from 'react-redux';
import {getUserInfo} from '../reducers/authentication';
import {setOpenDispatchDrawer} from "../reducers/dispatch";
import {DispatchSideBar} from "../views/pages/user/dispatch/DispatchSideBar";

var ps;

const useStyles = makeStyles(styles);

export function Dispatch(props) {
  const history = useHistory();
  const {...rest} = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  const [logo, setLogo] = React.useState(require("assets/img/logo_nauvus.svg"));

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
      if (prop.layout === "/d") {
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

  const renderDataContent = () => {
    return (
      <>
        <div className="layout-container">
          <div className={classes.root}>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={props.openDispatchDrawer}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <DispatchSideBar/>
            </Drawer>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: props.openDispatchDrawer,
              })}
            >
              <AdminNavbar
                sidebarMinimize={sidebarMinimize.bind(this)}
                miniActive={miniActive}
                brandText={getActiveRoute(routes)}
                handleDrawerToggle={handleDrawerToggle}
                {...rest}
              />
              <div style={{position: 'relative'}}>
                <Switch>
                  {getRoutes(routes)}
                  <Redirect from="/o" to="/o/overview"/>
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

  return (
    <>
      <div className={classes.wrapper}>
        {props.isAuthenticated &&
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
          </>
        </div>
      </div>
    </>
  );
}

export default connect(
  ({authentication, dispatch}) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    openDispatchDrawer: dispatch.openDispatchDrawer,
  }),
  {
    getUserInfo,
    setOpenDispatchDrawer,
  }
)(Dispatch);