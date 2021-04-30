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
        for (let i = startPage; i < 5; i++) {
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

mock.onPost("/api/report/vehicle/drivingVehicleHours").reply((config) => {
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

mock.onPost("/api/report/vehicle/fuelEfficiency").reply((config) => {
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
    const fuelEfficiency = () => {
        let data = [];
        let item1 = {
            id: 1,
            leastEfficiency: "402",
            efficiency: "61.1 l/100 km",
        };
        let item2 = {
            id: 2,
            leastEfficiency: "246",
            efficiency: "57.8 l/100 km.",
        };
        let item3 = {
            id: 3,
            leastEfficiency: "576",
            efficiency: "56.7 l/100 km.",
        };
        let item4 = {
            id: 4,
            leastEfficiency: "186",
            efficiency: "48.5 l/100 km.",
        };
        let item5 = {
            id: 5,
            leastEfficiency: "387",
            efficiency: "48.2 l/100 km.",
        }

        data.push(item1,item2,item3,item4,item5);
        // data.push(item2);
        // data.push(item3);
        // data.push(item4);
        // data.push(item5);

        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: fuelEfficiency(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/idealHours").reply((config) => {
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
    const idealHours = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                topIdealer: "345",
                idealTime: "224.5 h",
                fuelWasted: "543.9 gal"
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: idealHours(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/utilization").reply((config) => {
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
    const utilization = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                lastUtilized: "387",
                utilization: "34%",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: utilization(),
    };

    return [200, data];
});


mock.onPost("/api/report/vehicle/dormancy").reply((config) => {
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
    const dormancy = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                mostDormant: "698",
                dormancyTime: "2 months",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: dormancy(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/detention").reply((config) => {
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
    const detention = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                mostEfficientVehicles: '599',
                efficiency: "5.1 MPG",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: detention(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/drivingDistance").reply((config) => {
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
    const drivingDistance = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                topVehicle: '498',
                miles: "894.2 ml",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: drivingDistance(),
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
    const drivingHours = () => {
        let data = [];
        for (let i = startPage; i < 5; i++) {
            let item = {
                id: i + 1,
                topVehicle: '598',
                hours: '45.6 h',
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: drivingHours(),
    };

    return [200, data];
});

mock.onPost("/api/report/vehicle/chartData").reply((config) => {

    const chartData = () => {
        let data = [];

        let chart1 = [12, 6, 12, 9, 5.5, 7.5, 14, 5, 9, 5.5, 9, 15, 5, 9, 3.5, 6];
        let chart2 = [5, 2.5, 5, 4, 2, 3, 6, 1.5, 3.5, 2, 4, 6, 2, 3.5, 1, 3];
        let chart3 = [17, 9, 13, 8, 11, 20.5, 7, 12.5, 8, 13.5, 21, 7, 13.5, 4.9, 9];
        let chart4 = [5, 2.5, 5, 4, 2, 3, 6, 1.5, 3.5, 2, 4, 6, 2, 3.5, 1, 3];
        let chart5 = [17, 9, 13, 8, 11, 20.5, 7, 12.5, 8, 13.5, 21, 7, 13.5, 4.9, 9];

        data.push(chart1,chart2,chart3,chart4,chart5);
        return data;
    }

    const data = {
        data: chartData(),
    };

    return [200, data];
});