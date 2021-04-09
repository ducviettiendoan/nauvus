import mock from "../utils/axios-mock";

mock.onPost("/api/setting/driver-record/gateway").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;
    // Driver Record Data
    const gatewaysData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 1,
                activity: 'Off Duty',
                at: 'Feb 28, 5:34 PM',
                duration: '62h 38m',
                distance: 'Distance (Mi)',
                location: "Location",
                notes: '19702',
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