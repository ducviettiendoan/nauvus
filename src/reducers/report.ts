import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
import axios from "axios";

export type ReportState = Readonly<typeof initialState>;

{
    /* ACTION TYPES */
}
export const ACTION_TYPES = {
    GET_DRIVER_DISTANCE_DATA: "report/GET_DRIVER_DISTANCE_DATA",
    GET_DRIVING_HOURS_DATA: "report/GET_DRIVING_HOURS_DATA",
    GET_FUEL_USAGE_DATA: "report/GET_FUEL_USAGE_DATA",
};

{
    /* INITIAL STATE */
}
export const initialState = {
    driverDistance: [],
    drivingHours: [],
    fuelUsage: [],

    errorMessage: null,
    loading: false,
};

{
    /* REDUCER */
}
export default (
    state: ReportState = initialState,
    action
): ReportState => {
    switch (action.type) {
        case REQUEST(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
        case REQUEST(ACTION_TYPES.GET_DRIVING_HOURS_DATA):
        case REQUEST(ACTION_TYPES.GET_FUEL_USAGE_DATA):
            return {
                ...state,
                loading: true,
            };

        case FAILURE(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
        case FAILURE(ACTION_TYPES.GET_DRIVING_HOURS_DATA):
        case FAILURE(ACTION_TYPES.GET_FUEL_USAGE_DATA):

            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
            };

        case SUCCESS(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA): {
            return {
                ...state,
                driverDistance: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_DRIVING_HOURS_DATA): {
            return {
                ...state,
                drivingHours: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_FUEL_USAGE_DATA): {
            return {
                ...state,
                fuelUsage: action.payload.data
            };
        }

        default:
            return state;
    }
};

{
    /* ACTION */
}

export const getVehicleDriverDistanceData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_DRIVER_DISTANCE_DATA,
        payload: axios.post("api/report/vehicle/driverDistance", request),
    });
};

export const getVehicleDrivingHoursData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_DRIVING_HOURS_DATA,
        payload: axios.post("api/report/vehicle/drivingHours", request),
    });
};

export const getVehicleFuelUsage = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_FUEL_USAGE_DATA,
        payload: axios.post("api/report/vehicle/fuelUsage", request),
    });
};
