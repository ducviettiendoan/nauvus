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

mock.onPost("/api/compliance/HOS/report").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  // Report Data
  const reportData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        shift: "0:00:00",
        driving: "0:00:00",
        inViolation: '0:00:00',
        from: "0.8 km S Stony Point, NY",
        to: "0.8 km S Stony Point, NY",
        details: 'Missing Driver Certification',
        date: 'Mon, Mar 29',
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: reportData(),
  };

  return [200, data];
})

mock.onPost("/api/compliance/HOS/duty-status").reply((config) => {
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
  const dutyStatusData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        dutyStatus: "Driving",
        currentTime: "67:21",
        vehicleName: '619',
        timeUntilBreak: "8:00",
        driveRemaining: "7:41",
        shiftRemaining: '7:41',
        cycleRemaining: '69:07',
        cycleTomorrow: '69:07',
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: dutyStatusData(),
  };

  return [200, data];
})