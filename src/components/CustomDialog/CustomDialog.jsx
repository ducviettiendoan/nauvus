import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
  },
  dialogContent: {
    width: "100% !important",
    padding: "0px 16px 0px 16px !important"
  },
});

const useStyles = makeStyles(styles)

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
  const classes = useStyles(styles)
  const { open, setDialog, setSelectValue, childComponent, header } = props

  const [openState, setOpenState] = useState(open || false);

  const handleCloseDialog = () => {
    setOpenState(false)
    setDialog(false)
    if (setSelectValue) {
      setSelectValue("none")
    }
  }

  return (
    <Dialog open={openState} aria-labelledby="customized-dialog-title" onClose={handleCloseDialog}>
      <div className={classes.dialogBg}>
        <DialogTitle onClose={handleCloseDialog} children={header}></DialogTitle>
        <DialogContent className={classes.dialogContent} >
          {childComponent}
        </DialogContent>
      </div>
    </Dialog>
  )
}

export default DiaLog;