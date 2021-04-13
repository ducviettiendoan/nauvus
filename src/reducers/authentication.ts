import axios from 'axios';

import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';
import { AUTH_TOKEN_KEY } from '../config/constants';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from 'config/aws-export';
// console.log(awsconfig);
Amplify.configure(awsconfig());
// const AmplifyConfig = Amplify.configure();
// debugger
export const ACTION_TYPES = {
  GET_SESSION: 'authentication/GET_SESSION',
  LOGOUT: 'authentication/LOGOUT',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
  ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
  SET_LOADING: 'authentication/SET_LOADING'
};

const initialState = {
  loading: false,
  loginSuccess: false,
  loginError: false, // Errors returned from server side
  showModalLogin: false,
  isAuthenticated: false,
  isAdmin: false,
  user: {} as any,
  errorMessage: null as string, // Errors returned from server side
  successMessage: null as string,
  redirectMessage: null as string,
  sessionHasBeenFetched: false,
  result: false
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    // REQUEST
    case REQUEST(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: true
      };
    // FAILURE
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        sessionHasBeenFetched: true,
        errorMessage: action.payload
      };
    // SUCCESS
    case SUCCESS(ACTION_TYPES.GET_SESSION): {
      console.log(action.payload)
      const isAuthenticated = action.payload && action.payload.data 
        && (action.payload.data.username || action.payload.data.Username) ? true : false;
      console.log(`isAuthenticated: ${isAuthenticated}`);
      return {
        ...state,
        isAuthenticated,
        loading: false,
        sessionHasBeenFetched: true,
        user: action.payload.data
      };
    }
    case ACTION_TYPES.GET_SESSION: {
      const isAuthenticated = action.payload.username ? true : false;
      return {
        ...state,
        isAuthenticated,
        loading: false,
        sessionHasBeenFetched: true,
        user: action.payload
      };
    }
    // No axios
    case ACTION_TYPES.LOGOUT:
      return {
        ...initialState,
        loading: false,
        sessionHasBeenFetched: true
    };
    case ACTION_TYPES.SET_LOADING:
      console.log(`ACTION_TYPES.SET_LOADING ${action.payload}`)
      return {
        ...state,
        loading: action.payload,
    };
    default:
      return state;
  }
};

const setLoading = async (value) => {
  console.log(`setLoading`)
  // await dispatch({
  //   type: ACTION_TYPES.SET_LOADING,
  //   payload: value
  // });
};

export const getUserInfo = () => async (dispatch) => {
  let cUser = await Auth.currentUserInfo();

  await dispatch({
    type: ACTION_TYPES.GET_SESSION,
    // payload: axios.get('/me')
    payload: cUser
  });

  // let cUser = await Auth.currentUserInfo();
  // console.log(cUser)
  // Store 
};

export const confirmSignUp = async (username, code) => {
  try {
    await Auth.confirmSignUp(username, code);
    return { success: true, message: "Active success"};
  } catch (error) {
    let messageError = error && error.message ? error.message : 'NotAuthorizedException';
    console.log('error confirming sign up', error);
    return { success: false, message: messageError};
  }
};

export const resendConfirmationCode = async (username) => {
  try {
    await Auth.resendSignUp(username);
    return { success: true, message: "Code resent successfully"};
  } catch (error) {
    let messageError = error && error.message ? error.message : 'NotAuthorizedException';
    console.log('error resending code: ', error);
    return { success: false, message: messageError};
  }
};

export const loginByCognito = async (username, password) => {
  console.log(`loginByCognito`)
  try {
    const user = await Auth.signIn(username, password);
    // let accessToken = user.signInUserSession.accessToken.jwtToken;
    // console.log(accessToken);
    // // Store 
    // storeAuthToken(accessToken);
    return { success: true, accessToken: "accessToken"};
  } catch (error) {
    let messageError = error && error.message ? error.message : 'NotAuthorizedException';
    console.log('error signing in', error);
    return { success: false, message: messageError};
  }
};

export const registerByCognito = async (username, password, email) => {
  try {
    const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email
          }
      });
      // toast.success('Register success, Please active account before using');
      console.log(user);
      return { success: true, user};
  } catch (error) {
      let messageError = error && error.message ? error.message : 'NotAuthorizedException';
      console.log('error signing in', error);
      // toast.error(messageError);
      return { success: false, message: messageError};
  }
};


export const forgotPasswordByCognito = async (username) => {
  try {
    const data = await Auth.forgotPassword(username);
      // toast.success('Register success, Please active account before using');
      console.log(data);
      return { success: true, data};
  } catch (error) {
      let messageError = error && error.message ? error.message : 'NotAuthorizedException';
      console.log('error forgotPassword', error);
      // toast.error(messageError);
      return { success: false, message: messageError};
  }
};

export const forgotPasswordSubmit = async (username, code, new_password) => {
  try {
    const data = await Auth.forgotPasswordSubmit(username, code, new_password)
    console.log(data);
    return { success: true, data};
  } catch (error) {
      let messageError = error && error.message ? error.message : 'NotAuthorizedException';
      console.log('error forgotPassword', error);
      // toast.error(messageError);
      return { success: false, message: messageError};
  }
};


export const storeAuthToken = (token) => {
  if (token) {
    const jwt = token;
    localStorage.setItem(AUTH_TOKEN_KEY, jwt);
  }
};

export const clearAuthToken = () => {
  if (localStorage.getItem(AUTH_TOKEN_KEY)) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
};

export const logout = () => async dispatch => {
  await Auth.signOut({ global: true });
  clearAuthToken();
  dispatch({
    type: ACTION_TYPES.LOGOUT
  });
};


