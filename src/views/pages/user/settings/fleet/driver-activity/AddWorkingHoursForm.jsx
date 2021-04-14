import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";
import CustomDayPicker from "components/CustomDayPicker/CustomDayPicker";

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
    margin: "8px 15px 24px 15px",
    borderTop: "1px solid #ccc"
  },
  dayPicker: {
    margin: "0 15px 16px 15px"
  }
}
const useStyles = makeStyles(styles);

export default function AddWorkingHoursForm(props) {
  const classes = useStyles()
  const tags = [
    {label: `Tag 1`, id: 1},
    {label: `Tag 2`, id: 2}
  ]
  const [workingDays, setWorkingDays] = useState([false, false, false, false, false, false, false])

  const toggleDay = (index) => {
    let newWorkingDays = workingDays.map((e, i) => {
      if (index === i) {
        return !e
      }
      return e
    })
    console.log(newWorkingDays)
    setWorkingDays(newWorkingDays)
  }

  const mins = []
  for (let i = 0; i <= 60; i += 5) {
    mins.push({label: `${i} mins`, id: i})
  }
  const timezones = [
    {label: "New York - EST/EDT", id: "ny"},
    {label: "Halifax - AST/ADT", id: "hlf"},
    {label: "Regina - CST", id: "rgn"},
    {label: "Azores - AZOT/AZOST", id: "azr"},
    {label: "London - GMT/BST", id: "ld"},
    {label: "Paris - CET/CEST", id: "pr"},
    {label: "Kaliningrad - EET", id: "klg"},
    {label: "Helsinki - EET/EEST", id: "hsk"},
    {label: "Reykjavik - GMT", id: "rkv"},
    {label: "Réunion - RET", id: "run"},
    {label: "Turkey - TRT", id: "tk"},
    {label: "St Johns (Newfoundland) - AST", id: "sj"},
    {label: "Puerto Rico - AST", id: "ptrc"},
  ]

  const initData = {timezone: "ny"}

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
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Driver Time Zone</InputLabel>
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="timezone"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {timezones.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>
                </GridItem>
                <GridItem className={classes.dayPicker} xs={12} sm={8}>
                  <CustomDayPicker toggleDay={toggleDay} days={workingDays}/>
                </GridItem>

                {workingDays.filter(e => e === true).length > 0 &&
                <>
                  <GridItem className={classes.formRow} xs={12}>
                    <InputLabel className={classes.label}>Schedule</InputLabel>
                  </GridItem>
                  {workingDays[0] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Monday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="monday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[1] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Tuesday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="tuesday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[2] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Wednesday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="wednesday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[3] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Thursday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="thursday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[4] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Friday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="friday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[5] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Saturday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="saturday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                  {workingDays[6] && <GridItem className={classes.formRow} xs={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={3} className={classes.subLabel}>Sunday</GridItem>
                      <GridItem xs={12} sm={5}>
                        <Field
                          formControlProps={{fullWidth: true}}
                          name="sunday"
                          placeholder="N/A"
                          component={Select}
                          style={{margin: 0}}
                        >
                          {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                        </Field>
                      </GridItem>
                      <GridItem xs={0} sm={4}></GridItem>
                    </GridContainer>
                  </GridItem>}
                </>
                }
                <hr className={classes.divider}/>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Mark late start after</InputLabel>
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="late"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                  </Field>

                </GridItem>
                <GridItem className={classes.formRow} xs={12}>
                  <InputLabel className={classes.label}>Mark early end before</InputLabel>
                  <Field
                    formControlProps={{fullWidth: true}}
                    name="early"
                    component={Select}
                    style={{margin: 0}}
                  >
                    {mins.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
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