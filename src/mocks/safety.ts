import mock from "../utils/axios-mock";
import Driver1 from "assets/img/driver-01.png";
import Driver2 from "assets/img/driver-02.png";
import Driver3 from "assets/img/driverError.png";
import Driver4 from "assets/img/driver-04.png";

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

mock.onPost("/api/safety/assignment/unassigned").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    const Unassigned = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                key: i + 1,
                vehicle: "612",
                faces: "4"
            };
            data.push(item);
        }
        return data;
    };

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: Unassigned(),
    };

    return [200, data];
});

mock.onPost("/api/safety/assignment/unassigned/details").reply((config) => {
    let pageSize = 2;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 10 ? 10 : pageSize * page;
    const UnassignedDetails = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                key: i + 1,
                face: "612",
                driver: "Baldev Gill",
                vehicle: "612",
                trip: ""
            };
            data.push(item);
        }
        return data;
    };

    const data = {
        total: 10,
        page: page,
        pageSize: pageSize,
        data: UnassignedDetails(),
    };

    return [200, data];
});

mock.onPost("/api/safety/cameras").reply((config) => {
    const Cameras = () => {
        let data = [];

        let user1 = {
            id: 1,
            key: 1,
            series: 154,
            place: "West Carolina IIL",
            name: 'John Ursul',
            img: Driver1,
            status: {
                name: "Update",
                online: true,
                time: "5 min",
            }
        };

        let user2 = {
            id: 2,
            key: 2,
            series: 112,
            place: "Florida, L2",
            name: 'Markus Hennry',
            img: Driver2,
            status: {
                name: "Update",
                online: false,
                time: "1 hour 21 min",
            }
        };

        let user3 = {
            id: 3,
            key: 3,
            series: 234,
            place: "New York, B1 LL",
            name: 'Erick Danko',
            img: Driver3,
            status: {
                name: "Update",
                online: false,
                time: "11 hours",
            }
        };

        let user4 = {
            id: 4,
            key: 4,
            series: 323,
            place: "San Francisco, K1",
            name: 'Ricardo Santaro',
            img: Driver4,
            status: {
                name: "Update",
                online: false,
                time: '11 min',
            }
        };

        data.push(user1,user2,user3,user4);
        return data;
    };

    const data = {
        data: Cameras(),
    };

    return [200, data];
});

mock.onPost("/api/safety/safety-report-table").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    const SafetyReportTable = () => {
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
        data: SafetyReportTable(),
    };

    return [200, data];
});