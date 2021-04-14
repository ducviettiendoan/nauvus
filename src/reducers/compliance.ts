import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import axios from "axios";

export type ComplianceState = Readonly<typeof initialState>;

{
  /* ACTION TYPES */
}
export const ACTION_TYPES = {
  //HOS Audit action type
  GET_HOS_AUDIT: "compliance/GET_HOS_AUDIT",

  //Duty status summary action type
  GET_STATUS_SUMMARY: "compliance/GET_STATUS_SUMMARY",

  //HOS Audit transfer action type
  GET_HOS_AUDIT_TRANSFER: "compliance/GET_HOS_AUDIT_TRANSFER",

  //HOS Violations action type
  GET_VIOLATIONS: "compliance/GET_VIOLATIONS",
  GET_MISSING_CERTIFICATIONS: "compliance/GET_MISSING_CERTIFICATIONS",

  //Driver HOS action type
  GET_DRIVER_HOS: "compliance/GET_DRIVER_HOS",

  //Compliance dashboard action type
  GET_DRIVER_EFFICIENCY: "compliance/GET_DRIVER_EFFICIENCY",

  //Unassigned HOS action type
  GET_UNASSIGNED_HOS: "compliance/GET_UNASSIGNED_HOS",

  //Unassigned HOS Annotated action type
  GET_UNASSIGNED_HOS_ANNOTATED: "compliance/GET_UNASSIGNED_HOS_ANNOTATED",

  //Unassigned HOS UNASSIGNED action type
  GET_UNASSIGNED_HOS_UNASSIGNED: "compliance/GET_UNASSIGNED_HOS_UNASSIGNED",

  GET_REPORT_DATA: 'setting/device/GET_REPORT_DATA',
  GET_DUTY_STATUS_DATA: 'setting/device/GET_DUTY_STATUS_DATA',
  GET_COMPLIANCE_DASHBOARD_DATA: "compliance/GET_COMPLIANCE_DASHBOARD",
  GET_REPORT_DATA_2: 'setting/device/GET_REPORT_DATA_2',

  GET_DRIVER_DISTANCE_DATA: "compliance/GET_DRIVER_DISTANCE_DATA",
  GET_DRIVING_HOURS_DATA: "compliance/GET_DRIVING_HOURS_DATA",
  GET_FUEL_USAGE_DATA: "compliance/GET_FUEL_USAGE_DATA",
  GET_HOS_AUDIT_REPORT: 'setting/device/GET_HOS_AUDIT_REPORT'
};

{
  /* INITIAL STATE */
}
const initialState = {
  //HOS audit state
  HOSAudit: [],
  HOSAuditReport: [],

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

  //Unassigned HOS Report
  unassignedHOSAnnotated: [],

  //Unassigned HOS Unassigned
  unassignedHOSUnassigned: [],

  reportData: [],
  dutyStatusData: [],
  reportData2: [],

  complianceDashboard: [],

  driverDistance: [],
  drivingHours: [],
  fuelUsage: [],

  errorMessage: null,
  loading: false,
};

{
  /* REDUCER */
}
export default (
  state: ComplianceState = initialState,
  action
): ComplianceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_DRIVER_HOS):
    case REQUEST(ACTION_TYPES.GET_VIOLATIONS):
    case REQUEST(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
    case REQUEST(ACTION_TYPES.GET_STATUS_SUMMARY):
    case REQUEST(ACTION_TYPES.GET_UNASSIGNED_HOS):
    case REQUEST(ACTION_TYPES.GET_UNASSIGNED_HOS_ANNOTATED):
    case REQUEST(ACTION_TYPES.GET_UNASSIGNED_HOS_UNASSIGNED):
    case REQUEST(ACTION_TYPES.GET_REPORT_DATA):
    case REQUEST(ACTION_TYPES.GET_DUTY_STATUS_DATA):
    case REQUEST(ACTION_TYPES.GET_COMPLIANCE_DASHBOARD_DATA):
    case REQUEST(ACTION_TYPES.GET_REPORT_DATA_2):
    case REQUEST(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
    case REQUEST(ACTION_TYPES.GET_DRIVING_HOURS_DATA):
    case REQUEST(ACTION_TYPES.GET_FUEL_USAGE_DATA):
    case REQUEST(ACTION_TYPES.GET_HOS_AUDIT):
    case REQUEST(ACTION_TYPES.GET_HOS_AUDIT_REPORT):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_DRIVER_HOS):
    case FAILURE(ACTION_TYPES.GET_VIOLATIONS):
    case FAILURE(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
    case FAILURE(ACTION_TYPES.GET_STATUS_SUMMARY):
    case FAILURE(ACTION_TYPES.GET_UNASSIGNED_HOS):
    case FAILURE(ACTION_TYPES.GET_UNASSIGNED_HOS_ANNOTATED):
    case FAILURE(ACTION_TYPES.GET_UNASSIGNED_HOS_UNASSIGNED):
    case FAILURE(ACTION_TYPES.GET_REPORT_DATA):
    case FAILURE(ACTION_TYPES.GET_DUTY_STATUS_DATA):
    case FAILURE(ACTION_TYPES.GET_COMPLIANCE_DASHBOARD_DATA):
    case FAILURE(ACTION_TYPES.GET_REPORT_DATA_2):
    case FAILURE(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
    case FAILURE(ACTION_TYPES.GET_DRIVING_HOURS_DATA):
    case FAILURE(ACTION_TYPES.GET_FUEL_USAGE_DATA):
    case FAILURE(ACTION_TYPES.GET_HOS_AUDIT):
    case FAILURE(ACTION_TYPES.GET_HOS_AUDIT_REPORT):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.GET_DRIVER_HOS):
      return {
        ...state,
        driverHOS: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.GET_VIOLATIONS):
      return {
        ...state,
        violations: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.GET_MISSING_CERTIFICATIONS):
      return {
        ...state,
        missingCertifications: action.payload.data,
      };

    case SUCCESS(ACTION_TYPES.GET_REPORT_DATA): {
      return {
        ...state,
        reportData: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_DUTY_STATUS_DATA): {
      return {
        ...state,
        dutyStatusData: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_REPORT_DATA_2): {
      return {
        ...state,
        reportData2: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_HOS_AUDIT): {
      return {
        ...state,
        HOSAudit: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_HOS_AUDIT_REPORT): {
      return {
        ...state,
        HOSAuditReport: action.payload.data
      };
    }


    case SUCCESS(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA): {
      return {
        ...state,
        driverDistance: action.payload.data
      };
    }

    //HOS Audit reducer
    case ACTION_TYPES.GET_HOS_AUDIT: {
      return {
        ...state,
        HOSAudit: action.payload,
      };
    }

    //Status summary reducer
    case SUCCESS(ACTION_TYPES.GET_STATUS_SUMMARY): {
      return {
        ...state,
        HOSAudit: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_HOS_AUDIT_REPORT): {
      return {
        ...state,
        HOSAuditReport: action.payload.data
      };
    }

    //Unassigned HOS reducer
    case SUCCESS(ACTION_TYPES.GET_UNASSIGNED_HOS): {
      return {
        ...state,
        unassignedHOS: action.payload.data,
      };
    }

    //Unassigned HOS Annotated reducer
    case SUCCESS(ACTION_TYPES.GET_UNASSIGNED_HOS_ANNOTATED): {
      return {
        ...state,
        unassignedHOSAnnotated: action.payload.data,
      };
    }

    //Unassigned HOS Unassigned reducer
    case SUCCESS(ACTION_TYPES.GET_UNASSIGNED_HOS_UNASSIGNED): {
      return {
        ...state,
        unassignedHOSUnassigned: action.payload.data,
      };
    }

    case SUCCESS(ACTION_TYPES.GET_COMPLIANCE_DASHBOARD_DATA): {
      return {
        ...state,
        complianceDashboard: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_DRIVING_HOURS_DATA): {
      return {
        ...state,
        drivingHours: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_FUEL_USAGE_DATA): {
      return {
        ...state,
        fuelUsage: action.payload.data
      };
    }

    default:
      return state;
  }
};

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
        driverID: "45609823",
      },
      dateRequested: {
        date_1: "Feb 20, 2021",
        date_2: "Feb 27, 2021",
      },
      comment: "mn 1625",
      internalTools: "Description",
    };
    data.push(item);
  }
  return data;
};

{
  /* ACTION */
}
//HOS Audit action
export const getHOSAudit = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT,
    payload: axios.post(`/api/compliance/driver-HOS-audit`, request),
  });
};

export const getHOSAuditReport = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT_REPORT,
    payload: axios.post(`/api/compliance/driver-HOS-audit/report`, request),
  });
};

//Status summary action
export const getStatusSummary = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_STATUS_SUMMARY,
    payload: axios.post(`/api/compliance/HOS/status-summary`, request),
  });
};

//HOS Audit transfer action
export const getHOSAuditTransfer = () => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT_TRANSFER,
    payload: HOSAuditTransferData,
  });
};

//HOS Violations action
//Violations
export const getViolations = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_VIOLATIONS,
    payload: axios.post(`/api/compliance/HOS/violations`, request),
  });
};

export const getMissingCertifications = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_MISSING_CERTIFICATIONS,
    payload: axios.post(`/api/compliance/HOS/missing-certifications`, request),
  });
};

//DriverHOS action
export const getDriverHOS = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_HOS,
    payload: axios.post(`/api/compliance/driver-HOS`, request),
  });
};

//Unassigned HOS action
export const getUnassignedHOS = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_HOS,
    payload: axios.post(`/api/compliance/HOS/unassigned-HOS`, request),
  });
};

//Unassigned HOS Annotated action
export const getUnassignedHOSAnnotated = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_HOS_ANNOTATED,
    payload: axios.post(`/api/compliance/HOS/unassigned-HOS-annotated`, request),
  });
};

//Unassigned HOS Unassigned action
export const getUnassignedHOSUnassigned = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_UNASSIGNED_HOS_UNASSIGNED,
    payload: axios.post(`/api/compliance/HOS/unassigned-HOS-unassigned`, request),
  });
};

export const getReportData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_REPORT_DATA,
    payload: axios.post("/api/compliance/HOS/report-1", request)
  });
};

export const getReportData2 = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_REPORT_DATA_2,
    payload: axios.post("/api/compliance/HOS/report-2", request)
  });
};

export const getDutyStatusData = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DUTY_STATUS_DATA,
    payload: axios.post("/api/compliance/HOS/duty-status", request)
  });
};

export const getComplianceDashboardData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_COMPLIANCE_DASHBOARD_DATA,
    payload: axios.post("api/compliance/compliance-dashboard", request)
  });
};

export const getDriverDistanceData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_DISTANCE_DATA,
    payload: axios.post("api/compliance/dashboard/driverDistance", request),
  });
};

export const getDrivingHoursData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVING_HOURS_DATA,
    payload: axios.post("api/compliance/dashboard/drivingHours", request),
  });
};

export const getFuelUsage = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_USAGE_DATA,
    payload: axios.post("api/compliance/dashboard/fuelUsage", request),
  });
};