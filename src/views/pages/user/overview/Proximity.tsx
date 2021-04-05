import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import {Theme, makeStyles} from '@material-ui/core';
import {BaseCSSProperties} from '@material-ui/core/styles/withStyles';

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
import Search from "@material-ui/icons/Search";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";

import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Loading from "components/Loading/Loading";
import {connect} from 'react-redux';
import {loadVehicles} from 'reducers/vehicle';
import {IRootState} from 'reducers';
import imageTabs from "assets/img/Tabs.png";

import VehicleAssets from "./components/VehicleAssets";

import {Col, Row} from 'reactstrap';

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
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  txtInfoMain: {
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#25345C",
  },
  txtInfoSub: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  txtNumberVehicle: {
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  txtSearchLabel: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#25345C",
    textTransform: "uppercase",
    fontWeight: "900"
  }
};

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);


export function Proximity(props) {
  const classes = useStyles({} as StyleProps);

  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }

    fetchVehicles();
  }, [1]);

  return (
    <div>
      <Row>
        <Card>
          <CardHeader>
            <Row className="float-right mb-3">
              <Button className="btn-more-actions">
                MORE ACTIONS <KeyboardArrowDown/>
              </Button>
            </Row>
            <Card>
              <CardBody>
                <div className="ml-5">
                  <div className={classes.txtInfoMain}>We’ve moved your trailers</div>
                  <div className={`mb-4 ${classes.txtInfoSub}`}>
                    241 trailers from your Trailers & Assets list in Settings have been moved to this list. 5 trailers
                    witch matching names were automatically merged. The remaining 236 trailers were added.
                  </div>
                  <Button round className="btn-round-active w-150 mr-4">
                    Keep all trailers
                  </Button>
                  <Button round className="btn-round-active w-150 mr-4">
                    Delete
                  </Button>
                </div>
                <div style={{position: "absolute", top: "16px"}}>
                  <InfoOutlined/>
                </div>
              </CardBody>
            </Card>

            <Row className="mb-3">
              <Col><img src={imageTabs} alt="..."/></Col>
            </Row>

            <Row>
              <Col>
                <Button round className="btn-tags mr-2">
                  Tags <KeyboardArrowDown/>
                </Button>
                <Button round className="btn-tags">
                  Gateway <KeyboardArrowDown/>
                </Button>
              </Col>
              <Col>
                <div style={{textAlign: 'right'}}>
                  <span className={classes.txtNumberVehicle}>{props.vehicles.length} vehicles   </span>
                  <span className={classes.txtSearchLabel}>{'  '}<Search/> search in vehicle</span>
                </div>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <VehicleAssets data={props.vehicles}/>
          </CardBody>
          <CardFooter>
          </CardFooter>
        </Card>
      </Row>
    </div>
  );
}

export default connect(
  ({authentication, vehicle}: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles
  }),
  {
    loadVehicles
  }
)(Proximity);