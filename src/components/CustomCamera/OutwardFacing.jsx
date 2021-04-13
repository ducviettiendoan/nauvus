/*eslint-disable*/
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import defaultImage from "assets/img/Upload.png";

const styles = {
  organizationUpload: {
    height: "206px",
    border: "1px solid #ECEEF0",
    boxSizing: "border-box",
    borderRadius: "12px",
    background: "rgba(37, 52, 92, 0.05)",
  },
  pictureContainer: {
    width: "30px !important",
    height: "32px !important",
    margin: "80px auto 0 auto !important",
    backgroundColor: "transparent !important",
    border: "none !important",
    borderRadius: "0 !important",
  },
  txtChooseFile: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#B4B4B4",
    marginTop: "85px !important"
  }
};

const useStyles = makeStyles(styles);

export default function OutwardFacing() {
  const classes = useStyles();

  return (
    <div className={ `picture-container ${classes.organizationUpload}` }>
      <div className={ `${classes.txtChooseFile}` }>Outward Facing</div>
    </div>
  );
}
