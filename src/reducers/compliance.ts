export type ComplianceState = Readonly<typeof initialState>;

export const ACTION_TYPES = {
  GET_HOS_AUDIT: 'compliance/GET_HOS_AUDIT',
  GET_STATUS_SUMMARY: 'compliance/GET_STATUS_SUMMARY',
}

const initialState = {
  HOSAudit: [],
  statusSummary: [],
}

export default (state: ComplianceState = initialState, action): ComplianceState => {
  switch (action.type) {
    case ACTION_TYPES.GET_HOS_AUDIT: {
      return {
        ...state,
        HOSAudit: action.payload
      };
    }
    case ACTION_TYPES.GET_STATUS_SUMMARY: {
      return {
        ...state,
        statusSummary: action.payload
      };
    }
    default:
      return state;
  }
}

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

export const getHOSAudit = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT,
    payload: HOSAuditData
  });
};

export const getStatusSummary = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_STATUS_SUMMARY,
    payload: statusSummaryData
  });
};

