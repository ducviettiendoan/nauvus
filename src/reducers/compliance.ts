export type ComplianceState = Readonly<typeof initialState>;

export const ACTION_TYPES = {
  GET_HOS_AUDIT: 'compliance/GET_HOS_AUDIT',
}

const initialState = {
  HOSAudit: [],
}

export default (state: ComplianceState = initialState, action): ComplianceState => {
  switch (action.type) {
    case ACTION_TYPES.GET_HOS_AUDIT: {
      return {
        ...state,
        HOSAudit: action.payload
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

export const getHOSAudit = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_HOS_AUDIT,
    payload: HOSAuditData
  });
};
