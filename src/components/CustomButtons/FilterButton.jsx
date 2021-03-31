import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import FilterIcon from "components/Icons/FilterIcon";

const styles = {
    moreAction: {
        background: "#FFFFFF !important",
        border: "1px solid #ECEEF0 !important",
    },
    buttonContainer: {
        height: "42px",
        width: "0px ",
        padding: "20px",
        marginRight: "10px"
    },
    iconButtonHeader: {
        color: "#25345C",
        top: "6px !important",
        left: "5px !important",
        width: "24px !important",
        height: "24px !important",
        margin: "5px 17px 5px 18px !important",
    },
};

const useStyles = makeStyles(styles);

export default function FilterButton() {
    const classes = useStyles();

    return (
        <Button
            color="white"
            round
            className={`${classes.moreAction} ${classes.buttonContainer}`}
        >
            <FilterIcon className={classes.iconButtonHeader} />
        </Button>
    );
};