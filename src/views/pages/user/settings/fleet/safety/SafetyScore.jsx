import React, {useState} from "react"
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import {Divider} from "@material-ui/core";
import CustomSwitch from "components/CustomSwitch/Switch";

const styles = {
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    padding: "28px 0px 20px 0px !important"
  },
  headerWithButton: {
    padding: "0px 0px 0px 0px !important",
    display: "flex",
    justifyContent: "space-between"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
}

const useStyles = makeStyles(styles);

export default function SafetyScore() {
  const classes = useStyles(styles)

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };
  return (
    <Card>
      <CardBody className={classes.cardContainer}>
        <GridItem className={classes.cardMultipleContent}>
          <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerWithButton}>
                <GridItem className={classes.headerItem}>
                  Safety Score Configuration
                </GridItem>
                <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA"/>
              </GridItem>
              <GridItem className={classes.contentItem}>
                Set relative importance of safety scores and weights of safety infractions
              </GridItem>
              <Button
                round
                className="btn-round-gray w-138"
              >
                Configure Scores
              </Button>
            </CardBody>
          </GridItem>
          <Divider variant="fullWidth" light/>
        </GridItem>
      </CardBody>
    </Card>
  )
}