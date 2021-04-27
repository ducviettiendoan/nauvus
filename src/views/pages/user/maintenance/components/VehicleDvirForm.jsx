import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import "perfect-scrollbar/css/perfect-scrollbar.css";
import Button from "components/CustomButtons/Button";
import {Col, Row} from 'reactstrap';
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import InputAdornment from "@material-ui/core/InputAdornment";
import DriverIcon from "components/Icons/DriverIcon";
import List from "@material-ui/core/List";
import {ListItem} from "@material-ui/core";
import {primaryColor} from "assets/jss/material-dashboard-pro-react";
import RadioButton from "../../../../Components/RadioButton";
import RadioGroup from '@material-ui/core/RadioGroup';
import BuildingIcon from "components/Icons/BuildingIcon";
import TodoIcon from "components/Icons/TodoIcon";

const styles = {
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  footerRoot: {
    fontWeight: 'normal',
    fontSize: '12px',
    color: '#C4C4C4',
    marginLeft: "16px",
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  selectField: {
    paddingTop: "18px",
    paddingBottom: "10px",
    fontWeight: 700,
    fontSize: '14px',
    color: '#25345C',
  },
  loginTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
    padding: "16px 0px 5px 16px"
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  listCheck: {
    width: '100%',
  },
  listCheckItems: {
    paddingLeft: "0px",
    fontWeight: 400,
    fontSize: '14px',
    color: '#25345C',
  },
  buttonFullWidth: {
    minWidth: "95%",
    margin: "16px !important"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  iconDropdown: {
    color: "red"
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "25px"
  },
  listItem: {
    paddingLeft: "5px !important",
    paddingBottom: "0px !important",
    paddingTop: "0px !important",
  }
};

const useStyles = makeStyles(styles);

export default function VehicleDvirForm(props) {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState({
    stateProvince: "none",
  });

  const onSubmit = async (values) => {
    console.log(values);
  }

  const validate = (values) => {
    const errors = {};
    if (!values.driverName) {
      errors.driverName = 'Driver name must not be empty!';
    }
    if (!values.phoneNum) {
      errors.phoneNum = 'Driver Phone Number must not be empty!';
    }
    if (!values.driverLicense) {
      errors.driverLicense = 'Driver License Number must not be empty!';
    }
    if (!values.stateProvince) {
      errors.stateProvince = 'Driver License State or Province must not be empty!';
    }
    if (!values.stateProvince) {
      errors.stateProvince = 'Locate must not be empty!';
    }
    if (!values.tags) {
      errors.tags = 'Tags must not be empty!';
    }
    if (!values.notes) {
      errors.notes = 'Notes must not be empty!';
    }
    if (!values.usernameInput) {
      errors.usernameInput = 'Username must not be empty!';
    }
    if (!values.passwordInput) {
      errors.passwordInput = 'Password must not be empty!';
    }
    if (!values.terminalName) {
      errors.terminalName = 'Home Terminal Name must not be empty!';
    }
    if (!values.terminalAddress) {
      errors.terminalAddress = 'Home Terminal Address must not be empty!';
    }
    if (!values.terminalTimezone) {
      errors.terminalTimezone = 'Home Terminal Timezone must not be empty!';
    }
    if (!values.carrier) {
      errors.carrier = 'Carrier must not be empty!';
    }
    if (!values.mainOffice) {
      errors.mainOffice = 'Main Office must not be empty!';
    }
    if (!values.usDOT) {
      errors.usDOT = 'Carrier US DOT Number must not be empty!';
    }
    if (!values.locale) {
      errors.locale = 'Locale must not be empty!';
    }
    if (!values.driverPeer) {
      errors.driverPeer = 'Driver Peer Group must not be empty!';
    }
    if (!values.vehicleAssignment) {
      errors.vehicleAssignment = 'Static Vehicle Assignment must not be empty!';
    }
    if (!values.vehicleSelection) {
      errors.vehicleSelection = 'Vehicle Selection Tag must not be empty!';
    }
    if (!values.trailerSelection) {
      errors.trailerSelection = 'Trailer Selection Tag must not be empty!';
    }
    if (!values.driverIDToken) {
      errors.driverIDToken = 'Driver ID Token must not be empty!';
    }
    if (!values.dayWorkflow) {
      errors.dayWorkflow = 'Start of Day Workflow must not be empty!';
    }
    console.log(errors);
    return errors;
  };

  const safety = ["Vehicle is safe to drive", "Vehicle is unsafe"]
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Vehicle Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="vehicleName"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <DriverIcon className={classes.inputAdornmentIcon}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Trailer Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="trailerName"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                  }}
                  component={TextField}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Address"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="address"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <BuildingIcon className={classes.inputAdornmentIcon}/>
                      </InputAdornment>
                    )
                  }}
                  component={TextField}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Licence Plate"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="licensePlate"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <TodoIcon className={classes.inputAdornmentIcon}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Ordometer"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="ordometer"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <div className={classes.textFieldRoot}>miles</div>
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
                  label="Mechanic Notes"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="mechanicNotes"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot}
                  }}
                  component={TextField}
                />
              </Col>
            </Row>

            <Row className={classes.loginTitle}>Safety</Row>
            <Row>
              <List className={classes.listCheck}>
                <RadioGroup>
                  {safety.map((value, index) => {
                    return (
                      <ListItem key={index} className={classes.listItem}>
                        <Col xs={1} className={classes.listCheckItems}>
                          {index === 1 ? <RadioButton disabled/> : <RadioButton/>}

                        </Col>
                        <Col xs={11} className={classes.listCheckItems}>
                          {value}
                        </Col>
                      </ListItem>
                    );
                  })}
                </RadioGroup>
              </List>
              <div className={classes.footerRoot}>I certify above entries are true and correct</div>
            </Row>

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
          </form>
        )}
      />
    </div>
  );
}