import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";

const styles = {
    initial: {
        backgroundColor: "#27AE60",
        borderRadius: "100%",
        width: "25px",
        height: "25px",
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "17px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

      },
}

const useStyles = makeStyles(styles);

const Initials = (props) => {
    const classes = useStyles();

    const str = props.str;

    let color;

    const getInitials = (string) => {
        return string.split(" ").map((n)=>n[0]).join("");
    }

    if(str == "Driving") color = "#27AE60";
    else if(str == "Yard Move") color = "#8097D8";
    else if(str == "Personal Conveyance") color = "#8780D8";
    else if(str == "Off Duty") color = "#B4B4B4";
    else if(str == "Sleeper Berth") color = "#26252A";
    else if(str == "Disconnected") color = "#838181";
    else if(str == "On Duty") color = "#E29468";

    return(
        <div className={classes.initial} style={{backgroundColor: color, width: props.size, height: props.size}} >{getInitials(str)}</div>
    )
}

export default Initials;