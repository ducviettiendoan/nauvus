import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import DraggableTask from "./DraggableTask";
import AddIcon from "components/Icons/AddIcon";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import FlagIcon from "components/Icons/FlagIcon";
import DocumentIcon from "components/Icons/DocumentIcon";
import WorkflowClockIcon from "components/Icons/WorkflowClockIcon";
import WorkflowVehicleIcon from "components/Icons/WorkflowVehicleIcon";
import {connect} from "react-redux";
import {changeTemplate, changeTrigger, getStartWorkflow} from "../../../../../../reducers/setting-fleet";


const CreateWorkflow = (props) => {
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
    itemContainer: {
      display: "flex",
      justifyContent: "flex-start",
      paddingLeft: "0px !important"
    },
    dropdownVehicle: {
      borderRadius: "12px",
      boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.25)",
      width: "285px",
      paddingLeft: "12px",
      paddingRight: "12px",
    },
    popperInput: {
      paddingBottom: "8px",
      paddingTop: "8px",
    },
    dragAndDrop: {
      padding: "0!important"
    },
    popper: {
      transform: "none!important",
      top: "unset!important",
      left: "unset!important",

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

  const allTasks = [
    {title: "Select vehicle", icon: "vehicle"},
    {title: "Review unassigned hours", icon: "clock"},
    {title: "Select trailer", icon: "vehicle"},
    {title: "Enter shipping ID", icon: "clock"},
    {title: "Certify logs", icon: "clock"},
    {title: "Review carrier edits", icon: "clock"},
    {title: "Go On-Duty", icon: "clock"},
    {title: "Start inspection for vehicle", icon: "document"},
    {title: "Start inspection for trailer", icon: "document"},
    {title: "Create document", icon: "document"},
    {title: "Review carrier assignment", icon: "clock"},
  ]

  const templates = {
    "signIn": [
      {id: "task0", title: "Select vehicle", icon:"vehicle"},
      {id: "task1", title: "Start inspection for vehicle", icon: "document"},
      {id: "task2", title: "Review unassigned hours", icon: "clock"},
      {id: "task3", title: "Select trailer", icon: "vehicle"},
      {id: "task4", title: "Enter shipping ID", icon: "clock"},
      {id: "task5", title: "Certify logs", icon: "clock"},
      {id: "task6", title: "Review carrier edits", icon: "clock"},
      {id: "task7", title: "Go On-Duty", icon: "clock"},
      {id: "task8", title: "Start inspection for vehicle", icon: "document"},
      {id: "task9", title: "Start inspection for trailer", icon: "document"},
    ],
    "submitDocument": [
      {id: "task0", title: "Create document", icon: "document"},
    ],
    "dropNHook": [
      {id: "task0", title: "Start inspection for trailer", icon: "document"},
      {id: "task1", title: "Select trailer", icon: "vehicle"},
      {id: "task2", title: "Start inspection for trailer", icon: "document"},
    ],
    "custom": []
  }

  const initialTask = templates[props.template || "custom"]

  const mockTrigger = props.trigger || "Sign in"

  let trigger = props.trigger || mockTrigger
  let initTasks = props.tasks || initialTask
  const [title, setTitle] = useState(props.title)
  const [tasks, setTasks] = useState(initTasks)
  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result

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

  //Popper logic
  const [openMore, setOpenMore] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const handleAdd = (task) => {
    task.id = `task${tasks.length}`
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
        <input value={title} onChange={handleChange} placeholder="Workflow title" className={classes.workflowTitle}/>
        <div>
          <Button
            round
            className="btn-round-active mr"
            startIcon={<AddOutlined/>}
          >Publish</Button>
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
              <AddOutlined/>
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem className={classes.dragAndDrop} xs={12}>
            <GridItem
              className={classes.trigger}
            >
              <div className={classes.iconWrapper}>
                <FlagIcon style={{width: "9px", height: "12px"}}/>
              </div>
              <div className={classes.title}>
                {trigger}
              </div>
            </GridItem>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId={"column"}>
                {(provided) => (
                  <GridItem
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks.map((task, index) => {
                      return <DraggableTask handleDelete={handleDelete} key={task.id} task={task} index={index}/>
                    })}
                    {provided.placeholder}
                  </GridItem>
                )}
              </Droppable>
            </DragDropContext>
            <Button
              className="btn-round-white-3 h-41"
              startIcon={<AddIcon/>}
              style={{boxShadow: 'none'}}
              onClick={handleOpenMore}
            >
              Add Task
            </Button>
            <Popper
              open={openMore}
              anchorEl={anchorEl}
              transition
              disablePortal
              placement="bottom-end"
              className={classNames({
                [classes.popperClose]: !anchorEl,
                [classes.popperResponsive]: true,
                [classes.popper]: true
              })}
            >
              {({TransitionProps}) => (
                <Grow
                  {...TransitionProps}
                  id="profile-menu-list"
                  style={{transformOrigin: "0 0 0"}}
                >
                  <Paper className={classes.dropdown && classes.dropdownVehicle}>
                    <ClickAwayListener onClickAway={handleCloseMore}>
                      <MenuList role="menu">
                        <SettingSearchBox placeholder="Search"/>
                        {allTasks.map((task) => {
                          return (
                            <MenuItem key={task} className={classes.itemContainer} onClick={() => handleAdd(task)}>
                              <span className={classes.iconWrapper}>
                                {task.icon === "document" && <DocumentIcon style={{width: "16px", height: "14px"}}/>}
                                {task.icon === "clock" && <WorkflowClockIcon style={{width: "14px", height: "14px"}}/>}
                                {task.icon === "vehicle" && <WorkflowVehicleIcon style={{width: "15px", height: "12px"}}/>}
                              </span>
                              {task.title}
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
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
)(CreateWorkflow);