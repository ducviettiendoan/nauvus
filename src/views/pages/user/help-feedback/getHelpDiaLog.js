import React from 'react';
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";
import {Grid} from "@material-ui/core";

export default function getHelpDiaLog() {
    return (
        <div>
            <DiaLog
                fullWidth={true}
                maxWidth="sm"
                renderTitle={
                <div className={classes.editHeader}>
                    <h3 className={classes.dialogTitle}>Compliance Reports Help</h3>
                
                </div>}
                handleClose={handleCloseDialog}
                open={openDialog}
            >

            </DiaLog>
        </div>
    )
}
