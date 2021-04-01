import React from "react";
import cx from "classnames";
import clsx from 'clsx';
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
import Drawer from '@material-ui/core/Drawer';

import routes from "user-routes";

import styles from "assets/jss/material-dashboard-pro-react/layouts/overviewStyle.js";

import { COGNOTO_SERVER_URL, COGNOTO_CLIENT_ID, COGNOTO_RESPONSE_TYPE, PUBLIC_URL } from "config/constants";

import Loading from "components/Loading/Loading";
import { connect } from 'react-redux';
import { getUserInfo } from '../reducers/authentication';
import { IRootState } from '../reducers';
import Button from '@material-ui/core/Button';

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

  const renderDataContent = () => {
    return (
      <>
        {/* <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        /> */}
        <div className="layout-container">
          <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={openDrawer}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                vvvvvvvvvvvv
            </Drawer>
              <main
                className={clsx(classes.content, {
                  [classes.contentShift]: openDrawer,
                })}
              >
                <AdminNavbar
                  sidebarMinimize={sidebarMinimize.bind(this)}
                  miniActive={miniActive}
                  brandText={getActiveRoute(routes)}
                  handleDrawerToggle={handleDrawerToggle}
                  {...rest}
                />
                <div style={{ position: 'relative'}}>
                  <Button onClick={() => setOpenDrawer(!openDrawer)}>Change</Button>
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
                  { props.extraSidebar ? 
                    <>
                      <div id="main">
                        <div className="extraSidebar">div1</div>
                        <div className="extraContainer">{ renderDataContent() }</div>
                      </div>
                    </> :
                    <>
                      { renderDataContent() }
                    </>
                  }
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
)(Overview);