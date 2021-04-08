import React, {useEffect} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow
} from "react-google-maps";

const {InfoBox} = require("react-google-maps/lib/components/addons/InfoBox");
import {GOOGLE_MAP_API_KEY} from "config/constants";

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import List from "@material-ui/icons/List";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import {setOpenDrawer} from 'reducers/overview';
import location from 'assets/icons/location.svg'

import {connect} from 'react-redux';
import {loadVehicles} from 'reducers/vehicle';


const useStyles = makeStyles(styles);


const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (

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
                <>
                  <Marker
                    position={{lat: maker.latitude, lng: maker.longitude}}
                    icon={{
                      url: location,
                    }}
                    onClick={(marker) => {
                      console.log(`click on Marker ${marker.latLng.lat()}, ${marker.latLng.lng()}`, marker)
                    }}
                  >
                    <Circle
                      radius={props.radius}
                      options={{
                        strokeColor: "#E5E5E5",
                        strokeWeight: 0,
                        fillColor: "#E5E5E5 solid",
                      }}
                      defaultCenter={{
                        lat: maker.latitude,
                        lng: maker.longitude
                      }}
                    />
                  </Marker>
                </>
              )
            }
          }
        )
        }
      </GoogleMap>
    )
  })
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
    <div style={{position: 'relative'}}>
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div className="containerElementMap"/>}
        mapElement={<div style={{height: `100%`}}/>}
        isMarkerShown
        data={props.vehicles}
        center={{lat: 40.748817, lng: -73.985428}}
        radius={props.distance}
      />
      <div className={classes.searchMapContainer}>
        <Button
          aria-label="edit"
          justIcon
          round
          className={classes.toogleDrawer}
          onClick={e => {
            props.setOpenDrawer(!props.openDrawer)
          }}
        >
          <List/>
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
                <Search className={classes.inputAdornmentIcon}/>
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

const mapStateToProps = ({authentication, vehicle, overview}) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
    openDrawer: overview.openDrawer,
    distance: overview.distance
  }
}

const mapDispatchToProps = {
  loadVehicles,
  setOpenDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Proximity);
