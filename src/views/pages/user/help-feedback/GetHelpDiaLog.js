import React from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import {Grid} from "@material-ui/core";
import DiaLog from "components/CustomDialog/Dialog";


const styles ={
   
}
const useStyles = makeStyles(styles);

export default function GetHelpDiaLog() {
   
    const classes = useStyles();
    return (
        
        <div>
            <DiaLog
                fullWidth={true}
                maxWidth="sm"
                renderTitle={
                <div className={classes.editHeader}>
                    <h3 className={classes.dialogTitle}>Compliance Reports Help</h3>
                
                </div>}
                
               
            >

            </DiaLog>
        </div>
    )
}
