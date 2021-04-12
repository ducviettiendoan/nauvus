import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} from "react-google-maps";
import {GOOGLE_MAP_API_KEY} from "config/constants";
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
// @material-ui/icons
import List from "@material-ui/icons/List";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import {setOpenDrawer} from 'reducers/overview';
import location from 'assets/icons/location.svg'
import {connect} from 'react-redux';
import {loadVehicles} from 'reducers/vehicle';

const useStyles = makeStyles(styles);

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{visibility: "off"}],
  }
];

const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (

      <GoogleMap
        defaultZoom={17}
        center={props.center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false,
          styles: mapStyles,
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
                    onClick={(maker) => {
                      props.onClickMaker(maker);
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
  const [geo, setGeo] = React.useState({lat: 40.746617, lng: -73.658648});
  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }

    fetchVehicles();
  }, [1]);

  const onClickMaker = (maker) => {
    setGeo({lat: maker.latLng.lat(), lng: maker.latLng.lng()});
  }

  return (
    <div style={{position: 'relative'}}>
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{height: `100%`}}/>}
        containerElement={<div className="containerElementMap"/>}
        mapElement={<div style={{height: `100%`}}/>}
        isMarkerShown
        data={props.vehicles}
        center={geo}
        radius={props.distance}
        onClickMaker={onClickMaker}
      />
      <div className={classes.searchMapContainer} style={{marginTop: "10px"}}>
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
