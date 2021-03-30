import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import {
  cardTitle,
  roseColor,
} from "assets/jss/material-dashboard-pro-react.js";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardFooter from "../../../../../../components/Card/CardFooter";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0",
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem",
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px",
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px",
    },
  },
  iconRose: {
    color: roseColor,
  },
  marginTop30: {
    marginTop: "30px",
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
};

const useStyles = makeStyles(styles);

export default function ByLocation() {
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
