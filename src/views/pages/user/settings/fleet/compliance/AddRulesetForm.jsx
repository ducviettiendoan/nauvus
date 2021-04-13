import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import {Select, TextField} from "final-form-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "components/CustomButtons/Button";

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
        color: "#25345C"
    }
}
const useStyles = makeStyles(styles);

export default function AddRulesetForm(props) {
    const classes = useStyles()
    const cycles = [
        {id: "ak0", label: "Alaska Property (8/80)"},
        {id: "ak1", label: "Alaska Property (7/70)"},
        {id: "ak2", label: "Alaska Passenger (8/80)"},
        {id: "ak3", label: "Alaska Passenger (7/70)"},
        {id: "ne0", label: "Nebraska (8/80)"},
        {id: "ne1", label: "Nebraska (7/70)"},
        {id: "nc0", label: "North Carolina (8/80)"},
        {id: "nc1", label: "North Carolina (7/70)"},
        {id: "ok0", label: "Oklahoma (8/70)"},
        {id: "ok1", label: "Oklahoma (7/60)"},
        {id: "or0", label: "Oregon (8/80)"},
        {id: "or1", label: "Oregon (7/70)"},
        {id: "sc0", label: "South Carolina (8/80)"},
        {id: "sc1", label: "South Carolina (7/70)"},
        {id: "tx0", label: "Texas (7/70)"},
        {id: "wi0", label: "Wisconsin (8/80)"},
        {id: "wi1", label: "Wisconsin (7/70)"},
        {id: "ca0", label: "California School/FLV (8/80)"},
        {id: "ca1", label: "California Farm (8/112)"},
        {id: "ca2", label: "California Property (8/80)"},
        {id: "ca3", label: "California Flammable Liquid (8/80)"},
        {id: "ca4", label: "California Passenger (8/80)"},
        {id: "ca5", label: "California Motion Picture (8/80)"},
        {id: "fl0", label: "Florida (8/80)"},
        {id: "fl1", label: "Florida (7/70)"},
    ]
    const states = [
        {id: "ak", label: "AK"},
        {id: "al", label: "AL"},
        {id: "ar", label: "AR"},
        {id: "az", label: "AZ"},
        {id: "ca", label: "CA"},
        {id: "co", label: "CO"},
        {id: "ct", label: "CT"},
        {id: "dc", label: "DC"},
        {id: "de", label: "DE"},
        {id: "fl", label: "FL"},
        {id: "ga", label: "GA"},
        {id: "hi", label: "HI"},
        {id: "ia", label: "IA"},
        {id: "id", label: "ID"},
        {id: "il", label: "IL"},
        {id: "in", label: "IN"},
        {id: "ks", label: "KS"},
        {id: "ky", label: "KY"},
        {id: "la", label: "LA"},
        {id: "ma", label: "MA"},
        {id: "md", label: "MD"},
        {id: "me", label: "ME"},
        {id: "mi", label: "MI"},
        {id: "mn", label: "MN"},
        {id: "mo", label: "MO"},
        {id: "ms", label: "MS"},
        {id: "mt", label: "MT"},
        {id: "nc", label: "NC"},
        {id: "nd", label: "ND"},
        {id: "ne", label: "NE"},
        {id: "nh", label: "NH"},
        {id: "nj", label: "NJ"},
        {id: "nm", label: "NM"},
        {id: "nv", label: "NV"},
        {id: "ny", label: "NY"},
        {id: "oh", label: "OH"},
        {id: "ok", label: "OK"},
        {id: "or", label: "OR"},
        {id: "pa", label: "PA"},
        {id: "ri", label: "RI"},
        {id: "sc", label: "SC"},
        {id: "sd", label: "SD"},
        {id: "tn", label: "TN"},
        {id: "tx", label: "TX"},
        {id: "ut", label: "UT"},
        {id: "va", label: "VA"},
        {id: "vt", label: "VT"},
        {id: "wa", label: "WA"},
        {id: "wi", label: "WI"},
        {id: "wv", label: "WV"},
        {id: "wy", label: "WY"},
    ]
    const restarts = [
        {id: "34HourRestart", label: "34-hour Restart"},
        {id: "24HourRestart", label: "24-hour Restart"},
        {id: "none", label: "None"},
        {id: "36HourRestart", label: "36-hour Restart"},
        {id: "72HourRestart", label: "72-hour Restart"},
    ]
    const breaks = [
        {id: "property", label: "Property (on-duty/off-duty/sleeper)"},
        {id: "explosive", label: "Explosives/HazMat (on-duty)"},
        {id: "none", label: "None"},
        {id: "california", label: "California Mealbreak (off-duty/sleeper)"},
    ]

    const initData = {cycle: cycles[0].id, state: states[0].id, break: breaks[0].id, restart: restarts[0].id}


    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Ruleset name must not be empty!';
        return errors;
    };
    return(
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={initData}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" >
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} required>Name</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="name"
                                        placeholder="Name"
                                        type="text"
                                        component={TextField}
                                    />
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >Cycle</InputLabel>
                                    <Field
                                        fullWidth
                                        name="cycle"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {cycles.map(c => <MenuItem key={c.id} value={c.id}>{c.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >Restart</InputLabel>
                                    <Field
                                        fullWidth
                                        name="restart"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {restarts.map(r => <MenuItem key={r.id} value={r.id}>{r.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >30-min Rest Break Required</InputLabel>
                                    <Field
                                        fullWidth
                                        name="break"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {breaks.map(b => <MenuItem key={b.id} value={b.id}>{b.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >US State</InputLabel>
                                    <Field
                                        fullWidth
                                        name="state"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {states.map(s => <MenuItem key={s.id} value={s.id}>{s.label}</MenuItem>)}
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
                                > Save</Button>
                            </div>
                        </form>
                    )
                }}
            />
        </div>
    )
}