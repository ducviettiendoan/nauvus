import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import InputLabel from "@material-ui/core/InputLabel";
import {Field, Form} from "react-final-form";
import Button from "components/CustomButtons/Button";
import CustomTextArea from "components/CustomTextArea/CustomTextArea";
import Link from "@material-ui/core/Link";

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
    footnote: {
        fontSize: "14px",
        fontFamily: 'Lato',
        fontWeight: "400",
        color: "#25345C",
        marginTop: 16
    },
    link: {
        "&:hover": {
            cursor: "pointer",
        },
    }
}
const useStyles = makeStyles(styles);

export default function SendFeedbackForm(props) {
    const classes = useStyles()

    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.feedback) errors.feedback = 'Feedback must not be empty!';
        return errors;
    };
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit, reset, submitting, pristine, values}) => {

                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem xs={12}>
                                    <InputLabel required>Feedback for {props.title}</InputLabel>
                                    <Field
                                        fullWidth
                                        required
                                        name="feedback"
                                        placeholder="Drop us a quick note with some feedback"
                                        component={CustomTextArea}
                                    />
                                </GridItem>
                                <GridItem className={classes.footnote}>
                                    This feedback goes directly to Nauvus's product team. For technical support,
                                    visit <Link className={classes.link}>our support page</Link>.
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
                                > Send Feedback</Button>
                            </div>
                        </form>
                    )
                }}
            />
        </div>
    )
}