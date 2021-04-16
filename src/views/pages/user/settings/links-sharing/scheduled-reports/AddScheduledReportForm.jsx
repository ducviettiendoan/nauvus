import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";
import {useHistory} from "react-router-dom";
import AddOutlined from "@material-ui/icons/AddOutlined";
import VehicleLinkIcon from "../../../../../../components/Icons/VehicleLinkIcon";
import VehicleMapIcon from "../../../../../../components/Icons/VehicleMapIcon";
import OpenInNewTabIcon from "../../../../../../components/Icons/OpenInNewTabIcon";

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
  radioLabel: {
    color: "#25345C",
    fontSize: 16,
    marginRight: 16,
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
  }
}
const useStyles = makeStyles(styles);

export default function AddScheduledReportForm(props) {
  const classes = useStyles()
  const history = useHistory();

  const tags = [
    {label: `Tag 1`, id: 1},
    {label: `Tag 2`, id: 2}
  ]

  const contacts = [
    {label: "contact 1", id: "0"},
    {label: "contact 2", id: "1"},
  ]

  const reportTypes = [
    {label: "Camera Health Report", id: "0"},
    {label: "Custom Report", id: "1"},
    {label: "Driver Activity Report", id: "2"},
    {label: "Driver Coaching Report", id: "3"},
    {label: "Driver Qualifications Report", id: "4"},
    {label: "Driver Ranking Report", id: "5"},
    {label: "Driver Safety Report", id: "6"},
    {label: "Duty Status Summary Report", id: "7"},
    {label: "Eco-Driving Report (Grades)", id: "8"},
    {label: "Eco-Driving Report (Percentages)", id: "9"},
    {label: "Eco-Driving Report (Raw Data)", id: "10"},
    {label: "Environment Report", id: "11"},
    {label: "Environment Temperature Summary Report", id: "12"},
    {label: "Fuel and Energy Efficiency Report - By Driver", id: "13"},
    {label: "Fuel and Energy Efficiency Report - By Vehicle - All Vehicles", id: "14"},
    {label: "Fuel and Energy Efficiency Report - By Vehicle - PHEV", id: "15"},
    {label: "Gateway Health Report", id: "16"},
    {label: "Hours of Service Violations Report", id: "17"},
    {label: "IFTA Report - Jurisdiction", id: "18"},
    {label: "IFTA Report - Vehicle", id: "19"},
    {label: "Jurisdiction Mileage Report", id: "20"},
    {label: "Jurisdiction Mileage Report - Vehicle", id: "21"},
    {label: "Maintenance Status By Fault Report", id: "22"},
    {label: "Material Usage Report", id: "23"},
    {label: "Missing DVIR Report", id: "24"},
    {label: "Safety Manager Coaching Report", id: "25"},
    {label: "Start / Stop Report", id: "26"},
    {label: "Time on Site Report", id: "27"},
    {label: "Time on Site by Site Report", id: "28"},
    {label: "Trip History Report", id: "29"},
    {label: "Unassigned HOS Report", id: "30"},
    {label: "Vehicle Activity Report", id: "31"},
    {label: "Vehicle Equipment Report", id: "32"},
    {label: "Vehicle Safety Report", id: "33"},
    {label: "Vehicle Timesheet Report", id: "34"},
  ]

  const recurrences = [
    {id: "daily", label: "Daily"},
    {id: "weekly", label: "Weekly"},
  ]

  const weekDays = [
    {id: "mon", label: "Monday"},
    {id: "tue", label: "Tuesday"},
    {id: "wed", label: "Wednesday"},
    {id: "thu", label: "Thursday"},
    {id: "fri", label: "Friday"},
    {id: "sat", label: "Saturday"},
    {id: "sun", label: "Sunday"},
  ]

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

  const days = [
    {id: "same", label: "Same day"},
    {id: "next", label: "Next day"}
  ]

  const initData = {
    recurrence: "weekly",
    reportApplyStartDate: "fri",
    reportApplyStartTime: "11:00 AM",
    reportApplyEndDate: "fri",
    reportApplyEndTime: "11:00 AM",
    reportSentDateWeekly: "fri",
    reportSentDateDaily: "same",
    reportSentTime: "5:00 PM"
  }

  const redirectContact = () => {
    history.push("/s/link-sharing/alert-contacts")
  }

  const onSubmit = async (values) => {
    console.log(values);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.tag) errors.tag = 'You must select at least one tag';
    return errors;
  };
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
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Report Name</InputLabel>
                  <Field
                    fullWidth
                    name="name"
                    type="text"
                    component={TextField}
                  />
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Report Type</InputLabel>
                  <Field
                    fullWidth
                    name="reportType"
                    placeholder="Select Report Type..."
                    component={Select}
                    formControlProps={{fullWidth: true}}
                    style={{margin: 0}}
                  >
                    {reportTypes.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem xs={12}>
                  <InputLabel className={classes.label}>Report Format</InputLabel>
                  <label className={classes.radioLabel}>
                    <Field
                      name="reportFormat"
                      component="input"
                      type="radio"
                      value="csv"
                    />{' '}
                    CSV
                  </label>
                  <label className={classes.radioLabel}>
                    <Field
                      name="reportFormat"
                      component="input"
                      type="radio"
                      value="xlsx"
                    />{' '}
                    XLSX
                  </label>

                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Filters</InputLabel>
                  <div className={classes.subLabel}>Tags</div>
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
                  <div className={classes.subLabel}>If no tags are selected, this scheduled report will run for the
                    entire group.
                  </div>
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Send Contact Notifications</InputLabel>
                  <GridContainer>
                    <GridItem xs={6}>
                    <Field
                      fullWidth
                      name="contacts"
                      placeholder="Select contact book"
                      component={Select}
                      formControlProps={{fullWidth: true}}
                      style={{margin: 0}}
                    >
                      {contacts.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                    </Field>
                    </GridItem >
                    <GridItem xs={6}>
                      <Button
                        round
                        className="btn-round-active mr-2"
                        type="submit"
                        startIcon={<OpenInNewTabIcon color="#FFFFFF" fill="#25345C" />}
                        onClick={redirectContact}
                      >Manage</Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Recurrence</InputLabel>
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="recurrence"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {recurrences.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Select the time range you want applied to the
                    report.</InputLabel>
                  {values.recurrence === "weekly" &&
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="reportApplyStartDate"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {weekDays.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                  }
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="reportApplyStartTime"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {times.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.subLabel}>to</InputLabel>
                  {values.recurrence === "weekly" &&
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="reportApplyEndDate"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {weekDays.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                  }
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="reportApplyEndTime"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {times.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Select the time of the day you want your report
                    sent</InputLabel>
                  {values.recurrence === "daily" && <Field
                    formControlProps={{fullWidth: true}}
                    name="reportSentDateDaily"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {days.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>}
                  {values.recurrence === "weekly" && <Field
                    formControlProps={{fullWidth: true}}
                    name="reportSentDateWeekly"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {weekDays.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>}
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="reportSentTime"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {times.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
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
                > Submit</Button>
              </div>
            </form>
          )
        }}
      />
    </div>
  )
}