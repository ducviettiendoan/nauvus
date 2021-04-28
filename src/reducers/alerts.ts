import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import { AUTH_TOKEN_KEY } from "../config/constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ACTION_TYPES = {
  //Fuel Purchase Report
  GET_INSIDENTS: "alert/GET_INSIDENTS",
};

const initialState = {
  errorMessage: null,
  loading: false,
  insidents: [],
};

export type AlertsState = Readonly<typeof initialState>;

// Reducer
export default (state: AlertsState = initialState, action): AlertsState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_INSIDENTS):
      return {
        ...state,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_INSIDENTS):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case SUCCESS(ACTION_TYPES.GET_INSIDENTS):
      return {
        ...state,
        insidents: action.payload.data,
      };
    default:
      return state;
  }
};

//Actions
export const getInsidents = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_INSIDENTS,
    payload: axios.post("/api/alerts/insidents", request),
  });
};
