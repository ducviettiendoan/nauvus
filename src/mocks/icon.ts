import mock from "../utils/axios-mock";

mock.onPost("/api/icon/profile").reply((config) => {
    let pageSize = 6;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;

    const profileData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 2,
                key: i + 2,
                driver: "Ali Singh",
                signInType: "Password",
                ipAddress: "109.86.253.206",
                date: "April 13th, 12:53 am (2 days ago)",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: profileData(),
    };

    return [200, data];
})

mock.onPost("/api/icon/view-organization").reply((config) => {
    const viewOrganization = () => {
        let data = [];
        for (let i = 0; i < 7; i++) {
            let item = {
                id: i + 1,
                key: i + 1,
                name: "Singh Transport Logistics",
                user: {tag: "User", userNumber: 1},
                gateWay: 1,
                sensors: 0,
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        data: viewOrganization(),
    };

    return [200, data];
})