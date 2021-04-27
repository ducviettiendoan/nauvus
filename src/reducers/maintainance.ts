import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import axios from "axios";

export type MaintainanceState = Readonly<typeof initialState>;

{
    /* ACTION TYPES */
}
export const ACTION_TYPES = {
    GET_MAINTAINANCE_DVIRS_DATA: "compliance/GET_MAINTAINANCE_DVIRS_DATA",

};

{
    /* INITIAL STATE */
}
export const initialState = {
    dvirs: [],

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

            return {
                ...state,
                loading: true,
            };

        case FAILURE(ACTION_TYPES.GET_MAINTAINANCE_DVIRS_DATA):
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
