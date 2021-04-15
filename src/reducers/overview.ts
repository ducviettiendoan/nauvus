import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  SET_OPEN_DRAWER: 'overview/SET_OPEN_DRAWER',
  SET_OPEN_DIAGNOSTICS: "overview/SET_OPEN_DIAGNOSTICS",
  SET_ANCHOR_EL: "overview/SET_ANCHOR_EL",
  SET_OPEN_DRIVER_DETAILS: 'overview/SET_OPEN_DRIVER_DETAILS',
  SET_OPEN_DRIVER: 'overview/SET_OPEN_DRIVER',
  GET_VEHICLE_DATA: 'overview/GET_VEHICLE_DATA',
  GET_TRAILERS_DATA: 'overview/GET_TRAILERS_DATA',
  GET_DRIVERS_DATA: 'overview/GET_DRIVERS_DATA',
  // activity logs data
  GET_ACTIVITY_LOGS_DATA: 'overview/GET_ACTIVITY_LOGS_DATA',
  // chart data activity logs
  GET_CHART_DATA: "overview/GET_CHART_DATA",

  GET_DIAGNOSTIC_DATA: "overview/GET_DIAGNOSTIC_DATA",

  SELECT_DISTANCE: "overview/SELECT_DISTANCE"
};

const initialState = {
  openDrawer: true,
  // popper diagnostics
  openDiagnostics: false,
  anchorEl: false,
  // 
  openDriver: false,
  openDriverDetails: false,
  distance: 100,
  vehiclesData: [],
  trailersData: [],
  driversData: [],
  activityLogsData: [],
  chartData: [],
  diagnosticData: [],
  errorMessage: null,
  loading: false,
};

export type OverviewState = Readonly<typeof initialState>;

// Reducer
export default (state: OverviewState = initialState, action): OverviewState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_VEHICLE_DATA):
    case REQUEST(ACTION_TYPES.GET_TRAILERS_DATA):
    case REQUEST(ACTION_TYPES.GET_DRIVERS_DATA):
    case REQUEST(ACTION_TYPES.GET_ACTIVITY_LOGS_DATA):
    case REQUEST(ACTION_TYPES.GET_DIAGNOSTIC_DATA):
      return {
        ...state,
        loading: true
      }
    case FAILURE(ACTION_TYPES.GET_VEHICLE_DATA):
    case FAILURE(ACTION_TYPES.GET_TRAILERS_DATA):
    case FAILURE(ACTION_TYPES.GET_DRIVERS_DATA):
    case FAILURE(ACTION_TYPES.GET_ACTIVITY_LOGS_DATA):
    case FAILURE(ACTION_TYPES.GET_DIAGNOSTIC_DATA):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }
    case SUCCESS(ACTION_TYPES.GET_VEHICLE_DATA):
      return {
        ...state,
        vehiclesData: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_TRAILERS_DATA):
      return {
        ...state,
        trailersData: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_DRIVERS_DATA):
      return {
        ...state,
        driversData: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_ACTIVITY_LOGS_DATA):
      return {
        ...state,
        activityLogsData: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_DIAGNOSTIC_DATA):
      return {
        ...state,
        diagnosticData: action.payload.data
      };


    case ACTION_TYPES.SET_OPEN_DRAWER: {
      return {
        ...state,
        openDrawer: action.payload
      };
    }
    case ACTION_TYPES.SET_OPEN_DIAGNOSTICS: {
      return {
        ...state,
        openDiagnostics: action.payload
      };
    }
    case ACTION_TYPES.SET_ANCHOR_EL: {
      return {
        ...state,
        anchorEl: action.payload
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
    case ACTION_TYPES.GET_CHART_DATA: {
      return {
        ...state,
        chartData: action.payload
      };
    }
    case ACTION_TYPES.SELECT_DISTANCE: {
      return {
        ...state,
        distance: action.payload
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

export const setOpenDiagnostics = (value) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_OPEN_DIAGNOSTICS,
    payload: value
  });
};

export const setAnchorEl = (value) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_ANCHOR_EL,
    payload: value
  });
};

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

export const getVehiclesData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLE_DATA,
    payload: axios.post(`/api/overview/assets/vehicles/`, request),
  });
};

export const getTrailersData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_TRAILERS_DATA,
    payload: axios.post(`/api/overview/assets/trailers/`, request),
  });
};

export const getDriversData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVERS_DATA,
    payload: axios.post(`/api/overview/drivers/`, request),
  });
};

export const getActivityLogsData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ACTIVITY_LOGS_DATA,
    payload: axios.post(`/api/overview/logs/`, request),
  })
}

export const getDiagnosticData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DIAGNOSTIC_DATA,
    payload: axios.post(`/api/overview/diagnostic/`, request),
  })
}

export const getChartData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_CHART_DATA,
    payload: dumpChartData
  })
}

export const selectDistance = (distance) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.SELECT_DISTANCE,
    payload: distance
  })
}

