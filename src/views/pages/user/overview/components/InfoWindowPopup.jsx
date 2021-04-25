import FuelLevelIcon from "components/Icons/FuelLevelIcon";
import ZoomIcon from "components/Icons/ZoomIcon";
import OpenInNewTabIcon from "components/Icons/OpenInNewTabIcon";
import React from "react";
import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import driving from "../../../../../assets/img/dashcam.png"
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);

const InfoWindowPopup = (props) => {
    const classes = useStyles()

    const {maker} = props
    console.log(maker)
    return(
    <div className={classes.infowindow}>
        <img src={driving} alt="vehicle preview" className={classes.vehiclePreview}/>
        <div className={classes.textField}>
            <div className={classes.vehicleInfo}>
                <div className={classes.deviceName}>{ maker.serialnumber }</div>
                <div className={classes.speed}>105 km/h</div>
            </div>
            <div className={classes.path}>{ maker.formatted_address }</div>
            <div className={classes.driver}>
                <span className={classes.driverName}>Erkan Saltan</span>
                <span className={classes.driverId}>TCI 1830</span>
            </div>
            <div className={classes.fuelLevel}>
                <FuelLevelIcon/>
                <span className={classes.fuelPercent}>64%</span>
            </div>
            <div >
                <ZoomIcon className={classes.zoom}/>
                <Link to={ "/o/vehicle/123456" }>
                    <OpenInNewTabIcon className={classes.newTab} classes={{ root: classes.newTab }} />
                </Link>
            </div>
        </div>
    </div>
    )
}

export default InfoWindowPopup