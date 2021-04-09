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
}
const useStyles = makeStyles(styles);

export default function InviteUserForm(props) {
    const classes = useStyles()
    const roles = [
        { id: 'full_admin', label: 'Full Admin', description: "	Full edit access to all dashboard pages." },
        { id: 'standard_admin', label: 'Standard Admin', description: "Edit access except billing and finance pages." },
        { id: 'read_only_admin', label: 'Read-only Admin', description: "	View access except billing and finance pages." },
        { id: 'dispatch', label: 'Dispatch', description: "Edit access to only dispatch and routing features." },
        { id: 'maintenance', label: 'Maintenance', description: "	Edit access to only maintenance features." },
        { id: 'standard_admin_no_dash', label: "Standard Admin (No Dash Cam Access)", description: "Standard Admin but no access to dashcams." }
    ]

    const access = [
        { id: "Entire", label: "Entire Organization" },
        { id: "room", label: "Room" },
        { id: "new", label: "New" }
    ]

    const initData = { access: "Entire", role: "full_admin" }


    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.email) errors.email = 'Email must not be empty!';
        return errors;
    };
    return(
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={initData}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    let role = null;
                    if (values && values.role) {
                        let index = roles.findIndex(r => r.id == values.role)
                        if (index > -1) role = roles[index];
                    }
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem md>
                                    <InputLabel required>Email</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="email"
                                        type="text"
                                        component={TextField}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem md={6}>
                                    <InputLabel >Role</InputLabel>
                                    <Field
                                        fullWidth
                                        name="role"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {roles.map(role => <MenuItem key={role.id} value={role.id}>{role.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                <GridItem md={6}>
                                    <InputLabel>Access</InputLabel>
                                    <Field
                                        fullWidth
                                        name="access"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {access.map(role => <MenuItem key={role.id} value={role.id}>{role.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                            </GridContainer>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem md>
                                    <InputLabel >Permissions</InputLabel>
                                    <p className={classes.formText}>
                                        {role && role.label}
                                        <span className={classes.formTextSpan}>{role && role.description}</span>
                                    </p>
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