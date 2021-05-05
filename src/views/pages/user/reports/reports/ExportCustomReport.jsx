import React, { useState } from "react";
// @material-ui/core SafetyInbox
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Form } from "react-final-form";
import BigTruckIcon from "components/Icons/BigTruckIcon";
import HardDriveIcon from "components/Icons/HardDriveIcon";
import DiaLog from "components/CustomDialog/Dialog";
import SetColumns from "./SetColumns";

const styles = {

  title: {
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#25345C",
    fontWeight: "700",
    marginBottom: 24,
  },
  image1: {
    width: "71px",
    height: "57px",
  },
  image: {
    width: "80px",
    height: "80px",
    // margin: "60px"
  },
  borderImage: {
    border: "1px dashed #25345C",
    background: "rgba(37, 52, 92, 0.05)",
    borderRadius: "5px",
  },
  borderImageInitial: {
    border: "1px solid #B4B4B4",
    borderRadius: "5px",
    margin: "4px",
  },
  options: {
    display: "flex",
    justifyContent: "center",
  },

  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
  choiceTitle: {
    fontSize: "18px",
    lineHeight: "22px",
    textAlign: "center",
    color: "#25345C",
  },
  setMargin: {
    display: "flex",
    justifyContent: "center",
    margin: "73px 0 60px -10px"
  },
  footer: {
    marginTop: 36,

  },
  buttonSetting: {
    width: "40px !important",
    height: "74ps !important",
    margin: "4px"
  },
  dialogTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26.4px",
    color: "#25345C"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4"
  },
  editHeader: {
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

export default function ExportCustomReport(props) {
  const {openTab,handleClose} = props;
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const [clickDriver, setClickDriver] = useState(false);
  const [clickVehicleAsset, setClickVehicleAsset] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
  }
  const openAssignHOS = () => {
    // setOpenForm(true)
    if (clickDriver || clickVehicleAsset){
      setOpenForm(true);
      // handleClose();
    }
  }

  const closeAssignHOS = () => {
    setOpenForm(false)
  }


  const handleChoice = () => {
    setCol(true)
  }

  const handleChooseDriver = () => {
    setClickDriver(prev => !prev);
    if (clickVehicleAsset){
      setClickVehicleAsset(false)
    }
  }

  const handleChooseVehicleAsset = () => {
    setClickVehicleAsset(prev => !prev);
    if (clickDriver){
      setClickDriver(false);
    }
  }

  const normalDriver =
    <GridItem className={classes.borderImageInitial} onClick={handleChooseDriver}>
      <GridContainer className={classes.setMargin} >
        <HardDriveIcon className={classes.image} />
        <GridItem xs={12} style={{ width: "135px" }} className={classes.choiceTitle}>Driver</GridItem>
      </GridContainer>
    </GridItem>

  const onClickDriver =
    <GridItem className={classes.borderImage} onClick={handleChooseDriver}>
      <GridContainer className={classes.setMargin} >
        <HardDriveIcon className={classes.image} />
        <GridItem xs={12} style={{ width: "135px" }} className={classes.choiceTitle}>Driver</GridItem>
      </GridContainer>
    </GridItem>

  const normalVehicleAsset =
    <GridItem className={classes.borderImageInitial} onClick ={handleChooseVehicleAsset}>
      <GridContainer className={classes.setMargin}>
        <BigTruckIcon className={classes.image} />
        <GridItem xs={12} className={classes.choiceTitle}>Vehicle & Asset</GridItem>
      </GridContainer>
    </GridItem>

  const onClickVehicleAsset =
    <GridItem className={classes.borderImage} onClick={handleChooseVehicleAsset}>
      <GridContainer className={classes.setMargin}>
        <BigTruckIcon className={classes.image} />
        <GridItem xs={12} className={classes.choiceTitle}>Vehicle & Asset</GridItem>
      </GridContainer>
    </GridItem>

  return (
    <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate className={classes.form} style={{ maxWidth: "700" }}>
              <GridContainer>
                <GridItem xs={12} className={classes.title}>What type of data are you looking to report on?</GridItem>
                <GridContainer className={classes.options}>
                  {clickDriver ? onClickDriver : normalDriver}
                  {clickVehicleAsset ? onClickVehicleAsset : normalVehicleAsset}
                </GridContainer>
              </GridContainer>

              <div className={classes.footer}>
                <div className={classes.selectButton}>
                  <Button
                    type="button"
                    round
                    className={`btn-round-active-2 ${classes.buttonSetting}`}
                    onClick={props.handleClose}
                  > Cancel
                  </Button>
                  <Button
                    round
                    className={`btn-round-active ${classes.buttonSetting}`}
                    type="submit"
                    disabled={submitting}
                    onClick={openAssignHOS}
                  > Next</Button>
                </div>
              </div>
            </form>
          )}
        />
        <DiaLog
          fullWidth={true}
          maxWidth="sm"
          renderTitle={<div className={classes.editHeader}>
            <h3 className={classes.dialogTitle}>Choose Columns</h3>
            <p className={classes.dialogSubTitle}>Select up to 15 columns</p>
          </div>}
          handleClose={closeAssignHOS}
          open={openForm}
        >
          <SetColumns handleClose={closeAssignHOS} />
        </DiaLog>
    </div>
  );
}