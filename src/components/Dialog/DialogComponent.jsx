import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from "../CustomButtons/Button"

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DiaLog = (props) => {

  const { open, setDialog, setSelectValue, childComponent, handleSend } = props

  const [openState, setOpenState] = useState(open);

  const handleCloseDialog = () => {
    setOpenState(false)
    setDialog(false)
    if (setSelectValue) {
      setSelectValue("none")
    }
  }


  const handleClickOpen = () => {
    setOpenState(true);
  };

  const handleSendForm = () => {
    handleCloseDialog()
    handleSend()
  }


  return (
    <Dialog open={openState} aria-labelledby="customized-dialog-title" onClose={handleCloseDialog}>
      <DialogTitle onClose={handleCloseDialog}>Invite User</DialogTitle>
      <DialogContent>
        {childComponent}
      </DialogContent>
      <DialogActions>
        <Button round className="btn-round-active-2 mr-2" onClick={handleCloseDialog}>
          Cancel
          </Button>
        <Button
          round
          onClick={handleSendForm}
          className="btn-round-active mr-2"
        > Send</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DiaLog;