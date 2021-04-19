import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";

export const ACTION_TYPES = {
  GET_USER_ROLES: "safety/GET_USER_ROLES",
  SET_SHOW_CRASH: "safety/SET_SHOW_CRASH",
};

const initialState = {
  errorMessage: null,
  loading: false,
  showCrash: true,
};

export type SafetyState = Readonly<typeof initialState>;

// Reducer
export default (state: SafetyState = initialState, action): SafetyState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_USER_ROLES):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_USER_ROLES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case ACTION_TYPES.SET_SHOW_CRASH:
      return {
        ...state,
        showCrash: action.payload,
      };
    default:
      return state;
  }
};

export const getUserRoles = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_USER_ROLES,
    payload: axios.post(`/api/setting/org/user-roles/search`, request),
  });
};

export const setShowCrash = (action) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_SHOW_CRASH,
    payload: action,
  });
};
