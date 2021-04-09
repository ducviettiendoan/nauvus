import mock from "utils/axios-mock";

//Fuel Energy Mock
mock.onPost("/api/setting/driver-efficiency/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  // Gateway Data
  const driverEfficiencyData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        nameProfiles: 'Default organization profile',
        vehicles: "1 Vehicle"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: driverEfficiencyData(),
  };

  return [200, data];
})

mock.onPost("/api/setting/fuel-cost/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const fuelCostData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        date: '03/18/2021',
        cost: "C$678.00"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: fuelCostData(),
  };

  return [200, data];
})

mock.onPost("/api/setting/fuel-card/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const fuelCardData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        cardVendor: 'Comdata | FleetCor',
        code: 'N12345',
        billGroup: 'BRX6T',
        email: "example@gmail.com",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: fuelCardData(),
  };

  return [200, data];
})

mock.onPost("/api/setting/vehicle-fuel-type/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const vehicleFuelTypeData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        vehicle: 'vehicle 101',
        year: '2017',
        make: 'FORD',
        model: "Fusion",
        fuelType: "M85",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: vehicleFuelTypeData(),
  };

  return [200, data];
})

//Driver Activity Mock
mock.onPost("/api/setting/working-hour/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const workingHoursData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'],
        workingDays: ["Wednesday", "Thursday"],
        tags: ['Tags']
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: workingHoursData(),
  };

  return [200, data];
})

mock.onPost("/api/setting/max-distance/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const maxDistancesData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        distances: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'],
        workingDays: ["Wednesday", "Thursday"],
        tags: ['Tags']
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: maxDistancesData(),
  };

  return [200, data];
})

//Address-Geofences Mock
mock.onPost("/api/setting/add-geo/invalid-add/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const invalidAddressData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        address: '314  Jenna Lane',
        name: 'Des Moines',
        number: '50313',
        tags: 'Invalid',
        notes: "Vehicles near Park plaza warehouse",
        address_type: "Yard"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: invalidAddressData(),
  };

  return [200, data];
})

mock.onPost("/api/setting/add-geo/valid-add/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const validAddressData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        address: '4517 Washington Ave. Manchester, Kentucky 39495',
        name: {
          addressName: 'Park Plaza WAAREHOUSE',
          addressId: '21634452'
        },
        number: '21634452',
        tags: 'Tags',
        notes: "Vehicles near Park plaza warehouse",
        address_type: "Yard"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: validAddressData(),
  };

  return [200, data];
})

//Map Mock
mock.onPost("/api/setting/map/search").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  const mapData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        name: 'GR9X-6AN-3N5'
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: mapData(),
  };

  return [200, data];
})
