import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button"


const styles = {
  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  dialogContent: {
    background: "#FFF",
    marginRight: "32px",
    marginLeft: "32px",
  },
  dialogHeader: {
    textAlign: "center",
    marginTop: 26
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
  },
  dialogDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#B4B4B4"
  },
  dialogBody: {
    padding: "0px 16px 24px 16px"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  dialogButton: {
    width: "100% !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  cancelButton: {
    background: "rgba(37, 52, 92, 0.1) !important",
    color: "#25345C !important",
    marginRight: "8px !important",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 700
  },
  sendButton: {
    marginRight: "0px !important",
    background: "#25345C",
    color: "#FFF",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 700,
    '&:hover': {
      background: "#25345C !important",
    },
    '&:focus': {
      backgroundColor: "#25345C !important"
    }
  },
};

const useStyles = makeStyles(styles);


export default function LogsDialogContent(props) {
  const classes = useStyles();
  const { inputValue, setInputValue, handleSendForm, setDialog, setSelectValue } = props


  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const handleCloseDialog = () => {
    setDialog(false)
    if (setSelectValue) {
      setSelectValue("none")
    }
  }

  return (
    <GridItem className={classes.dialogBg}>
      <Card className={classes.dialogContent}>
        <GridContainer className={classes.dialogBody}>
          <GridItem xs={12}>
            {Object.entries(inputValue).map(([key, value], i) => (
              <GridItem key={i}>
                <TextField
                  id={`standard-full-width${i}`}
                  label={`Recipient ${key}`}
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                    classes: { root: classes.textFieldRoot }
                  }}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                />
              </GridItem>
            ))}
          </GridItem>
          <GridItem className={classes.dialogButton}>
            <Button round className="btn-round-active-2 mr-2" className={classes.cancelButton} onClick={handleCloseDialog} >
              Cancel
          </Button>
            <Button
              round
              onClick={handleSendForm}
              className="btn-round-active mr-2"
              className={classes.sendButton}
            > Send</Button>
          </GridItem>
        </GridContainer>
      </Card>

    </GridItem>
  );
}
