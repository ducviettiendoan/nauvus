export type SettingLinkSharingState = Readonly<typeof initialState>;

//Action Type
export const ACTION_TYPES = {
  //Alert Contact action type
  GET_ALERT_CONTACT: 'setting/link-sharing/GET_ALERT_CONTACT',

  //Schedule Report action type
  GET_SCHEDULE_REPORT: 'setting/link-sharing/GET_SCHEDULE_REPORT',

  //Live Sharing action type
  GET_BY_ASSET: 'setting/link-sharing/GET_BY_ASSET',
  GET_BY_LOCATION: 'setting/link-sharing/GET_BY_LOCATION',
  GET_BY_ROUTE: 'setting/link-sharing/GET_BY_ROUTE',
}

//Initial State
const initialState = {
  //Alert Contact state
  alertContacts: [],

  //Schedule Report state
  scheduleReports: [],

  //Live Sharing state
  byAssets: [],
  byLocations: [],
  byRoutes: []
}

//Reducer
export default (state: SettingLinkSharingState = initialState, action): SettingLinkSharingState => {
  switch (action.type) {
    //Alert Contact Reducer
    case ACTION_TYPES.GET_ALERT_CONTACT: {
      return {
        ...state,
        alertContacts: action.payload
      };
    }

    //Schedule Report Reducer
    case ACTION_TYPES.GET_SCHEDULE_REPORT: {
      return {
        ...state,
        scheduleReports: action.payload
      };
    }

    //Live Sharing Reducer
    case ACTION_TYPES.GET_BY_ASSET: {
      return {
        ...state,
        byAssets: action.payload
      };
    }
    case ACTION_TYPES.GET_BY_LOCATION: {
      return {
        ...state,
        byLocations: action.payload
      };
    }
    case ACTION_TYPES.GET_BY_ROUTE: {
      return {
        ...state,
        byRoutes: action.payload
      };
    }
    default:
      return state;
  }
}

//Data
//Alert Contact Data
const alertContactData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'Esther Howard',
      phone: '(347) 555-0133',
      email: 'debra.holt@example.com'
    };
    data.push(item);
  }
  return data;
}

//Schedule Report Data
const scheduleReportData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'Driver Report',
      repeat: "Weekly",
      sendAt: 'Friday 12:00 PM EET',
      recipients: 2,
      target : 'Entire Group',
      createdBy : 'Tatle'
    };
    data.push(item);
  }
  return data;
}

//Live Sharing Data
const byAssetData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'GR9X-6AN-3N5',
      linkExpires: 'Never'
    };
    data.push(item);
  }
  return data;
}

const byLocationData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      location: 'Park Plaza Warehouse',
      name: 'GR9X-6AN-3N5',
      description: 'By Location' ,
      linkExpires: 'Never'
    };
    data.push(item);
  }
  return data;
}

const byRouteData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      route: 'Route 1',
      name: 'GR9X-6AN-3N5',
      description: 'By Recurring Route',
      linkExpires: 'Never'
    };
    data.push(item);
  }
  return data;
}

//Action
//Alert Contact Action
export const getAlertContact = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ALERT_CONTACT,
    payload: alertContactData
  });
};

//Schedule Report Action
export const getScheduleReport = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_SCHEDULE_REPORT,
    payload: scheduleReportData
  });
};

//Live Sharing Action
export const getByAsset = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_ASSET,
    payload: byAssetData
  });
};

export const getByLocation = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_LOCATION,
    payload: byLocationData
  });
};

export const getByRoute = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_BY_ROUTE,
    payload: byRouteData
  });
};
