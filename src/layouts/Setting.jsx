import React, {useEffect} from "react";
import cx from "classnames";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import ExtraSettingSideBar from "components/Sidebar/ExtraSettingSideBar";

import routes from "user-routes";
import settingRoutes from "setting-routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.js";

import { COGNOTO_SERVER_URL, COGNOTO_CLIENT_ID, COGNOTO_RESPONSE_TYPE, PUBLIC_URL } from "config/constants";

import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { getUserInfo } from '../reducers/authentication';
import { IRootState } from '../reducers';
import ExtraSettingMobile from "../components/Sidebar/ExtraSettingMobile";

var ps;

const useStyles = makeStyles(styles);

export function Dashboard(props) {
  const history = useHistory();
  const { ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(true);
  const [displaySetting, setDisplaySetting] = React.useState(true)
  const [image, setImage] = React.useState("");
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("white");
  const [logo, setLogo] = React.useState(require("assets/img/logo_nauvus.svg"));

  const [fetchSession, setFetchSession] = React.useState(false);

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

  // To render correct layout for mobile on open
  React.useEffect(() => {
    if (window.innerWidth >= 960) {
      setDisplaySetting(true)
    } else {
      setDisplaySetting(false)
    }
  }, [])

  React.useEffect(() => {
    resizeFunction();

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
  // functions for changeing the states from components
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
      if (prop.layout === "/setting") {
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
      setDisplaySetting(true)
    } else {
      setMiniActive(false);
      setDisplaySetting(false)
    }


  };


  const renderDataContent = () => {
    return (
      <>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(settingRoutes)}
          handleDrawerToggle={handleDrawerToggle}
          displaySetting={displaySetting}
          {...rest}
        />
        <div className="layout-container">
          <div className={classes.content}>
            {displaySetting || <ExtraSettingMobile/>}
            <div className={classes.container}>
              <Switch>
                {getRoutes(settingRoutes)}
                <Redirect from="/user" to="/user/overview" />
              </Switch>
            </div>
          </div>
        </div>
      </>
    )
  }

  const redirectLogin = () => {
    history.push("/auth/sign-in");
  }

  return (
    <>
      <div className={classes.wrapper}>
        { props.isAuthenticated && 
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
              { props.isAuthenticated ?
                <>
                  <div id="main">
                    {displaySetting &&
                      <div className="extraSidebar">
                        <ExtraSettingSideBar/>
                      </div>
                    }
                    <div className="extraContainer">
                      {renderDataContent()}
                    </div>
                  </div>
                </> :
                <>
                  { redirectLogin() }
                </>
              }
            </>
        </div>
      </div>
    </>
  );
}

export default connect(
  ({ authentication }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
  }),
  {
    getUserInfo
  }
)(Dashboard);