import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import { Row } from "reactstrap";
import CustomSelect from "components/CustomSelect/CustomSelect"

const styles = {
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
  }
};

const useStyles = makeStyles(styles);

export default function GeneralLanguageRegion() {
  const classes = useStyles();

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
            <GridItem className={classes.vehicleHeader}>Locate</GridItem>
            <CustomSelect name="selectA" listValues={["New York", "Ohio", "Texas"]} placeholder={"Select Locate"} selectValue={selectValue.selectA} onChange={handleChange} />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.vehicleHeader}>Timezone</GridItem>
            <CustomSelect name="selectB" listValues={["UTC -4", "UTC -5", "UTC -6"]} placeholder={"Select Timezone"} selectValue={selectValue.selectB} onChange={handleChange} />
          </GridItem>
        </Row>
        <Row style={{ marginTop: '20px', display: "flex", justifyContent: "space-between" }} xs={12} sm={12} md={12} >
          <GridItem xs={12} sm={12} md={6}>
            <GridItem className={classes.vehicleHeader}>Language</GridItem>
            <CustomSelect name="selectC" listValues={["English", "Chinese", "Japanese"]} placeholder={"Select Language"} selectValue={selectValue.selectC} onChange={handleChange} />
          </GridItem>
        </Row>
      </div>
    </>
  );
}
