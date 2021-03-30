import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import {TextField} from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import ArrowBackIcon from "components/Icons/ArrowBackIcon";

const styles = {
  card: {
    minHeight: "70vh"
  },
  cardItemHeaderLeft: {
    paddingLeft: "0 !important",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden",
    textAlign: "left",
    marginTop: "0px !important"
  },
  cardItemHeaderLeftSecond: {
    paddingLeft: "0 !important",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden",
    textAlign: "left",
    marginTop: "24px !important"
  },
  requestBody:{
    paddingLeft: "0 !important",
    fontWeight: 700,
    fontSize: 18,
    color: "#C4C4C4",
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden",
    textAlign: "left",
    marginTop: "16px !important"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    padding: "6px 0 17px"
  },
  backButton: {
    color: '#25345C',
    fontWeight: 700,
    textTransform: "none",
    borderRadius: "0!important",
    paddingTop: "12.5px",
    paddingBottom: "12.5px"
  },
  backButtonWrapper: {
    textAlign: "left",
    marginTop: "16px",
    marginBottom: "26px",
  },
  grid: {
    padding: "0!important"
  }
};

const useStyles = makeStyles(styles);

export default function RequestDetails() {
  const classes = useStyles();
  return (
    <Card className={classes.card} testimonial>
      <CardBody>
        <CardBody>
          <h4 className={classes.cardItemHeaderLeft}>Request Details</h4>
          <div className={classes.backButtonWrapper}>
            <Button
              className="btn-round-white-3"
              startIcon={<ArrowBackIcon className={classes.buttonIcon}/>}
              style={{boxShadow: "none", paddingLeft: "0px"}}
            >
              Back
            </Button>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width1"
                label="Request URL"
                defaultValue="http://api.nauvus.com/fleet/vehicles"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width2"
                label="Request Time"
                defaultValue="2021-03-22T11:49:30.595041381Z"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem className={classes.grid} xs={0} md={4}></GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width3"
                label="Api Token Name"
                defaultValue="fleetManager"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width4"
                label="Api Token Version"
                defaultValue="2019.12.12"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem className={classes.grid} xs={0} md={4}></GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width5"
                label="Request Duration"
                defaultValue="0.153s"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width6"
                label="Status Code"
                defaultValue="200"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem className={classes.grid} xs={0} md={4}></GridItem>
            <GridItem xs={12} sm={6} md={4}>
              <TextField
                id="standard-full-width7"
                label="Request Body"
                defaultValue="Not applicable"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                  classes: {root: classes.textFieldRoot}
                }}
                InputProps={{
                  classes: {input: classes.textInputRoot},
                }}
              />
            </GridItem>
            <GridItem xs={12}>
              <h4 className={classes.cardItemHeaderLeftSecond}>Response Body</h4>
              <div className={classes.requestBody}>Here will be the code</div>
            </GridItem>
          </GridContainer>
        </CardBody>
      </CardBody>
    </Card>
  );
}