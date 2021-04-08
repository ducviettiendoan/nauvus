import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {Col, Row} from 'reactstrap';
import {connect} from 'react-redux';
import CustomInput from "components/CustomInput/CustomInput"
import {Grid} from "@material-ui/core";
import CustomSelect from "../../../../../components/CustomSelect/CustomSelect";
import {getDistance} from "../../../../../reducers/overview";

const styles = {
  txtMainDevice: {
    color: "#1C1D21",
    fontWeight: "bold",
    fontSize: "14px",
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
  }
};

const useStyles = makeStyles(styles);
var ps;

export function ProximitySideBar(props) {
  const classes = useStyles();
  const mainPanelVehicleSideBar = React.createRef();

  console.log(props.distances)

  useEffect(() => {
    props.getDistance()
  }, [])

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

  const [selectValue, setSelectValue] = useState({
    distance: props.distances,
  });

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value })
  }


  return (
    <div ref={mainPanelVehicleSideBar}>
      <Row>
        <Col>
          <div className={classes.txtMainDevice} style={{padding: '15px'}}>Proximity Search</div>
          <div className={classes.txtMainDescription} style={{padding: '15px'}}>Search for an address to see which
            assets were previously nearby.
          </div>
          <Divider variant="fullWidth" light/>
        </Col>
      </Row>

      <List className={classes.contentContainer}>
        <CustomInput
          labelText="Search for assets near"
          name="asset"
          formControlProps={{
            className: classes.sidebarInput
          }}
          inputProps={{
            placeholder: "Enter assets",
            onChange: handleInputChange,
            defaultValue: "Title",
            classes: {input: classes.textInputRoot},
          }}
          labelProps={{
            shrink: true,
            classes: {root: classes.textFieldRoot}
          }}
        />
        <CustomSelect
          labelText="Select distance"
          name="distance"
          listValues={props.distances}
          placeholder={props.distances}
          selectValue={selectValue.distance}
          onChange={handleChange}
        />
        <CustomInput
          labelText="Start Time"
          name="start"
          formControlProps={{
            className: classes.sidebarInput
          }}
          inputProps={{
            placeholder: "Enter start time",
            onChange: handleInputChange,
            defaultValue: "Title",
            classes: {input: classes.textInputRoot},
          }}
          labelProps={{
            shrink: true,
            classes: {root: classes.textFieldRoot}
          }}
        />
        <CustomInput
          labelText="Start Time"
          name="end"
          formControlProps={{
            className: classes.sidebarInput
          }}
          inputProps={{
            placeholder: "Enter end time",
            onChange: handleInputChange,
            defaultValue: "Title",
            classes: {input: classes.textInputRoot},
          }}
          labelProps={{
            shrink: true,
            classes: {root: classes.textFieldRoot}
          }}
        />
        <Grid className={classes.footerText}>No assets were nearby during the specified time.</Grid>
      </List>
    </div>
  );
}

const mapStateToProps = ({vehicle, overview}) => {
  return {
    vehicles: vehicle.vehicles,
    distances: overview.distances
  }
}

const mapDispatchToProps = {
  getDistance
}


export default connect(mapStateToProps, mapDispatchToProps)(ProximitySideBar);