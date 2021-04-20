import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CheckedIcon from "components/Icons/CheckedIcon";
import CloseIcon from "components/Icons/CloseIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import Chip from "@material-ui/core/Chip";
import { Grid, makeStyles } from "@material-ui/core";
// utils
import { connect } from "react-redux"

const useStyles = makeStyles((theme) => ({

}))

function VehicleReport(props) {
  const classes = useStyles()


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>

          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ }) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleReport)