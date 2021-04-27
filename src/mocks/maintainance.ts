import mock from "../utils/axios-mock";

mock.onPost("/api/maintainance/dvirs").reply((config) => {
    let pageSize = 10;
    let page = 1;
    if (config.data) {
        const request = JSON.parse(config.data);
        page = request.page;
        pageSize = request.pageSize;
    }

    const startPage = pageSize * page - pageSize;
    const endPage = pageSize * page > 64 ? 64 : pageSize * page;

    const dvirsData = () => {
        let data = [];
        for (let i = startPage; i < endPage; i++) {
            let item = {
                id: i + 2,
                key: i + 2,
                asset: "115",
                currentDriver: "Shahid Mamino",
                makeModel: "Freightline R/SCT 120",
                batteryVoltage: "14.3",
                engineHours: "46,567",
                odormeter : "69,469",
                checkEngineLight: "Off",
            };
            data.push(item);
        }
        return data;
    }

    const data = {
        total: 64,
        page: page,
        pageSize: pageSize,
        data: dvirsData(),
    };

    return [200, data];
})
