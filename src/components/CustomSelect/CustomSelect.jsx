import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import classNames from "classnames";
import {
    dangerColor,
    defaultFont,
    grayColor,
    primaryColor,
    successColor, whiteColor
} from "../../assets/jss/material-dashboard-pro-react";

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
        fontSize: "14px",
        borderStyle: 'none',
        borderWidth: 2,
        "&:focus": {
            borderRadius: 12,
            backgroundColor: 'white',
            borderColor: "#B4B4B4"
        },
        marginTop: "20px",
        minWidth: "180px"
    },
    icon: {
        color: "#25345C",
        right: 12,
        top: 22,
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
    labelRootError: {
        color: dangerColor[0] + " !important"
    },
    labelRootSuccess: {
        color: successColor[0] + " !important"
    },
    labelRoot: {
        ...defaultFont,
        color: grayColor[3] + " !important",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "1.42857",
        top: "10px",
        letterSpacing: "unset",
        "& + $underline": {
            marginTop: "0px"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderColor: grayColor[4] + "!important",
            borderWidth: "1px !important"
        },
        "&:after": {
            borderColor: primaryColor[0]
        },
        "& + p": {
            fontWeight: "300"
        }
    },
    underlineError: {
        "&:after": {
            borderColor: dangerColor[0]
        }
    },
    underlineSuccess: {
        "&:after": {
            borderColor: successColor[0]
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            backgroundColor: whiteColor
        },
        "&:after": {
            backgroundColor: whiteColor
        }
    },
}

const useStyles = makeStyles(styles)

const CustomSelect = (props) => {
    const { name, listValues, placeholder, selectValue, onChange, customStyle, labelProps, labelText, error, success, id, white, selectProps, listContent } = props
    const classes = useStyles();

    const iconComponent = (props) => {
        return (
            <ExpandMoreIcon className={props.className + " " + classes.icon} />
        )
    };

    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });

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
            <InputLabel
                className={classes.labelRoot + " " + labelClasses}
                htmlFor={id}
                {...labelProps}
            >
                {labelText}
            </InputLabel>
            <Select
                classes={{
                    root: classes.select,
                    underline: underlineClasses
                }}
                {...selectProps}
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={selectValue}
                onChange={onChange}
                name={name}
                className="fs-13"
                className={customStyle == "logsSelect" && "mt--15"}
                inputProps={{ style: { width: 100 } }}
            >
                {selectValue === "none" && <option value="none" disabled style={{ display: "none" }} >
                    {placeholder}
                </option>}
                {listValues?.map((value, i) => <MenuItem key={i} name={name} value={value}>{value}</MenuItem>)}
                {listContent?.map((item, i) => {
                    console.log(item)
                    return (
                      <MenuItem key={i} name={item.name} value={item.value}>{item.content}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    );
};


export default CustomSelect;