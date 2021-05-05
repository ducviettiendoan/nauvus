import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";

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
        top: "8px !important",
        left: "3px",
        width: "24px !important",
        height: "24px !important",
        margin: "0px 17px 14px 12px !important",
    },
};

const useStyles = makeStyles(styles);

export default function AddButton() {
    const classes = useStyles();

    return (
        <Button
            color="white"
            round
            className={`${classes.moreAction} ${classes.buttonContainer}`}
        >
            <AddOutlined className={classes.iconButtonHeader} />
        </Button>
    );
};