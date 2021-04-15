import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import InformationIcon from "components/Icons/InformationIcon";
import mapImage from "assets/img/Frame 558.png"
import {Tooltip} from "@material-ui/core";

const styles = {
  formRow: {
    marginBottom: 16
  },
  selectButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  formText: {
    fontSize: "14px",
    fontFamily: 'Lato',
    fontWeight: "400",
  },
  formTextSpan: {
    paddingLeft: "30px",
    color: "#a5a5a5",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  label: {
    color: "#25345C",
    fontSize: 16
  },
  subLabel: {
    color: "#25345C",
    fontSize: 16,
    display: "flex",
    alignItems: "center"
  },
  divider: {
    width: "100%",
    margin: "24px 0 24px 0",
    borderTop: "1px solid #ccc"
  },
  dayPicker: {
    margin: "0 15px 16px 15px"
  },
  textarea: {
    margin: "8px 0px"
  },
  subText: {
    color: "#C4C4C4",
    fontWeight: 400,
    fontSize: 14
  },
  map: {
    width: "100%"
  }
}
const useStyles = makeStyles(styles);

export default function AddAddressForm(props) {
  const classes = useStyles()
  const tags = [
    {label: `Tag 1`, id: 1},
    {label: `Tag 2`, id: 2}
  ]

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.tag) errors.tag = 'You must select at least one tag';
    if (!values.name) errors.name = 'Name must be specified';
    if (!values.address) errors.address = 'Address must be specified';
    return errors;
  };
  return (
    <>
      <img src={mapImage} className={classes.map}/>
      <hr className={classes.divider}/>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
          <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between">
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label} required>Name</InputLabel>
                  <Field
                    fullWidth
                    required
                    name="name"
                    placeholder="Enter site name"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label} required>Address</InputLabel>
                  <Field
                    fullWidth
                    required
                    name="address"
                    placeholder="123 Sensor Dr, Gateway City, CA 94110"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Tags</InputLabel>
                  <Field
                    fullWidth
                    name="tag"
                    placeholder="Select tags..."
                    component={Select}
                    formControlProps={{fullWidth: true}}
                    style={{margin: 0}}
                  >
                    {tags.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem xs={12}>
                  <InputLabel className={classes.label}>Notes</InputLabel>
                  <Field
                    className={classes.textarea}
                    fullWidth
                    required
                    name="notes"
                    placeholder="Enter note"
                    component={CustomTextArea}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <InputLabel className={classes.label}>Address Type</InputLabel>
                  <div>
                    <label className={classes.label}>
                      <Field
                        name="addressType"
                        component="input"
                        type="radio"
                        value="normal-geo"
                      />{' '}
                      Normal Geofence
                    </label>
                  </div>
                  <div>
                    <label className={classes.label}>
                      <Field
                        name="addressType"
                        component="input"
                        type="radio"
                        value="yard"
                      />{' '}
                      Yard <span className={classes.subText}>Special ELD rules apply <Tooltip arrow placement="right" title="Unassigned trips contained within this geofences will be automatically annotated for ELD compliance. These automatic annotations should only be used for ELD exempt personnel, such as mechanics, fuelers, or washers. ELD subject drivers should always sign in to the Nauvus Driver App and log their appropriate duty status"><span><InformationIcon/></span></Tooltip></span>
                    </label>
                  </div>
                  <div>
                    <label className={classes.label}>
                      <Field
                        name="addressType"
                        component="input"
                        type="radio"
                        value="risk-zone"
                      />{' '}
                      Risk Zone <span className={classes.subText}><Tooltip arrow placement="right" title="d"><span><InformationIcon/></span></Tooltip></span>
                    </label>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.selectButton}>
                <Button
                  type="button"
                  round
                  className="btn-round-active-2 mr-2"
                  onClick={props.handleClose}
                > Cancel</Button>
                <Button
                  round
                  className="btn-round-active mr-2"
                  type="submit"
                  disabled={submitting}
                > Add Address</Button>
              </div>
            </form>
          )
        }}
      />
    </>
  )
}