import mock from "../utils/axios-mock";

mock.onPost("/api/report/vehicle/driverDistance").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;

    const driverDistanceData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                topVehicles: "423",
                kilometers: "2445.2 km",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: driverDistanceData(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/drivingHours").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 1 ? 1 : pageSize * page;
    // Duty status Data
    const drivingHoursData = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                topVehicles: "423",
                hours: "34.1 h",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: drivingHoursData(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/fuelUsage").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 1 ? 1 : pageSize * page;
    // Duty status Data
    const fuelUsageData = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                topComsumers: "345",
                fuelUsed: "4.5 gal",
                fuelWasted: "5.2 gal",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: fuelUsageData(),
    };

    return [200, data];
});