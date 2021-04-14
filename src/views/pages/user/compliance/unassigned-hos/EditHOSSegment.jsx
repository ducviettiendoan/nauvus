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
  loginTitle: {
    fontWeight: 700,
    fontSize: '18px',
    color: '#25345C',
    padding: "16px 0px 0px 16px"
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  destination: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
  },
  source: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
  },
  trip: {
      margin: 16,
      marginBottom: 0 
  },
  footer: {
      display: "flex",
      justifyContent: "space-between"
  }
};

const useStyles = makeStyles(styles);

export default function EditHOSSegment(props) {
  const classes = useStyles();

  const onSubmit = async (values) => {
    console.log(values);
  }

  const validate = (values) => {
    const errors = {};
    if (!values.vehicle) {
      errors.driverName = 'vehicle name must not be empty!';
    }
    if (!values.time) {
      errors.phoneNum = 'Time must not be empty!';
    }
    if (!values.duration) {
      errors.driverLicense = 'Duration must not be empty!';
    }
    if (!values.reason) {
      errors.stateProvince = 'Reason must not be empty!';
    }
    console.log(errors);
    return errors;
  };
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
                  label="Vehicle"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="vehicle"
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
                  label="Time"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="time"
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
              <Col>
                <Field
                  id="standard-full-width"
                  label="Duration"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="Duration"
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
            <Row className={classes.loginTitle}>Trip</Row>
            <div className={classes.trip}>
            <Row className={classes.destination}>Quik X Mississauga</Row>
            <Row className={classes.source}>Quik X Mississauga</Row>
            </div>
            <Row>
              <Col>
                <Field
                  id="standard-full-width"
                  label="Reason for Unassigned Time (60 character limit)"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="reason"
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
            <div className={classes.footer}>
            <div className= {classes.clearButton}>
            <Button
                type="button"
                round
                className="btn-round-white"
                // onClick={props.handleClose}
              > Clear annotation
              </Button>
            </div>
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
    </div>
  );
}