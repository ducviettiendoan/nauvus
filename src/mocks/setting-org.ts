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
  // Users & Roles Data
  const activeDriversData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        name: "Brooklyn Simmons",
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

const deactivateDriversData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      name: "Chal Vee",
      username: "Chal",
    };
    data.push(item);
  }
  return data;
};

// Tags Data
const tagsData = [
  {
    email: "alma.lawson@example.com",
    role: "Super Admin",
  },
];

//Activity Logs Data
const activityLogsData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
    let item = {
      id: i + 1,
      logEvent: "dolores.chambers@example.com",
      operation: "updated org id '74287':",
      date: "March 17th, 12:16 am",
    };
    data.push(item);
  }
  return data;
};

//Invoice Data
const invoiceData = () => {
  let data = [];
  for (let i = 0; i < 6; i++) {
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
