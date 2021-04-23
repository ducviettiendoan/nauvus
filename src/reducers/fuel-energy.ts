import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';
import {AUTH_TOKEN_KEY} from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ACTION_TYPES = {
    //Fuel Purchase Report
    GET_PURCHASE_REPORT: 'fuel-energy/GET_PURCHASE_REPORT',
    GET_DRIVERS: 'fuel-energy/dashboard/GET_DRIVERS',
    GET_VEHICLES: 'fuel-energy/dashboard/GET_VEHICLES',
    GET_FUEL_PURCHASE: "fuel-enerygy/fuel-purchase/GET_FUEL_PURCHASE",
    GET_DRIVER_EFFICIENCY_DRIVERS: "fuel-energy/driver-efficiency/GET_DRIVER_EFFICIENCY_DRIVERS",
    GET_DRIVER_EFFICIENCY_VEHICLES: "fuel-energy/driver-efficiency/GET_DRIVER_EFFICIENCY_VEHICLES",
    GET_DRIVER_EFFICIENCY_REPORT: "fuel-energy/driver-efficiency/GET_DRIVER_EFFICIENCY_REPORT"

    
  };

const initialState = {
    errorMessage: null,
    loading: false,
    purchaseReports: [],
    drivers: [],
    vehicles: [],
    fuelPurchase: [],
    driverEfficiencyDrivers: [],
    driverEfficiencyVehicles: [],
    driverEfficiencyReport: []

}

export type FuelEnergyState = Readonly<typeof initialState>;

// Reducer
export default (state: FuelEnergyState = initialState, action): FuelEnergyState => {
    switch (action.type) {

      case REQUEST(ACTION_TYPES.GET_DRIVERS):
      case REQUEST(ACTION_TYPES.GET_VEHICLES):
      case REQUEST(ACTION_TYPES.GET_DRIVER_EFFICIENCY_DRIVERS):
      case REQUEST(ACTION_TYPES.GET_FUEL_PURCHASE):
      case REQUEST(ACTION_TYPES.GET_DRIVER_EFFICIENCY_VEHICLES):
      case REQUEST(ACTION_TYPES.GET_DRIVER_EFFICIENCY_REPORT):
        return {
          ...state,
          loading: true,

        }

      case FAILURE(ACTION_TYPES.GET_DRIVERS):
      case FAILURE(ACTION_TYPES.GET_VEHICLES):
      case FAILURE(ACTION_TYPES.GET_FUEL_PURCHASE):
      case FAILURE(ACTION_TYPES.GET_DRIVER_EFFICIENCY_DRIVERS):
      case FAILURE(ACTION_TYPES.GET_DRIVER_EFFICIENCY_VEHICLES):
      case FAILURE(ACTION_TYPES.GET_DRIVER_EFFICIENCY_REPORT):
        return {
          ...state,
          loading: false,
          errorMessage: action.payload,
        }

      case SUCCESS(ACTION_TYPES.GET_DRIVERS):
        return {
          ...state,
          drivers: action.payload.data,

        }

      case SUCCESS(ACTION_TYPES.GET_VEHICLES):
        return {
          ...state,
          vehicles: action.payload.data,

        }

      case SUCCESS(ACTION_TYPES.GET_FUEL_PURCHASE):
        return {
          ...state,
          fuelPurchase: action.payload.data,
        }

      case SUCCESS(ACTION_TYPES.GET_DRIVER_EFFICIENCY_DRIVERS):
        return {
          ...state,
          driverEfficiencyDrivers: action.payload.data,

        }
      case SUCCESS(ACTION_TYPES.GET_DRIVER_EFFICIENCY_VEHICLES):
        return {
          ...state,
          driverEfficiencyVehicles: action.payload.data,

        }

      case SUCCESS(ACTION_TYPES.GET_DRIVER_EFFICIENCY_REPORT):
        return {
          ...state,
          driverEfficiencyReport: action.payload.data,
  
        }

      default:
        return state;
    }
  };

//Actions
export const getDrivers = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVERS,
    payload: axios.post("api/fuel-energy/dashboard/drivers", request)
  });
};

export const getVehicles = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLES,
    payload: axios.post("api/fuel-energy/dashboard/vehicles", request)
  });
};

export const getFuelPurchase = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_PURCHASE,
    payload: axios.post("api/fuel-energy/fuel-purchase", request)
  });
};

export const getDriverEfficiencyDrivers = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY_DRIVERS,
    payload: axios.post("api/fuel-energy/driver-efficiency/drivers", request)
  });
};

export const getDriverEfficiencyVehicles = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY_VEHICLES,
    payload: axios.post("api/fuel-energy/driver-efficiency/vehicles", request)
  });
}

export const getDriverEfficiencyReport = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY_REPORT,
    payload: axios.post("api/fuel-energy/driver-efficiency/report", request)
  });
}
