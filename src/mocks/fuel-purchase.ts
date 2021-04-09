import mock from "../utils/axios-mock";

mock.onPost("/api/fuel-energy/fuel-purchase").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Fuel-Purchase Data
    const fuelPurchaseData = () => {
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
        data: fuelPurchaseData(),
    };

    return [200, data];
})