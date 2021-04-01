import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import ColumnIcon from "components/Icons/ColumnIcon";

const styles = {
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  buttonContainer: {
    height: "42px",
    width: "0px ",
    padding: "20px",
    marginRight: "10px"
  },
  iconButtonHeader: {
    color: "#25345C",
    width: "24px !important",
    height: "24px !important",
    margin: "5px 17px 0px 18px !important",
  },
};

const useStyles = makeStyles(styles);

export default function ColumnButton() {
  const classes = useStyles();

  return (
    <Button
      color="white"
      round
      className={`${classes.moreAction} ${classes.buttonContainer}`}
    >
      <ColumnIcon className={classes.iconButtonHeader} />
    </Button>
  );
};