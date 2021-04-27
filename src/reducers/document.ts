import axios from 'axios';

import {REQUEST, SUCCESS, FAILURE} from '../utils/action-type.util';

export type DocumentsState = Readonly<typeof initialState>;

export const ACTION_TYPES = {
  GET_SUBMITTED: 'documents/GET_SUBMITTED',
  GET_TYPES: 'documents/GET_TYPES'
};

const initialState = {
  errorMessage: null,
  loading: false,
  submitted: [],
  types: []
}

export default (state: DocumentsState = initialState, action): DocumentsState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_SUBMITTED):
    case REQUEST(ACTION_TYPES.GET_TYPES):
      return {
        ...state,
        loading: true,
      }
    case FAILURE(ACTION_TYPES.GET_SUBMITTED):
    case FAILURE(ACTION_TYPES.GET_TYPES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      }

    case SUCCESS(ACTION_TYPES.GET_SUBMITTED):
      return {
        ...state,
        submitted: action.payload.data,
      }

    case SUCCESS(ACTION_TYPES.GET_TYPES):
      return {
        ...state,
        types: action.payload.data,
      }
    default:
      return state;
  }
}

export const getSubmitted = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SUBMITTED,
    payload: axios.post("/api/documents/submitted", request)
  });
};

export const getTypes = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_TYPES,
    payload: axios.post("/api/documents/types", request)
  });
};