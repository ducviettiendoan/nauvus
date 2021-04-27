import {REQUEST, SUCCESS, FAILURE} from "../utils/action-type.util";
import axios from "axios";

export type MaintainanceState = Readonly<typeof initialState>;

{
  /* ACTION TYPES */
}
export const ACTION_TYPES = {
  GET_MAINTAINANCE_DVIRS_DATA: "maintainance/GET_MAINTAINANCE_DVIRS_DATA",
  GET_MAINTAINANCE_DEFECTS_DATA: "maintainance/GET_MAINTAINANCE_DEFECTS_DATA"
};

{
  /* INITIAL STATE */
}
export const initialState = {
  dvirs: [],
  defects: [],
  errorMessage: null,
  loading: false,
};

{
  /* REDUCER */
}
export default (
  state: MaintainanceState = initialState,
  action
): MaintainanceState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_MAINTAINANCE_DVIRS_DATA):
    case REQUEST(ACTION_TYPES.GET_MAINTAINANCE_DEFECTS_DATA):
      return {
        ...state,
        loading: true,
      };

    case FAILURE(ACTION_TYPES.GET_MAINTAINANCE_DVIRS_DATA):
    case FAILURE(ACTION_TYPES.GET_MAINTAINANCE_DEFECTS_DATA):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    case SUCCESS(ACTION_TYPES.GET_MAINTAINANCE_DVIRS_DATA): {
      return {
        ...state,
        dvirs: action.payload.data
      };
    }

    case SUCCESS(ACTION_TYPES.GET_MAINTAINANCE_DEFECTS_DATA): {
      return {
        ...state,
        defects: action.payload.data
      };
    }

    default:
      return state;
  }
};


{
  /* ACTION */
}

export const getDvirsData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_MAINTAINANCE_DVIRS_DATA,
    payload: axios.post("api/maintainance/dvirs", request),
  });
};

export const getDefectsData = (request) => async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.GET_MAINTAINANCE_DEFECTS_DATA,
    payload: axios.post("api/maintainance/defects", request),
  });
};
