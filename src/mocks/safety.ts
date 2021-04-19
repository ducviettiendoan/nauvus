import mock from "../utils/axios-mock";

mock.onPost("/api/safety/coaching-driver-queue").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    const CoachingDriverQueue = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                key: i + 1,
                rank: '146',
                name: 'Srgii Kashyra',
                score: "68",
                events: "2",
                overSpeedLimit: '55',
                distractedRate: "0.00 (0 events)",
                followingDistanceRate: "0.00 (0 events)",
                totalDistance: "12,216 km",
            };
            data.push(item);
        }
        return data;
    };

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: CoachingDriverQueue(),
    };

    return [200, data];
});

mock.onPost("/api/safety/dash-cam").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    const DashCam = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                key: i + 1,
                rank: '146',
                name: 'Srgii Kashyra',
                score: "68",
                events: "2",
                overSpeedLimit: '55',
                distractedRate: "0.00 (0 events)",
                followingDistanceRate: "0.00 (0 events)",
                totalDistance: "12,216 km",
            };
            data.push(item);
        }
        return data;
    };

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: DashCam(),
    };

    return [200, data];
});
