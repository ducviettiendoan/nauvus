import mock from "../utils/axios-mock";

mock.onPost("/api/alerts/insidents").reply((config) => {
  let pageSize = 10;
  let page = 1;
  let total = 64;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > total ? total : pageSize * page;
  const result = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let a = i % 2;
      let item = {
        id: i + 1,
        key: i + 1,
        action: a == 1 ? true : false,
        alertId: 131401 + i,
        alert: `‘567’ engine has been idle for more than ${15 + i} minutes.`,
        source: 567 + 1,
        status: a == 1 ? "Alerting" : "Resolved after 15 minutes",
        time: "Nov 30, 10:33 AM", 
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: total,
    page: page,
    pageSize: pageSize,
    data: result(),
  };

  return [200, data];
});