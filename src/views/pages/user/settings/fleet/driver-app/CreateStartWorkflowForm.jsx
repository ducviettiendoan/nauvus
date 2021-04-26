import {makeStyles} from "@material-ui/core/styles";
import React,{useState} from "react";
import FormOption from "./FormOption";
import Button from "components/CustomButtons/Button";
import {useHistory} from "react-router-dom";

const styles = {
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },

};

const useStyles = makeStyles(styles);

const CreateStartWorkflowForm = (props) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(-1)

  const history = useHistory()

  const handleSelect = (index) => {
    setSelected(index)
  }

  const propsSelect = (index) => {
    return index === selected;
  }

  const chooseHandleClick = () => {
    switch (selected) {
      case 0:
        return history.push("/s/fleet/workflow-create")
      case 1:
        return history.push("/s/fleet/workflow-create")
    }
  }
  return(
    <div>
      <FormOption title="Sign In" subTitle="Prompt drivers to select a vehicle and/or trailer, review Hours of Service information, go On Duty, and complete a pre-trip inspection." onClick={() => handleSelect(0)} selected={propsSelect(0)}/>
      <FormOption title="Custom Workflow" subTitle="Specify your own tasks for drivers to complete upon signing in" onClick={() => handleSelect(1)} selected={propsSelect(1)}/>
      <div className={classes.selectButton}>
        <Button
          type="button"
          round
          className="btn-round-active-2 mr-2"
          onClick={props.handleClose}
        > Cancel
        </Button>
        <Button
          round
          className="btn-round-active mr-2"
          type="submit"
          onClick={chooseHandleClick}
        >Create</Button>
      </div>
    </div>
  )
}

export default CreateStartWorkflowForm;