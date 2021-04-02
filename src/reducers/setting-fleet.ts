export type SettingFleetState = Readonly<typeof initialState>;

//Actions type
export const ACTION_TYPES = {
  //Fuel-Energy action type
  GET_DRIVER_EFFICIENCY: 'setting/fleet/GET_GATEWAY',
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
  maps: []
};

//Reducer
export default (state: SettingFleetState = initialState, action): SettingFleetState => {
  switch (action.type) {
    //Fuel Energy Reducer
    case ACTION_TYPES.GET_DRIVER_EFFICIENCY: {
      return {
        ...state,
        driverEfficiencies: action.payload
      };
    }
    case ACTION_TYPES.GET_FUEL_COST: {
      return {
        ...state,
        fuelCost: action.payload
      };
    }
    case ACTION_TYPES.GET_FUEL_CARD: {
      return {
        ...state,
        fuelCards: action.payload
      };
    }
    case ACTION_TYPES.GET_VEHICLE_FUEL_TYPES: {
      return {
        ...state,
        vehicleFuelTypes: action.payload
      };
    }

    //Driver Activity Reducer
    case ACTION_TYPES.GET_WORKING_HOURS: {
      return {
        ...state,
        workingHours: action.payload
      };
    }
    case ACTION_TYPES.GET_MAX_DISTANCES: {
      return {
        ...state,
        maxDistances: action.payload
      };
    }

    //Address & Geofences Reducer
    case ACTION_TYPES.GET_VALID_ADDRESS: {
      return {
        ...state,
        validAddresses: action.payload
      };
    }
    case ACTION_TYPES.GET_INVALID_ADDRESS: {
      return {
        ...state,
        invalidAddresses: action.payload
      };
    }

    //Maps Reducer
    case ACTION_TYPES.GET_MAPS: {
      return {
        ...state,
        maps: action.payload
      };
    }
    default:
      return state;
  }
};

//Data
//Fuel-energy Data
const driverEfficiencyData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      nameProfiles: 'Default organization profile',
      vehicles: "1 Vehicle"
    };
    data.push(item);
  }
  return data;
}

const fuelCostData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      date: '03/18/2021',
      cost: "1 Vehicle"
    };
    data.push(item);
  }
  return data;
}

const fuelCardData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      cardVendor: 'Comdata | FleetCor',
      code: 'N12345',
      billGroup: 'BRX6T',
      email: "example@gmail.com",
    };
    data.push(item);
  }
  return data;
}

const vehicleFuelTypeData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      vehicle: 'vehicle 101',
      year: '2017',
      make: 'FORD',
      model: "Fusion",
      fuelType: "M85",
    };
    data.push(item);
  }
  return data;
}

//Driver activity data
const workingHoursData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'],
      workingDays: ["Wednesday", "Thursday"],
      tags: ['Tags']
    };
    data.push(item);
  }
  return data;
}

const maxDistanceData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      distance: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'],
      workingDays: ["Wednesday", "Thursday"],
      tags: ['new1']
    };
    data.push(item);
  }
  return data;
}

//Address & Geofences data
const validAddressData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      name: 'Park Plaza WAAREHOUSE',
      number: '21634452',
      tags: 'Tags',
      notes: "Vehicles near Park plaza warehouse",
      address_type: "Yard"
    };
    data.push(item);
  }
  return data;
}

const invalidAddressData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      address: '314  Jenna Lane',
      name: 'Des Moines',
      number: '50313',
      tags: 'Invalid',
      notes: "Vehicles near Park plaza warehouse",
      address_type: "Yard"
    };
    data.push(item);
  }
  return data;
}

//Maps data
const mapData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'GR9X-6AN-3N5'
    };
    data.push(item);
  }
  return data;
}

//Actions

//Fuel-Energy actions
export const getDriverEfficiency = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_DRIVER_EFFICIENCY,
    payload: driverEfficiencyData
  });
};

export const getFuelCost = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_COST,
    payload: fuelCostData
  });
};

export const getFuelCard = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_FUEL_CARD,
    payload: fuelCardData
  });
};

export const getVehicleFuelType = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VEHICLE_FUEL_TYPES,
    payload: vehicleFuelTypeData
  });
};

//Driver activity actions
export const getWorkingHour = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_WORKING_HOURS,
    payload: workingHoursData
  });
};

export const getMaxDistance = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAX_DISTANCES,
    payload: maxDistanceData
  });
};

//Address & Geofences actions
export const getValidAddress = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_VALID_ADDRESS,
    payload: validAddressData
  });
};

export const getInvalidAddress = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_INVALID_ADDRESS,
    payload: invalidAddressData
  });
};

//Maps actions
export const getMap = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_MAPS,
    payload: mapData
  });
};
