import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    selectContainer: {
        borderBottom: "1px solid #ECEEF0"
    },
    select: {
        width: 360,
        background: 'white',
        color: "#25345C",
        fontWeight: 700,
        borderStyle: 'none',
        borderWidth: 2,
        // borderRadius: 12,
        paddingTop: 14,
        paddingBottom: 15,
        "&:focus": {
            borderRadius: 12,
            background: 'white',
            borderColor: "#25345C"
        },
    },
    icon: {
        color: "#25345C",
        right: 12,
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none'
    },
    paper: {
        borderRadius: 12,
        marginTop: 8
    },
    list: {
        paddingTop: 0,
        paddingBottom: 0,
        background: 'white',
        "& li": {
            fontWeight: 200,
            paddingTop: 12,
            paddingBottom: 12,
        },
        "& li:hover": {
            background: "#25345C",
            color: 'white'
        },
        "& li.Mui-selected": {
            color: 'white',
            background: "#25345C"
        },
        "& li.Mui-selected:hover": {
            background: "#25345C",
            color: 'white'
        }
    }
}

const useStyles = makeStyles(styles)

const CustomSelect = (props) => {
    const { values } = props
    const classes = useStyles();

    const [val, setVal] = useState(0);

    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + classes.icon} />
        )
    };

    // moves the menu below the select input
    const menuProps = {
        classes: {
            paper: classes.paper,
            list: classes.list
        },
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
        },
        transformOrigin: {
            vertical: "top",
            horizontal: "left"
        },
        getContentAnchorEl: null
    };


    return (
        <FormControl className={classes.selectContainer}>
            <Select
                disableUnderline
                classes={{ root: classes.select }}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={val}
                onChange={handleChange}
            >
                {values.map((value, i) => <MenuItem key={i} value={i}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    );
};


export default CustomSelect;