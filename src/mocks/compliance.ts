import mock from "../utils/axios-mock";

mock.onPost("/api/compliance/driver-HOS").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const driverHOSData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        driver: "Ali Singh",
        dutyStatus: "Driving",
        timeCurrentStatus: "3:04",
        vehicle: "1",
        timeUntilBreak: "8:00",
        driveRemaining: "7:41",
        shiftRemaining: "7:41",
        cycleRemaining: "69:07",
        cycleTomorrow: "69:07",
        drivingInVio: "1"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: driverHOSData(),
  };

  return [200, data];
})

mock.onPost("/api/compliance/HOS/violations").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const violationsData = () => {
    let data = [];
    for (let i = 0; i < 20; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        driver: "John Smith",
        violationsType: "Missing Driver Certification",
        date: "Aug 21, 2010",
        start: "9:06AM",
        end: "9:23AM",
        duration: "17m 28s"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: violationsData(),
  };

  return [200, data];
})

mock.onPost("/api/compliance/HOS/missing-certifications").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const missingCertificationsData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        driver: "John Smith",
        violationsType: "Missing Driver Certification",
        date: "Aug 21, 2010",
        start: "9:06AM",
        end: "9:23AM",
        duration: "17m 28s"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: missingCertificationsData(),
  };

  return [200, data];
})

//Status summary
mock.onPost("/api/compliance/HOS/status-summary").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const statusSummaryData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        key: i + 1,
        driver: "Ali Singh",
        offDuty: "23:59",
        sleeperBerth: "0:00",
        driving: "0:00",
        onDuty: "0:00",
        yardMoveg: "0:00",
        personalConveyanceg: "0:00"
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: statusSummaryData(),
  };

  return [200, data];
})

//unassigned HOS
mock.onPost("/api/compliance/HOS/unassigned-HOS").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const unassignedHOSData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        vehicle: "539",
        unassignedTime: "48m 10s",
        unassignedDistance: "46km",
        segments: "2",
        pending: "0",
        annotated: "0",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: unassignedHOSData(),
  };

  return [200, data];
})

//unassigned HOS annotated
mock.onPost("/api/compliance/HOS/unassigned-HOS-annotated").reply((config) => {
  let pageSize = 7;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const unassignedHOSAnnotatedData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        startTime: "Apr 1, 2021 9:24 PM EDT",
        duration: "1m 22s",
        distance: "0.0 kWh",
        trip: {
          from: "Quik X Mississauga",
          to: "Quik X Mississauga"
        },
        annotation: "Yard Move at Quik X  Mississauga",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: unassignedHOSAnnotatedData(),
  };

  return [200, data];
})

//unassigned HOS unassigned
mock.onPost("/api/compliance/HOS/unassigned-HOS-unassigned").reply((config) => {
  let pageSize = 7;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;

  const unassignedHOSUnassignedData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 2,
        key: i + 2,
        startTime: "Apr 1, 2021 9:24 PM EDT",
        duration: "1m 22s",
        distance: "0.0 kWh",
        trip: {
          from: "Quik X Mississauga",
          to: "Quik X Mississauga"
        },
        cameraId: "-",
        annotation: "Yard Move at Quik X  Mississauga",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: unassignedHOSUnassignedData(),
  };

  return [200, data];
})
