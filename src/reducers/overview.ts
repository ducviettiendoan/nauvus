import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  SET_OPEN_DRAWER: 'overview/SET_OPEN_DRAWER',
  GET_VEHICLE_DATA: 'overview/GET_VEHICLE_DATA',
  GET_TRAILERS_DATA: 'overview/GET_TRAILERS_DATA',
  GET_DRIVERS_DATA: 'overview/GET_DRIVERS_DATA',
};

const initialState = {
  openDrawer: false,
  vehiclesData: [],
  trailersData: [],
  driversData: []
};

export type OverviewState = Readonly<typeof initialState>;

// Reducer
export default (state: OverviewState = initialState, action): OverviewState => {
  switch (action.type) {
    case ACTION_TYPES.SET_OPEN_DRAWER: {
      return {
        ...state,
        openDrawer: action.payload
      };
    }
    case ACTION_TYPES.GET_VEHICLE_DATA: {
      return {
        ...state,
        vehiclesData: action.payload
      }
    }
    case ACTION_TYPES.GET_TRAILERS_DATA: {
      return {
        ...state,
        trailersData: action.payload
      }
    }
    case ACTION_TYPES.GET_DRIVERS_DATA: {
      return {
        ...state,
        driversData: action.payload
      };
    }
    default:
      return state;
  }
};

export const setOpenDrawer = (value) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_OPEN_DRAWER,
    payload: value
  });
};

const dumpVehiclesData = () => {
  let data = [];
  for (let i = 0; i < 25; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      name: `Vehicle 101 ${i + 1}`,
      location: {
        location: `Stoney Run Drive, 1.6 mi NW Severn, MD`,
        time: "2 months ago"
      },
      lastTrip: "2 months ago",
      status: 'Off',
      fuel: "21%",
      driver: "Ali Singh",
      license: "2628PR",
      tag: "Tegs"
    };
    data.push(item);
  }
  return data;
}

const dumpTrailersData = () => {
  let data = [];
  for (let i = 0; i < 15; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      name: `Vehicle 101 ${i + 1}`,
      location: {
        location: `Stoney Run Drive, 1.6 mi NW Severn, MD`,
        time: "2 months ago"
      },
      lastTrip: "2 months ago",
      status: 'Off',
      battery: "60%",
      tag: "Tags"
    };
    data.push(item);
  }
  return data;
}

const dumpDriversData = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      name: {
        name: "Ali Singh",
        id_1: "2447",
        id_2: "4046921660",
      },
      drivingStatus: "Driving",
      currentVehicle: "228",
      currentLocation: {
        distance: "8.1 mi SSE",
        location: "Rockford, IL"
      },
      appVersion: "6959",
      operatingSystem: "Android: 10"
    };
    data.push(item);
  }
  return data;
}


export const getVehiclesData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLE_DATA,
    payload: dumpVehiclesData
  });
}

export const getTrailersData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_TRAILERS_DATA,
    payload: dumpTrailersData
  });
}

export const getDriversData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVERS_DATA,
    payload: dumpDriversData
  })
}



