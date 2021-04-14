import customDropdownStyle
  from "../../../../../../assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";

const vehicleSidebarContentStyle = ((theme) => ({
  ...customDropdownStyle(theme),
  cardExpandHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "19px 0px"
  },
  cardExpandHeaderTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#25345C",
    textAlign: "left",
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
  enRouteContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownContent: {
    margin: "8px 0px 8px 0px !important "
  },
  sensorContent: {
    padding: "0px 15px 15px 15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gatewayFooter: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gatewayContent: {
    padding: "0px 15px 15px 15px",
  },
  sensorDataTitle: {
    fontWeight: 400,
    fontSize: '14px',
    color: '#B4B4B4',
  },
  sensorData: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  diagContent: {
    padding: "15px 15px 15px 15px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewAllDiag: {
    fontWeight: 700,
    fontSize: '12px',
    color: '#25345C',
    cursor: "pointer"
  },
  gatewayContentTitle: {
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
    textDecoration: "underline"
  },
  gatewayContentSubTitle: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4',
  },
  dialogTitle: {
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    textAlign: "center",
  },
  dialogSubTitle: {
    fontWeight: 700,
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center",
  },
  livestreamButton: {
    position: "absolute",
    marginTop: 11,
    marginLeft: 16
  },
  cameraButton: {
    background: "#25345C !important",
    border: "none !important",
    position: "absolute",
    top: 71,
    left: 195
  },
  selectButton: {
    textAlign: "right",
    marginRight: -10,
    marginTop: 13,
  },
}));
export default vehicleSidebarContentStyle