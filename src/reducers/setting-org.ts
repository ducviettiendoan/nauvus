import axios from "axios";

import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import { AUTH_TOKEN_KEY } from "../config/constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ACTION_TYPES = {
  // User & Roles action type
  GET_USER_ROLES: "setting/org/GET_USER_ROLES",
  GET_ROLES: "setting/org/GET_ROLES",
  GET_PENDING_INVITATION: "setting/org/GET_PENDING_INVITATION",

  // Drivers action type
  GET_ACTIVE_DRIVER: "setting/org/GET_ACTIVE_DRIVER",
  GET_DEACTIVATED_DRIVER: "setting/org/GET_DEACTIVATED_DRIVER",

  // Tags action type
  GET_TAGS: "setting/org/GET_TAGS",

  //Activity Logs action type
  GET_ACTIVITY_LOGS: "setting/org/GET_ACTIVITY_LOGS",

  //Invoice action type
  GET_INVOICE: "setting/org/GET_INVOICE",
  GET_INVOICE_SUMMARY: "setting/org/GET_INVOICE_SUMMARY",
};

const initialState = {
  errorMessage: null,
  loading: false,
  tags: [],
  roles: [],
  invoices: [],
  userRoles: [],
  activityLogs: [],
  activeDrivers: [],
  invoicesSummary: [],
  pendingInvitations: [],
  deactivatedDrivers: [],
};

export type SettingOrgState = Readonly<typeof initialState>;

// Reducer
export default (
  state: SettingOrgState = initialState,
  action
): SettingOrgState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_USER_ROLES):
    case REQUEST(ACTION_TYPES.GET_ROLES):
    case REQUEST(ACTION_TYPES.GET_PENDING_INVITATION):
    case REQUEST(ACTION_TYPES.GET_ACTIVE_DRIVER):
    case REQUEST(ACTION_TYPES.GET_DEACTIVATED_DRIVER):
    case REQUEST(ACTION_TYPES.GET_TAGS):
    case REQUEST(ACTION_TYPES.GET_ACTIVITY_LOGS):
    case REQUEST(ACTION_TYPES.GET_INVOICE):
    case REQUEST(ACTION_TYPES.GET_INVOICE_SUMMARY):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_USER_ROLES):
    case FAILURE(ACTION_TYPES.GET_ROLES):
    case FAILURE(ACTION_TYPES.GET_PENDING_INVITATION):
    case FAILURE(ACTION_TYPES.GET_ACTIVE_DRIVER):
    case FAILURE(ACTION_TYPES.GET_DEACTIVATED_DRIVER):
    case FAILURE(ACTION_TYPES.GET_TAGS):
    case FAILURE(ACTION_TYPES.GET_ACTIVITY_LOGS):
    case FAILURE(ACTION_TYPES.GET_INVOICE):
    case FAILURE(ACTION_TYPES.GET_INVOICE_SUMMARY):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    // Users & Roles Reducer
    case SUCCESS(ACTION_TYPES.GET_USER_ROLES): {
      return {
        ...state,
        userRoles: action.payload.data,
      };
    }
    case ACTION_TYPES.GET_ROLES: {
      return {
        ...state,
        roles: action.payload,
      };
    }
    case ACTION_TYPES.GET_PENDING_INVITATION: {
      return {
        ...state,
        pendingInvitations: action.payload,
      };
    }

    // Driver Reducer
    case SUCCESS(ACTION_TYPES.GET_ACTIVE_DRIVER): {
      return {
        ...state,
        activeDrivers: action.payload.data,
      };
    }
    case ACTION_TYPES.GET_DEACTIVATED_DRIVER: {
      return {
        ...state,
        deactivatedDrivers: action.payload,
      };
    }

    // Tag Reducer
    case ACTION_TYPES.GET_TAGS: {
      return {
        ...state,
        tags: action.payload,
      };
    }

    // Activity Logs Reducer
    case SUCCESS(ACTION_TYPES.GET_ACTIVITY_LOGS): {
      return {
        ...state,
        activityLogs: action.payload.data,
      };
    }

    //Invoice Reducer
    case SUCCESS(ACTION_TYPES.GET_INVOICE): {
      return {
        ...state,
        invoices: action.payload.data,
      };
    }
    case SUCCESS(ACTION_TYPES.GET_INVOICE_SUMMARY): {
      return {
        ...state,
        invoicesSummary: action.payload.data,
      };
    }
    default:
      return state;
  }
};

// Users & Roles Data


const userRolesData = () => {
  let data = [];
  for (let i = 0; i < 64; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      roles: `Standard Admin ${i + 1}`,
      permissions: `View and Edit`,
      access: `Entire Organisation${i}`,
    };
    data.push(item);
  }
  return data;
};

const pendingInvitationsData = () => {
  let data = [];
  for (let i = 0; i < 64; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      user: `Pending User ${i + 1}`,
      email: `jessica.hanson@example.com${i + 1}`,
      roles: "Read-Only",
      access: `Room ${i}`,
    };
    data.push(item);
  }
  return data;
};

// Drivers Data
const activeDriversData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: "Brooklyn Simmons",
      username: "greenkoala518",
      tags: "Status",
      peerGroup: "Group 12",
      phone: "(208) 555-0112",
      dlState: "Maine",
      dlNumber: "558612",
    };
    data.push(item);
  }
  return data;
};

const deactivateDriversData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: "Chal Vee",
      username: "Chal",
    };
    data.push(item);
  }
  return data;
};

// Tags Data
const tagsData = [
  {
    email: "alma.lawson@example.com",
    role: "Super Admin",
  },
];

// Actions
// Users & Roles Actions
export const getUserRoles = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_USER_ROLES,
    payload: axios.post(`/api/setting/org/user-roles/search`, request),
  });
};


// Driver Actions
export const getActiveDrivers = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_ACTIVE_DRIVER,
    payload: axios.post(`/api/setting/org/drivers/search`, request),
  });
};

export const getDeactivatedDrivers = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_DEACTIVATED_DRIVER,
    payload: deactivateDriversData,
  });
};

// Tags Actions
export const getTags = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_TAGS,
    payload: tagsData,
  });
};

// Activity Logs Actions
export const getActivityLogs = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_ACTIVITY_LOGS,
    payload: axios.post("/api/setting/org/activity-log/search", request),
  });
};

// Invoice Actions
export const getInvoice = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_INVOICE,
    payload: axios.post("/api/setting/org/billing/invoice/search", request),
  });
};

export const getInvoiceSummary = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_INVOICE_SUMMARY,
    payload: axios.post("/api/setting/org/billing/summary/search", request),
  });
};
