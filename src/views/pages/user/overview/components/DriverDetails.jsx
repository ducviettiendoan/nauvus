import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {getDriversData, setOpenDriverDetails} from "reducers/overview";
import {GOOGLE_MAP_API_KEY} from "config/constants";
import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import pinMaker from "../../../../../assets/icons/pinMaker.svg";
import {Link} from "react-router-dom";
import {IRootState} from "../../../../../reducers";
import FuelLevelIcon from "../../../../../components/Icons/FuelLevelIcon";
import ZoomIcon from "../../../../../components/Icons/ZoomIcon";
import OpenInNewTabIcon from "../../../../../components/Icons/OpenInNewTabIcon";

import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js"
import InfoWindowPopup from "./InfoWindowPopup";

const useStyles = makeStyles(styles);

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={ props.center }
      defaultOptions={{
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
      }}

    >
      {props.data.map((maker, index) => {
        if (maker.status === 'connected') {
          return (
            <Marker position={{ lat: maker.latitude, lng: maker.longitude }}
                    icon={{
                      url: pinMaker,
                      anchor: new google.maps.Point(5, 58),
                    }}
                    onClick={(marker) => {
                      console.log(`click on Marker ${marker.latLng.lat()} - ${marker.latLng.lng()}`, marker)
                    }}
            >
                <InfoWindow>
                    <InfoWindowPopup maker={maker}/>
                </InfoWindow>
            </Marker>
          )
        }}
      )
      }
    </GoogleMap>
  ))
);

function DriverDetails(props) {
  const classes = useStyles();
  return (
    <div style={{ position: 'relative'}}>
      <RegularMap
        googleMapURL={ `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}` }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="containerElementMap" />}
        mapElement={<div style={{ height: `100%` }} />}
        isMarkerShown
        data={ props.vehicles }
        center={ {lat: 40.748817, lng: -73.985428} }
      />
    </div>
  );
}

export default connect(
  ({overview,vehicle}: IRootState) => ({
    data: overview.driversData,
    vehicles: vehicle.vehicles,
    openDriverDetails : overview.openDriverDetails
  }),
  {
    getDriversData,
    setOpenDriverDetails
  }
)(DriverDetails);