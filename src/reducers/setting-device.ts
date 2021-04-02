import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';
import {AUTH_TOKEN_KEY} from '../config/constants';
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export const ACTION_TYPES = {
  GET_GATEWAY: 'setting/device/GET_GATEWAY',
  GET_SENSOR: 'setting/device/GET_SENSOR'
};

const initialState = {
  gateways: [],
  sensors: []
};

export type SettingDeviceState = Readonly<typeof initialState>;

// Reducer
export default (state: SettingDeviceState = initialState, action): SettingDeviceState => {
  switch (action.type) {
    case ACTION_TYPES.GET_GATEWAY: {
      return {
        ...state,
        gateways: action.payload
      };
    }
    case ACTION_TYPES.GET_SENSOR: {
      return {
        ...state,
        sensors: action.payload
      };
    }
    default:
      return state;
  }
};

//Device Data
const gatewaysData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      gatewaySerial: 'GR9X-6AN-3N5',
      gateway: 'VG34',
      name: 'Vehicle  101',
      dataUsed: 'Data Used (This Month)',
      connectivity: "Active",
      battery: 'Battery',
      powerState: 'Power State',
    };
    data.push(item);
  }
  return data;
}

const sensorsData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'Trailer 109 - Right Door',
      product: 'EM22',
      sensorID: 'WN5WN-KPE-M28',
      signal: 'Connected',
      pairedAsset: "CargoMM23",
      position: 'Middle',
    };
    data.push(item);
  }
  return data;
}

// Actions
export const getGateway = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_GATEWAY,
    payload: gatewaysData
  });
};

export const getSensor = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SENSOR,
    payload: sensorsData
  });
};
