import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const {InfoBox} = require("react-google-maps/lib/components/addons/InfoBox");
import {GOOGLE_MAP_API_KEY} from "config/constants";

// @material-ui/core components
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import List from "@material-ui/icons/List";
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import pinMaker from 'assets/icons/pinMaker.svg';
import navigatorMaker from 'assets/icons/navigator.svg';

import {setOpenDrawer} from 'reducers/overview';

import {connect} from 'react-redux';
import {loadVehicles} from 'reducers/vehicle';
import {IRootState} from 'reducers';
import InfoWindowPopup from "../components/InfoWindowPopup";


const useStyles = makeStyles(styles);

const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (
 
      <GoogleMap
        defaultZoom={17}
        defaultCenter={props.center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false
        }}
        mapTypeId={ props.mapType }
      >
        {props.data.map((maker, index) => {
            console.log(`maker ${index}`, maker)
            if (maker.status === 'connected') {
              return (
                <Marker
                  position={{lat: maker.latitude, lng: maker.longitude}}
                  icon={{
                    url: props.mapType === 'roadmap' ? pinMaker : navigatorMaker,
                    anchor: new google.maps.Point(5, 58),
                  }}
                  onClick={(marker) => {
                    console.log(`click on Marker ${marker.latLng.lat()} - ${marker.latLng.lng()}`, marker)
                    props.onChangeMapType()
                  }}
                >
                  { props.isPopupShown && <InfoWindow>
                    <InfoWindowPopup maker={maker} />
                  </InfoWindow>
                  }
                </Marker>
              )
            }
          }
        )
        }
      </GoogleMap>
    )
  })
);

export function VehicleDetails(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [mapType, setMapType] = React.useState('roadmap');
  const [isPopupShown, setPopupShown] = React.useState(true);

  React.useEffect(() => {
    // setInterval( fetchVehicles , 10000);
    props.setOpenDrawer(true);
    async function fetchVehicles() {
      await props.loadVehicles();
    }

    fetchVehicles();
  }, [1]);

  const onChangeMapType = () => {
    console.log(`change map type`);
    if (mapType === 'roadmap') {
      setMapType('satellite');
      setPopupShown(false);
    } else {
      setMapType('roadmap');
      setPopupShown(true);
    }
  }

  return (
    <div style={{position: 'relative'}}>
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div className="containerElementMap"/>}
        mapElement={<div style={{height: `100%`}}/>}
        isPopupShown={ isPopupShown }
        data={props.vehicles}
        mapType={ mapType }
        center={{ lat: 40.8426401415982, lng: -73.28993055963367 }}
        onChangeMapType = { onChangeMapType }
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

export default connect(
  ({authentication, vehicle, overview}: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
    openDrawer: overview.openDrawer
  }),
  {
    loadVehicles,
    setOpenDrawer
  }
)(VehicleDetails);
