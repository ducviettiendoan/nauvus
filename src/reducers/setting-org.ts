import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

// console.log(awsconfig);
export const ACTION_TYPES = {
  GET_USER_ROLES: 'setting/org/GET_USER_ROLES'
};

const initialState = {
  userRoles : []
};

export type SettingOrgState = Readonly<typeof initialState>;

// Reducer
export default (state: SettingOrgState = initialState, action): SettingOrgState => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_ROLES: {
      console.log(action.payload)
      return {
        ...state,
        userRoles : action.payload
      };
    }
    default:
      return state;
  }
};


const dumpDataRoles = () => {
  let data = [];
  for (let i = 0; i < 64; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      user: `Cameron Williamson ${i + 1}`,
      email: `jessica.hanson@example.com${i + 1}`,
      roles: "Standart Admin",
      access: `Entire Organisation${i}`
    };
    data.push(item);
  }
  return data;
}


export const getUserRoles = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_USER_ROLES,
    payload: dumpDataRoles
  });
};


