import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import {CardHeader, Col, Row} from "reactstrap";
import Card from "components/Card/Card.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BuildingIcon from "../Icons/BuildingIcon";
import Button from "../CustomButtons/Button";

const styles = {
  dialogBg: {
    "& .MuiDialog-scrollPaper > div": {
      background: "#F5F5F5"
    }
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
    padding: "24px 16px"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  dialogButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  cancelButton: {
    background: "rgba(37, 52, 92, 0.1) !important",
    color: "#25345C !important",
    marginRight: "8px !important"
  },
  sendButton: {
    marginRight: "0px !important"
  }
};

const useStyles = makeStyles(styles);


export default function DialogComponent(props) {
  const classes = useStyles();
  const {open} = props
  return (
    <Dialog className={classes.dialogBg} aria-labelledby="simple-dialog-title" open={open}>
      <GridContainer className={classes.dialogHeader}>
        <GridItem xs={12} className={classes.dialogTitle}>
          Transfer ELD Records
        </GridItem>
        <GridItem xs={12} className={classes.dialogDate}>
          Export HOS log report / Mar 29, 2021
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.dialogBody}>
        <GridItem xs={12}>
          <Row>
            <Col>
              <TextField
                id="standard-full-width1"
                label="Recipient Email"
                placeholder="Start typing..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField
                id="standard-full-width1"
                label="Comment"
                placeholder="Start typing..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
              />
            </Col>
          </Row>
        </GridItem>
        <GridItem xs={12} className={classes.dialogButton}>
          <Button round className={`btn-round-active mr-4 ${classes.cancelButton}`}>
            Cancel
          </Button>
          <Button round className={`btn-round-active mr-4 ${classes.sendButton}`}>
            Send
          </Button>
        </GridItem>
      </GridContainer>
    </Dialog>
  );
}
