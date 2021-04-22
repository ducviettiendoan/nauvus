import mock from "../utils/axios-mock";

mock.onPost("/api/fuel-energy/driver-efficiency/drivers").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Driver-Efficiency Data
    const getDriverEfficiencyDrivers = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                driver: "Alexandr Luchin",
                overall: "39.1 MPG",
                cruisecontrol: "2.0 gal",
                coasting: "0.0 kwH",
                hightorque: "78.1",
                idling: "0.0",
                anticipation: "39,2 lb",
                greenband: "C$10.76",
                overspeed: '3h 20m',
                drivingtime: "10s (0.1%)",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: getDriverEfficiencyDrivers(),
    };

    return [200, data];
})

mock.onPost("/api/fuel-energy/driver-efficiency/vehicles").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Driver-Efficiency Data
    const getDriverEfficiencyVehicles = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                driver: "AlexandrLuchin",
                overall: "39.1 MPG",
                cruisecontrol: "2.0 gal",
                coasting: "0.0 kwH",
                hightorque: "78.1",
                idling: "0.0",
                anticipation: "39,2 lb",
                greenband: "C$10.76",
                overspeed: '3h 20m',
                drivingtime: "10s (0.1%)",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: getDriverEfficiencyVehicles(),
    };

    return [200, data];
})