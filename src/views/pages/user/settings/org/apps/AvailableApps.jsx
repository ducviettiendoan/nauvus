import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Switch from "components/CustomSwitch/Switch.jsx";
import {Divider} from "@material-ui/core";
import Logo from "assets/img/logo_nauvus_text.svg";

import {
  cardTitle,
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardContainer: {
    padding: "0px 0px 0px `16px `!important",
    marginRight: "20px",
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important",
  },
  gridContent: {
    display: "flex",
    padding: "0px 0px 0px 0px !important",
    alignItems: "center",
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important",
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "80px",
    padding: "12px 10px 0px 0px",
  },
  flexGrid: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: "0px !important",
  },
};

const useStyles = makeStyles(styles);

export default function AvailableApps() {
  const classes = useStyles();
  const [checkedState, setCheckedState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event) => {
    setCheckedState({
      ...checkedState,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      <Card testmonial>
        <CardBody className={classes.cardContainer}>
          <GridItem className={classes.cardMultipleContent}>
            <CardBody className={classes.cardItem}>
              <GridContainer spacing={3}>
                <GridItem xs={12} sm={3} md={3} lg={2} xl={1}>
                  <img
                    className={classes.image}
                    src={Logo}
                    alt="picture"
                  />
                </GridItem>
                <GridItem xs={11} sm={9} md={9} lg={10} xl={11}>
                  <GridContainer className={classes.gridContent}>
                    <GridItem
                      xs={9}
                      sm={8}
                      md={9}
                    >
                      <GridItem className={classes.headerItem}>
                        Nauvus App Marketplace
                      </GridItem>
                      <GridItem className={classes.contentItem}>
                        Visit our app Marketplace for more information about
                        all the intergrations that work with Samsara. Some
                        Samsara intergrations are only available by contacting
                        the vender directly
                      </GridItem>
                    </GridItem>

                    <GridItem
                      xs={3}
                      sm={4}
                      md={3}
                      className={classes.flexGrid}
                    >
                      <Button round className="btn-round-gray w-150 h-41">
                        Go to Marketplace
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </CardBody>
            <Divider variant="fullWidth" light/>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3} lg={2} xl={1}>
                <img
                  className={classes.image}
                  src={Logo}
                  alt="picture"
                />
              </GridItem>

              <GridItem
                xs={11}
                sm={8}
                md={9}
                lg={10}
                xl={11}
                className={classes.gridContent}
              >
                <CardBody className={classes.cardContainer}>
                  <GridItem className={classes.headerItem}>
                    Nauvus App Market
                  </GridItem>
                  <GridItem className={classes.contentItem}>
                    Visit our app Marketplace for more information about all
                    the intergrations that work with Samsara. Some Samsara
                    intergrations are only available by contacting the vender
                    directly
                  </GridItem>
                </CardBody>
                <Switch
                  checked={checkedState.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                />
              </GridItem>
            </GridContainer>
            <Divider variant="fullWidth" light style={{marginTop: '-10px'}}/>
          </GridItem>
        </CardBody>
      </Card>
    </div>
  );
}
