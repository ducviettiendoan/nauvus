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

export default function AddWifiForm(props) {
    const classes = useStyles()
    const encryptions = [
        {id: "open", label: "Open"},
        {id: "wpa_psk", label: "WPA (PSK) - Encrypted"},
        {id: "wpa_enterprise", label: "WPA Enterprise - Encrypted"},
    ]

    const initData = props.initData


    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.name) errors.name = 'Network name must not be empty!';
        return errors;
    };
    return(
        <div>
            <Form
                onSubmit={onSubmit}
                initialValues={initData}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    let encryption = null;
                    if (values && values.encryption) {
                        let index = encryptions.findIndex(e => e.id == values.encryption)
                        if (index > -1) encryption = encryptions[index];
                    }
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" >
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} required>Network Name</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="name"
                                        placeholder="Network"
                                        type="text"
                                        component={TextField}
                                    />
                                </GridItem>
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >Encryption Type</InputLabel>
                                    <Field
                                        fullWidth
                                        name="encryption"
                                        component={Select}
                                        formControlProps={{ fullWidth: true }}
                                        style={{ margin: 0 }}
                                    >
                                        {encryptions.map(encryption => <MenuItem key={encryption.id} value={encryption.id}>{encryption.label}</MenuItem>)}
                                    </Field>
                                </GridItem>
                                {values.encryption === "wpa_psk" &&
                                <GridItem className={classes.formRow} xs={12}>
                                    <InputLabel className={classes.label} >Passphrase</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="passphrase"
                                        placeholder="Passphrase"
                                        type="text"
                                        component={TextField}
                                    />
                                </GridItem>
                                }
                                {values.encryption === "wpa_enterprise" &&
                                    <>
                                        <GridItem className={classes.formRow} xs={12}>
                                            <InputLabel className={classes.label} >802.1x username</InputLabel>
                                            <Field
                                                fullWidth
                                                required
                                                name="username"
                                                placeholder="802.1x username"
                                                type="text"
                                                component={TextField}
                                            />
                                        </GridItem>
                                        <GridItem className={classes.formRow} xs={12}>
                                            <InputLabel className={classes.label} >802.1x password</InputLabel>
                                            <Field
                                            fullWidth
                                            required
                                            name="password"
                                            placeholder="802.1x password"
                                            type="text"
                                            component={TextField}
                                            />
                                        </GridItem>
                                    </>
                                }
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