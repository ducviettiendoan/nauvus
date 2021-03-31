import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import TextField from '@material-ui/core/TextField';

import { Row, Col } from "reactstrap";
import GridItem from "components/Grid/GridItem.js";
import CustomSelect from "components/CustomSelect/CustomSelect"
import Button from "components/CustomButtons/Button.js";
import DeleteIcon from "components/Icons/DeleteIcon";

const styles = {
  footer: {
    position: 'absolute',
    bottom: '16px',
    width: '100%'
  },
  vehicleHeader: {
    width: "78px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  configHeader: {
    width: "150px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#C4C4C4",
    padding: "0px 0px 0px 0px !important",
  },
  customerHeader: {
    width: "150px",
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
    padding: "0px 0px 0px 0px !important",
  },
  customerInfoContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "6px 0px 20px 0px !important",
  },
  customerName: {
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
    padding: "0px 0px 0px 0px !important",
  },
  customerId: {
    height: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
    padding: "0px 0px 0px 5px !important",
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
  footerContainer: {
    padding: "0px 0px 0px 0px !important",
  }
};

const useStyles = makeStyles(styles);

export default function GeneralAdvanced() {
  const classes = useStyles();

  const [config, setConfig] = useState("")

  const [selectValue, setSelectValue] = useState({
    selectA: "none",
    selectB: "none",
    selectC: "none",
  });

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div>
        <Row style={{ marginTop: '20px', display: "flex", justifyContent: "space-between" }} xs={12} sm={12} md={12} >
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.vehicleHeader}>Monthly Data Plan</GridItem>
            <CustomSelect name="selectA" listValues={["500MB", "400MB", "300MB"]} placeholder={"Select monthly data plan"} selectValue={selectValue.selectA} onChange={handleChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.vehicleHeader}>Internal Type</GridItem>
            <CustomSelect name="selectB" listValues={["Customer Org", "Business Org"]} placeholder={"Select internal type"} selectValue={selectValue.selectB} onChange={handleChange} />
          </GridItem>
        </Row>
        <Row style={{ marginTop: '20px', display: "flex", alignItems: "end", paddingBottom: '26px' }} xs={12} sm={12} md={12} >
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.vehicleHeader}>Release Type</GridItem>
            <CustomSelect name="selectC" listValues={["Phase 1", "Phase 2", "Phase 3"]} placeholder={"Select release type"} selectValue={selectValue.selectC} onChange={handleChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.configHeader}>Config Override (json)</GridItem>
            <TextField
              id="standard-full-width1"
              placeholder="Start typing..."
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
                classes: { root: classes.textFieldRoot },
              }}
              InputProps={{
                classes: { input: classes.textInputRoot },
              }}
            />
          </GridItem>
        </Row>
        <GridItem className={classes.customerHeader}>Customer Numbers</GridItem>
        <GridItem className={classes.customerInfoContainer}>
          <GridItem className={classes.customerName}>Sam:</GridItem>
          <GridItem className={classes.customerId}>CVZ76UKW4V</GridItem>
        </GridItem>
        <GridItem className={classes.footerContainer}>
          <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Col>Item</Col>
            <GridItem>
              <Button
                className="btn-transparent w-101"
                startIcon={<DeleteIcon style={{top: "3px"}} />}
              >Remove</Button>
            </GridItem>
          </Row>
        </GridItem>
      </div>
    </>
  );
}
