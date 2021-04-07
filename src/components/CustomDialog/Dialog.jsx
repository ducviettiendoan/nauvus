import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  paper: {
    overflowY: "unset",
    background: "#F5F5F5",
    borderRadius: "12px"
  },
  dialogContent: {
    padding: "16px",
    background: "#fff",
    margin: "0 16px 16px",
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    overflowY: "scroll"
  }
});

const useStyles = makeStyles(styles);

const DialogTitle = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(-3),
    top: theme.spacing(-3),
    color: theme.palette.grey[500],
    padding: 0
  },
  closeIcon: {
    color: "#FFFFFF"
  }
}))((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="div">{children}</Typography>
      {onClose && (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon className={classes.closeIcon} />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
});


export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const open = props.open || false;

  return (
    <div>
      <Dialog
        fullWidth
        classes={{ paper: classes.paper, root: classes.root }}
        // onClose={handleClose}
        open={open}
      >
        <DialogTitle onClose={props.handleClose}> {props.renderTitle} </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {props.children}
        </DialogContent>
      </Dialog>
    </div>
  );
}