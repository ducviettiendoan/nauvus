import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DraggableEditType from "./DraggleEditType";
import AddIcon from "components/Icons/AddIcon";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import { connect } from "react-redux";


const EditDocumentType = (props) => {
  const styles = theme => ({
    ...customDropdownStyle(theme),
    workflowTitle: {
      background: "none",
      border: "none",
      color: "#25345C",
      fontWeight: 700,
      fontSize: 18,
      margin: "26px 0",
      flexGrow: 1
    },
    headTool: {
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between"
    },
    card: {
      margin: 0,
      padding: 16,
      minHeight: "80vh",
    },
    text: {
      fontSize: 16,
      color: "#25345C",
      fontWeight: 700,
    },
    dragAndDrop: {
      padding: "0!important"
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
    trigger: {
      padding: "16px!important",
      margin: " 8px 15px",
      border: "1px solid #ECEEF0",
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "white",
    },
  });
  const useStyles = makeStyles(styles);
  const classes = useStyles()


  const templates = {
    "custom": []
  }

  const initialTask = templates[props.template || "custom"]

  let initTasks = props.tasks || initialTask
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState([])
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }
    if (destination.index === source.index) {
      return;
    }
    const newTasks = [...tasks]
    newTasks.splice(source.index, 1)
    const dragged = tasks.filter(task => task.id === draggableId)[0]
    newTasks.splice(destination.index, 0, dragged)
    setTasks(newTasks)
  }


  const handleAdd = () => {
    let task = {
      id: `task${tasks.length}`,
      title: "",
      required: false
    }
    let newTasks = [...tasks, task]
    setTasks(newTasks)
  }

  const handleDelete = (deletedTask) => {
    let newTasks = tasks.filter(task => task.id !== deletedTask.id)
    setTasks(newTasks)
  }

  return (
    <div>
      <div className={classes.headTool}>
        <input value={title} onChange={handleChange} defaultValue="Untitled document type" placeholder="Document type title" className={classes.workflowTitle} />
        <div>
          <Button
            type="button"
            round
            className={`btn-round-active-2 mr-2`}
          >Cancel
          </Button>
          <Button
            round
            className="btn-round-active"
          >Save
          </Button>
        </div>
      </div>
      <Card className={classes.card}>
        <GridContainer className={classes.headTool}>
          <GridItem className={classes.text}>
            {tasks.length} tasks
          </GridItem>
          <GridItem>
            <Button
              round
              justIcon
              className="btn-blue mr-2"
            >
              <AddOutlined />
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem className={classes.dragAndDrop} xs={12}>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId={"column"}>
                {(provided) => (
                  <GridItem
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks?.map((task, index) => {
                      return <DraggableEditType handleDelete={handleDelete} key={task.id} task={task} index={index} />
                    })}
                    {provided.placeholder}
                  </GridItem>
                )}
              </Droppable>
            </DragDropContext>
            <Button
              className="btn-round-white-3 h-41"
              startIcon={<AddIcon />}
              style={{ boxShadow: 'none' }}
              onClick={handleAdd}
            >
              Add Field
            </Button>
          </GridItem>
        </GridContainer>
      </Card>
    </div>
  )
}

export default connect(
  ({ settingFleet }) => ({
    template: settingFleet.template,
    trigger: settingFleet.trigger,
    title: settingFleet.title
  }),
  {

  }
)(EditDocumentType);