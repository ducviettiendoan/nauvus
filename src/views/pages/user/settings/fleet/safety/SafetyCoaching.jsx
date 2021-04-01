import React, {useState} from "react"
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {Divider} from "@material-ui/core";
import CustomSwitch from "components/CustomSwitch/Switch";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Button from "../../../../../../components/CustomButtons/Button";

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
    padding: "25px 0px 0px 0px !important"
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
    padding: "0px 0px 15px 0px !important",
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
  footerItem: {
    padding: "0px 0px 12px 0px !important",
    color: "#25345C",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    lineHeight: "17px",
    overflow: "hidden"
  }
}

const useStyles = makeStyles(styles);

export default function SafetyCoaching() {
  const classes = useStyles(styles)

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };
  return (
    <Card>
      <CardBody className={classes.cardContainer}>
        <GridItem className={classes.cardMultipleContent}>
          <GridItem xs={12} sm={8} md={8} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerWithButton}>
                <GridItem className={classes.headerItem}>
                  AI Event Detection (No compatible hardware connected)
                </GridItem>
              </GridItem>
              <GridItem className={classes.contentItem}>
                Only available in vehicles installed with dash cam models CM31 and CM32. To learn more about Samsara's
                internet-connected dash cams,
                please contact your sales representative or visit
              </GridItem>
              <GridItem className={classes.footerItem}>Navus website</GridItem>
              <Divider variant="fullWidth" light/>
            </CardBody>
            <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA"/>
          </GridItem>
          <GridItem xs={12} sm={8} md={8} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerWithButton}>
                <GridItem className={classes.headerItem}>
                  Coach Assignment
                </GridItem>
              </GridItem>
              <GridItem className={classes.contentItem}>
                Coaches will be automatically assigned to any safety event triggered by their assigned drivers.
              </GridItem>
              <GridItem className={classes.footerItem}>0 of 1 drivers with coaches assigned</GridItem>
              <GridItem className={classes.footerItem}>
                <Button
                  round
                  className="btn-round-white w-150 h-41"
                >
                  Edit Assignment
                </Button>
              </GridItem>
              <Divider variant="fullWidth" light/>
            </CardBody>
            <CustomSwitch checked={checkedState.checkedB} onChange={handleChange} name="checkedB"/>
          </GridItem>
          <GridItem xs={12} sm={8} md={8} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerWithButton}>
                <GridItem className={classes.headerItem}>
                  AI Event Detection (No compatible hardware connected)
                </GridItem>
              </GridItem>
              <GridItem className={classes.contentItem}>
                Only available in vehicles installed with dash cam models CM31 and CM32. To learn more about Samsara's
                internet-connected dash cams,
                please contact your sales representative or visit
              </GridItem>
              <GridItem className={classes.footerItem}>Navus website</GridItem>
              <Divider variant="fullWidth" light/>
            </CardBody>
            <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA"/>
          </GridItem>
          <GridItem xs={12} sm={8} md={8} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerWithButton}>
                <GridItem className={classes.headerItem}>
                  AI Event Detection (No compatible hardware connected)
                </GridItem>
              </GridItem>
              <GridItem className={classes.contentItem}>
                Only available in vehicles installed with dash cam models CM31 and CM32. To learn more about Samsara's
                internet-connected dash cams,
                please contact your sales representative or visit
              </GridItem>
              <GridItem className={classes.footerItem}>Navus website</GridItem>
              <Divider variant="fullWidth" light/>
            </CardBody>
            <CustomSwitch checked={checkedState.checkedA} onChange={handleChange} name="checkedA"/>
          </GridItem>
        </GridItem>
      </CardBody>
    </Card>
  )
}