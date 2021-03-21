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

import { STEP_SIGN_UP } from "config/constants";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { Col, Row } from 'reactstrap';
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

// components
import CompletedRegister from "./components/CompletedRegister";
import ActiveDevices from "./components/ActiveDevices";
import ChooseCountry from "./components/ChooseCountry";
import ConfirmRegister from "./components/ConfirmRegister";
import RegisterAccount from "./components/RegisterAccount";

import { loginByCognito } from "reducers/authentication";

export default function RegisterPage() {
  const [step, setStep] = React.useState(STEP_SIGN_UP.CHOOSE_COUNTRY); // CHOOSE_COUNTRY

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

  const handleCallbackRegister = (username, password) => {
    console.log(`handleCallbackRegister: ${username}`)
    setStep(STEP_SIGN_UP.CONFIRMATION);
    setUsername(username);
    setPassword(password);
  }
  
  const handleCallbackConfirm = async () => {
    console.log(`handleCallbackConfirm: ${username}`)
    const result = await loginByCognito(username, password);
    if (result.success) {
      console.log(`auto login success`)
      setStep(STEP_SIGN_UP.ACTIVE_DEVICE);
    } else {
      console.log(`auto login fail`, result);
    }
  }

  return (
    <>
      { (step === STEP_SIGN_UP.CHOOSE_COUNTRY) && <><ChooseCountry callBack={()=>{setStep(STEP_SIGN_UP.REGISTER);}} /></> }
      { (step === STEP_SIGN_UP.REGISTER) && <><RegisterAccount callBack={ handleCallbackRegister } /></> }
      { (step === STEP_SIGN_UP.CONFIRMATION) && <><ConfirmRegister username={ username } callBack={ handleCallbackConfirm } /></> }
      { (step === STEP_SIGN_UP.ACTIVE_DEVICE) && <><ActiveDevices callBack={()=>{setStep(STEP_SIGN_UP.COMPLETED);}} /></> }
      { (step === STEP_SIGN_UP.COMPLETED) && <><CompletedRegister /></> }
    </>
  );
}
