import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "components/Card/Card";
import Button from "components/CustomButtons/Button";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import FlagIcon from "components/Icons/FlagIcon";
import WorkflowVehicleIcon from "components/Icons/WorkflowVehicleIcon";
import WorkflowClockIcon from "components/Icons/WorkflowClockIcon";
import DocumentIcon from "components/Icons/DocumentIcon";

const styles = {
  createWorkflow: {
    // height: "182px",
    maxWidth: "283px",
    width: "100%",
    borderRadius: "12px",
    background: "white",
    "&:hover": {
      cursor: "pointer",
    },
    padding: 16
  },
  title: {
    fontWeight: 700,
    fontSize: 16,
    color: "#25345C",
  },
  subTitle: {
    fontWeight: 400,
    fontSize: 14,
    color: "#B4B4B4"
  },
  publish: {
    fontSize: 12,
    fontWeight: 700,
    color: "#B4B4B4",
    margin: "24px 0"
  },
  text: {
    fontWeight: "normal",
    fontSize: "12px",
    color: "#25345C",
  },
  moreAction: {
    boxShadow: "none!important",
    border: "none!important"
  },
  firstLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"

  },
  lastLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  numberButton: {
    padding: "12.5px 16px!important"
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 4px"
  },
  iconLine: {
    display: "flex",
    alignItems: "center"
  },
  pink: {
    background: "#E77FF0",
    border: "1px solid rgba(18, 18, 18, 0.1)"
  },
  blue: {
    background: "#4284D1",
    border: "1px solid rgba(18, 18, 18, 0.1)",
  },
  orange: {
    background: "#FAD2B9",
    border: "1px solid rgba(18, 18, 18, 0.1)",
  },
  brown: {
    background: "#D78526",
    border: "1px solid #c16a07"
  }
};

const useStyles = makeStyles(styles);

export default function StartWorkflow(props) {
  const classes = useStyles();
  const {title, onClick} = props
  let workflow = props.workflow || []

  return (
    <Card onClick={onClick} className={classes.createWorkflow}>
      {console.log(workflow)}
      <div className={classes.firstLine}>
        <div>
          <div className={classes.title}>{title} </div>
          <div className={classes.subTitle}>Not Published</div>
        </div>

        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={` btn-round-white-2 ${classes.moreAction} mr-2`}
        >
          <MoreHorizontalIcon />
        </Button>
      </div>
      <div className={classes.publish}>Add publish</div>
      <div className={classes.lastLine}>
        <Button
          round
          justIcon
          className="btn-round-white mr-2"
        >
          <AddOutlined style={{color: "#C4C4C4"}}/>
        </Button>
        <div className={classes.iconLine}>
          <div className={classes.iconWrapper + " " + classes.blue}>
            <FlagIcon color={"white"} style={{width: "9px", height: "12px"}} />
          </div>
          {
            workflow.length >= 2 && workflow.splice(0,2).map((task) => {
              switch (task.icon) {
                case "vehicle":
                  return <span className={classes.iconWrapper + " " + classes.pink}><WorkflowVehicleIcon color="white" style={{width: "15px", height: "12px"}}/></span>
                case "clock":
                  return <span className={classes.iconWrapper + " " + classes.orange}><WorkflowClockIcon color="white" style={{width: "14px", height: "14px"}}/></span>
                case "document":
                  return <span className={classes.iconWrapper + " " + classes.brown}><DocumentIcon color="white" style={{width: "16px", height: "14px"}}/></span>
              }
            })
          }
          <Button
            round
            className={"btn-round-gray " + classes.numberButton}
            startIcon={<AddOutlined style={{color: "#C4C4C4"}}/>}
          >
            <span style={{color: "#25345C"}}>{workflow.length - 2}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}