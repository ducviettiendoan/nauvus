import mock from "../utils/axios-mock";

mock.onPost("/api/fuel-energy/dashboard/drivers").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Drivers Data
    const driversData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                vehicle: "Vehicle 101",
                efficiency: "39.1 MPG",
                fuelUsed: '2.0 gal',
                energyUsed: "0.0 kWh",
                distance: "78.1 mi",
                drivingElectric: '0.0',
                estCarbonEmissions: '39.2 lb',
                estCost: "C$10.76",
                totalEngineRunTime: "3h 20m",
                idleTime: "10s (0.1%)",
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
})

mock.onPost("/api/fuel-energy/dashboard/vehicles").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Vehicles Data
    const vehiclesData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                vehicle: "Vehicle 101",
                efficiency: "39.1 MPG",
                fuelUsed: '2.0 gal',
                energyUsed: "0.0 kWh",
                distance: "78.1 mi",
                drivingElectric: '0.0',
                estCarbonEmissions: '39.2 lb',
                estCost: "C$10.76",
                totalEngineRunTime: "3h 20m",
                idleTime: "10s (0.1%)",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: vehiclesData(),
    };

    return [200, data];
});

mock.onPost("/api/fuel-energy/IFTA").reply((config) => {
    let pageSize = 9;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Vehicles Data
    const iftaData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                key: i +1,
                jurisdiction: {
                    jurisdictionOdd: "DC",
                    jurisdictionEven: "MD",
                    id: i+1,
                },
                taxableMiles: {
                    taxableMilesOdd: '0 mil',
                    taxableMilesEven: "105.7 mil",
                    id: i+1,
                },
                totalMiles: {
                    totalMilesOdd: "12.2 mil",
                    totalMilesEven: "105.7 mil",
                    id: i+1,
                },
                taxPaidGallons: "0 gal",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: iftaData(),
    };

    return [200, data];
})