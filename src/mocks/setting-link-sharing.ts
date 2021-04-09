import mock from "utils/axios-mock";

//Alert Contact
mock.onPost("/api/setting/link-sharing/alert-contact").reply((config) => {
  let pageSize = 6;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
//Alert Contact Data
const alertContactData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
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
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: alertContactData(),
  };

  return [200, data];
});

//Scheduled Reports
mock.onPost("/api/setting/link-sharing/scheduled-reports").reply((config) => {
    let pageSize = 6;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Scheduled Reports Data
  const scheduledReportsData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: scheduledReportsData(),
    };
  
    return [200, data];
  });

  //By Asset

  mock.onPost("/api/setting/link-sharing/by-asset").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //By Asset Data
  const byAssetData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
        let item = {
          id: i + 1,
          name: 'GR9X-6AN-3N5',
          linkExpires: 'Never'
        };
        data.push(item);
      }
      return data;
    }
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: byAssetData (),
    };
  
    return [200, data];
  });

  //By Location 

  mock.onPost("/api/setting/link-sharing/by-location").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //By Location Data
  const byLocationData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: byLocationData(),
    };
  
    return [200, data];
  });
  
  //By Route

  mock.onPost("/api/setting/link-sharing/by-route").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
    }
  
    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //By Route Data
  const byRouteData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
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
    const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: byRouteData(),
    };
  
    return [200, data];
  });
  
  