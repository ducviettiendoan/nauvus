import React from "react";
import { ROUTE_PATH } from "config/constants";
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
        maxHeight: "80vh",
        overflow: "auto",
        marginTop: "20px"
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
    },
    mobileDrawerPaper: {
        borderTopRightRadius: "15px",
        borderTopLeftRadius: "15px",
    },
    anchorDrawer: {
        width: "25px",
        margin: "8px auto -20px auto",
        border: "3px solid #25345C !important",
        borderRadius: "5px",
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
export function ExtraMessagesMobile(props) {
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
            case ROUTE_PATH.SETTING + "/org/general":
                setCurrentPage("General")
                break;
            case ROUTE_PATH.SETTING + "/org/user-roles":
                setCurrentPage("User & Roles")
                break;
            case ROUTE_PATH.SETTING + "/org/drivers":
                setCurrentPage("Drivers")
                break;
            case ROUTE_PATH.SETTING + "/org/tags":
                setCurrentPage("Tags")
                break;
            case ROUTE_PATH.SETTING + "/org/feature-management":
                setCurrentPage("Feature Management")
                break;
            case ROUTE_PATH.SETTING + "/org/activity-log":
                setCurrentPage("Activity Log")
                break;
            case ROUTE_PATH.SETTING + "/org/apps":
                setCurrentPage("Apps")
                break;
            case ROUTE_PATH.SETTING + "/org/billing":
                setCurrentPage("Billing")
                break;
            case ROUTE_PATH.SETTING + "/device/devices":
                setCurrentPage("Devices")
                break;
            case ROUTE_PATH.SETTING + "/device/configuration":
                setCurrentPage("Configuration")
                break;
            case ROUTE_PATH.SETTING + "/fleet/driver-app":
                setCurrentPage("Driver App")
                break;
            case ROUTE_PATH.SETTING + "/fleet/safety":
                setCurrentPage("Safety")
                break;
            case ROUTE_PATH.SETTING + "/fleet/compliance":
                setCurrentPage("Compliance")
                break;
            case ROUTE_PATH.SETTING + "/fleet/dispatch":
                setCurrentPage("Dispatch")
                break;
            case ROUTE_PATH.SETTING + "/fleet/fuel-energy":
                setCurrentPage("Fuel & Energy")
                break;
            case ROUTE_PATH.SETTING + "/fleet/driver-activity":
                setCurrentPage("Driver Activity")
                break;
            case ROUTE_PATH.SETTING + "/fleet/add-geo":
                setCurrentPage("Addresses/Geofences")
                break;
            case ROUTE_PATH.SETTING + "/fleet/maps":
                setCurrentPage("Maps")
                break;
            case ROUTE_PATH.SETTING + "/link-sharing/alert-contacts":
                setCurrentPage("Alert Contacts")
                break;
            case ROUTE_PATH.SETTING + "/link-sharing/scheduled-reports":
                setCurrentPage("Scheduled Reports")
                break;
            case ROUTE_PATH.SETTING + "/link-sharing/live-sharing":
                setCurrentPage("Live Sharing")
                break;
            case ROUTE_PATH.SETTING + "/developer/metrics":
                setCurrentPage("Developer Metrics")
                break;
            case ROUTE_PATH.SETTING + "/developer/api-tokens":
                setCurrentPage("API Tokens")
                break;
            case ROUTE_PATH.SETTING + "/developer/webhooks":
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
                <Drawer classes={{ paper: classes.mobileDrawerPaper }} anchor={"bottom"} open={open} onClose={toggleDrawer(false)}>
                    <div className={ classes.anchorDrawer }></div>
                    <div className={ classes.extraSidebarContainer }>
                        <List
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            className={classes.root}
                        >

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
)(ExtraMessagesMobile);