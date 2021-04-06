import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
import { GOOGLE_MAP_API_KEY } from "config/constants";

// @material-ui/core components
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import List from "@material-ui/icons/List";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import pinMaker from 'assets/icons/pinMaker.svg';
import { Link } from "react-router-dom";
import { setOpenProximity } from 'reducers/overview';
import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';


const useStyles = makeStyles(styles);

const RegularMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.center}
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
                <div className="infowindow">
                  <div className="path">{maker.formatted_address}</div>
                  <div className="device-name mb-2">{maker.serialnumber}</div>
                  <div><Link to={'/user/overview/assets'} className="assets">Assets</Link></div>
                </div>
              </InfoWindow>
            </Marker>
          )
        }
      }
      )
      }
    </GoogleMap>
  ))
);

export function Proximity(props) {
  const classes = useStyles();
  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }
    fetchVehicles();
  }, [1]);

  return (
    <div style={{ position: 'relative' }}>
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div className="containerElementMap" />}
        mapElement={<div style={{ height: `100%` }} />}
        isMarkerShown
        data={props.vehicles}
        center={{ lat: 40.748817, lng: -73.985428 }}
      />
      <div className={classes.searchMapContainer}>
        <Button
          aria-label="edit"
          justIcon
          round
          className={classes.toogleDrawer}
          onClick={e => { props.setOpenProximity(!props.openProximity) }}
        >
          <List />
        </Button>
        <CustomInput
          formControlProps={{
            className: classes.btnSearchOnMap
          }}
          inputProps={{
            id: "btn-search-on-map",
            placeholder: "Search",
            startAdornment: (
              <InputAdornment position="start">
                <Search className={classes.inputAdornmentIcon} />
              </InputAdornment>
            ),
            onChange: event => {
              setUsername(event.target.value);
            },
          }}
        />
      </div>
    </div>
  );
}

export default connect(
  ({ authentication, vehicle, overview }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
    openProximity: overview.openProximity
  }),
  {
    loadVehicles,
    setOpenProximity
  }
)(Proximity);