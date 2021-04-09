import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';

export type SettingFleetState = Readonly<typeof initialState>;

//Actions type
export const ACTION_TYPES = {
  //Fuel-Energy action type
  GET_DRIVER_EFFICIENCY: 'setting/fleet/GET_DRIVER_EFFICIENCY',
  GET_FUEL_COST: 'setting/fleet/GET_FUEL_COST',
  GET_FUEL_CARD: 'setting/fleet/GET_FUEL_CARD',
  GET_VEHICLE_FUEL_TYPES: 'setting/fleet/GET_VEHICLE_FUEL_TYPES',

  //Driver Activity action type
  GET_WORKING_HOURS: 'setting/fleet/GET_WORKING_HOURS',
  GET_MAX_DISTANCES: 'setting/fleet/GET_MAX_DISTANCES',

  //Address & Geofences action type
  GET_VALID_ADDRESS: 'setting/fleet/GET_VALID_ADDRESS',
  GET_INVALID_ADDRESS: 'setting/fleet/GET_INVALID_ADDRESS',

  //Maps action type
  GET_MAPS: 'setting/fleet/GET_MAPS',
};

//Initial State
const initialState = {

  //Fuel Energy State
  driverEfficiencies: [],
  fuelCost: [],
  fuelCards: [],
  vehicleFuelTypes: [],

  //Driver Activity State
  workingHours: [],
  maxDistances: [],

  //Address & Geofences State
  validAddresses: [],
  invalidAddresses: [],

  //Maps
  maps: [],
  loading: false,
  errorMessage: null
};

//Reducer
export default (state: SettingFleetState = initialState, action): SettingFleetState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_MAPS):
    case REQUEST(ACTION_TYPES.GET_INVALID_ADDRESS):
    case REQUEST(ACTION_TYPES.GET_VALID_ADDRESS):
    case REQUEST(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
    case REQUEST(ACTION_TYPES.GET_FUEL_COST):
    case REQUEST(ACTION_TYPES.GET_FUEL_CARD):
    case REQUEST(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
    case REQUEST(ACTION_TYPES.GET_WORKING_HOURS):
    case REQUEST(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.GET_MAPS):
    case FAILURE(ACTION_TYPES.GET_INVALID_ADDRESS):
    case FAILURE(ACTION_TYPES.GET_VALID_ADDRESS):
    case FAILURE(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
    case FAILURE(ACTION_TYPES.GET_FUEL_COST):
    case FAILURE(ACTION_TYPES.GET_FUEL_CARD):
    case FAILURE(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
    case FAILURE(ACTION_TYPES.GET_WORKING_HOURS):
    case FAILURE(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    //Maps Reducer
    case SUCCESS(ACTION_TYPES.GET_MAPS):
      return {
        ...state,
        maps: action.payload.data
      };

    //Address & Geofences Reducer
    case SUCCESS(ACTION_TYPES.GET_INVALID_ADDRESS):
      return {
        ...state,
        invalidAddresses: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_VALID_ADDRESS):
      return {
        ...state,
        validAddresses: action.payload.data
      };

    //Fuel Energy Reducer
    case SUCCESS(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
      return {
        ...state,
        driverEfficiencies: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_FUEL_COST):
      return {
        ...state,
        fuelCost: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_FUEL_CARD):
      return {
        ...state,
        fuelCards: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
      return {
        ...state,
        vehicleFuelTypes: action.payload.data
      };
    //Driver Activity Reducer
    case SUCCESS(ACTION_TYPES.GET_WORKING_HOURS):
      return {
        ...state,
        workingHours: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        maxDistances: action.payload.data
      };
    default:
      return state;
  }
};

//Fuel-Energy actions
export const getDriverEfficiency = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY,
    payload: axios.post("/api/setting/driver-efficiency/search", request)
  });
};

export const getFuelCost = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_COST,
    payload: axios.post(`/api/setting/fuel-cost/search`, request),
  });
};

export const getFuelCard = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_CARD,
    payload: axios.post(`/api/setting/fuel-card/search`, request),
  });
};

export const getVehicleFuelType = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLE_FUEL_TYPES,
    payload: axios.post(`/api/setting/vehicle-fuel-type/search`, request),
  });
};

//Driver activity actions
export const getWorkingHour = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_WORKING_HOURS,
    payload: axios.post(`/api/setting/working-hour/search`, request),
  });
};

export const getMaxDistance = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAX_DISTANCES,
    payload: axios.post(`/api/setting/max-distance/search`, request),
  });
};

//Address & Geofences actions
export const getValidAddress = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VALID_ADDRESS,
    payload: axios.post(`/api/setting/add-geo/valid-add/search`, request),
  });
};

export const getInvalidAddress = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_INVALID_ADDRESS,
    payload: axios.post(`/api/setting/add-geo/invalid-add/search`, request),
  });
};

//Maps actions
export const getSettingMap = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAPS,
    payload: axios.post(`/api/setting/map/search`, request),
  });
};
