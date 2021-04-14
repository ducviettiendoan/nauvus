import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";


const styles = {
    circle: {
        marginRight: "8px",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        color: "#25345C",
        border: "1px solid #ccc",
        "&:hover" : {
            border: "1px solid #25345C",
            cursor: "pointer"
        },
        borderRadius: "50%"
    },
    circleActive: {
        marginRight: "8px",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        color: "white",
        background: "#25345C",
        "&:hover" : {
            cursor: "pointer"
        },
        borderRadius: "50%"
    },
    dayPicker: {
        display: "flex"
    }
}
const useStyles = makeStyles(styles);

const CustomDayPicker = (props) => {
    const {toggleDay, days} = props
    const classes = useStyles()

    return(
        <GridContainer className={classes.dayPicker}>
            <GridItem className={days[0] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(0)}}>Mo</GridItem>
            <GridItem className={days[1] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(1)}}>Tu</GridItem>
            <GridItem className={days[2] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(2)}}>We</GridItem>
            <GridItem className={days[3] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(3)}}>Th</GridItem>
            <GridItem className={days[4] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(4)}}>Fr</GridItem>
            <GridItem className={days[5] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(5)}}>Sa</GridItem>
            <GridItem className={days[6] ? classes.circleActive : classes.circle} onClick={() => {toggleDay(6)}}>Su</GridItem>
        </GridContainer>
    )
}

export default CustomDayPicker