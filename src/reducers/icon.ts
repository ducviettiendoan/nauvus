import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import axios from "axios";

export type IconState = Readonly<typeof initialState>;

{
    /* ACTION TYPES */
}
export const ACTION_TYPES = {
    GET_PROFILE_DATA: "icon/GET_PROFILE_DATA",
    GET_VIEW_ORGANIZATION: "icon/GET_VIEW_ORGANIZATION",
}
{
    /* INITIAL STATE */
}
export const initialState = {
    profile: [],
    viewOrganization: [],

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
        case REQUEST(ACTION_TYPES.GET_VIEW_ORGANIZATION):

            return {
                ...state,
                loading: true,
            };

        case FAILURE(ACTION_TYPES.GET_PROFILE_DATA):
        case FAILURE(ACTION_TYPES.GET_VIEW_ORGANIZATION):

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

        case SUCCESS(ACTION_TYPES.GET_VIEW_ORGANIZATION): {
            return {
                ...state,
                viewOrganization: action.payload.data
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

export const getViewOrganization = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_VIEW_ORGANIZATION,
        payload: axios.post("api/icon/view-organization", request),
    });
};
