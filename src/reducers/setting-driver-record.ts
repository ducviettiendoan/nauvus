import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ACTION_TYPES = {
  GET_RECORD_DATA: 'setting/driver-record/GET_RECORD_DATA',
};

const initialState = {
  errorMessage: null,
  loading: false,
  driverRecord: [],
};

export type DriverRecordState = Readonly<typeof initialState>;

// Reducer
export default (state: DriverRecordState = initialState, action): DriverRecordState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_RECORD_DATA):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_RECORD_DATA):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.GET_RECORD_DATA): {
      return {
        ...state,
        driverRecord: action.payload.data
      };
    }
    default:
      return state;
  }
};

// Actions
export const getRecordData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_RECORD_DATA,
    payload: axios.post("/api/setting/driver-record/gateway", request)
  });
};