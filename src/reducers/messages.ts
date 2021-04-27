import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import { AUTH_TOKEN_KEY } from "../config/constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ACTION_TYPES = {
  //Fuel Purchase Report
  GET_ALL_MESSAGES: "messages/GET_ALL_MESSAGES",
  GET_DETAIL_MESSAGE: "messages/GET_DETAIL_MESSAGE",
  SEND_MESSAGE: "messages/SEND_MESSAGE",
};

const initialState = {
  errorMessage: null,
  loading: false,
  messages: [],
  data: [],
};

export type MessagesState = Readonly<typeof initialState>;

// Reducer
export default (state: MessagesState = initialState, action): MessagesState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_ALL_MESSAGES):
    case REQUEST(ACTION_TYPES.GET_DETAIL_MESSAGE):
      return {
        ...state,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_ALL_MESSAGES):
    case FAILURE(ACTION_TYPES.GET_DETAIL_MESSAGE):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case SUCCESS(ACTION_TYPES.GET_ALL_MESSAGES):
      return {
        ...state,
        messages: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.GET_DETAIL_MESSAGE):
      return {
        ...state,
        data: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.SEND_MESSAGE):
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

//Actions
export const getMessages = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_ALL_MESSAGES,
    payload: axios.post("/api/messages/dashboard", request),
  });
};

//Actions
export const getDetailMessages = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_DETAIL_MESSAGE,
    payload: axios.post("/api/messages/detail", request),
  });
};

export const sendMessage = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SEND_MESSAGE,
    payload: axios.post("/api/messages/detail", request),
  });
};
