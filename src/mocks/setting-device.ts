import mock from "../utils/axios-mock";

mock.onPost("/api/setting/device/gateway/search").reply((config) => {
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
    const gatewaysData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                gatewaySerial: 'GR9X-6AN-3N5',
                gateway: 'VG34',
                name: 'Vehicle  101',
                dataUsed: 'Data Used (This Month)',
                connectivity: "Active",
                battery: 'Battery',
                powerState: 'Power State',
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: gatewaysData(),
    };

    return [200, data];
})

mock.onPost("/api/setting/device/sensor/search").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Sensors Data
    const sensorsData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                name: 'Trailer 109 - Right Door',
                product: 'EM22',
                sensorID: 'WN5WN-KPE-M28',
                signal: 'Connected',
                pairedAsset: "CargoMM23",
                position: 'Middle',
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: sensorsData(),
    };

    return [200, data];
})