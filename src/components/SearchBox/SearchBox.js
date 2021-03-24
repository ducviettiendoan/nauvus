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
    borderRadius: "36px",
    height: "40px",
    border: "1px solid #C4C4C4",
  },
  inputAdornmentIconSearch: {
    color: "#8181A5",
    marginTop: 10,
    marginLeft: "0 !important;"
  },
}

const useStyles = makeStyles(styles)

export default function SearchBox(props) {
  const { placeholder } = props
  const classes = useStyles()
  return (
    <CustomInput
      formControlProps={{
        className: classes.searchButton
      }}
      inputProps={{
        id: "btn-search-on-map",
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