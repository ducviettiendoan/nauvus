import mock from "utils/axios-mock";

//Webhook
mock.onPost("/api/setting/developer/webhook").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
//Webhook Data
const webhookData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
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
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: webhookData(),
  };

  return [200, data];
});

//API Token
mock.onPost("/api/setting/developer/apiToken").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //API Token Data
  const apiTokenData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: apiTokenData(),
    };
  
    return [200, data];
  });

  //API Traffic

  mock.onPost("/api/setting/developer/apiTraffic").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //API Traffic Data
  const apiTrafficData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: apiTrafficData(),
    };
  
    return [200, data];
  });

  //Webhook Traffic

  mock.onPost("/api/setting/developer/webhook-traffic").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Webhook Traffic Data
  const webhookTrafficData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: webhookTrafficData (),
    };
  
    return [200, data];
  });
  
  //Chart Data
  mock.onPost("/api/setting/developer/chartData").reply((config) => {
  
      const chartData = {
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
    const data = {
      data: chartData,
    };
  
    return [200, data];
  });
  
  