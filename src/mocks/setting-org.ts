import mock from "utils/axios-mock";

mock.onPost("/api/setting/org/user-roles/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  // Users & Roles Data
  const dumpDataRoles = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: `key${i + 2}`,
        user: `Cameron Williamson ${i + 1}`,
        email: `jessica.hanson@example.com${i + 1}`,
        permissions: `View and Edit`,
        roles: `Standart Admin ${i + 1}`,
        access: `Entire Organisation${i}`,
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: dumpDataRoles(),
  };

  return [200, data];
});

// Drivers Data
mock.onPost("/api/setting/org/drivers/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const activeDriversData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        name: `Brooklyn Simmons ${i + 1}`,
        username: "greenkoala518",
        tags: "Status",
        peerGroup: "Group 12",
        phone: "(208) 555-0112",
        dlState: "Maine",
        dlNumber: "558612",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: activeDriversData(),
  };

  return [200, data];
});

mock.onPost("/api/setting/org/deact-drivers/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const deactivateDriversData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        name: "Chal Vee",
        username: "Chal",
        tags: "Status",
        peerGroup: "Group 12",
        phone: "(208) 555-0112",
        dlState: "Maine",
        dlNumber: "558612",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: deactivateDriversData(),
  };

  return [200, data];
});

// Tags Data
mock.onPost("/api/settings/org/tags/search").reply((config) => {
  const tagsData = () =>  [
    {
      email: "alma.lawson@example.com",
      role: "Super Admin",
    },
  ];
  const data = {
    data: tagsData(),
  };
  return [200, data];
})


//Activity Logs Data
mock.onPost("/api/setting/org/activity-log/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  // Activity Log Data
  const activityLogData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: `key${i + 2}`,
        logEvent: "dolores.chambers@example.com",
        operation: {
          id: "74287",
          operation: "changed MessagePushNotificationsEnabled from false to true."
        } ,
        date: "March 17th, 12:16 am",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: activityLogData(),
  };

  return [200, data];
})

//Invoice Data
mock.onPost("/api/setting/org/billing/invoice/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  // Invoice Data
  const invoiceData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: `key${i + 2}`,
        dueDate: "02/03/2021",
        po: "Signed Agreement",
        invoice: "30510326",
        amount: "$627.12",
        remainingBalance: "$14.05",
        status: "Overdue",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: invoiceData(),
  };

  return [200, data];
})


mock.onPost("/api/setting/org/billing/summary/search").reply((config) => {
  if (config.data) {
    const request = JSON.parse(config.data);
  }

  // Invoice Data
  const invoiceSummaryData = () => {
    let data = [];
    for (let i = 0; i < 3; i++) {
      let item = {
        id: i + 1,
        dueDate: "02/03/2021",
        po: "Signed Agreement",
        invoice: "30510326",
        amount: "$627.12",
        remainingBalance: "$14.05",
        status: "Overdue",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    data: invoiceSummaryData(),
  };

  return [200, data];
})

