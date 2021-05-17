import {
  defaultFont,
  dangerColor,
  whiteColor
} from "assets/jss/material-dashboard-pro-react.js";

import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/customDropdownStyle.js";

const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;
const borderWidth = 2;
const width = pxToRem(40);
const height = pxToRem(22);
const size = pxToRem(16);
const gap = (22 - 16) / 2;

const adminNavbarLinksStyle = theme => ({
  ...customDropdownStyle(theme),
  search: {
    margin: "0",
    paddingTop: "7px",
    paddingBottom: "7px",
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "10px 15px",
      width: "auto"
    }
  },
  searchInput: {
    paddingTop: "2px"
  },
  searchRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "18px !important"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "12px"
    }
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0!important",
    textTransform: "none"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "5px 15px 0",
      width: "auto",
      height: "auto",
      "& svg": {
        width: "30px",
        height: "24px",
        marginRight: "19px",
        marginLeft: "3px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        width: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        marginRight: "19px",
        marginLeft: "3px"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "38px",
      float: "right"
    }
  },
  top: {
    zIndex: "4"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4",
    color: "#121212 !important"
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "inherit",
      opacity: "0.8",
      marginRight: "16px",
      marginLeft: "-5px"
    }
  },
  popperQuestionIcon: {
    height: "236px",
    width: '214px',
    left: "0px",
    top: "0px",
    borderRadius: "8px !important",
  },

  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "5px",
      border: "1px solid " + whiteColor,
      right: "5px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "14px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  },
  wrapperRTL: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "16px"
    }
  },
  buttonLinkRTL: {
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "flex-end",
      width: "-webkit-fill-available",
      margin: "10px 15px 0",
      padding: "10px 15px",
      display: "block",
      position: "relative"
    }
  },
  labelRTL: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row-reverse",
      justifyContent: "initial",
      display: "flex"
    }
  },
  linksRTL: {
    [theme.breakpoints.down("sm")]: {
      marginRight: "-5px !important",
      marginLeft: "16px !important"
    }
  },
  managerClasses: {
    [theme.breakpoints.up("md")]: {
      display: "inline-block"
    }
  },

  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  dialog: {
    "&>div>div": {
      margin: "0px"
    }
  },
  dropdownItemGetHelp: {
    color: "#333",
    lineHeight: "1.5em",
    whiteSpace: "nowrap",
    height: "30px",
    padding: "2px 20px 0px 12px",
    position: "relative",
    bottom: "13px",
    fontSize: "13px",
    background: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: 400,
    marginTop: "12px"
  },
  dropdownItem: {
    color: "#333",
    lineHeight: "1.5em",
    whiteSpace: "nowrap",
    height: "30px",
    padding: "2px 20px 0px 12px",
    position: "relative",
    bottom: "13px",
    fontSize: "13px",
    background: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: 400,
  },
  dropdownItemTop: {
    color: "#333",
    lineHeight: "1.5em",
    whiteSpace: "nowrap",
    height: "40px",
    padding: "2px 0px 0px 12px",
    position: "relative",
    bottom: "13px",
    fontSize: "13px",
    background: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: 400,
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    "&:focus": {
      background: "none",
      // color: "#FFFFFF"
    }
  },
  dropdownItemContent: {
    color: "#333",
    lineHeight: "1.5em",
    whiteSpace: "nowrap",
    height: "40px",
    padding: "2px 15px 0px 12px",
    position: "relative",
    bottom: "13px",
    fontSize: "13px",
    background: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: 400,
  },
  dropdownItemBottom: {
    height: "40px",
    padding: "2px 0px 0px 12px",
    position: "relative",
    bottom: "13px",
    fontSize: "13px",
    background: "#FFFFFF",
    fontFamily: "Lato",
    fontWeight: 400,
    color: "#B4B4B4",
    "&:focus": {
      background: "#FFFFFF"
    }
  },
  dropdownNavBar: {
    borderRadius: "12px",
    paddingTop: "5px",
  },
  root: {
    width,
    height,
    padding: 0,
    margin: theme.spacing(1),
    overflow: 'unset',
  },
  switchBase: {
    padding: pxToRem(gap),
    '&$checked': {
      color: '#fff',
      transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
      '& + $track': {
        backgroundColor: "black",
        opacity: 1,
        border: 'none',
      },
      '& $thumb': {
        backgroundColor: '#fff',
      },
    },
  },
  track: {
    borderRadius: 40,
    border: `solid ${theme.palette.grey[400]}`,
    borderWidth,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
    boxSizing: 'border-box',
  },
  thumb: {
    boxShadow: 'none',
    backgroundColor: theme.palette.grey[400],
    width: size,
    height: size,
  },
  checked:{},
  switchPosition: {
    "&>span": {
      marginLeft: '15px',
    }  
  },
  whatsNewPosition: {
    display: "flex",
    justifyContent: "space-between",
  },
  popper: {
    position: "absolute",
    transform: "translate3d(921px, 52px, 0px)",
    top: "0px",
    left: "-120px",
  },
  menuList: {
    zIndex: '9999',
    width: "170px",
    paddingBottom: "0px",
  }
});

export default adminNavbarLinksStyle;
