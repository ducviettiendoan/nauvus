import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../utils/action-type.util';

export type SettingFleetState = Readonly<typeof initialState>;

//Actions type
export const ACTION_TYPES = {
  //DriverApp action type
  CHANGE_TEMPLATE: "setting/fleet/CHANGE_TEMPLATE",
  CHANGE_TRIGGER: "setting/fleet/CHANGE_TRIGGER",
  GET_START_WORKFLOW: "setting/fleet/GET_START_WORKFLOW",
  SET_START_WORKFLOW: "setting/fleet/SET_START_WORKFLOW",
  GET_STOP_WORKFLOW: "setting/fleet/GET_STOP_WORKFLOW",
  SET_STOP_WORKFLOW: "setting/fleet/SET_STOP_WORKFLOW",
  SET_TITLE: "setting/fleet/SET_TITLE",
  //Fuel-Energy action type
  GET_DRIVER_EFFICIENCY: 'setting/fleet/GET_DRIVER_EFFICIENCY',
  GET_FUEL_COST: 'setting/fleet/GET_FUEL_COST',
  GET_FUEL_CARD: 'setting/fleet/GET_FUEL_CARD',
  GET_VEHICLE_FUEL_TYPES: 'setting/fleet/GET_VEHICLE_FUEL_TYPES',

  //Driver Activity action type
  GET_WORKING_HOURS: 'setting/fleet/GET_WORKING_HOURS',
  GET_MAX_DISTANCES: 'setting/fleet/GET_MAX_DISTANCES',

  //Address & Geofences action type
  GET_VALID_ADDRESS: 'setting/fleet/GET_VALID_ADDRESS',
  GET_INVALID_ADDRESS: 'setting/fleet/GET_INVALID_ADDRESS',

  //Maps action type
  GET_MAPS: 'setting/fleet/GET_MAPS',
};

//Initial State
const initialState = {
  //Driver App State
  template: "custom",
  startWorkflow: {},
  stopWorkflow: {},
  trigger: "",
  title: "",
  startTitle: "",
  stopTitle: "",
  //Fuel Energy State
  driverEfficiencies: [],
  fuelCost: [],
  fuelCards: [],
  vehicleFuelTypes: [],

  //Driver Activity State
  workingHours: [],
  maxDistances: [],

  //Address & Geofences State
  validAddresses: [],
  invalidAddresses: [],

  //Maps
  maps: [],
  loading: false,
  errorMessage: null
};

//Reducer
export default (state: SettingFleetState = initialState, action): SettingFleetState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_MAPS):
    case REQUEST(ACTION_TYPES.GET_START_WORKFLOW):
    case REQUEST(ACTION_TYPES.GET_STOP_WORKFLOW):
    case REQUEST(ACTION_TYPES.GET_INVALID_ADDRESS):
    case REQUEST(ACTION_TYPES.GET_VALID_ADDRESS):
    case REQUEST(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
    case REQUEST(ACTION_TYPES.GET_FUEL_COST):
    case REQUEST(ACTION_TYPES.GET_FUEL_CARD):
    case REQUEST(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
    case REQUEST(ACTION_TYPES.GET_WORKING_HOURS):
    case REQUEST(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        loading: true
      };
    case FAILURE(ACTION_TYPES.GET_MAPS):
    case FAILURE(ACTION_TYPES.GET_START_WORKFLOW):
    case FAILURE(ACTION_TYPES.GET_STOP_WORKFLOW):
    case FAILURE(ACTION_TYPES.GET_INVALID_ADDRESS):
    case FAILURE(ACTION_TYPES.GET_VALID_ADDRESS):
    case FAILURE(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
    case FAILURE(ACTION_TYPES.GET_FUEL_COST):
    case FAILURE(ACTION_TYPES.GET_FUEL_CARD):
    case FAILURE(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
    case FAILURE(ACTION_TYPES.GET_WORKING_HOURS):
    case FAILURE(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    //Maps Reducer
    case SUCCESS(ACTION_TYPES.GET_MAPS):
      return {
        ...state,
        maps: action.payload.data
      }
    // Driver App Reducer
    case ACTION_TYPES.GET_START_WORKFLOW:
      return {
        ...state,
        startWorkflow: action.payload.tasks,
        startTitle: action.payload.title
      }
    case ACTION_TYPES.GET_STOP_WORKFLOW:
      return {
        ...state,
        stopWorkflow: action.payload.tasks,
        stopTitle: action.payload.title
      }
    case ACTION_TYPES.SET_STOP_WORKFLOW:
      return {
        ...state,
        stopWorkflow: action.payload.tasks,
        stopTitle: action.payload.title
      }
    case ACTION_TYPES.SET_START_WORKFLOW:
      return {
        ...state,
        startWorkflow: action.payload.tasks,
        startTitle: action.payload.title
      }
    case ACTION_TYPES.CHANGE_TEMPLATE:
      return {
        ...state,
        template: action.payload
      }
    case ACTION_TYPES.CHANGE_TRIGGER:
      return {
        ...state,
        trigger: action.payload
      }
    case ACTION_TYPES.SET_TITLE:
      return {
        ...state,
        title: action.payload
      }
    //Address & Geofences Reducer
    case SUCCESS(ACTION_TYPES.GET_INVALID_ADDRESS):
      return {
        ...state,
        invalidAddresses: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_VALID_ADDRESS):
      return {
        ...state,
        validAddresses: action.payload.data
      };

    //Fuel Energy Reducer
    case SUCCESS(ACTION_TYPES.GET_DRIVER_EFFICIENCY):
      return {
        ...state,
        driverEfficiencies: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_FUEL_COST):
      return {
        ...state,
        fuelCost: action.payload.data
      };

    case SUCCESS(ACTION_TYPES.GET_FUEL_CARD):
      return {
        ...state,
        fuelCards: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_VEHICLE_FUEL_TYPES):
      return {
        ...state,
        vehicleFuelTypes: action.payload.data
      };
    //Driver Activity Reducer
    case SUCCESS(ACTION_TYPES.GET_WORKING_HOURS):
      return {
        ...state,
        workingHours: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.GET_MAX_DISTANCES):
      return {
        ...state,
        maxDistances: action.payload.data
      };
    default:
      return state;
  }
};

const mockStartWorkflow = () => {
  return {
    title: "Start",
    tasks: [
      {id: "task0", title: "Select vehicle", icon: "vehicle"},
      {id: "task1", title: "Start inspection for vehicle", icon: "document"},
      {id: "task2", title: "Review unassigned hours", icon: "clock"},
      {id: "task3", title: "Select trailer", icon: "vehicle"},
      {id: "task4", title: "Enter shipping ID", icon: "clock"},
      {id: "task5", title: "Certify logs", icon: "clock"},
      {id: "task6", title: "Review carrier edits", icon: "clock"},
      {id: "task7", title: "Go On-Duty", icon: "clock"},
      {id: "task8", title: "Start inspection for vehicle", icon: "document"},
      {id: "task9", title: "Start inspection for trailer", icon: "document"},
    ]
  }
}

const mockStopWorkflow = () => {
  return {
    title: "Stop",
    tasks: [
      {id: "task0", title: "Start inspection for trailer", icon: "document"},
      {id: "task1", title: "Select trailer", icon: "vehicle"},
      {id: "task2", title: "Start inspection for trailer", icon: "document"},
    ]
  }
}



//Driver App
export const getStartWorkflow = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_START_WORKFLOW,
    payload: mockStartWorkflow()
  });
}

export const getStopWorkflow = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_STOP_WORKFLOW,
    payload: mockStopWorkflow()
  });
}

export const setStartWorkflow = workflow => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_START_WORKFLOW,
    payload: workflow
  })
}

export const setStopWorkflow = workflow => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_STOP_WORKFLOW,
    payload: workflow
  })
}

export const changeTrigger = trigger => dispatch => {
  dispatch({
    type: ACTION_TYPES.CHANGE_TRIGGER,
    payload: trigger
  })
}

export const changeTemplate = template => dispatch => {
  dispatch({
    type: ACTION_TYPES.CHANGE_TEMPLATE,
    payload: template
  })
}

export const setTitle = title => dispatch => {
  dispatch({
    type: ACTION_TYPES.SET_TITLE,
    payload: title
  })
}


//Fuel-Energy actions
export const getDriverEfficiency = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY,
    payload: axios.post("/api/setting/driver-efficiency/search", request)
  });
};

export const getFuelCost = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_COST,
    payload: axios.post(`/api/setting/fuel-cost/search`, request),
  });
};

export const getFuelCard = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_CARD,
    payload: axios.post(`/api/setting/fuel-card/search`, request),
  });
};

export const getVehicleFuelType = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLE_FUEL_TYPES,
    payload: axios.post(`/api/setting/vehicle-fuel-type/search`, request),
  });
};

//Driver activity actions
export const getWorkingHour = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_WORKING_HOURS,
    payload: axios.post(`/api/setting/working-hour/search`, request),
  });
};

export const getMaxDistance = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAX_DISTANCES,
    payload: axios.post(`/api/setting/max-distance/search`, request),
  });
};

//Address & Geofences actions
export const getValidAddress = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VALID_ADDRESS,
    payload: axios.post(`/api/setting/add-geo/valid-add/search`, request),
  });
};

export const getInvalidAddress = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_INVALID_ADDRESS,
    payload: axios.post(`/api/setting/add-geo/invalid-add/search`, request),
  });
};

//Maps actions
export const getSettingMap = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAPS,
    payload: axios.post(`/api/setting/map/search`, request),
  });
};
