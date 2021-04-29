import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import { AUTH_TOKEN_KEY } from "../config/constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ACTION_TYPES = {
  //Fuel Purchase Report
  SET_TAB: "alert/SET_TAB",
  GET_INSIDENTS: "alert/GET_INSIDENTS",
  SET_EXTRA_SIDEBAR: "alert/SET_EXTRA_SIDEBAR",
};

const initialState = {
  errorMessage: null,
  loading: false,
  insidents: [],
  extraSidebar: true,
  tab: 1,
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
    case ACTION_TYPES.SET_EXTRA_SIDEBAR:
      return {
        ...state,
        extraSidebar: action.payload,
      };
    case ACTION_TYPES.SET_TAB:
      let extraSidebar = false;
      let tab = action.payload;
      if (tab == 0) extraSidebar = false;
      if (tab == 1) extraSidebar = true;
      return {
        ...state,
        tab,
        extraSidebar,
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

export const setExtraSidebar = (extra) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_EXTRA_SIDEBAR,
    payload: extra,
  });
};

export const setTab = (tab) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_TAB,
    payload: tab,
  });
};
