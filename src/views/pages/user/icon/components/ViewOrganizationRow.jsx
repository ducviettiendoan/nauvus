import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
// @material-ui/icons
import Button from "components/CustomButtons/Button";
import Grid from "@material-ui/core/Grid";
import Popper from "@material-ui/core/Popper";
import AddOutlined from "@material-ui/icons/AddOutlined";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { MoreHoriz } from "@material-ui/icons";

const styles = {
    moreAction: {
        background: "#FFFFFF !important",
        border: "1px solid #ECEEF0 !important",
        marginLeft: "8px",
        width: "42px !important",
        height: "42px !important",
        minWidth: "42px !important",
    },
    numberButton: {
        width: "36px !important",
        height: "36px !important",
        minWidth: "36px !important",
        background: "#FFFFFF !important",
    },
    button: {
        background: '#25345C !important',
        borderRadius: '28px !important',
        padding: '12px 17px !important',
        textTransform: 'initial !important',
        fontSize: ' 14px !important',
        fontStyle: 'normal!important',
        fontWeight: 700,
        "&>span>span": {
            marginRight: "0px !important",
        }
    },
    buttonGrey: {
        color: "#25345C",
        background: "rgba(37, 52, 92, 0.1)",
        borderRadius: '28px !important',
        padding: '12px 17px !important',
        textTransform: 'initial !important',
        fontSize: ' 14px !important',
        fontStyle: 'normal!important',
        fontWeight: 700,
        "&>span>span": {
            marginRight: "0px !important",
            color: "#25345C",
        }
    },
    button2: {
        background: '#FFFFFF !important',
        color: "black",
        borderRadius: '28px !important',
        border: "1px solid #ECEEF0",
        padding: '12px 17px !important',
        textTransform: 'initial !important',
        fontSize: ' 14px !important',
        fontStyle: 'normal!important',
        fontWeight: 700,
        boxShadow: "none",
        "&>span>span": {
            marginRight: "0px !important",
        },
        "&:hover": {
            color: '#25345C',
            boxShadow: "none",
        },
        "&:focus": {
            color: '#25345C',
            boxShadow: 'none',
        },
    },
    container: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        border: "1px solid #ECEEF0",
        borderRadius: "12px",
        padding: "27px 0 27px 0",
    },
    textPosition: {
        textAlign: "center"
    },
    textRight: {
        textAlign: "right",
    },
    gateWayCenter: {
        textAlign: "center",
        color: "#B4B4B4",
        fontSize: "14px",
        fontWeight: 400,
    },
    gateWayRight: {
        textAlign: "right",
        color: "#B4B4B4",
        fontSize: "14px",
        fontWeight: 400,
    },
    row: {
        marginBottom: "8px",
    },
    space: {
        marginRight: "12px",
        fontSize: "16px",
        color: '#25345C',
        fontWeight: 700,

    },

    dropdownItem: {
        fontSize: "13px",
        padding: "10px 20px 0px 12px",
        position: "relative",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        height: "40px",
        color: "grey",
        whiteSpace: "nowrap",
        minHeight: "unset",
        bottom: "13px",
        borderRadius: "12px",
        background: "#FFFFFF"
    },
    dropdown: {
        borderRadius: "12px",
        border: "0",
        boxShadow: "none",
        top: "100%",
        zIndex: "1000",
        minWidth: "181px",
        height: "40px",
        padding: "5px 0",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "white",
        backgroundClip: "padding-box"
    },
    textTitle: {
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        color: '#25345C',
        fontWeight: 700,
    },
    number: {
        color: "#B4B4B4",
        fontSize: "14px",
        fontWeight: 400,
    },

};

const useStyles = makeStyles(styles);

export default function ViewOrganizationRow(props) {
    const classes = useStyles();
    const { item } = props;
    const matches = useMediaQuery('(min-width:1280px)');

    const [openMore, setOpenMore] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleCloseMore = () => setOpenMore(false)
    const handleOpenMore = (event) => {
        setOpenMore(true)
        setAnchorEl(event.currentTarget);
    };

    const addButton =
        item.id === 1 ?
            <Button
                round
                className={classes.button}
                startIcon={<AddOutlined />}
            >
                Add Devices
            </Button>
            :
            <Button
                round
                className={classes.buttonGrey}
                startIcon={<AddOutlined />}
            >
                Add Devices
            </Button>


    return (
        <div className={classes.row}>
            {/* <SunIcon/> */}
            <Grid container className={classes.container}>
                <Grid xs={5} md={5} lg={3} xl={3} style={{ display: "flex", alignItem: "center", paddingLeft: "16px" }}>
                    <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`${classes.numberButton} mr-2`}

                    >
                        {item.id}
                    </Button>
                    <div className={classes.textTitle}>{item.name}</div>
                </Grid>
                <Grid xs={3} md={3} lg={1} xl={1} className={classes.textPosition}>
                    <span className={classes.space}>{item.user.tag}</span>
                    <span className={classes.number}>{item.user.userNumber}</span>
                </Grid>

                {matches ?
                    <Grid item xs={4} md={4} lg={3} xl={3} className={classes.gateWayCenter}>
                        {item.gateWay} Gateway • {item.sensors} Sensors
                </Grid>
                    :
                    <Grid item xs={4} md={4} lg={3} xl={3} className={classes.gateWayRight}>
                        {item.gateWay} Gateway • {item.sensors} Sensors
                </Grid>
                }

                <Grid item xs={6} md={6} lg={2} xl={2} className={classes.textPosition}>
                    <Button
                        round
                        className={classes.button2}
                    >
                        <div>View Dashboard</div>
                    </Button>
                </Grid>

                {matches ?
                    <Grid item xs={6} md={6} lg={3} xl={3} style={{ display: "flex", justifyContent: "flex-end" }}>
                        {addButton}

                        <Button
                            color="white"
                            aria-label="edit"
                            justIcon
                            round
                            className={`${classes.moreAction} mr-2`}
                            onClick={handleOpenMore}
                        >
                            <MoreHoriz />
                        </Button>

                        <Popper
                            open={openMore}
                            anchorEl={anchorEl}
                            transition
                            disablePortal
                            placement="bottom-end"
                        >
                            {({ TransitionProps }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="profile-menu-list"
                                    style={{ transformOrigin: "0 0 0" }}
                                >
                                    <Paper className={classes.dropdown}>
                                        <ClickAwayListener onClickAway={handleCloseMore}>
                                            <MenuList role="menu">
                                                <MenuItem className={classes.dropdownItem} >Settings</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Grid>
                    :
                    <Grid item xs={6} md={6} lg={3} xl={3} style={{ display: "flex", justifyContent: "center" }}>
                        {addButton}

                        <Button
                            color="white"
                            aria-label="edit"
                            justIcon
                            round
                            className={`${classes.moreAction} mr-2`}
                            onClick={handleOpenMore}
                        >
                            <MoreHoriz />
                        </Button>

                        <Popper
                            open={openMore}
                            anchorEl={anchorEl}
                            transition
                            disablePortal
                            placement="bottom-end"
                        >
                            {({ TransitionProps }) => (
                                <Grow
                                    {...TransitionProps}
                                    id="profile-menu-list"
                                    style={{ transformOrigin: "0 0 0" }}
                                >
                                    <Paper className={classes.dropdown}>
                                        <ClickAwayListener onClickAway={handleCloseMore}>
                                            <MenuList role="menu">
                                                <MenuItem className={classes.dropdownItem} >Settings</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </Grid>}
            </Grid>
        </div >
    );
}
