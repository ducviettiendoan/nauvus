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
import Accordion from "components/Accordion/Accordion";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Grid } from "@material-ui/core";

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
  editHeader: {
    textAlign: "center"
  },
  expansionClasses: {
    padding: "0px 15px 0px 8px !important",
    borderBottom: "0px !important",
    minHeight: "20px !important",
    background: "#FAFAFA",
    "&:hover": {
    background: "#FAFAFA",
    },
    "&:focus": {
    background: "#FAFAFA",
    },
  },
  expansionContentClasses: {
      margin: "0px !important",
      borderRadius: "25px",
  },
  expansionPanelClasses: {
    //   marginBottom: "4px !important",
      background: "#FAFAFA",
  },
  expansionPanelClassesRounded: {
      background: "#FAFAFA",
      border: "1px solid rgba(236, 238, 240, 1)",
      borderRadius: '25px',
      boxShadow: "inherit",
      marginBottom: "8px !important",
  },

  itemContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px !important"
  },
  tagTitle: {
      marginLeft: "8px",
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "10px"
  },
  checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
  },

  grayAvatar: {
      background: "#ECEEF0 !important",
      color: "#B4B4B4",
      marginRight: 8,
      fontSize: 12,
      fontWeight: 700,
  },
  clearButton: {
      textTransform: "none",
      color: "#8CA2EE",
      background: "unset !important",
      boxShadow: "unset !important",
      fontSize: 12,
      fontWeight: 700,
      padding: 0,
      margin: "0px !important",
      "&:hover": {
      color: "#25345C"
      },
      "&:focus": {
      color: "#8CA2EE"
      }
  },
  body: {
      "&>div>div": {
          borderRadius: "12px !important",
      },
      "&>div>div>div":{
          borderRadius: "12px",
      }
  },
  cardExpandContent:{
      margin: "0 16px 12px 16px",
      fontSize: "14px",
      fontWeight: 400,
      color: "#B4B4B4",
  }
};

const useStyles = makeStyles(styles);

export default function ReportAccordion(props) {
  const classes = useStyles();
  const {head,body} = props;  
  console.log(props.head);
  return (
    <div className={classes.body}>
        <Accordion collapses={
            [
                {
                title: <Grid style={{display: "flex", justifyContent: "space-between" }}>
                    <Grid className={classes.tagTitle}>{head}</Grid>
                </Grid>,
                content:
                    <div className={classes.cardExpandContent}>
                        {body}
                    </div>
                },
            ]
            }
            expansionSummaryClasses={{
                root: classes.expansionClasses,
                content: classes.expansionContentClasses
            }}
            expansionPanelClasses={{
                root: classes.expansionPanelClasses,
            }}
            expansionPanelRounded={{
                rounded: classes.expansionPanelClassesRounded,
            }}
            />
    </div>
  );
}
