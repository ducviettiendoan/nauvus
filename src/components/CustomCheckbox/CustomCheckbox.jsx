import {Checkbox} from "@material-ui/core";
import CheckSquareOutlined from "../Icons/CheckSquareOutlined";
import React from "react";
import {primaryColor} from "../../assets/jss/material-dashboard-pro-react";
import {makeStyles} from "@material-ui/core/styles";


const styles = {
    checked: {
        color: primaryColor[0] + "!important"
    },
    checkRoot: {
        padding: "0px",
        "&:hover": {
            backgroundColor: "unset"
        }
    },
}
const useStyles = makeStyles(styles);

const CustomCheckbox = (props) => {
    const classes = useStyles()

    return(
        <Checkbox
            {...props}
            checkedIcon={<CheckSquareOutlined />}
            classes={{
                checked: classes.checked,
                root: classes.checkRoot
            }}
        />
    )
}

export default CustomCheckbox