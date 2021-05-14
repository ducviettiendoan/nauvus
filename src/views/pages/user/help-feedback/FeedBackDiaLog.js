import React from 'react'
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import DiaLog from "components/CustomDialog/Dialog";
import FormFeedBack from './FormFeedBack';
import {Form} from "react-final-form";

const styles = {
    dialogTitle: {
        fontWeight: "bold",
        fontSize: "22px",
        lineHeight: "26px",
        color: "#25345C",
        textAlign: "center"
    },
    text:{
        fontSize: "14px",
        lineHeight: "21px",
        textAlign: "center",
        color: "#C4C4C4"
    },
    selectButton: {
        display: "flex",
        justifyContent: "flex-end"
    },
}

const useStyles = makeStyles(styles);

export default function FeedBackDialog(props) {
    const classes = useStyles(); 
    const {handleOpen,handleClose} = props;
    const [openForm, setOpenForm] = React.useState(false);
    // const [openFeedback, setOpenFeedback] = React.useState(false);
    // const [formFeedback, setFormFeedback] = React.useState(false);
    // const handleClose=()=>{
    //     setOpenFeedback(false)
    //     setFormFeedback(false)
    // }
    const onSubmit = async (values) => {
        console.log(values);
    }
    const validate = (values) => {
        const errors = {};
        if (!values.serialNumbers) errors.serialNumbers = 'Please enter at least 1 serial number!';
        return errors;
    };
    return (
        <div>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values })=>{
                    return(
                        <form>
                            <GridContainer justify="space-between">
                                <GridItem xs={12}>
                                    <h3 className={classes.dialogTitle}>Feedback or Support?</h3>
                                    <p className={classes.text}>Likes, dislikes, and feature requests should be filed as feedback. If you need help or encountered an issue, please submit a case to our support team.</p>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.selectButton}>
                                <Button
                                    type="button"
                                    round
                                    className="btn-round-active-2 mr-2"
                                    onClick = {handleOpen}
                                > Feedback</Button>
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


