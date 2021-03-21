import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

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
  
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
};

const useStyles = makeStyles(styles);

export default function Settings() {
  const classes = useStyles();
  return (
    <div>
      <Row>
              <Card>
                <div className={classes.testimonialIcon}>
                  <FormatQuote />
                </div>
                <CardBody>
                  <h5 className={classes.cardTestimonialDescription}>
                    No Data
                  </h5>
                </CardBody>
                <CardFooter>
                  <h6 className={classes.cardCategory}>@nauvus</h6>
                </CardFooter>
              </Card>
      </Row>
    </div>
  );
}
