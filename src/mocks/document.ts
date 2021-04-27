import mock from "../utils/axios-mock";

mock.onPost("/api/documents/submitted").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const submittedData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        submittedBy: "Theodore Granov",
        receivedOn: "Jan 27, 2021 5:45PM",
        documentType: "Bill of Lading",
        notes: "None"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: submittedData(),
  };

  return [200, data];
})

mock.onPost("/api/documents/types").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const typesData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        typeName: "Proof of Delivery",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: typesData(),
  };

  return [200, data];
})