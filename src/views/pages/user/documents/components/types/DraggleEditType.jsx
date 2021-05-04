import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Button from "components/CustomButtons/Button";
import DeleteIcon from "components/Icons/DeleteIcon";
import { Draggable } from "react-beautiful-dnd";
import GridItem from "components/Grid/GridItem";
import CalendarIcon from "components/Icons/CalendarIcon";
import CustomInput from "components/CustomInput/CustomInput"
import CustomSwitch from "components/CustomSwitch/Switch"

const DraggableEditType = (props) => {

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
    delete: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    title: {
      flexGrow: 1,
      fontSize: 14,
      color: "#25345C",
      border: "1px solid #ECEEF0",
      borderRadius: 32,
      fontWeight: 400,
      padding: "16px 24px"
    },
    sidebarInput: {
      width: "100%",
      padding: "0px",
      margin: "0px",
    },
    textInputRoot: {
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '21px',
      color: '#25345C',
      padding: "6px 0 17px"
    },
    requiredText: {
      fontSize: 14,
      color: "#25345C",
      fontWeight: 400,
      marginLeft: "16px",
      marginRight: "10px",
    },
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles()
  // input
  const [inputValue, setInputValue] = React.useState(props.task.title || "")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // switch
  const [checkedState, setCheckedState] = React.useState({
    [props.task.id]: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <GridItem className={classes.draggableTask}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        >
          <div className={classes.iconWrapper}>
            <CalendarIcon style={{ width: "16px", height: "14px" }} />
          </div>
          <div className={classes.title}>
            <CustomInput
              name="asset"
              formControlProps={{
                className: classes.sidebarInput
              }}
              inputProps={{
                placeholder: "Enter field name",
                onChange: handleInputChange,
                // defaultValue: "",
                value: inputValue,
                classes: { input: classes.textInputRoot },
              }}
            />
          </div>
          <div className={classes.delete}>
            <div className={classes.requiredText}>Required</div>
            <CustomSwitch checked={checkedState[props.task.id]} onChange={handleChange} name={props.task.id} />
            <Button onClick={() => props.handleDelete(props.task)} justIcon color="twitter" simple>
              <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
            </Button>
          </div>
        </GridItem>
      )}
    </Draggable>
  )
}

export default DraggableEditType

