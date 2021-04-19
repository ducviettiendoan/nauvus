import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import CheckedIcon from "components/Icons/CheckedIcon";

const styles = {
  moreAction: {
    background: "#FFFFFF",
    border: "1px solid #ECEEF0 !important",
  },
  buttonContainer: {
    height: "42px",
    width: "0px ",
    padding: "20px",
    marginRight: "10px"
  },
  iconButtonHeader: {
    color: "#FFFFFF",
    top: "6px !important",
    left: "5px !important",
    width: "24px !important",
    height: "24px !important",
    margin: "0px 17px 13px 13px !important",
  },
};

const useStyles = makeStyles(styles);

export default function FilterButton(props) {
  const classes = useStyles();

  return (
    <Button
      color="white"
      round
      className={`${classes.moreAction} ${classes.buttonContainer}`}
      onClick={props.filterAction}
    >
      <CheckedIcon className={classes.iconButtonHeader} />
    </Button>
  );
};