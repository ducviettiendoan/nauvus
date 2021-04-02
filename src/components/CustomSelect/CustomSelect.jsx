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
            backgroundColor: 'white',
            borderColor: "#B4B4B4"
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
    },
}

const useStyles = makeStyles(styles)

const CustomSelect = (props) => {
    const { name, listValues, placeholder, selectValue, onChange } = props
    const classes = useStyles();

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
        <FormControl className={classes.selectContainer} fullWidth >
            <Select
                fullWidth
                disableUnderline
                classes={{ root: classes.select }}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={selectValue}
                onChange={onChange}
                name={name}
            >
                {selectValue === "none" && <option value="none" disabled style={{ display: "none" }} >
                    {placeholder}
                </option>}
                {listValues.map((value, i) => <MenuItem key={i} value={i}>{value}</MenuItem>)}
            </Select>
        </FormControl>
    );
};


export default CustomSelect;