import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import RenameIcon from "components/Icons/RenameIcon";

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
        top: "4px !important",
        left: "4px",
        width: "24px !important",
        height: "24px !important",
        margin: "5px 17px 5px 18px !important",
    },
};

const useStyles = makeStyles(styles);

export default function EditButton() {
    const classes = useStyles();

    return (
        <Button
            color="white"
            round
            className={`${classes.moreAction} ${classes.buttonContainer}`}
        >
            <RenameIcon className={classes.iconButtonHeader} />
        </Button>
    );
};