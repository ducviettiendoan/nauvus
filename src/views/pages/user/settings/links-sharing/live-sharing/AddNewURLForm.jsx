import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";
import CustomDayPicker from "components/CustomDayPicker/CustomDayPicker";
import CustomCheckbox from "../../../../../../components/CustomCheckbox/CustomCheckbox";

const styles = {
  formRow: {
    marginBottom: 24
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
    fontSize: 18,
    fontWeight: 700
  },
  subLabel: {
    color: "#25345C",
    fontSize: 16,
    display: "flex",
    alignItems: "center"
  },
  divider: {
    width: "100%",
    margin: "8px 15px 24px 15px",
    borderTop: "1px solid #ccc"
  },
  dayPicker: {
    margin: "0 15px 16px 15px"
  },
  radioLabel: {
    color: "#25345C",
    fontSize: 16,
  },
}
const useStyles = makeStyles(styles);

export default function AddNewURLForm(props) {
  const classes = useStyles()

  let times = [
    {label: "12:00 AM"},
    {label: "12:30 AM"},
    {label: "1:00 AM"},
    {label: "1:30 AM"},
    {label: "2:00 AM"},
    {label: "2:30 AM"},
    {label: "3:00 AM"},
    {label: "3:30 AM"},
    {label: "4:00 AM"},
    {label: "4:30 AM"},
    {label: "5:00 AM"},
    {label: "5:30 AM"},
    {label: "6:00 AM"},
    {label: "6:30 AM"},
    {label: "7:00 AM"},
    {label: "7:30 AM"},
    {label: "8:00 AM"},
    {label: "8:30 AM"},
    {label: "9:00 AM"},
    {label: "9:30 AM"},
    {label: "10:00 AM"},
    {label: "10:30 AM"},
    {label: "11:00 AM"},
    {label: "11:30 AM"},
    {label: "12:00 PM"},
    {label: "12:30 PM"},
    {label: "1:00 PM"},
    {label: "1:30 PM"},
    {label: "2:00 PM"},
    {label: "2:30 PM"},
    {label: "3:00 PM"},
    {label: "3:30 PM"},
    {label: "4:00 PM"},
    {label: "4:30 PM"},
    {label: "5:00 PM"},
    {label: "5:30 PM"},
    {label: "6:00 PM"},
    {label: "6:30 PM"},
    {label: "7:00 PM"},
    {label: "7:30 PM"},
    {label: "8:00 PM"},
    {label: "8:30 PM"},
    {label: "9:00 PM"},
    {label: "9:30 PM"},
    {label: "10:00 PM"},
    {label: "10:30 PM"},
    {label: "11:00 PM"},
    {label: "11:30 PM"},
  ]
  times = times.map((e) => {
    e.id = e.label
    return e
  })

  const initData = {timezone: "ny"}

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.tag) errors.tag = 'You must select at least one tag';
    return errors;
  };

  const [addExpirationDate, setAddExpirationDate] = useState(false)

  const handleChange = () => {
    setAddExpirationDate(!addExpirationDate)
  }
  return (
    <div>
      <Form
        initialValues={initData}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => {
          return (
            <form onSubmit={handleSubmit} noValidate>
              <GridContainer justify="space-between">
                <GridItem xs={12} className={classes.radioLabel + " " + classes.formRow}>Share real-time status of selected assets.</GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Name</InputLabel>
                  <Field
                    fullWidth
                    name="name"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Description</InputLabel>
                  <Field
                    fullWidth
                    name="description"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <InputLabel className={classes.label}>Report Format</InputLabel>
                  <div>
                  <label className={classes.radioLabel}>
                    <Field
                      name="reportFormat"
                      component="input"
                      type="radio"
                      value="all-assets"
                    />{' '}
                    All assets
                  </label>
                  </div>
                  <div>
                  <label className={classes.radioLabel}>
                    <Field
                      name="reportFormat"
                      component="input"
                      type="radio"
                      value="tags"
                    />{' '}
                    Tags
                  </label>
                  </div>
                  <div>
                  <label className={classes.radioLabel}>
                    <Field
                      name="reportFormat"
                      component="input"
                      type="radio"
                      value="single-assets"
                    />{' '}
                    Single asset
                  </label>
                  </div>
                </GridItem>
              </GridContainer>
              <hr className={classes.divider}/>
              <GridContainer>
              <GridItem xs={12} className={classes.formRow}>
                <CustomCheckbox checked={addExpirationDate} onChange={handleChange} />
                <span>Add link expiration date</span>
              </GridItem>
              {addExpirationDate && <GridItem xs={12} className={classes.formRow}>
                <Field
                  formControlProps={{fullWidth: true}}
                  name="reportApplyStartTime"
                  component={Select}
                  style={{margin: 0}}
                >
                  {times.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                </Field>
              </GridItem>}
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
                > Save</Button>
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}