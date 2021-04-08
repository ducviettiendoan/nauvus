import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';
import {AUTH_TOKEN_KEY} from '../config/constants';
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const ACTION_TYPES = {
  GET_GATEWAY: 'setting/device/GET_GATEWAY',
  GET_SENSOR: 'setting/device/GET_SENSOR'
};

const initialState = {
  errorMessage: null,
  loading: false,
  gateways: [],
  sensors: []
};

export type SettingDeviceState = Readonly<typeof initialState>;

// Reducer
export default (state: SettingDeviceState = initialState, action): SettingDeviceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_GATEWAY):
    case REQUEST(ACTION_TYPES.GET_SENSOR):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_GATEWAY):
    case FAILURE(ACTION_TYPES.GET_SENSOR):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.GET_GATEWAY): {
      return {
        ...state,
        gateways: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_SENSOR): {
      return {
        ...state,
        sensors: action.payload.data
      };
    }
    default:
      return state;
  }
};

// Actions
export const getGateway = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_GATEWAY,
    payload: axios.post("api/setting/device/gateway/search", request)
  });
};

export const getSensor = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SENSOR,
    payload: axios.post("api/setting/device/sensor/search", request)
  });
};
