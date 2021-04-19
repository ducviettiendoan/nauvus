import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CheckedIcon from "components/Icons/CheckedIcon";
// utils
import { connect } from "react-redux"
import { Grid, makeStyles } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
  accuracyContainer: {
    marginLeft: "16px !important",
    marginRight: "16px !important"
  },
  accuracyCard: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
  },
  accuracyHeader: {
    paddingBottom: "4px !important",
    color: "#25345C",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "bold"
  },
  accuracyContent: {
    paddingTop: "4px !important",
    paddingBottom: "16px !important",
    color: "#B4B4B4",
    fontSize: "14px",
    lineBreak: "17px",
    fontWeight: "normal"
  },
  checkedButton: {
    width: "20px !important",
    height: "20px !important",
    color: "#FFFFFF"
  },
  accuracyFooter: {
    color: "#25345C",
    fontSize: "14px",
    lineBreak: "17px",
    fontWeight: "normal",
    textDecorationLine: "underline",
    paddingLeft: "10px !important"
  },
  warningCard: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px !important",
    background: "#ECEEF0",
    display: "flex",
    flexDirection: "row"
  },
  warningContent: {
    color: "#25345C",
    fontSize: "12px",
    lineBreak: "14px",
    fontWeight: "normal",
  },
}))

function Unassigned(props) {
  const classes = useStyles()

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.accuracyContainer}>
            <Card className={classes.accuracyCard}>
              <GridItem className={classes.accuracyHeader}>Improve Assignment Accuracy</GridItem>
              <GridItem className={classes.accuracyContent}>Completing a few set up steps will help improve your automatic driver assignments:</GridItem>
              <GridItem style={{ display: "flex", alignItems: "center " }}>
                <CheckedIcon className={classes.checkedButton} />
                <Grid className={classes.accuracyFooter}>Set up driver auto-assignment groups</Grid>
              </GridItem>
            </Card>
            <Card className={classes.warningCard}>
              <InfoOutlined />
              <GridItem className={classes.warningContent}>
                Trip segments which already have a static driver assignment will not appear in the Driver Assignment Report.
                Static driver assignment take precedence over any driver assignment made by Camera ID throughout our platform. For more information,
                please visit the FAQ section in our Knowledge Base.
              </GridItem>
            </Card>

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