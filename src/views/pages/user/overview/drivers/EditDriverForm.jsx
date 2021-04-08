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
import PasswordIcon from "components/Icons/PasswordIcon";
import PhoneIconField from "components/Icons/PhoneIconField";
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
    padding: "16px 0px 0px 16px"
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
    fontSize: '12px',
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
  }
};

const useStyles = makeStyles(styles);

export default function EditDriverForm(props) {
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

  const handleChange = (event) => {
    setSelectValue({...selectValue, [event.target.name]: event.target.value})
  }

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const listHOS = ["ELD Exempt", "ELD Personal Conveyance (PC)", "ELD Yard Moves (YM)", "Waiting Time (WT)"]
  const ELDDayStart = ["12am (Midnight)", "12pm (Noon)"]
  const usaHOS = ["16-Hour Short-Haul 395.1(o)", "Adverse Driving (USA) 395.1(b)(1)"]
  const canadaHOS = ["Deferral of Daily Off-Duty Time (Canada South) SOR/2005-313 (16)", "Adverse Driving (Canada) SOR/2005-313 (76)"]

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        // initialValues={{ email: "test@gmail.com", stooge: 'larry' }}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Driver Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="driverName"
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
                  label="Driver Phone Number"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="phoneNum"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <PhoneIconField className={classes.inputAdornmentIcon}/>
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
                  label="Driver License Number"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="driverLicense"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <PhoneIconField className={classes.inputAdornmentIcon}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
              <Col>
                <Field
                  labelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  selectProps={{
                    classes: {root: classes.selectField}
                  }}
                  labelText="Locate"
                  name="stateProvince"
                  listValues={["AL-Alabama"]}
                  placeholder={"AL-Alabama"}
                  selectValue={selectValue.stateProvince}
                  IconComponent={{
                    classes: {root: classes.iconDropdown}
                  }}
                  onChange={handleChange}
                  component={CustomSelect}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Tags"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="tags"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Notes"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="notes"
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
            <Row className={classes.loginTitle}>Driver App Login</Row>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Username"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="usernameInput"
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
                  label="New Password"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="passwordInput"
                  type="password"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot},
                    endAdornment: (
                      <InputAdornment position="start">
                        <PasswordIcon className={classes.inputAdornmentIcon}/>
                      </InputAdornment>
                    ),
                  }}
                  component={TextField}
                />
              </Col>
            </Row>
            <Row className={classes.loginTitle}>Hours of Service</Row>
            <Row>
              <List className={classes.listCheck}>
                {listHOS.map((value) => {
                  return (
                    <ListItem key={value}>
                      <Col xs={1} className={classes.listCheckItems}>
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          checkedIcon={<CheckSquareOutlined/>}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      </Col>
                      <Col xs={11} className={classes.listCheckItems}>
                        {value}
                      </Col>
                    </ListItem>
                  );
                })}
              </List>
            </Row>
            <Row className={classes.loginTitle}>ELD Day Start Hour</Row>
            <Row>
              <List className={classes.listCheck}>
                <RadioGroup>
                  {ELDDayStart.map((value) => {
                    return (
                      <ListItem key={value}>
                        <Col xs={1} className={classes.listCheckItems}>
                          <RadioButton/>
                        </Col>
                        <Col xs={11} className={classes.listCheckItems}>
                          {value}
                        </Col>
                      </ListItem>
                    );
                  })}
                </RadioGroup>
              </List>
            </Row>
            <Row className={classes.loginTitle}>USA Hours of Service</Row>
            <Row>
              <List className={classes.listCheck}>
                {usaHOS.map((value) => {
                  return (
                    <ListItem key={value}>
                      <Col xs={1} className={classes.listCheckItems}>
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          checkedIcon={<CheckSquareOutlined/>}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      </Col>
                      <Col xs={11} className={classes.listCheckItems}>
                        {value}
                      </Col>
                    </ListItem>
                  );
                })}
              </List>
            </Row>
            <Row className={classes.loginTitle}>Driver-Specific Ruleset Override</Row>
            <Row>
              <Button
                round
                className={`btn-round-white h-41 ${classes.buttonFullWidth}`}
              >
                Add Us State or Federal Override
              </Button>
            </Row>
            <Row className={classes.loginTitle}>Canada Hours of Service</Row>
            <Row>
              <List className={classes.listCheck}>
                {canadaHOS.map((value) => {
                  return (
                    <ListItem key={value}>
                      <Col xs={1} className={classes.listCheckItems}>
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          checkedIcon={<CheckSquareOutlined/>}
                          classes={{
                            checked: classes.checked,
                            root: classes.checkRoot
                          }}
                        />
                      </Col>
                      <Col xs={11} className={classes.listCheckItems}>
                        {value}
                      </Col>
                    </ListItem>
                  );
                })}
              </List>
            </Row>
            <Row className={classes.loginTitle}>Carrier Information</Row>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Home Terminal Name"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="terminalName"
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
                  label="Home Terminal Address"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="terminalAddress"
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
                  label="Home Terminal Timezone"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="terminalTimezone"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Carrier / Principal Place of Business Name Override"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="carrier"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Main Office / Principal Place of Business Address Override"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="mainOffice"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Carrier US DOT Number Override"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="usDOT"
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
            <Row className={classes.loginTitle}>Advanced</Row>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Locale Override"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="locale"
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
              <Col>
                <Field
                  id="standard-full-width"
                  label="Driver Peer Group"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="driverPeer"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Static Vehicle Assignment"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="vehicleAssignment"
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
              <Col>
                <Field
                  id="standard-full-width"
                  label="Vehicle Selection Tag"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="vehicleSelection"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Trailer Selection Tag"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="trailerSelection"
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
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Driver ID Token"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="driverIDToken"
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
              <Col>
                <Field
                  id="standard-full-width"
                  label="Start of Day Workflow"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="dayWorkflow"
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