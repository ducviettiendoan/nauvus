import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  SET_OPEN_DRAWER: 'overview/SET_OPEN_DRAWER'
};

const initialState = {
  openDrawer: false
};

export type OverviewState = Readonly<typeof initialState>;

// Reducer
export default (state: OverviewState = initialState, action): OverviewState => {
  switch (action.type) {
    case ACTION_TYPES.SET_OPEN_DRAWER: {
      return {
        openDrawer: action.payload
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


