import React, { useState } from "react";
// @material-ui/core SafetyInbox
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Col, Row} from 'reactstrap';
import {Field, Form} from "react-final-form";
import BigTruckIcon from "components/Icons/BigTruckIcon";
import HardDriveIcon from "components/Icons/HardDriveIcon";
import {TextField} from "final-form-material-ui";
import InputAdornment from "@material-ui/core/InputAdornment";
import DriverIcon from "components/Icons/DriverIcon";
import PasswordIcon from "components/Icons/PasswordIcon";
import PhoneIconField from "components/Icons/PhoneIconField";
import EmailIcon from "components/Icons/EmailIcon";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CheckSquareOutlined from "components/Icons/CheckSquareOutlined";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import RadioButton from "../../../../Components/RadioButton";
import RadioGroup from '@material-ui/core/RadioGroup';
import BuildingIcon from "components/Icons/BuildingIcon";

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

export default function NewContact(props) {
  //   const {handleOpen,handleClose} = props;
  const classes = useStyles();
  const [openForm, setOpenForm] = useState(false);
  const [clickDriver, setClickDriver] = useState(false);
  const [clickVehicleAsset, setClickVehicleAsset] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
  }
  const openAssignHOS = () => {
    // setOpenForm(true)
    if (clickDriver || clickVehicleAsset) {
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
    if (clickVehicleAsset) {
      setClickVehicleAsset(false)
    }
  }

  const handleChooseVehicleAsset = () => {
    setClickVehicleAsset(prev => !prev);
    if (clickDriver) {
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
    <GridItem className={classes.borderImageInitial} onClick={handleChooseVehicleAsset}>
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="First Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="firstName"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start">
                        <DriverIcon className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Last Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="lastName"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start">
                        <DriverIcon className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Phone"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="phone"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start">
                        <PhoneIconField className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Email"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="email"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  InputProps={{
                    classes: { input: classes.textInputRoot },
                    endAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>
            <div className={classes.selectButton}>
              <Button
                type="button"
                round
                className="btn-round-active-2 mr-2"
                onClick={props.handleNewContact}
              > Cancel
              </Button>
              <Button
                round
                className="btn-round-active mr-2"
                type="submit"
                // disabled={submitting}
              > Save</Button>
            </div>
          </form>
        )}
      />
    </div>
  );
}