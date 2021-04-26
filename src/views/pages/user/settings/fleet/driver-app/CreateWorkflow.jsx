import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Card from "components/Card/Card";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

const styles = {
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
    padding: 16
  },
  text: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
  }
};

const useStyles = makeStyles(styles);
const CreateWorkflow = (props) => {
  const classes = useStyles()
  const [title, setTitle] = useState("")
  const handleChange = (e) => {
    setTitle(e.target.value)
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
            12 tasks
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
      </Card>
    </div>
  )
}

export default CreateWorkflow