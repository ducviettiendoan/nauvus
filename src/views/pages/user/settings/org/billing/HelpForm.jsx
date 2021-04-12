import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {Field, Form} from "react-final-form";
import Button from "components/CustomButtons/Button";
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
    },
    link: {
        "&:hover": {
            cursor: "pointer",
        },
    }
}
const useStyles = makeStyles(styles);

export default function HelpForm(props) {
    const classes = useStyles()

    const onSubmit = async (values) => {
        console.log(values);
    }

    return(
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, reset, submitting, pristine, values }) => {
                    return (
                        <form onSubmit={handleSubmit} noValidate>
                            <GridContainer justify="space-between" className={classes.formRow}>
                                <GridItem className={classes.footnote}>
                                    For further billing questions, reach out to <Link className={classes.link}>accounts-receivable@nauvus.com.</Link>
                                </GridItem>
                                <GridItem className={classes.footnote}>
                                    For other finance questions, reach out to <Link className={classes.link}>finance@nauvus.com.</Link>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.selectButton}>
                                <Button
                                    type="button"
                                    round
                                    className="btn-round-active-2 mr-2"
                                    onClick={props.handleClose}
                                > Cancel</Button>

                            </div>
                        </form>
                    )
                }}
            />
        </div>
    )
}