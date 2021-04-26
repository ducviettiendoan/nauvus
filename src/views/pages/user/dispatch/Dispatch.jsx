import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle, InfoWindow
} from "react-google-maps";
import {GOOGLE_MAP_API_KEY} from "config/constants";
// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles';
// @material-ui/icons
import List from "@material-ui/icons/List";
// core components
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-pro-react/views/overviewPageStyle.js";
import location from 'assets/icons/location.svg'
import {connect} from 'react-redux';
import {loadVehicles} from 'reducers/vehicle';
import {setOpenDispatchDrawer} from "reducers/dispatch";
import InfoWindowPopup from "../overview/components/InfoWindowPopup";

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
                    onClick={(marker) => {
                      console.log(`click on Marker ${marker.latLng.lat()} - ${marker.latLng.lng()}`, marker)
                      props.onChangeMapType()
                    }}
                  >
                    {props.isPopupShown && <InfoWindow>
                      <InfoWindowPopup maker={maker}/>
                    </InfoWindow>
                    }
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

export function Dispatch(props) {
  const classes = useStyles();
  const [geo, setGeo] = React.useState({lat: 40.746617, lng: -73.658648});
  const [isPopupShown, setPopupShown] = React.useState(true);
  const [mapType, setMapType] = React.useState('roadmap');

  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }

    fetchVehicles();
  }, [1]);

  const onClickMaker = (maker) => {
    setGeo({lat: maker.latLng.lat(), lng: maker.latLng.lng()});
  }

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
        isPopupShown={isPopupShown}
        data={props.vehicles}
        center={geo}
        onClickMaker={onClickMaker}
        onChangeMapType={onChangeMapType}
      />
      <div className={classes.searchMapContainer} style={{marginTop: "10px"}}>
        <Button
          aria-label="edit"
          justIcon
          round
          className={classes.toogleDrawer}
          onClick={e => {
            props.setOpenDispatchDrawer(!props.openDispatchDrawer)
          }}
        >
          <List/>
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = ({authentication, vehicle, dispatch}) => {
  return {
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
    openDispatchDrawer: dispatch.openDispatchDrawer,
  }
}

const mapDispatchToProps = {
  loadVehicles,
  setOpenDispatchDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(Dispatch);
