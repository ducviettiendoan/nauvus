import React from 'react'
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {makeStyles} from "@material-ui/core/styles";

const styles = {
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

export default function FeedBackDialog() {
      const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12}>
                    <h3 className={classes.dialogTitle}>Feedback or Support?</h3>
                </GridItem>
            </GridContainer>
        </div>
    )
}

