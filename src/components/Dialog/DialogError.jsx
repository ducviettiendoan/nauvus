import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import { CardHeader, Col, Row } from "reactstrap";
import Card from "components/Card/Card.js";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import BuildingIcon from "../Icons/BuildingIcon";
import Button from "../CustomButtons/Button";
import { IconButton, Link } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import DotIcon from "components/Icons/DotIcon.jsx";


const styles = {
  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight:"375px"
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
    padding: "24px 16px",
    minHeight:"260px"
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
  },
  closeButton: {
    position: 'absolute',
    color: "#25345C",
  },
  listContainer: {
    padding: "0px 0px 0px 0px !important"
  },
  webhookIP: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left",
    marginTop: 15,
    color: "#25345C"
  },
  listItemHeader: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    flexDirection: "row"
  },
  dotIcon: {
    fontSize: "15px"
  },
  guideText: {
    paddingBottom: "8px",
    color: "#25345C"
  },
  editLink: {
    paddingLeft: "30px !important",
    color: "#25345C",
    '&:hover': {
      color: "#C4C4C4",
    }
  },
};

const useStyles = makeStyles(styles);


export default function DialogError(props) {
  const classes = useStyles();
  const { open, errorValue, setFormError } = props

  const [openState, setOpenState] = useState(open);

  const handleCloseDialog = () => {
    setOpenState(false)
    setFormError(false)
  }

  return (
    <Dialog xs={6} sm={6} md={6} aria-labelledby="simple-dialog-title" open={openState} style={{paddingLeft: "16px", paddingRight: "16px" }}>
      <IconButton aria-label="close" className={classes.closeButton} onClick={handleCloseDialog}>
        <CloseIcon />
      </IconButton>

      <GridItem className={classes.dialogBg}>
        <GridContainer className={classes.dialogHeader}>
          <GridItem xs={12} className={classes.dialogTitle}>
            HOS Logs cannot be transferred
        </GridItem>
          <GridItem xs={12} className={classes.dialogDate}>
            Ali Singh
        </GridItem>
        </GridContainer>

        <Card className={classes.dialogContent}>
          <GridContainer className={classes.dialogBody}>
            <GridItem xs={12}>
              The FMCSA will not accept any data transfers for this driver until your organization corrects the following errors:
            </GridItem>
            <GridItem xs={12} className={classes.listContainer}>
              {Object.entries(errorValue).map(([key, value], i) => (
                <GridItem key={i}>
                  {value == "" && <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                    <GridItem className={classes.listItemHeader}>
                      <DotIcon className={classes.dotIcon} />
                      <GridItem className={classes.guideText}>Driver's license state must be entered. {key}</GridItem>
                    </GridItem>
                    <Link underline="always" className={classes.editLink}>Edit driver information</Link>
                  </GridItem>}
                </GridItem>
              ))}
            </GridItem>
            <GridItem xs={12} className={classes.dialogButton}>
              <Button round className={`btn-round-active mr-4 ${classes.sendButton}`}>
                Send
              </Button>
            </GridItem>
          </GridContainer>
        </Card>

      </GridItem>
    </Dialog>
  );
}
