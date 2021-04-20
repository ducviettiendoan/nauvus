// tutorial custom 
// https://github.com/iulian-radu-at/react-select-material-ui/blob/master/storybook/stories.tsx
// https://dccs-it-business-solutions.github.io/react-searchable-select-mui/?path=/story/searchable-select--examples



import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from 'components/Icons/ExpandMoreIcon';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import classNames from "classnames";
import SearchBox from "components/SearchBox/SettingSearchBox";
import {
  dangerColor,
  defaultFont,
  grayColor,
  primaryColor,
  successColor, whiteColor
} from "assets/jss/material-dashboard-pro-react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const styles = {
  select: {
    borderRadius: "26px",
  },
  root: {
    color: "#B4B4B4",
    fontWeight: 500,
    fontSize: "14px",
    borderStyle: 'none',
    borderWidth: 2,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: 'unset',
      borderColor: "#B4B4B4"
    },
    marginTop: "0",
    minWidth: 100,
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
    top: 0,
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    },
    transform: "translate(0, 1.5px) scale(0.75)"
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
  optionEmpty: {
    color: "#B4B4B4",
    fontWeight: 500,
    display: "none"
  },
  outlined: {
    margin: 0,
    padding: "12px 24px",
    borderRadius: 26,
    background: "#fff",
    color: "#25345C",
    textAlign: "center",
    "&:focus": {
      borderRadius: 26,
      backgroundColor: '#fff',
    },
  },
  searchBox: {
    padding: "8px 16px 0"
  },
  selectContainer: {
    paddingTop: 6
  }
}

const useStyles = makeStyles(styles)

const CustomSelect = (props) => {
  const { customStyle, labelProps, error, success, id, white, selectProps } = props
  const classes = useStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className} />
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

  const onChange = (e) => {
    setValue(e.target.value)
    if (props.onChange) props.onChange(e.target.value)
  }

  const [value, setValue] = useState(props.value || props.defaultValue)

  const label = props.label || null;
  const options = props.options || [];
  const placeholder = props.placeholder || null;
  const defaultValue = props.defaultValue || null;
  const variant = props.variant || "standard";
  const fullWidth = props.fullWidth || false;
  const autoComplete = props.autoComplete || false;
  return (
    <div className={props.className}>
      <FormControl className={classes.selectContainer} fullWidth={fullWidth}>
        <InputLabel
          {...labelProps}
          htmlFor={id}
          className={classes.labelRoot + " " + labelClasses}
        >
          {label}
        </InputLabel>
        <Select
          {...selectProps}
          value={value}
          displayEmpty
          defaultValue={defaultValue}
          className="fs-13"
          onChange={onChange}
          MenuProps={menuProps}
          variant={variant}
          IconComponent={iconComponent}
          className={classes.select}
          classes={{
            root: classes.root,
            underline: underlineClasses,
            outlined: classes.outlined,
            notchedOutline: classes.notchedOutline
          }}
        >
          {placeholder && <option disabled value={null} className={classes.optionEmpty} >{placeholder}</option>}
          {autoComplete && (
            <ClickAwayListener onClickAway={() => null}>
              <div className={classes.searchBox}>
                <SearchBox placeholder="Search assigned coach" />
              </div>
            </ClickAwayListener>
          )}
          {options.map((v, i) => <MenuItem key={i} value={v.value}>{v.label}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
};


export default CustomSelect;