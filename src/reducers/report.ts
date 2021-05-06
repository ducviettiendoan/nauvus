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
    GET_FUEL_EFFICIENCY_DATA: "report/GET_FUEL_EFFICIENCY_DATA",
    GET_IDEAL_HOUR_DATA: 'report/GET_IDEAL_HOUR_DATA',
    GET_CHART_DATA: "report/GET_CHART_DATA",
    GET_UTILIZATION_DATA: "report/GET_UTILIZATION_DATA",
    GET_DORMANCY_DATA: 'report/GET_DORMANCY_DATA',
    GET_DETENTION_DATA: 'report/GET_DETENTION_DATA',
    GET_DRIVING_DISTANCE_DATA: "report/GET_DRIVING_DISTANCE_DATA",
    GET_HOURS_DATA: "report/GET_HOURS_DATA",
    GET_ALL_REPORT: "report/GET_ALL_REPORT"
};

{
    /* INITIAL STATE */
}
export const initialState = {
    driverDistance: [],
    drivingHours: [],
    fuelUsage: [],
    fuelEfficiency: [],
    idealHour: [],
    chartData: [],
    utilization : [],
    dormancy: [],
    detention: [],
    drivingDistance: [],
    hoursData: [],
    allReport: [],

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
        case REQUEST(ACTION_TYPES.GET_FUEL_EFFICIENCY_DATA):
        case REQUEST(ACTION_TYPES.GET_IDEAL_HOUR_DATA):
        case REQUEST(ACTION_TYPES.GET_CHART_DATA):
        case REQUEST(ACTION_TYPES.GET_UTILIZATION_DATA):
        case REQUEST(ACTION_TYPES.GET_DORMANCY_DATA):
        case REQUEST(ACTION_TYPES.GET_DETENTION_DATA):
        case REQUEST(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
        case REQUEST(ACTION_TYPES.GET_HOURS_DATA):
        case REQUEST(ACTION_TYPES.GET_ALL_REPORT):    

            return {
                ...state,
                loading: true,
            };

        case FAILURE(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
        case FAILURE(ACTION_TYPES.GET_DRIVING_HOURS_DATA):
        case FAILURE(ACTION_TYPES.GET_FUEL_USAGE_DATA):
        case FAILURE(ACTION_TYPES.GET_FUEL_EFFICIENCY_DATA):
        case FAILURE(ACTION_TYPES.GET_IDEAL_HOUR_DATA):
        case FAILURE(ACTION_TYPES.GET_CHART_DATA):
        case FAILURE(ACTION_TYPES.GET_UTILIZATION_DATA):
        case FAILURE(ACTION_TYPES.GET_DORMANCY_DATA):
        case FAILURE(ACTION_TYPES.GET_DETENTION_DATA):
        case FAILURE(ACTION_TYPES.GET_DRIVER_DISTANCE_DATA):
        case FAILURE(ACTION_TYPES.GET_HOURS_DATA):
        case FAILURE(ACTION_TYPES.GET_ALL_REPORT):     

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

        case SUCCESS(ACTION_TYPES.GET_FUEL_EFFICIENCY_DATA): {
            return {
                ...state,
                fuelEfficiency: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_IDEAL_HOUR_DATA): {
            return {
                ...state,
                idealHour: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_CHART_DATA): {
            return {
                ...state,
                chartData: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_UTILIZATION_DATA): {
            return {
                ...state,
                utilization: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_DORMANCY_DATA): {
            return {
                ...state,
                dormancy: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_DETENTION_DATA): {
            return {
                ...state,
                detention: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_DRIVING_DISTANCE_DATA): {
            return {
                ...state,
                drivingDistance: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_HOURS_DATA): {
            return {
                ...state,
                hoursData: action.payload.data
            };
        }

        case SUCCESS(ACTION_TYPES.GET_ALL_REPORT): {
            return {
                ...state,
                allReport: action.payload.data
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
        payload: axios.post("api/report/vehicle/drivingVehicleHours", request),
    });
};

export const getVehicleFuelUsage = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_FUEL_USAGE_DATA,
        payload: axios.post("api/report/vehicle/fuelUsage", request),
    });
};

export const getVehicleFuelEfficiency = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_FUEL_EFFICIENCY_DATA,
        payload: axios.post("api/report/vehicle/fuelEfficiency", request),
    });
};

export const getIdealHour = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_IDEAL_HOUR_DATA,
        payload: axios.post("api/report/vehicle/idealHours", request),
    });
};

export const getChartData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_CHART_DATA,
        payload: axios.post("api/report/vehicle/chartData", request),
    });
};

export const getUtilizationData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_UTILIZATION_DATA,
        payload: axios.post("api/report/vehicle/utilization", request),
    });
};

export const getDormancyData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_DORMANCY_DATA,
        payload: axios.post("api/report/vehicle/dormancy", request),
    });
};

export const getDetentionData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_DETENTION_DATA,
        payload: axios.post("api/report/vehicle/detention", request),
    });
};

export const getDrivingDistanceData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_DRIVING_DISTANCE_DATA,
        payload: axios.post("api/report/vehicle/drivingDistance", request),
    });
};

export const getDrivingHoursData = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_HOURS_DATA,
        payload: axios.post("api/report/vehicle/drivingHours", request),
    });
};

export const getAllReport = (request) => async (dispatch) => {
    dispatch({
        type: ACTION_TYPES.GET_ALL_REPORT,
        payload: axios.post("api/report/custom-report/all-report", request),
    });
};