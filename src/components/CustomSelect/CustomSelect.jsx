import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    selectContainer: {
        width: "100%",
        borderBottom: "1px solid #ECEEF0",
        display: "flex",
        alignItems: "center",
        justifyContents: "center",
    },
    select: {
        color: "#25345C",
        fontWeight: 700,
        borderStyle: 'none',
        borderWidth: 2,
        paddingRight: "40px !important",
        paddingLeft: "15px",
        "&:focus": {
            borderRadius: 12,
            background: 'white',
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
        defaultStyle: {
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
        logsSelect: {
            "& li": {
                fontWeight: 200,
                paddingTop: 12,
                paddingBottom: 12,
            },
            "& li.Mui-selected:hover": {
                background: "#ECEEF0 !important",
                color: 'black'
            },
            "& li.Mui-selected": {
                color: 'black',
                background: "#ECEEF0 !important"
            },
            "& li:hover": {
                background: "#ECEEF0 !important",
                color: 'black'
            },
        }

    },
    // custom select css
    logsSelect: {
        border: "1px solid #ECEEF0",
        borderRadius: "22px",
        color: "#25345C !important",
        fontSize: "13px !important",
        lineHeight: "17px",
        minWidth: "150px",
        height: "42px",
        paddingRight: "0px !important",
        display: "flex",
        justifyContent: "center",
    },
}

const useStyles = makeStyles(styles)

const CustomSelect = (props) => {
    const { name, listValues, placeholder, selectValue, onChange, customStyle } = props
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
            list: classes.list[customStyle] || classes.list.defaultStyle
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
        <FormControl className={classes.selectContainer} className={classes[customStyle]} fullWidth>
            <Select
                disableUnderline
                classes={{ root: classes.select }}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={selectValue}
                onChange={onChange}
                name={name}
                className="fs-13"
                inputProps={{ style: { width: 100 } }}
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