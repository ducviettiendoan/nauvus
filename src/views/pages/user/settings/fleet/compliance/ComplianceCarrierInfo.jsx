import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import TextField from "@material-ui/core/TextField";
import {Col, Row} from "reactstrap";
import Button from "components/CustomButtons/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TodoIcon from "components/Icons/TodoIcon";
import CompanyIcon from "components/Icons/CompanyIcon";
import BuildingIcon from "components/Icons/BuildingIcon";

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
  cardContainer: {
    marginTop: "15px !important",
    height: "calc(100vh - 100px)",
    padding: "0px 0px 0px 16px !important"
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
  cardContentLeft: {
    display: "flex",
    textAlign: "left"
  },
  cardContentRight: {
    textAlign: "left",
    display: "flex",
  },
  cardItem: {
    padding: "0px 16px !important"
  },
  cardItemHeader: {
    fontWeight: 700,
    fontSize: 16,
    color: "#25345C",
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden"
  },
  cardItemContent: {
    color: "#B4B4B4",
    fontWeight: 400,
    fontSize: 14,
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden"
  },
  cardGridItemLeft: {
    padding: "0 !important"
  },
  cardGridItem: {
    padding: "0 !important"
  },
  contentContainerLeft: {
    marginTop: 35
  },
  cardItemHeaderLeft: {
    paddingLeft: "0 !important",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    fontFamily: "Lato",
    lineHeight: "21px",
    overflow: "hidden"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },
  footer: {
    position: 'absolute',
    bottom: '70px',
    width: '100%'
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "25px"
  },
};

const useStyles = makeStyles(styles);

export default function ComplianceCarrierInfo() {
  const classes = useStyles();
  return (
    <>
      <CardBody className={classes.cardContainer}>
        <GridItem className={classes.cardItemHeaderLeft}>
          Driver Activity List
        </GridItem>
        <Row style={{marginTop: '20px', paddingRight: '16px'}}>
          <Col>
            <TextField
              id="standard-full-width"
              label="Carrier US DOT Number"
              placeholder="Start typing..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot}
              }}
              InputProps={{
                classes: {input: classes.textInputRoot},
                endAdornment: (
                  <InputAdornment position="start">
                    <TodoIcon className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
          <Col>
            <TextField
              id="standard-full-width1"
              label="Carrier Name / Principal Place of Business Name"
              placeholder="Start typing..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot},
              }}
              InputProps={{
                classes: {input: classes.textInputRoot},
                endAdornment: (
                  <InputAdornment position="start">
                    <CompanyIcon className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
        </Row>
        <Row style={{marginTop: '20px', paddingRight: '16px'}}>
          <Col>
            <TextField
              id="standard-full-width1"
              label="Main Office Address / Principal Place of Business Address"
              placeholder="Start typing..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: {root: classes.textFieldRoot}
              }}
              InputProps={{
                classes: {input: classes.textInputRoot},
                endAdornment: (
                  <InputAdornment position="start">
                    <BuildingIcon className={classes.inputAdornmentIcon} />
                  </InputAdornment>
                ),
              }}
            />
          </Col>
        </Row>
      </CardBody>
      <Row className={classes.footer}>
        <Col>
          <div style={{marginLeft: '16px'}}>
            <Button round className="btn-round-active mr-2">
              Save
            </Button>
            <Button round className="btn-round-active-2">
              Cancel
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}
