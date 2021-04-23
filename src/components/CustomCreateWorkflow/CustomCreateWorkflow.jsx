import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import create from "assets/img/Create.png";

const styles = {
  createWorkflow: {
    height: "182px",
    maxWidth: "283px",
    width: "100%",
    border: "1px dashed #25345C",
    borderRadius: "12px",
    background: "rgba(37, 52, 92, 0.05)",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      background: "rgba(37, 52, 92, 0.1)"
    }
  },
  pictureContainer: {
    width: "30px !important",
    height: "32px !important",
    margin: "62px auto 8px auto !important",
    backgroundColor: "transparent !important",
    border: "none !important",
    borderRadius: "0 !important",
  },
  text: {
    fontWeight: "normal",
    fontSize: "12px",
    textDecorationLine: "underline",
    color: "#25345C",
  }
};

const useStyles = makeStyles(styles);

export default function CustomCreateWorkflow(props) {
  const classes = useStyles();
  const {onClick} = props

  return (
    <div onClick={onClick} className={classes.createWorkflow}>
      <div className={classes.pictureContainer}>
        <img src={create}  alt="..." />

      </div>
      <div className={classes.text}>Create Workflow</div>
    </div>
  );
}