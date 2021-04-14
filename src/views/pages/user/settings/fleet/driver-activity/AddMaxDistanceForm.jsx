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
        color: "#25345C",
        fontSize: 16
    },
    subLabel: {
        color: "#25345C",
        fontSize: 16,
        display: "flex",
        alignItems: "center"
    }
}
const useStyles = makeStyles(styles);

export default function AddMaxDistanceForm(props) {
    const classes = useStyles()
    const tags = [
        {label: `Tag 1`, id: 1},
        {label: `Tag 2`, id: 2}
    ]
    const distances = []
    for (let i = 0; i <= 300; i+=5) {
        distances.push({label: `${i} mi`, id: i})
    }


    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.tag) errors.tag = 'You must select at least one tag';
        return errors;
    };
    return(
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" >
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label}>Tags</InputLabel>
                                    <Field
                                        fullWidth
                                        name="tag"
                                        placeholder="Select tags..."
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {tags.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >Set Max Distance (mi)</InputLabel>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Monday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="monday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Tuesday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="tuesday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Wednesday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="wednesday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Thursday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="thursday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Friday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="friday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Saturday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="saturday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={3} className={classes.subLabel} >Sunday</GridItem>
                                        <GridItem xs={12} sm={5}>
                                            <Field
                                                formControlProps={{ fullWidth: true }}
                                                name="sunday"
                                                placeholder="N/A"
                                                component={Select}
                                                style={{ margin: 0 }}
                                            >
                                                {distances.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                                            </Field>
                                        </GridItem>
                                        <GridItem xs={0} sm={4}></GridItem>
                                    </GridContainer>
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