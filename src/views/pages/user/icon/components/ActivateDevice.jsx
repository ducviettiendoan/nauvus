import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import {Field, Form} from "react-final-form";
import {TextField} from "final-form-material-ui";
import Button from "../../../../../components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4',
  },
  textInputRoot: {
    padding: "6px, 0, 9px !important",
    marginTop: "5px",
    marginBottom: "85px",
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    "&>input": {
      padding: "6px, 0, 9px !important",
    }
  },
  lastContent: {
    marginBottom: "72px",
    color: "#C4C4C4",
  },
  button: {
    background: '#25345C !important',
    borderRadius: '28px !important',
    padding: '10px 20px !important',
    textTransform: 'initial !important',
    fontSize:' 14px !important',
    /* font-family: Lato!important; */
    fontStyle: 'normal!important',
    fontWeight: 700,
  },
  buttonPosition: {
    textAlign: "right",
  },
  title: {
    marginTop: "108px",
    fontSize: "32px",
    color: "#25345C",
    fontWeight: 700,
    marginBottom: '5px',
  },
  content: {
    color: "#C4C4C4",
  },
  card: {
    textAlign: "center",
    height: "750px",
  }
};

const useStyles = makeStyles(styles);

export default function ActivateDevice() {
  const classes = useStyles();
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.title}>Activate Device</div>
        <div className={classes.content}>To activate a device and associate it with account, enter its serial number below.</div>
        <div className={classes.content}>Activate multiple devices by copyingand pasting their serial numbers from your order confirmation email.
        </div>
        <div className={classes.lastContent}>Each device's serial number can also be found on its label or packaging.
        </div>

        <Form
          onSubmit={onSubmit}
          render={({handleSubmit, reset, submitting, pristine, values}) => (
            <GridContainer style={{display: "flex", justifyContent: "center"}}>
              <GridItem xs={7} xl={7}>
                <Field
                  id="standard-full-width"
                  label="Email"
                  placeholder="Start typing..."
                  fullWidth
                  margin="normal"
                  name="email"
                  InputLabelProps={{
                    shrink: true,
                    classes: {root: classes.textFieldRoot}
                  }}
                  InputProps={{
                    classes: {input: classes.textInputRoot}
                  }}
                  component={TextField}
                />

                <div className={classes.buttonPosition}>
                  <Button
                    round
                    className={classes.button}
                    startIcon={<AddOutlined/>}
                  >
                    Activate Device
                  </Button>
                </div>
              </GridItem>
            </GridContainer>
          )}
        />
      </Card>
    </div>
  );
}
