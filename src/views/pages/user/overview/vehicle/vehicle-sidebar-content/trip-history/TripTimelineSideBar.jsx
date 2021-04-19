import React, {useEffect, useState} from "react";
// @material-ui/core SafetyInbox
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core SafetyInbox
import Divider from '@material-ui/core/Divider';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';

import {selectDistance} from "reducers/overview";
import Button from "components/CustomButtons/Button";
import ArrowBackIcon from "components/Icons/ArrowBackIcon";

const styles = {
  txtMainDevice: {
    color: "#1C1D21",
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "18px",
    paddingBottom: "0px !important",
    paddingLeft: "28px !important"
  },
  txtMainDescription: {
    color: "#8181A5",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "21px",
    paddingTop: "0px !important",
    paddingBottom: "12px !important",
    paddingLeft: "28px !important"
  },
  contentContainer: {
    padding: "50px 28px 50px 28px !important"
  },
  sidebarInput: {
    width: "100%"
  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#C4C4C4',
    marginBottom: "0px !important"
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C',
    padding: "6px 0 17px"
  },
  footerText: {
    paddingTop: "30px !important",
    fontWeight: 400,
    fontFamily: "Lato",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
  },
  headerButton: {
    padding: "14px 0px 14px 31px !important"
  },
  headerButtonRight: {
    padding: "14px 0px 14px 8px !important"
  }
};

const useStyles = makeStyles(styles);
var ps;

export function TripTimelineSidebar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  console.log(props.distances)

  // useEffect(() => {
  //   props.getDistance()
  // }, [])

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      // setMobileOpen(false);
    }
  };

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanelVehicleSideBar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [1]);

  const [inputValue, setInputValue] = React.useState({
    asset: "",
    distance: "",
    start: "",
    end: "",
  })

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }

  const handleChange = (event) => {
    props.selectDistance(event.target.value);
  }

  const distanceData = [100, 200, 300, 400, 500]

  return (
    <div ref={mainPanelVehicleSideBar}>
      <Row>
        <Col xs={4} className={classes.headerButton}>
          <Button
            round
            className="btn-round-white w-142 h-41"
            startIcon={<ArrowBackIcon/>}
          >
            Previous Trip
          </Button>
        </Col>
        <Col xs={8} className={classes.headerButtonRight}>
          <Button
            round
            className="btn-round-gray w-116 h-41"
            startIcon={<ArrowBackIcon/>}
          >
            Next Trip
          </Button>
        </Col>
      </Row>

      <Divider variant="fullWidth" light/>

      <Row>
        <Col>
          <div className={classes.txtMainDevice} style={{padding: '15px'}}>Mar 22, 11:03 AM EDT</div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = ({vehicle, overview}) => {
  return {
    vehicles: vehicle.vehicles,
    distance: overview.distance
  }
}

const mapDispatchToProps = {
  selectDistance
}


export default connect(mapStateToProps, mapDispatchToProps)(TripTimelineSidebar);