import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import axios from "axios";

export type IconState = Readonly<typeof initialState>;

{
    /* ACTION TYPES */
}
export const ACTION_TYPES = {
    GET_PROFILE_DATA: "report/GET_PROFILE_DATA",
}
{
    /* INITIAL STATE */
}
export const initialState = {
    profile: [],

    errorMessage: null,
    loading: false,
};

{
    /* REDUCER */
}
export default (
    state: IconState = initialState,
    action
): IconState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.GET_PROFILE_DATA):

            return {
                ...state,
                loading: true,
            };

        case FAILURE(ACTION_TYPES.GET_PROFILE_DATA):
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };

        case SUCCESS(ACTION_TYPES.GET_PROFILE_DATA): {
            return {
                ...state,
                profile: action.payload.data
            };
        }

        default:
            return state;
    }
};

{
    /* ACTION */
}

export const getProfileData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_PROFILE_DATA,
        payload: axios.post("api/icon/profile", request),
    });
};
