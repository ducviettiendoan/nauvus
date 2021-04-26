import {makeStyles} from "@material-ui/core/styles";
import React from "react"
import PropTypes from "prop-types"

const styles = {
  formOption: {
    border: "1px solid #ECEEF0",
    borderRadius: 12,
    padding: "12px 16px",
    marginBottom: 8,
    "&:hover": {
      background: "#ECEEF0",
      cursor: "pointer"
    }
  },
  title: {
    fontSize: 18,
    color: "#25345C",
    fontWeight: 700,
    marginBottom: 4
  },
  subTitle: {
    fontSize: 14,
    color: "#B4B4B4",
    fontWeight: 400
  },
  selected: {
    background: "#ECEEF0"
  }
};

const useStyles = makeStyles(styles);
const FormOption = (props) => {
  const classes = useStyles()

  const classSelect = () => {
    if (props.selected) {
      return classes.selected
    }
    return ""
  }

  return (
    <div className={classes.formOption + " " + classSelect()} onClick={props.onClick}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.subTitle}>{props.subTitle}</div>
    </div>
  )
}

FormOption.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

export default FormOption