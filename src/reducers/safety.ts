import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";

export const ACTION_TYPES = {
  GET_USER_ROLES: "safety/GET_USER_ROLES",
  SET_SHOW_CRASH: "safety/SET_SHOW_CRASH",
  GET_SAFETY_COACHING_DRIVER_QUEUE: "safety/GET_SAFETY_COACHING_DRIVER_QUEUE",
  GET_SAFETY_DASH_CAM: "safety/GET_SAFETY_DASH_CAM",
  GET_SAFETY_CAMERAS: "safety/GET_SAFETY_CAMERAS",
};

const initialState = {
  coachingDriverQueue: [],
  dashCam: [],
  cameras: [],
  errorMessage: null,
  loading: false,
  showCrash: true,
};

export type SafetyState = Readonly<typeof initialState>;

// Reducer
export default (state: SafetyState = initialState, action): SafetyState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_USER_ROLES):
    case REQUEST(ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE):
    case REQUEST(ACTION_TYPES.GET_SAFETY_DASH_CAM):
    case REQUEST(ACTION_TYPES.GET_SAFETY_CAMERAS):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_USER_ROLES):
    case FAILURE(ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE):
    case FAILURE(ACTION_TYPES.GET_SAFETY_DASH_CAM):
    case FAILURE(ACTION_TYPES.GET_SAFETY_CAMERAS):
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

    case SUCCESS(ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE): {
      return {
        ...state,
        coachingDriverQueue: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_SAFETY_DASH_CAM): {
      return {
        ...state,
        dashCam: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_SAFETY_CAMERAS): {
      return {
        ...state,
        cameras: action.payload.data,
      };
    }

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

export const getCoachingDriverQueueData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE,
    payload: axios.post("api/safety/coaching-driver-queue", request),
  });
};

export const getDashCamData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SAFETY_DASH_CAM,
    payload: axios.post("api/safety/dash-cam", request),
  });
};

export const getCamerasData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SAFETY_CAMERAS,
    payload: axios.post("api/safety/cameras", request),
  });
};

