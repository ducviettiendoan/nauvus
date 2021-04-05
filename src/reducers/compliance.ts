export type ComplianceState = Readonly<typeof initialState>;

{/* ACTION TYPES */}
export const ACTION_TYPES = {
  //HOS Audit action type
  GET_HOS_AUDIT: 'compliance/GET_HOS_AUDIT',

  //Duty status summary action type
  GET_STATUS_SUMMARY: 'compliance/GET_STATUS_SUMMARY',

  //HOS Audit transfer action type
  GET_HOS_AUDIT_TRANSFER: 'compliance/GET_HOS_AUDIT_TRANSFER',

  //Driver HOS action type
  GET_DRIVER_HOS: 'compliance/GET_DRIVER_HOS',
}

{/* INITIAL STATE */}
const initialState = {
  //HOS audit state
  HOSAudit: [],

  //Status summary state
  statusSummary: [],

  //HOS Audit transfer state
  HOSAuditTransfer: [],

  //Driver HOS state
  driverHOS: []
}

{/* REDUCER */}
export default (state: ComplianceState = initialState, action): ComplianceState => {
  switch (action.type) {
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

    //Driver HOS reducer
    case ACTION_TYPES.GET_DRIVER_HOS: {
      return {
        ...state,
        driverHOS: action.payload
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

//Driver HOS data
const driverHOSData = () => {
  let data = [];
  for (let i = 0; i < 20; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      driver: "Ali Singh",
      dutyStatus: "Off",
      timeCurrentStatus: "3:04",
      vehicle: "1",
      timeUntilBreak: "8:00",
      driveRemaining: "7:41",
      shiftRemaining: "7:41",
      cycleRemaining: "69:07",
      cycleTomorrow: "69:07",
      drivingInVio: "1"
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

//DriverHOS action
export const getDriverHOS = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_HOS,
    payload: driverHOSData
  });
};


