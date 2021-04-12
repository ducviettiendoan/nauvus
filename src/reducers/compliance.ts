import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import axios from 'axios';

export type ComplianceState = Readonly<typeof initialState>;

{/* ACTION TYPES */}
export const ACTION_TYPES = {
  //HOS Audit action type
  GET_HOS_AUDIT: 'compliance/GET_HOS_AUDIT',

  //Duty status summary action type
  GET_STATUS_SUMMARY: 'compliance/GET_STATUS_SUMMARY',

  //HOS Audit transfer action type
  GET_HOS_AUDIT_TRANSFER: 'compliance/GET_HOS_AUDIT_TRANSFER',

  //HOS Violations action type
  GET_VIOLATIONS: 'compliance/GET_VIOLATIONS',
  GET_MISSING_CERTIFICATIONS: 'compliance/GET_MISSING_CERTIFICATIONS',

  //Driver HOS action type
  GET_DRIVER_HOS: 'compliance/GET_DRIVER_HOS',

  //Compliance dashboard action type
  GET_DRIVER_EFFICIENCY: 'compliance/GET_DRIVER_EFFICIENCY',

  //Unassigned HOS action type
  GET_UNASSIGNED_HOS: 'compliance/GET_UNASSIGNED_HOS',
}

{/* INITIAL STATE */}
const initialState = {
  //HOS audit state
  HOSAudit: [],

  //Status summary state
  statusSummary: [],

  //HOS Audit transfer state
  HOSAuditTransfer: [],

  //HOS Violations
  violations: [],
  missingCertifications: [],

  //Driver HOS state
  driverHOS: [],

  //Compliance dashboard state
  driverEfficiencies: [],

  //Unassigned HOS state
  unassignedHOS: [],

  errorMessage: null,
  loading: false,
}

{/* REDUCER */}
export default (state: ComplianceState = initialState, action): ComplianceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_DRIVER_HOS):
    case REQUEST(ACTION_TYPES.GET_VIOLATIONS):
    case REQUEST(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
      return {
        ...state,
        loading: true
      }
    case FAILURE(ACTION_TYPES.GET_DRIVER_HOS):
    case FAILURE(ACTION_TYPES.GET_VIOLATIONS):
    case FAILURE(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }
    case SUCCESS(ACTION_TYPES.GET_DRIVER_HOS):
      return {
        ...state,
        driverHOS: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_VIOLATIONS):
      return {
        ...state,
        violations: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
      return {
        ...state,
        missingCertifications: action.payload.data
      };

    //HOS Audit reducer
    case ACTION_TYPES.GET_HOS_AUDIT: {
      return {
        ...state,
        HOSAudit: action.payload
      };
    }

    //Status summary reducer
    case ACTION_TYPES.GET_STATUS_SUMMARY: {
      return {
        ...state,
        statusSummary: action.payload
      };
    }

    //HOS Audit transfer reducer
    case ACTION_TYPES.GET_HOS_AUDIT_TRANSFER: {
      return {
        ...state,
        HOSAuditTransfer: action.payload
      };
    }

    //HOS Violations reducer
    case ACTION_TYPES.GET_VIOLATIONS: {
      return {
        ...state,
        violations: action.payload
      };
    }
    case ACTION_TYPES.GET_MISSING_CERTIFICATIONS: {
      return {
        ...state,
        missingCertifications: action.payload,
      }
    }

    //Compliance dashboard reducer
    case ACTION_TYPES.GET_DRIVER_EFFICIENCY: {
      return {
        ...state,
        driverEfficiencies: action.payload
      };
    }

    //Unassigned HOS reducer
    case ACTION_TYPES.GET_UNASSIGNED_HOS: {
      return {
        ...state,
        unassignedHOS: action.payload
      };
    }
    default:
      return state;
  }
}

{/* DATA */}
//HOS Audit data
const HOSAuditData = () => {
  let data = [];
  for (let i = 0; i < 64; i++) {
    let item = {
      id: i + 1,
      key: i + 1,
      driver: "Chal Vee",
      totalUpdate: "116"
    };
    data.push(item);
  }
  return data;
}

//Status summary data
const statusSummaryData = () => {
  let data = [];
  for (let i = 0; i < 64; i++) {
    let item = {
      id: i + 1,
      key: i + 1,
      driver: "Ali Singh",
      offDuty: "23:59",
      sleeperBerth: "0:00",
      driving: "0:00",
      onDuty: "0:00",
      yardMoveg: "0:00",
      personalConveyanceg: "0:00"
    };
    data.push(item);
  }
  return data;
}

//HOS Audit Transfer data
const HOSAuditTransferData = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      requestedAt: {
        date: "Feb 27, 2021",
        time: "10:08 30 AM PST",
        service: "Webservice",
      },
      status: "Assepted",
      driver: {
        name: "Btady Tom",
        driverID: "45609823"
      },
      dateRequested: {
        date_1: "Feb 20, 2021",
        date_2: "Feb 27, 2021"
      },
      comment: "mn 1625",
      internalTools: "Description"
    };
    data.push(item);
  }
  return data;
}

//Compliance dashboard
const driverEfficiencyData = () => {
  let data = [];
  for (let i = 0; i < 2; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      driver: "Ali Singh",
      hour: "2h 8min"
    };
    data.push(item);
  }
  return data;
}


//Unassigned HOS data
const unassignedHOSData = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      vehicle: "539",
      unassignedTime: "48m 10s",
      unassignedDistance: "46km",
      segments: "2",
      pending: "0",
      annotated: "0",
    };
    data.push(item);
  }
  return data;
}

{/* ACTION */}
//HOS Audit action
export const getHOSAudit = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT,
    payload: HOSAuditData
  });
};

//Status summary action
export const getStatusSummary = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_STATUS_SUMMARY,
    payload: statusSummaryData
  });
};

//HOS Audit transfer action
export const getHOSAuditTransfer = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT_TRANSFER,
    payload: HOSAuditTransferData
  });
};

//HOS Violations action
//Violations
export const getViolations = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VIOLATIONS,
    payload: axios.post(`/api/compliance/HOS/violations`, request),
  });
};

export const getMissingCertifications = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MISSING_CERTIFICATIONS,
    payload: axios.post(`/api/compliance/HOS/missing-certifications`, request),
  });
};

//DriverHOS action
export const getDriverHOS = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_HOS,
    payload: axios.post(`/api/compliance/driver-HOS`, request),
  });
};


//Compliance dashboard action
export const getDriverEfficiency = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY,
    payload: driverEfficiencyData
  });
};

//Unassigned HOS action
export const getUnassignedHOS = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_HOS,
    payload: unassignedHOSData
  });
};


