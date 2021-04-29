import React, {useState} from "react";
// @material-ui/core SafetyInbox
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Form} from "react-final-form";
import BigTruckIcon from "components/Icons/BigTruckIcon";
import HardDriveIcon from "components/Icons/HardDriveIcon";
import DiaLog from "components/CustomDialog/Dialog";

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
      margin: "70px"
  },
  image2: {
    width: "80px",
    height: "80px",
    margin: "60px"
},
  borderImage: {
    border: "1px solid #B4B4B4",
    borderRadius: "5px",
    margin: "4px",
    "&:hover": {
        border: "1px dashed #25345C",
        background: "rgba(37, 52, 92, 0.05)"
      },
  },
  options: {
      display: "flex",
      justifyContent: "center",
  },
  
  selectButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const useStyles = makeStyles(styles);

export default function ExportCustomReport(props) {
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
  }

  const openAssignHOS = () => {
    setOpenForm(true)
  }

  const closeAssignHOS = () => {
    setOpenForm(false)
  }

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit} noValidate className={classes.form} style={{maxWidth:"700"}}>
            <GridContainer>
            <GridItem xs={12} className={classes.title}>What type of data are you looking to report on?</GridItem>
            <GridContainer className={classes.options}>
            <GridItem className={classes.borderImage} onClick={openAssignHOS}><HardDriveIcon className={classes.image2}/></GridItem>
            <GridItem className={classes.borderImage} ><BigTruckIcon className={classes.image1}/></GridItem>
            </GridContainer>
            </GridContainer>
            
            <div className={classes.footer}>
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
                disabled={submitting}
              > Save</Button>
            </div>
            </div>
          </form>
        )}
      />
      <DiaLog
          fullWidth={true}
          maxWidth="sm"
          renderTitle={<div className={classes.editHeader}>
          <h3 className={classes.dialogTitle}>Export Custom Report</h3>
          <p className={classes.dialogSubTitle}>Custom Report</p>
          </div>}
          handleClose={closeAssignHOS}
          open={true}
          >
        <ExportCustomReport handleClose={closeAssignHOS}/>
      </DiaLog>
    </div>
  );
}