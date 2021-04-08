import axios from "axios";
import { REQUEST, SUCCESS, FAILURE } from "../utils/action-type.util";
export type SettingDeveloperState = Readonly<typeof initialState>;

//Action Type
export const ACTION_TYPES = {
  //Developer metric action type
  GET_API_TRAFFIC: 'setting/developer/GET_API_TRAFFIC',
  GET_WEBHOOK_TRAFFIC: 'setting/developer/GET_WEBHOOK_TRAFFIC',
  GET_CHART_DATA: 'setting/developer/GET_CHART_DATA',

  //API Token action type
  GET_API_TOKEN: 'setting/developer/GET_API_TOKEN',

  //Webhook action type
  GET_WEBHOOK: 'setting/developer/GET_WEBHOOK',
}

//Initial State
const initialState = {
  errorMessage: null,
  loading: false,
  //Developer metric state
  apiTraffics: [],
  webhookTraffics: [],
  chartData: [],

  //API Token state
  apiTokens: [],

  //Webhook State
  webhooks: []
}

//Reducer
export default (state: SettingDeveloperState = initialState, action): SettingDeveloperState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_API_TRAFFIC):
    case REQUEST(ACTION_TYPES.GET_WEBHOOK_TRAFFIC):
    case REQUEST(ACTION_TYPES.GET_CHART_DATA):
    case REQUEST(ACTION_TYPES.GET_API_TOKEN):
    case REQUEST(ACTION_TYPES.GET_WEBHOOK):
      return {
        ...state,
        loading: true,
      };
      case FAILURE(ACTION_TYPES.GET_API_TRAFFIC):
      case FAILURE(ACTION_TYPES.GET_WEBHOOK_TRAFFIC):
      case FAILURE(ACTION_TYPES.GET_CHART_DATA):
      case FAILURE(ACTION_TYPES.GET_API_TOKEN):
      case FAILURE(ACTION_TYPES.GET_WEBHOOK):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    //Developer metric reducer
    case SUCCESS(ACTION_TYPES.GET_API_TRAFFIC): {
      return {
        ...state,
        apiTraffics: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_WEBHOOK_TRAFFIC): {
      return {
        ...state,
        webhookTraffics: action.payload.data
      };
    }
    case SUCCESS(ACTION_TYPES.GET_CHART_DATA): {
      return {
        ...state,
        chartData: action.payload.data
      };
    }

    //API Token Reducer
    case SUCCESS(ACTION_TYPES.GET_API_TOKEN): {
      return {
        ...state,
        apiTokens: action.payload.data
      };
    }

    //Webhook Reducer
    case SUCCESS(ACTION_TYPES.GET_WEBHOOK): {
      return {
        ...state,
        webhooks: action.payload.data
      };
    }
    default:
      return state;
  }
}

//Data
//Developer metrics data
const apiTrafficData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      requestTime: "49:30:00",
      apiEndpoint: 'Fleet/Vehicles',
      statusCode: '200',
      method: "GBT",
      duration: "0.153S",
      apiToken: "FleetMan",
      reguestID: "5ac4ed4d"
    };
    data.push(item);
  }
  return data;
}

const webhookTrafficData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      requestTime: "49:30:00",
      payloadType: 'Ping',
      statusCode: '405',
      duration: "0.153S",
      webhookName: "WebhookABC",
      requestID: "5eb74760-e071-4a13-922a-fd417d3284ea"
    };
    data.push(item);
  }
  return data;
}

const lineChartData = {
  title: {
    text: "API Volume"
  },
  series: [
    {
      color: '#27AE60',
      name: 'Successes',
      data: [
        ["2021-3-17 11:59:00", 288],
        ["2021-3-18 11:59:00", 291],
        ["2021-3-18 14:59:00", 301],
        ["2021-3-19 11:59:00", 291],
        ["2021-3-20 11:59:00", 292],
        ["2021-3-21 11:59:00", 282],
        ["2021-3-22 11:59:00", 278],
        ["2021-3-23 11:59:00", 286],
        ["2021-3-24 11:59:00", 288],
        ["2021-3-25 11:59:00", 288]
      ]
    },
    {
      color: '#E53935',
      name: 'Errors',
      data: [
        ["2021-3-17 11:59:00", 1],
        ["2021-3-18 11:59:00", 1],
        ["2021-3-19 11:59:00", 1],
        ["2021-3-20 11:59:00", 1],
        ["2021-3-21 11:59:00", 1],
        ["2021-3-22 11:59:00", 1],
        ["2021-3-23 11:59:00", 1],
        ["2021-3-24 11:59:00", 1],
        ["2021-3-25 11:59:00", 1]
      ]
    }
  ],
}

//API Tokens Data
const apiTokenData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'Truckmate',
      accessTokens: "nauvus_api_IsXNeRyK8fPRSs9z0IcSeQ9sJhrchX",
      scope: 'Full Admin',
      version: "2021-02-16",
      status: "Latest"
    };
    data.push(item);
  }
  return data;
}

//Webhook Data
const webhookData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: 'Webhook',
      url: 'https://example-webhook.com/',
      secretKey: 'dLDC8X8Bd3OFrSPt6vg2TGMXOXnISGqv',
      configAlert: "Stable",
    };
    data.push(item);
  }
  return data;
}

//Action
//Developer metric Action
export const getApiTraffic = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_API_TRAFFIC,
    payload: apiTrafficData()
  });
};

export const getWebhookTraffic = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_WEBHOOK_TRAFFIC,
    payload: webhookTrafficData
  });
};

export const getChartData = () => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_CHART_DATA,
    payload: lineChartData
  });
};

//API Token action
export const getApiToken = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_API_TOKEN,
    payload: axios.post(`/api/setting/developer/apiToken`, request),
  });
};

//Webhook action
export const getWebhook = (request) => async dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_WEBHOOK,
    payload: axios.post(`/api/setting/developer/webhook`, request),
  });
};


