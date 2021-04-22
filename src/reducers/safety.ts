import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";

export const ACTION_TYPES = {
  SET_SHOW_BACK: "safety/SET_SHOW_BACK", 
  GET_SAFETY_COACHING_DRIVER_QUEUE: "safety/GET_SAFETY_COACHING_DRIVER_QUEUE",
  GET_SAFETY_DASH_CAM: "safety/GET_SAFETY_DASH_CAM",
  GET_SAFETY_CAMERAS: "safety/GET_SAFETY_CAMERAS",
  GET_UNASSIGNED_ASSIGNMENT: "safety/GET_UNASSIGNED_ASSIGNMENT",
  GET_UNASSIGNED_DETAILS: "safety/GET_UNASSIGNED_DETAILS",
  GET_SAFETY_REPORT_TABLE: "safety/GET_SAFETY_REPORT_TABLE",
};

const initialState = {
  coachingDriverQueue: [],
  dashCam: [],
  cameras: [],
  unassignedAssignment: [],
  unassignedDetails: [],
  reportDetails: [],
  errorMessage: null,
  loading: false,
  showCrash: true,
  showBack: false,
};

export type SafetyState = Readonly<typeof initialState>;

// Reducer
export default (state: SafetyState = initialState, action): SafetyState => {
  switch (action.type) { 
    case REQUEST(ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE):
    case REQUEST(ACTION_TYPES.GET_SAFETY_DASH_CAM):
    case REQUEST(ACTION_TYPES.GET_SAFETY_CAMERAS):
    case REQUEST(ACTION_TYPES.GET_UNASSIGNED_ASSIGNMENT):
    case REQUEST(ACTION_TYPES.GET_UNASSIGNED_DETAILS):
    case REQUEST(ACTION_TYPES.GET_SAFETY_REPORT_TABLE):
      return {
        ...state,
        loading: true,
      }; 
    case FAILURE(ACTION_TYPES.GET_SAFETY_COACHING_DRIVER_QUEUE):
    case FAILURE(ACTION_TYPES.GET_SAFETY_DASH_CAM):
    case FAILURE(ACTION_TYPES.GET_SAFETY_CAMERAS):
    case FAILURE(ACTION_TYPES.GET_UNASSIGNED_ASSIGNMENT):
    case FAILURE(ACTION_TYPES.GET_UNASSIGNED_DETAILS):
    case FAILURE(ACTION_TYPES.GET_SAFETY_REPORT_TABLE):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case ACTION_TYPES.SET_SHOW_BACK:
      return {
        ...state,
        showBack: action.payload,
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
      }
    }
    case SUCCESS(ACTION_TYPES.GET_UNASSIGNED_ASSIGNMENT): {
      return {
        ...state,
        unassignedAssignment: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_UNASSIGNED_DETAILS): {
      return {
        ...state,
        unassignedDetails: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_SAFETY_REPORT_TABLE): {
      return {
        ...state,
        reportDetails: action.payload.data
      };
    }

    default:
      return state;
  }
};

export const setShowButtonBack = (action) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_SHOW_BACK,
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

export const getUnassignedData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_ASSIGNMENT,
    payload: axios.post("api/safety/assignment/unassigned", request),
  });
};

export const getUnassignedDetailsData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_DETAILS,
    payload: axios.post("api/safety/assignment/unassigned/details", request),
  });
};

export const getSafetyReportDetails = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_SAFETY_REPORT_TABLE,
    payload: axios.post("api/safety/safety-report-table", request),
  });
};