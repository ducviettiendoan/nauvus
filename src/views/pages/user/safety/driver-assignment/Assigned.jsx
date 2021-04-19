import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { connect } from "react-redux"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}))

function Unassigned(props) {
  const classes = useStyles()

  return (
    <GridContainer style={{ height: "100vh" }}>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridItem>Assigned</GridItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(Unassigned)