import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';
import {AUTH_TOKEN_KEY} from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ACTION_TYPES = {
    //Fuel Purchase Report
    GET_PURCHASE_REPORT: 'fuel-energy/GET_PURCHASE_REPORT',
    
  };

const initialState = {
    purchaseReports: [],
}

export type FuelEnergyState = Readonly<typeof initialState>;

// Reducer
export default (state: FuelEnergyState = initialState, action): FuelEnergyState => {
    switch (action.type) {
      case ACTION_TYPES.GET_PURCHASE_REPORT: {
        return {
          ...state,
          purchaseReports: action.payload
        };
      }
      default:
        return state;
    }
  };

//Device Data
const purchaseReportsData = () => {
    let data = [];
    for (let i = 0; i < 7; i++) {
      let item = {
        id: i + 1,
        vehicle: "Vehicle 101", 
        efficiency: "39.1 MPG", 
        fuelUsed: "2.0 gal", 
        energyUsed: "0.0 kWh", 
        distance: "78.1 mi", 
        drivingElectric: "0.0", 
        estCarbonEmissions: "39.2 lb", 
        estCost: "C$10.76", 
        totalEngineRunTime: "3h 20m", 
        idleTime: "10s (0.1%)" 
      };
      data.push(item);
    }
    return data;
  }

// Actions
export const getPurchaseReport = () => async dispatch => {
    dispatch({
      type: ACTION_TYPES.GET_PURCHASE_REPORT,
      payload: purchaseReportsData
    });
  };