import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const ACTION_TYPES = {
  //Fuel Purchase Report
  GET_ALL_MESSAGES: 'fuel-energy/dashboard/GET_ALL_MESSAGES',
};

const initialState = {
  errorMessage: null,
  loading: false,
  messages: [],
}

export type MessagesState = Readonly<typeof initialState>;

// Reducer
export default (state: MessagesState = initialState, action): MessagesState => {
  switch (action.type) {

    case REQUEST(ACTION_TYPES.GET_ALL_MESSAGES):
      return {
        ...state,
        loading: true,
      }

    case FAILURE(ACTION_TYPES.GET_ALL_MESSAGES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }

    case SUCCESS(ACTION_TYPES.GET_ALL_MESSAGES):
      return {
        ...state,
        messages: action.payload.data,
      }

    default:
      return state;
  }
};

//Actions
export const getMessages = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ALL_MESSAGES,
    payload: axios.post("/api/messages/dashboard", request)
  });
};

