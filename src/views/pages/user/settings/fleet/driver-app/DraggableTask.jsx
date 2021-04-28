import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Button from "components/CustomButtons/Button";
import DeleteIcon from "components/Icons/DeleteIcon";
import {Draggable} from "react-beautiful-dnd";
import GridItem from "components/Grid/GridItem";
import DocumentIcon from "components/Icons/DocumentIcon";
import WorkflowClockIcon from "components/Icons/WorkflowClockIcon";
import WorkflowVehicleIcon from "components/Icons/WorkflowVehicleIcon";

const DraggableTask = (props) => {

  const styles = {
    draggableTask: {
      padding: "16px!important",
      margin: " 8px 0",
      border: "1px solid #ECEEF0",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "white"
    },
    iconButton: {
      '&:hover': {
        color: '#25345C !important',
      }
    },
    iconWrapper: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: "#ECEEF0",
      marginRight: 16,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    delete: {},
    title: {
      flexGrow: 1,
      fontSize: 14,
      color: "#25345C",
      border: "1px solid #ECEEF0",
      borderRadius: 32,
      fontWeight: 400,
      padding: "16px 24px"
}
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles()
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <GridItem className={classes.draggableTask}
             {...provided.draggableProps}
             {...provided.dragHandleProps}
             innerRef={provided.innerRef}
        >
          <div className={classes.iconWrapper}>
            {props.task.icon === "document" && <DocumentIcon style={{width: "16px", height: "14px"}}/>}
            {props.task.icon === "clock" && <WorkflowClockIcon style={{width: "14px", height: "14px"}}/>}
            {props.task.icon === "vehicle" && <WorkflowVehicleIcon style={{width: "15px", height: "12px"}}/>}
          </div>
          <div className={classes.title}>
            {props.task.title}
          </div>
          <div className={classes.delete}>
            <Button onClick={() => props.handleDelete(props.task)} justIcon color="twitter" simple>
              <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
            </Button>
          </div>
        </GridItem>
      )}
    </Draggable>
  )
}

export default DraggableTask

