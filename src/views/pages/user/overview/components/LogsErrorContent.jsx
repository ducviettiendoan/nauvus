import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Card from "components/Card/Card.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import { Link } from "@material-ui/core";
import DotIcon from "components/Icons/DotIcon.jsx";


const styles = {
  dialogBg: {
    background: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // minHeight: "375px"
  },
  dialogContent: {
    background: "#FFF",
    marginRight: "32px",
    marginLeft: "32px",
  },
  dialogHeader: {
    textAlign: "center",
    marginTop: 26
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
  },
  dialogDate: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#B4B4B4"
  },
  dialogBody: {
    padding: "24px 16px",
    minHeight: "260px"
  },
  dialogButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  sendButton: {
    marginRight: "0px !important"
  },
  listContainer: {
    padding: "0px 0px 0px 0px !important"
  },
  webhookIP: {
    display: "flex",
    flexDirection: "column",
    fontWeight: 700,
    fontSize: 15,
    textAlign: "left",
    marginTop: 15,
    color: "#25345C"
  },
  listItemHeader: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    flexDirection: "row"
  },
  dotIcon: {
    fontSize: "15px"
  },
  guideText: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
  },
  editLink: {
    paddingLeft: "30px !important",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
    '&:hover': {
      color: "#C4C4C4",
    }
  },
  dialogDescription: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#25345C",
  }
};

const useStyles = makeStyles(styles);


export default function LogsErrorContent(props) {
  const classes = useStyles();
  const { errorValue } = props

  return (
    <GridItem className={classes.dialogBg}>
      <Card className={classes.dialogContent}>
        <GridContainer className={classes.dialogBody}>
          <GridItem xs={12} className={classes.dialogDescription}>
            The FMCSA will not accept any data transfers for this driver until your organization corrects the following errors:
          </GridItem>
          <GridItem xs={12} className={classes.listContainer}>
            {Object.entries(errorValue).map(([key, value], i) => (
              <GridItem key={i}>
                {value == "" && <GridItem xs={12} sm={12} md={12} className={classes.webhookIP}>
                  <GridItem className={classes.listItemHeader}>
                    <DotIcon className={classes.dotIcon} />
                    <GridItem className={classes.guideText}>Driver's license state must be entered. {key}</GridItem>
                  </GridItem>
                  <Link underline="always" className={classes.editLink}>Edit driver information</Link>
                </GridItem>}
              </GridItem>
            ))}
          </GridItem>
          <GridItem xs={12} className={classes.dialogButton}>
            <Button round className={`btn-round-active mr-4 ${classes.sendButton}`}>
              Done
            </Button>
          </GridItem>
        </GridContainer>
      </Card>

    </GridItem>

  );
}
