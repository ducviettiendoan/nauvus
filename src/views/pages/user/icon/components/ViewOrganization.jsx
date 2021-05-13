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
import Button from "components/CustomButtons/Button";
import Grid from "@material-ui/core/Grid";
import AddOutlined from "@material-ui/icons/AddOutlined";
import { getViewOrganization } from "reducers/icon";
import { connect } from "react-redux";
import Table from "components/Table/TableV1";
import { MoreHoriz } from "@material-ui/icons";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import ViewOrganizationRow from "./ViewOrganizationRow";

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
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  card: {
    padding: "20px 16px 23px 16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#25345C",
    marginBottom: "26px",
  }
};

const useStyles = makeStyles(styles);

function ViewOrganization(props) {
  const classes = useStyles();
  React.useEffect(() => {
    // Get list data
    props.getViewOrganization();
  }, []);

  console.log(props.data);

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.title}>Organisations</div>
        {props.data && props.data.length>0 && props.data.map(item => {
          return (
          <ViewOrganizationRow item={item}/>
          )
        })}
      </Card>
    </div >
  );
}

const mapStateToProps = ({icon}) => {
  return {
    data: icon.viewOrganization.data,
  };
};

const mapDispatchToProps = {
  getViewOrganization,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewOrganization);