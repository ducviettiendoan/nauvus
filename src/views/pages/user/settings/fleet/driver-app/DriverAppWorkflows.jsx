import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import CustomCreateWorkflow from "components/CustomCreateWorkflow/CustomCreateWorkflow";
import DiaLog from "components/CustomDialog/Dialog";
import CreateStartWorkflowForm from "./CreateStartWorkflowForm";
import CreateStopWorkflowForm from "./CreateStopWorkflowForm";
import SelectDocumentForm from "./SelectDocumentForm";
import {
  getStartWorkflow,
  getStopWorkflow,
} from "reducers/setting-fleet";
import {connect} from "react-redux";
import StartWorkflow from "./StartWorkflow";

const styles = {
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 16,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 17px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  cardMultipleContent: {
    paddingLeft: "12px !important",
    paddingBottom: "20px !important"
  },

  headItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 6px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  cardBody: {
    paddingTop: "5px",
  },
  divider: {
    width: "100%",
    margin: "24px 0 24px 0",
    borderTop: "1px solid #ECECF2"
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 0
  },
  dialogSubTitle: {
    fontWeight: 700,
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center",
  },
  dialogTitleWrapper: {
    margin: "26px 0",
    textAlign: "center"
  }


};

const useStyles = makeStyles(styles);

const DriverAppWorkflows = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
  };

  const [dialogOpen, setDialogOpen] = useState({start: false, stop: false, document: false})

  const handleOpen = (dialog) => {
    switch (dialog) {
      case "start":
        setDialogOpen(prev => ({
          stop:false,
          document: false,
          start: true,
        }))
        break
      case "stop":
        setDialogOpen(prev => ({
          start: false,
          document: false,
          stop: true
        }))
        break
      case "document":
        setDialogOpen(prev => ({
          start: false,
          stop: false,
          document: true
        }))
    }
  }

  const handleClose = () => {
    setDialogOpen({
      stop: false,
      start: false,
      document: false
    })
  }

  useEffect(() => {
    props.getStartWorkflow()
    props.getStopWorkflow()
  }, [])

return (
  <GridContainer>
    <DiaLog
      renderTitle={
        <>
          {
            dialogOpen.stop &&
            <div className={classes.dialogTitleWrapper}>
              <h3 className={classes.dialogTitle}>Create Stop Arrival workflow</h3>
              <div className={classes.dialogSubTitle}>Start with a customizable Nauvus template...</div>
            </div>
          }
          {
            dialogOpen.start &&
            <div className={classes.dialogTitleWrapper}>
              <h3 className={classes.dialogTitle}>Create Start of Day workflow</h3>
              <div className={classes.dialogSubTitle}>Start with a customizable Nauvus template...</div>
            </div>
          }
          {
            dialogOpen.document &&
            <div className={classes.dialogTitleWrapper}>
              <h3 className={classes.dialogTitle}>Select document type</h3>
              <div className={classes.dialogSubTitle}>Select a document type or create a new document.</div>
            </div>
          }
        </>
      }
      fullWidth={true}
      maxWidth="md"
      handleClose={handleClose}
      open={dialogOpen.stop || dialogOpen.start || dialogOpen.document}
    >
      {
        dialogOpen.start && <CreateStartWorkflowForm handleClose={handleClose}/>
      }
      {
        dialogOpen.stop && <CreateStopWorkflowForm handleClose={handleClose} openDocumentDialog={() => handleOpen("document")}/>
      }
      {
        dialogOpen.document && <SelectDocumentForm handleClose={handleClose}/>
      }
    </DiaLog>
    <CardBody className={classes.cardBody}>
      <GridContainer className={classes.cardMultipleContent}>
        <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
          <GridItem className={classes.headerItem}>
            Start of Day
          </GridItem>
          <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
            Assign tasks for drivers to complete upon sign in.
          </GridItem>
          <StartWorkflow title={props.startTitle} workflow={props.startWorkflow}/>
          {/*<CustomCreateWorkflow onClick={() => handleOpen("start")}/>*/}
        </GridItem>
        <hr className={classes.divider}/>

        <GridItem className={classes.cardItem} xs={12} sm={12} md={12}>
          <GridItem className={classes.headerItem}>
            Stop Arrival
          </GridItem>
          <GridItem className={classes.contentItem} xs={12} sm={12} md={12}>
            Assign tasks to route stops for drivers to complete upon arrival.
          </GridItem>
          <CustomCreateWorkflow onClick={() => handleOpen("stop")}/>
        </GridItem>
      </GridContainer>
    </CardBody>
  </GridContainer>
);
}

export default connect(
  ({ settingFleet }) => ({
    startTitle: settingFleet.startTitle,
    stopTitle: settingFleet.stopTitle,
    startWorkflow: settingFleet.startWorkflow,
    stopWorkflow: settingFleet.stopWorkflow
  }),
  {
    getStartWorkflow,
    getStopWorkflow,
  }
)(DriverAppWorkflows)