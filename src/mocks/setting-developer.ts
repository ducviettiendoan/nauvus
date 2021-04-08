import mock from "utils/axios-mock";

//Webhook
mock.onPost("/api/setting/developer/webhook").reply((config) => {
  let pageSize = 6;
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
    let pageSize = 6;
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
