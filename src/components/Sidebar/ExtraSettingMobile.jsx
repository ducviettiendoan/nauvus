import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation  } from "react-router-dom";

// @material-ui/icons
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CustomSearchInput from "components/CustomInput/CustomSearchInput";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { Col, Row } from 'reactstrap';
import {
    cardTitle,
    roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
    extraSidebarContainer: {
        padding: '0 18px',
        maxHeight: "80vh"
    },
    extraSidebarSearchContainer: {
        height: '68px',
        borderBottom: '1px solid #25345c1f',
        marginLeft: '-18px',
        marginRight: '-18px',
    },
    btnSearch: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '17px'
    },
    txtListItemPrimary: {
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '21px',
        fontFamily: '"Lato", sans-serif'
    },
    txtListItemPrimarySub: {
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '21px',
        fontFamily: '"Lato", sans-serif',
        color: '#25345C'
    },
    active: {
        color: "#000",
        borderRadius: "28px",
        backgroundColor: "rgba(37, 52, 92, 0.1)"
    },
    activePoint: {
        position: "absolute",
        top: "17px",
        left: "-18px",
        borderRight: "2px solid #121212",
        height: "10px",
        borderRadius: "1px",
    },
    dropDown: {
        width: "100%",
        background: "white",
        border: "1px solid #c4c4c4",
        borderRadius: "4px",
        fontWeight: 700,
        color: "#25345C",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
        fontSize: "14px"
    },
    dropDownWrapper: {
        width: "100vw",
        padding: "16px",
        position: "sticky",
        top: "68px",
        zIndex: 1000,
        background: "white",
        borderTop: "1px solid #c4c4c4",
    }
};

import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import { Link } from "react-router-dom";
import {Divider, Drawer} from "@material-ui/core";
import ArrowUpDownIcon from "../Icons/ArrowUpDownIcon";

const useStyles = makeStyles(styles);
var ps;
export function ExtraSideBarMobile(props) {
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [currentLink, setCurrentLink] = React.useState("");
    const [currentPage, setCurrentPage] = React.useState("");

    React.useEffect(() => {
        initActive();
    }, []);

    React.useEffect(() => {
        switch (currentLink) {
            case "/setting/org/general":
                setCurrentPage("General")
                break;
            case "/setting/org/user-roles":
                setCurrentPage("User & Roles")
                break;
            case "/setting/org/drivers":
                setCurrentPage("Drivers")
                break;
            case "/setting/org/tags":
                setCurrentPage("Tags")
                break;
            case "/setting/org/feature-management":
                setCurrentPage("Feature Management")
                break;
            case "/setting/org/activity-log":
                setCurrentPage("Activity Log")
                break;
            case "/setting/org/apps":
                setCurrentPage("Apps")
                break;
            case "/setting/org/billing":
                setCurrentPage("Billing")
                break;
            case "/setting/device/devices":
                setCurrentPage("Devices")
                break;
            case "/setting/device/configuration":
                setCurrentPage("Configuration")
                break;
            case "/setting/fleet/driver-app":
                setCurrentPage("Driver App")
                break;
            case "/setting/fleet/safety":
                setCurrentPage("Safety")
                break;
            case "/setting/fleet/compliance":
                setCurrentPage("Compliance")
                break;
            case "/setting/fleet/dispatch":
                setCurrentPage("Dispatch")
                break;
            case "/setting/fleet/fuel-energy":
                setCurrentPage("Fuel & Energy")
                break;
            case "/setting/fleet/driver-activity":
                setCurrentPage("Driver Activity")
                break;
            case "/setting/fleet/add-geo":
                setCurrentPage("Addresses/Geofences")
                break;
            case "/setting/fleet/maps":
                setCurrentPage("Maps")
                break;
            case "/setting/link-sharing/alert-contacts":
                setCurrentPage("Alert Contacts")
                break;
            case "/setting/link-sharing/scheduled-reports":
                setCurrentPage("Scheduled Reports")
                break;
            case "/setting/link-sharing/live-sharing":
                setCurrentPage("Live Sharing")
                break;
            case "/setting/developer/metrics":
                setCurrentPage("Developer Metrics")
                break;
            case "/setting/developer/api-tokens":
                setCurrentPage("API Tokens")
                break;
            case "/setting/developer/webhooks":
                setCurrentPage("Webhooks")
                break;

        }
    }, [currentLink])
    const initActive = () => {
        setCurrentLink(location.pathname);
    }

    const renderListItem = (text, link) => {
        return (
            <div style={{ position: "relative" }}>
                <ListItem button onClick={ () => onClickListItem(link) } className={classes.nested} classes={{ selected: classes.active }} selected={ link === currentLink }>
                    <ListItemText primary={ text } classes={ {primary: classes.txtListItemPrimarySub} }/>
                </ListItem>
                { link === currentLink && <div className={ classes.activePoint}></div> }
            </div>
        )
    }

    const toggleDrawer = (bool) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(bool);
    };

    const onClickListItem = (link) => {
        setOpen(false)
        setCurrentLink(link);
        history.push(link);
    }

    return (
        <>
            <React.Fragment>
                <div className={classes.dropDownWrapper}>
                    <div className={classes.dropDown} onClick={toggleDrawer( true)}>
                        <div>{currentPage}</div>
                        <ArrowUpDownIcon />

                    </div>
                </div>
                <Drawer anchor={"bottom"} open={open} onClose={toggleDrawer(false)}>
                    <div className={ classes.extraSidebarContainer }>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className={classes.root}
                        >
                            {/* General */}
                            <ListItem >
                                <ListItemText primary="ORGANIZATION" classes={ {primary: classes.txtListItemPrimary} } />
                            </ListItem>
                            <List component="div" disablePadding>
                                { renderListItem("General", "/setting/org/general") }
                                { renderListItem("User & Role", "/setting/org/user-roles") }
                                { renderListItem("Drivers", "/setting/org/drivers") }
                                { renderListItem("Tags", "/setting/org/tags") }
                                { renderListItem("Feature Management", "/setting/org/feature-management") }
                                { renderListItem("Activity Log", "/setting/org/activity-log") }
                                { renderListItem("Apps", "/setting/org/apps") }
                                { renderListItem("Billing", "/setting/org/billing") }
                            </List>
                            <Divider/>
                            {/* Devices */}
                            <ListItem >
                                <ListItemText primary="DEVICES" classes={ {primary: classes.txtListItemPrimary} } />
                            </ListItem>
                            <List component="div" disablePadding>
                                { renderListItem("Devices", "/setting/device/devices") }
                                { renderListItem("Configuration", "/setting/device/configuration") }
                            </List>
                            <Divider/>
                            {/* Fleet */}
                            <ListItem>
                                <ListItemText primary="FLEET" classes={ {primary: classes.txtListItemPrimary} }  />
                            </ListItem>
                            <List component="div" disablePadding>
                                { renderListItem("Driver App", "/setting/fleet/driver-app") }
                                { renderListItem("Safety", "/setting/fleet/safety") }
                                { renderListItem("Compliance", "/setting/fleet/compliance") }
                                { renderListItem("Dispatch", "/setting/fleet/dispatch") }
                                { renderListItem("Fuel & Energy", "/setting/fleet/fuel-energy") }
                                { renderListItem("Driver Activity", "/setting/fleet/driver-activity") }
                                { renderListItem("Addresses/Geofences", "/setting/fleet/add-geo") }
                                { renderListItem("Maps", "/setting/fleet/maps") }
                            </List>
                            <Divider/>
                            {/* Links & Sharing */}
                            <ListItem>
                                <ListItemText primary="LINKS & SHARING" classes={ {primary: classes.txtListItemPrimary} }  />
                            </ListItem>
                            <List component="div" disablePadding>
                                { renderListItem("Alert Contacts", "/setting/link-sharing/alert-contacts") }
                                { renderListItem("Scheduled Reports", "/setting/link-sharing/scheduled-reports") }
                                { renderListItem("Live Sharing", "/setting/link-sharing/live-sharing") }
                            </List>
                            <Divider/>

                            {/* Developer */}
                            <ListItem>
                                <ListItemText primary="DEVELOPER" classes={ {primary: classes.txtListItemPrimary} } />
                            </ListItem>
                            <List component="div" disablePadding>
                                { renderListItem("Developer Metrics", "/setting/developer/metrics") }
                                { renderListItem("API Tokens", "/setting/developer/api-tokens") }
                                { renderListItem("Webhooks", "/setting/developer/webhooks") }
                            </List>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        </>
    );
}

export default connect(
    ({ vehicle }) => ({
        vehicles: vehicle.vehicles
    }),
    {
    }
)(ExtraSideBarMobile);