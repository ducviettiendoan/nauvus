import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardFooter from "components/Card/CardFooter";

const styles = {
  cardCategory: {
    color: "#999999",
    marginTop: "10px",
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
};

const useStyles = makeStyles(styles);

export default function DriverAppRoutes() {
  const classes = useStyles();

  return (
    <Card testimonial>
      <div className={classes.testimonialIcon}>
        <FormatQuote />
      </div>
      <CardBody>
        <h5 className={classes.cardTestimonialDescription}>No Data</h5>
      </CardBody>
      <CardFooter testimonial>
        <h6 className={classes.cardCategory}>@nauvus</h6>
      </CardFooter>
    </Card>
  );
}
