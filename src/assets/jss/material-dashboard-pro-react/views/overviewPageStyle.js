import {
  container,
  cardTitle,
  whiteColor,
  grayColor,
  successColor,
  dangerColor,
  primaryColor,
  primaryBoxShadow,
  hexToRgb,
  blackColor 
} from "assets/jss/material-dashboard-pro-react.js";

const drawerWidth = 387;
const overviewPageStyle = theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    position: "relative"
  },
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    marginLeft: "1px",
    marginTop: "1px",
    overflow: "hidden",
    zIndex: "99"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  searchMapContainer: {
    position: "absolute",
    top: "10px",
    left: "10px"
  },
  btnSearchOnMap: {
    background: "white",
    padding: "3px 20px 0px 20px",
    borderRadius: "36px",
    height: "40px"
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
  toogleDrawer: {
    color: "#25345C !important",
    background: "white",
    width: '40px !important',
    height: '40px !important',
    minWidth: '40px !important',
    marginTop: "-10px",
    marginRight: "10px"
  },
  infowindow: {
    width: "100%"
  },
  vehiclePreview: {
    width: "100%"
  },
  vehicleInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0"
  },
  driver: {
    marginBottom: "6px"
  },
  driverName: {
    fontWeight: 400,
    fontSize: "14px",
    color: "#25345C",
  },
  driverId: {
    fontWeight: 400,
    fontSize: "14px",
    color: "#B4B4B4",
    paddingLeft: "8px"
  },
  path: {
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  deviceName: {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C"
  },
  fuelLevel: {
    fontWeight: 400,
    color: "#B4B4B4",
    marginBottom: "8px"
  },
  speed: {
    background: "#27AE60",
    color: "white",
    padding: "5px 10px",
    borderRadius: "20px"
  },
  textField: {
    margin: "12px"
  },
  fuelPercent: {
    fontSize: "14px"
  },
  toolBar: {
    fontSize: "14px"
  },
  zoom: {
    fontSize: "18px",
    marginRight: "16px"
  },
  newTab: {
    fontSize: "15px",
    fill: "none",
    height: "20px",
    width: "20px"
  }
});

export default overviewPageStyle;
