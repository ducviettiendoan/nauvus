import {TextField} from "@material-ui/core";
import React from "react";

const CustomTextArea = (props) => {
    return(
        <TextField
            {...props}
            multiline
            variant="outlined"
            rows={4}
        />
    )
}

export default CustomTextArea