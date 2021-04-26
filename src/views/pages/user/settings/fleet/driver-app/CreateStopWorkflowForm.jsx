import {makeStyles} from "@material-ui/core/styles";
import React, { useState} from "react";
import FormOption from "./FormOption";
import Button from "components/CustomButtons/Button";
import {useHistory} from "react-router-dom";

const styles = {
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  selectedFormOption: {
    background: "#ECEEF0"
  }
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
        return props.openDocumentDialog()
      case 1:
        return history.push("/s/fleet/workflow-create")
      case 2:
        return history.push("/s/fleet/workflow-create")
    }
  }
  return(
    <div>
      <FormOption selected={propsSelect(0)} title="Submit Document" subTitle="Prompt drivers to create and submit a document at route stops." onClick={() => handleSelect(0)}/>
      <FormOption selected={propsSelect(1)} title="Drop & Hook" subTitle="Prompt drivers to complete a post-trip inspection for their current trailer, select a new trailer, and complete a pre-trip inspection." onClick={() => handleSelect(1)}/>
      <FormOption selected={propsSelect(2)} title="Custom Workflow" subTitle="Specify your own tasks for drivers to complete at route stops." onClick={() => handleSelect(2)}/>
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