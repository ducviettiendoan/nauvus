import FuelLevelIcon from "components/Icons/FuelLevelIcon";
import ZoomIcon from "components/Icons/ZoomIcon";
import OpenInNewTabIcon from "components/Icons/OpenInNewTabIcon";
import React from "react";
import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

const InfoWindowPopup = (props) => {
    const classes = useStyles()

    const {maker} = props
    console.log(maker)
    return(
    <div className={classes.infowindow}>
        <img src="https://360.here.com/hs-fs/hubfs/Imported_Blog_Media/S-class-new.jpg?width=1100&height=733&name=S-class-new.jpg" alt="vehicle preview" className={classes.vehiclePreview}/>
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
                <OpenInNewTabIcon className={classes.newTab}/>
            </div>
        </div>
    </div>
    )
}

export default InfoWindowPopup