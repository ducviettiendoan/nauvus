import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  SET_OPEN_DRAWER: 'overview/SET_OPEN_DRAWER',
  GET_DRIVERS_DATA: 'overview/GET_DRIVERS_DATA',
};

const initialState = {
  openDrawer: false,
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

export const setOpenDrawer = (value) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_OPEN_DRAWER,
    payload: value
  });
};

export const getDriversData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVERS_DATA,
    payload: dumpDriversData
  })
}

