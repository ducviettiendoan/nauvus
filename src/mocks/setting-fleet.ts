import mock from "utils/axios-mock";

mock.onPost("/api/setting/map/search").reply((config) => {
  const mapData = [
    { id: 1, name: 'GR9X-6AN-3N5'},
    { id: 2, name: 'GR9X-6AN-3N5'},
    { id: 3, name: 'GR9X-6AN-3N5'},
    { id: 4, name: 'GR9X-6AN-3N5'},
    { id: 5, name: 'GR9X-6AN-3N5'},
    { id: 6, name: 'GR9X-6AN-3N5'},
  ];

  return [200, mapData];
});

mock.onPost("/api/setting/add-geo/invalid-add/search").reply((config) => {
  const invalidAddressData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
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

  return [200, invalidAddressData()];
});

mock.onPost("/api/setting/add-geo/valid-add/search").reply((config) => {
  const validAddressData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      let item = {
        id: i + 1,
        address: '4517 Washington Ave. Manchester, Kentucky 39495',
        name: 'Park Plaza WAAREHOUSE',
        number: '21634452',
        tags: 'Tags',
        notes: "Vehicles near Park plaza warehouse",
        address_type: "Yard"
      };
      data.push(item);
    }
    return data;
  }

  return [200, validAddressData()];
});

mock.onPost("/api/setting/max-distance/search").reply((config) => {
  const maxDistanceData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      let item = {
        id: i + 1,
        distance: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'],
        workingDays: ["Wednesday", "Thursday"],
        tags: ['new1']
      };
      data.push(item);
    }
    return data;
  }

  return [200, maxDistanceData()];
});

mock.onPost("/api/setting/working-hour/search").reply((config) => {
  const workingHoursData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
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

  return [200, workingHoursData()];
});


mock.onPost("/api/setting/vehicle-fuel-type/search").reply((config) => {
  const vehicleFuelTypeData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
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

  return [200, vehicleFuelTypeData()];
});

mock.onPost("/api/setting/fuel-card/search").reply((config) => {
  const fuelCardData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
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

  return [200, fuelCardData()];
});

mock.onPost("/api/setting/fuel-cost/search").reply((config) => {
  const fuelCostData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      let item = {
        id: i + 1,
        date: '03/18/2021',
        cost: "1 Vehicle"
      };
      data.push(item);
    }
    return data;
  }

  return [200, fuelCostData()];
});

mock.onPost("/api/setting/driver-efficiency/search").reply((config) => {
  const driverEfficiencyData = () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
      let item = {
        id: i + 1,
        nameProfiles: 'Default organization profile',
        vehicles: "1 Vehicle"
      };
      data.push(item);
    }
    return data;
  }

  return [200, driverEfficiencyData()];
});