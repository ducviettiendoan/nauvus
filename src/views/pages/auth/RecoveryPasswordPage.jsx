import React from "react";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import { STEP_RECOVER_PASSWORD } from "config/constants";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

// components
import RecoverCompleted from "./components/RecoverCompleted";
import RecoverNewPassword from "./components/RecoverNewPassword";
import RecoverRequest from "./components/RecoverRequest";
import RecoverConfirmmationSent from "./components/RecoverConfirmmationSent";

import { loginByCognito } from "reducers/authentication";

export default function RecoveryPasswordPage() {
  const [step, setStep] = React.useState(STEP_RECOVER_PASSWORD.REQUEST); // CONFIRMATION_SENT REQUEST CHANGE_PASSWORD

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  const handleCallbackRequest = (username) => {
    console.log(`handleCallbackRequest: ${username}`)
    setStep(STEP_RECOVER_PASSWORD.CONFIRMATION_SENT);
    setUsername(username);
  }
  
  return (
    <>
      { (step === STEP_RECOVER_PASSWORD.REQUEST) && <><RecoverRequest callBack={ handleCallbackRequest }  /></> }
      { (step === STEP_RECOVER_PASSWORD.CONFIRMATION_SENT) && <><RecoverConfirmmationSent username={username} callBack={ ()=>{setStep(STEP_RECOVER_PASSWORD.CHANGE_PASSWORD);} }  /></> }
      { (step === STEP_RECOVER_PASSWORD.CHANGE_PASSWORD) && <><RecoverNewPassword username={username}  callBack={()=>{ setStep(STEP_RECOVER_PASSWORD.COMPLETED);} }/></> }
      { (step === STEP_RECOVER_PASSWORD.COMPLETED) && <><RecoverCompleted /></> }
    </>
  );
}
