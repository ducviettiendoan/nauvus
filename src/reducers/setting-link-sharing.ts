import axios from "axios";
import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import dispatch from "./dispatch";

export type SettingLinkSharingState = Readonly<typeof initialState>;

//Action Type
export const ACTION_TYPES = {
  //Alert Contact action type
  GET_ALERT_CONTACT: 'setting/link-sharing/GET_ALERT_CONTACT',
  ADD_ALERT_CONTACT: 'setting/link-sharing/ADD_ALERT_CONTACT',
  DELETE_ALERT_CONTACT: 'setting/link-sharing/DELETE_ALERT_CONTACT',
  UPDATE_ALERT_CONTACT: 'setting/link-sharing/UPDATE_ALERT_CONTACT',
  //Schedule Report action type
  GET_SCHEDULE_REPORT: 'setting/link-sharing/GET_SCHEDULE_REPORT',

  //Live Sharing action type
  GET_BY_ASSET: 'setting/link-sharing/GET_BY_ASSET',
  GET_BY_LOCATION: 'setting/link-sharing/GET_BY_LOCATION',
  GET_BY_ROUTE: 'setting/link-sharing/GET_BY_ROUTE',
}

//Initial State
const initialState = {
  errorMessage: null,
  loading: false,
  //Alert Contact state
  alertContacts: {
    data: [],
    page: 0,
    pageSize: 0,
    total: 0
  },
  
  //Schedule Report state
  scheduleReports: [],

  //Live Sharing state
  byAssets: [],
  byLocations: [],
  byRoutes: []
}

//Reducer
export default (state: SettingLinkSharingState = initialState, action): SettingLinkSharingState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_ALERT_CONTACT):
    case REQUEST(ACTION_TYPES.ADD_ALERT_CONTACT):
    case REQUEST(ACTION_TYPES.DELETE_ALERT_CONTACT):
    case REQUEST(ACTION_TYPES.UPDATE_ALERT_CONTACT):
    case REQUEST(ACTION_TYPES.GET_SCHEDULE_REPORT):
    case REQUEST(ACTION_TYPES.GET_BY_ASSET):
    case REQUEST(ACTION_TYPES.GET_BY_LOCATION):
    case REQUEST(ACTION_TYPES.GET_BY_ROUTE):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_ALERT_CONTACT):
    case FAILURE(ACTION_TYPES.ADD_ALERT_CONTACT):
    case FAILURE(ACTION_TYPES.DELETE_ALERT_CONTACT):
    case FAILURE(ACTION_TYPES.UPDATE_ALERT_CONTACT):
    case FAILURE(ACTION_TYPES.GET_SCHEDULE_REPORT):
    case FAILURE(ACTION_TYPES.GET_BY_ASSET):
    case FAILURE(ACTION_TYPES.GET_BY_LOCATION):
    case FAILURE(ACTION_TYPES.GET_BY_ROUTE):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    //Alert Contact Reducer
    case SUCCESS(ACTION_TYPES.GET_ALERT_CONTACT): {
      return {
        ...state,
        alertContacts: {
          data: action.payload.data.data,
          page: action.payload.data.page.page,
          pageSize: action.payload.data.page.per_page,
          total: action.payload.data.data.length
        }
      };
    }

    case SUCCESS(ACTION_TYPES.ADD_ALERT_CONTACT): {
      console.log(action.payload)
    }


    //Schedule Report Reducer
    case SUCCESS(ACTION_TYPES.GET_SCHEDULE_REPORT): {
      return {
        ...state,
        scheduleReports: action.payload.data
      };
    }

    //Live Sharing Reducer
    case SUCCESS(ACTION_TYPES.GET_BY_ASSET): {
      return {
        ...state,
        byAssets: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_BY_LOCATION): {
      return {
        ...state,
        byLocations: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_BY_ROUTE): {
      return {
        ...state,
        byRoutes: action.payload.data
      };
    }
    default:
      return state;
  }
}

//Action
//Alert Contact Action
export const getAlertContact = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ALERT_CONTACT,
    payload: axios.get(`/api/alert-contacts`, request),
  });
};

export const addAlertContact = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_ALERT_CONTACT,
    payload: axios.post(`/api/alert-contacts`, request)
  })
}

export const deleteAlertContact = (params) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_ALERT_CONTACT,
    payload: axios.delete(`/api/alert-contacts?id=${params}`)
  })
}

export const updateAlertContact = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.ADD_ALERT_CONTACT,
    payload: axios.put(`/api/alert-contacts`, request)
  })
}

//Schedule Report Action
export const getScheduleReport = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SCHEDULE_REPORT,
    payload: axios.post(`/api/setting/link-sharing/scheduled-reports`, request)
  });
};

//Live Sharing Action
export const getByAsset = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_ASSET,
    payload: axios.post(`/api/setting/link-sharing/by-asset`, request)
  });
};

export const getByLocation = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_LOCATION,
    payload: axios.post(`/api/setting/link-sharing/by-location`, request)
  });
};

export const getByRoute = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_ROUTE,
    payload: axios.post(`/api/setting/link-sharing/by-route`, request)
  });
};
