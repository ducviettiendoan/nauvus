import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';
import {AUTH_TOKEN_KEY} from '../config/constants';
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const ACTION_TYPES = {
  GET_REPORT_DATA: 'setting/device/GET_REPORT_DATA',
  GET_DUTY_STATUS_DATA: 'setting/device/GET_DUTY_STATUS_DATA'
};

const initialState = {
  errorMessage: null,
  loading: false,
  reportData: [],
  dutyStatusData: []
};

export type DriverHOSReportState = Readonly<typeof initialState>;

// Reducer
export default (state: DriverHOSReportState = initialState, action): DriverHOSReportState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_REPORT_DATA):
    case REQUEST(ACTION_TYPES.GET_DUTY_STATUS_DATA):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_REPORT_DATA):
    case FAILURE(ACTION_TYPES.GET_DUTY_STATUS_DATA):
      return {
        ...state,
        loading: false,    //why?
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.GET_REPORT_DATA): {
      return {
        ...state,
        reportData: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_DUTY_STATUS_DATA): {
      return {
        ...state,
        dutyStatusData: action.payload.data
      };
    }
    default:
      return state;
  }
};

// Actions
export const getReportData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_REPORT_DATA,
    payload: axios.post("/api/compliance/HOS/report", request)
  });
};

export const getDutyStatusData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DUTY_STATUS_DATA,
    payload: axios.post("/api/compliance/HOS/duty-status", request)
  });
};
