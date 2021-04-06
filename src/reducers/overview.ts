import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  SET_OPEN_DRAWER: 'overview/SET_OPEN_DRAWER',
  SET_OPEN_DRIVER_DETAILS: 'overview/SET_OPEN_DRIVER_DETAILS',
  SET_OPEN_DRIVER: 'overview/SET_OPEN_DRIVER',
  GET_VEHICLE_DATA: 'overview/GET_VEHICLE_DATA',
  GET_TRAILERS_DATA: 'overview/GET_TRAILERS_DATA',
  GET_DRIVERS_DATA: 'overview/GET_DRIVERS_DATA',
  // activity logs data
  GET_ACTIVITY_LOGS_DATA: 'overview/GET_ACTIVITY_LOGS_DATA',
  // chart data activity logs
  GET_CHART_DATA: "overview/GET_CHART_DATA",
};

const initialState = {
  openDrawer: false,
  openDriver: false,
  openDriverDetails: false,
  vehiclesData: [],
  trailersData: [],
  driversData: [],
  activityLogsData: [],
  chartData: [],
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
    case ACTION_TYPES.SET_OPEN_DRIVER: {
      return {
        ...state,
        openDriver: action.payload
      };
    }
    case ACTION_TYPES.SET_OPEN_DRIVER_DETAILS: {
      return {
        ...state,
        openDriverDetails: action.payload
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
    case ACTION_TYPES.GET_ACTIVITY_LOGS_DATA: {
      return {
        ...state,
        activityLogsData: action.payload
      };
    }
    case ACTION_TYPES.GET_CHART_DATA: {
      return {
        ...state,
        chartData: action.payload
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

const dumpActivityData = () => {
  let data = [];
  for (let i = 0; i < 15; i++) {
    let item = {
      id: i,
      key: i,
      shift: '0:00:00',
      driving: '0:00:00',
      inViolation: '0:00:00',
      from: '-',
      to: '-',
      details: "Missing Driver Certification",
      date: 'Mon, Mar 29',

      carrierName: "Ali Plus Transport",
      carrierAddress: "201 Sangamore Rd",
      carrierId: "Nauvus (82K7)",
      carrierDotNumber: "1542846",

      driverName: "Ali Singh (alisingh)",
      driverLicense: "xxx",
      ruleSet: "NE 80 hour / 8 day",
      vehicle: "Vehicle 101",
      homeName: "Ali Plus Transport",
      homeAddress: "201 Sangamore Rd",
      shippingId: "-",
      trailer: "-",
      distance: "-"
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

const dumpChartData = () => {
  let data = [];
  for (let i = 0; i < 1; i++) {
    let item = {
      time: "12:00:00 AM EDT - Present",
      duration: "9h 6m",
      status: "Disconnected",
      remark: "-",
      vehicle: "Vehicle 101",
      location: "-",
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

export const getActivityLogsData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ACTIVITY_LOGS_DATA,
    payload: dumpActivityData
  })
}

export const getChartData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_CHART_DATA,
    payload: dumpChartData
  })
}



