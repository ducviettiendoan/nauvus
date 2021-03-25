import React from "react";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// import Search from "@material-ui/icons/Search";
import SearchIconRight from "components/Icons/SearchIconRight.jsx"
import { makeStyles } from "@material-ui/core";
// import styles from "assets/jss/material-dashboard-pro-react/components/searchBoxStyle.js";

const styles = {
  searchButton: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "22px",
    height: "42px",
    border: "1px solid #ECEEF0",
  },
  inputAdornmentIconSearch: {
    color: "#25345C",
    marginTop: 10,
    marginLeft: "0 !important;"
  },
  baseInput: {
    padding: '10px 0 10px'
  }
}

const useStyles = makeStyles(styles)

export default function SettingSearchBox(props) {
  const { placeholder } = props
  const classes = useStyles()
  return (
    <CustomInput
      formControlProps={{
        className: classes.searchButton
      }}
      inputProps={{
        disableUnderline: true,
        classes: { input: classes.baseInput },
        placeholder: `${placeholder}`,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIconRight className={classes.inputAdornmentIconSearch} />
          </InputAdornment>
        )
      }}
    />
  )
}