import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {Field, Form} from "react-final-form";
import Button from "components/CustomButtons/Button";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox";
import Link from "@material-ui/core/Link";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";

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
    help: {
        color: "#25345C",
        textAlign: "center"
    },
    text: {
        color: "#25345C",
        fontSize: 14,
        fontWeight: 400,
    },
    textarea: {
        margin: "8px 0px"
    }

}
const useStyles = makeStyles(styles);

export default function ActivateDevicesForm(props) {
    const classes = useStyles()

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
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem xs={12}>
                                    <div className={classes.text}>
                                        To activate a device and associate it with Singh Transport Logistics, enter its serial number below. Activate multiple devices by copying and pasting their serial numbers from your order confirmation email. Each device's serial number can also be found on its label or packaging.
                                    </div>
                                    <Field
                                        className={classes.textarea}
                                        fullWidth
                                        required
                                        name="serialNumbers"
                                        placeholder="e.g. XXXX-XXX-XXX"
                                        component={CustomTextArea}
                                    />
                                </GridItem>
                                <GridItem xs={12}>
                                    <Field
                                        name="replacement"
                                        component={CustomCheckbox}
                                    />
                                    <span>These device serials are all replacements</span>
                                </GridItem>
                                <GridItem xs={12} className={classes.help}>
                                    <Link
                                        component="button"
                                        onClick={() => {
                                        }}
                                    >
                                        I need help activating
                                    </Link>
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
                                > Activate Devices</Button>
                            </div>
                        </form>
                    )
                }}
            />
        </div>
    )
}