import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { Col, Row } from 'reactstrap';
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { COGNOTO_SERVER_URL, COGNOTO_CLIENT_ID, COGNOTO_RESPONSE_TYPE, PUBLIC_URL } from "config/constants";

const useStyles = makeStyles(styles);

export default function LogoutPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
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

  return (
    <>
                <Row style={{ marginBottom: "82px"}} className="justify-content-center">
                  <div className={ classes.authMainTitle }>Log out success !</div>
                </Row>
                <Row className="justify-content-center">
                  <Link to={`/auth/sign-in`}>
                    <Button round className="btn-round-active w-150">
                      Sign In
                    </Button>
                  </Link>
                </Row>
    </>
  );
}
