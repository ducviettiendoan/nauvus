import mock from "../utils/axios-mock";

mock.onPost("/api/overview/assets/vehicles/").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const assetVehicleData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        name: `Vehicle 101 ${i + 1}`,
        location: {
          location: `Stoney Run Drive, 1.6 mi NW Severn, MD`,
          time: "2 months ago"
        },
        lastTrip: "2 months ago",
        status: 'Off',
        fuel: "21%",
        driver: "Ali Singh",
        license: "2628PR",
        tag: "Tegs"
      };
      data.push(item);
    }
    return data;
  }
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: assetVehicleData(),
  };

  return [200, data];
});

mock.onPost("/api/overview/assets/trailers/").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const assetTrailersData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        name: `Vehicle 101 ${i + 1}`,
        location: {
          location: `Stoney Run Drive, 1.6 mi NW Severn, MD`,
          time: "2 months ago"
        },
        lastTrip: "2 months ago",
        status: 'Off',
        battery: "60%",
        tag: "Tags"
      };
      data.push(item);
    }
    return data;
  }
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: assetTrailersData(),
  };

  return [200, data];
});

mock.onPost("/api/overview/drivers/").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const driversData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        name: {
          name: "Ali Singh",
          id_1: "2447",
          id_2: "4046921660",
        },
        drivingStatus: "Driving",
        currentVehicle: "228",
        currentLocation: {
          distance: "8.1 mi SSE",
          location: "Rockford, IL"
        },
        appVersion: "6959",
        operatingSystem: "Android: 10"
      };
      data.push(item);
    }
    return data;
  }
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: driversData(),
  };

  return [200, data];
});

mock.onPost("/api/overview/logs/").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const logsData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i,
        key: i,
        shift: '0:00:00',
        driving: '0:00:00',
        inViolation: '0:00:00',
        from: '-',
        to: '-',
        details: "Missing Driver Certification",
        date: 'Mon, Mar 29',

        carrierName: "Ali Plus Transport",
        carrierAddress: "201 Sangamore Rd",
        carrierId: "Nauvus (82K7)",
        carrierDotNumber: "1542846",

        driverName: "Ali Singh (alisingh)",
        driverLicense: "xxx",
        ruleSet: "NE 80 hour / 8 day",
        vehicle: "Vehicle 101",
        homeName: "Ali Plus Transport",
        homeAddress: "201 Sangamore Rd",
        shippingId: "-",
        trailer: "-",
        distance: "-"
      };
      data.push(item);
    }
    return data;
  }
  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: logsData(),
  };

  return [200, data];
});