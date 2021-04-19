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

mock.onPost("/api/compliance/HOS/report-1").reply((config) => {
  let pageSize = 1;
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


//Compliance Dashboard
mock.onPost("/api/compliance/compliance-dashboard").reply((config) => {
  let pageSize = 5;
  let page = 1;
  if (config.data) {
      const request = JSON.parse(config.data);
      page = request.page;
      pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const complianceDashBoardData = () => {
      let data = [];
      for (let i = startPage; i < endPage; i++) {
          let item = {
              id: i + 1,
              driver: "Ali Singh",
              hour: "2h 8min",
              // fuelUsed: '2.0 gal',
              // energyUsed: "0.0 kWh",
              // distance: "78.1 mi",
              // drivingElectric: '0.0',
              // estCarbonEmissions: '39.2 lb',
              // estCost: "C$10.76",
              // totalEngineRunTime: "3h 20m",
              // idleTime: "10s (0.1%)",
          };
          data.push(item);
      }
      return data;
  }

  const data = {
      total: 64,
      page: page,
      pageSize: pageSize,
      data: complianceDashBoardData(),
  };

  return [200, data];
})

mock.onPost("/api/compliance/HOS/report-2").reply((config) => {
  let pageSize = 4;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const reportData2 = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        time: {
          start: "12:00:00 AM EDT",
          end: "8:55:29 AM EDT"
        },
        duration: "9h 6m",
        status: "Driving",
        remark: "-",
        vehicle: "619",
        location: "0.8 km S Stony Point, NY",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: reportData2(),
  };

  return [200, data];
});

mock.onPost("/api/compliance/dashboard/driverDistance").reply((config) => {
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
  const driverDistanceData = () => {
    let data = [];
    for (let i = startPage; i < 5; i++) {
      let item = {
        id: i + 1,
        topVehicles: "423",
        kilometers: "2445.2 km",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: driverDistanceData(),
  };

  return [200, data];
});

mock.onPost("/api/compliance/dashboard/drivingHours").reply((config) => {
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
  const drivingHoursData = () => {
    let data = [];
    for (let i = startPage; i < 5; i++) {
      let item = {
        id: i + 1,
        topVehicles: "423",
        hours: "34.1 h",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: drivingHoursData(),
  };

  return [200, data];
});

mock.onPost("/api/compliance/dashboard/fuelUsage").reply((config) => {
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
  const fuelUsageData = () => {
    let data = [];
    for (let i = startPage; i < 5; i++) {
      let item = {
        id: i + 1,
        topComsumers: "345",
        fuelUsed: "4.5 gal",
        fuelWasted: "5.2 gal",
      };
      data.push(item);
    }
    return data;
  }

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: fuelUsageData(),
  };

  return [200, data];
});

mock.onPost("/api/compliance/driver-HOS-audit").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const HOSAuditData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        key: i + 1,
        driver: "Chal Vee",
        totalUpdate: "116",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: HOSAuditData(),
  };

  return [200, data];
})


mock.onPost("/api/compliance/driver-HOS-audit/report").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const HOSAuditReportData = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        key: i + 1,
        editType: "Status change",
        updatedAt: "Apr 1, 2021 8:59 PM EDT",
        updatedBy: "Ali Singh",
        vehicle: "Vehicle 101",
        status: "Driving",
        at: "Apr 1, 2021 8:59 PM EDT",
        until: "-",
        action: "Created",
        mobileDevice: "Kamal’s iPhone"
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: HOSAuditReportData(),
  };

  return [200, data];
})

mock.onPost("/api/compliance/duty-status-summary").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const dutyStatusSummary = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        key: i + 1,
        driver: "Ali Singh",
        offDuty: "23:59",
        sleeperBerth: "0:00",
        driving: "0:00",
        onDuty: '0:00',
        yardMoveg: "0:00",
        personalConveyanceg: "0:00",
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: dutyStatusSummary(),
  };

  return [200, data];
});

mock.onPost("/api/compliance/HOS-audit-transfer").reply((config) => {
  let pageSize = 10;
  let page = 1;
  if (config.data) {
    const request = JSON.parse(config.data);
    page = request.page;
    pageSize = request.pageSize;
  }

  const startPage = pageSize * page - pageSize;
  const endPage = pageSize * page > 64 ? 64 : pageSize * page;
  //Compliance Dashboard Data
  const HOSAuditTransfer = () => {
    let data = [];
    for (let i = startPage; i < endPage; i++) {
      let item = {
        id: i + 1,
        key: i + 1,
        requestedAt: {
          date: 'Feb 27, 2021',
          time: '10:08 30 AM PST',
          service: "Webservice",
        },
        status: {
          id: i+1,
          data: "Accepted",
        },
        driver: {
          name: "Btady Tom",
          userId: "ID: 45609823"
        },
        dateRequested: {
          date_1: "Feb 20, 2021",
          date_2: "Feb 27, 2021",
        },
        comment: "mn 1625",
        internalTools: 'Description',
      };
      data.push(item);
    }
    return data;
  };

  const data = {
    total: 64,
    page: page,
    pageSize: pageSize,
    data: HOSAuditTransfer(),
  };

  return [200, data];
});

//Safety Coaching

// mock.onPost("/api/safety/coaching-driver-queue").reply((config) => {
//   let pageSize = 10;
//   let page = 1;
//   if (config.data) {
//     const request = JSON.parse(config.data);
//     page = request.page;
//     pageSize = request.pageSize;
//   }
//
//   const startPage = pageSize * page - pageSize;
//   const endPage = pageSize * page > 64 ? 64 : pageSize * page;
//   //Compliance Dashboard Data
//   const CoachingDriverQueue = () => {
//     let data = [];
//     for (let i = startPage; i < endPage; i++) {
//       let item = {
//         id: i + 1,
//         key: i + 1,
//         rank: '146',
//         name: 'Srgii Kashyra',
//         score: "68",
//         events: "2",
//         overSpeedLimit: '55',
//         distractedRate: "0.00 (0 events)",
//         followingDistanceRate: "0.00 (0 events)",
//         totalDistance: "12,216 km",
//       };
//       data.push(item);
//     }
//     return data;
//   };
//
//   const data = {
//     total: 64,
//     page: page,
//     pageSize: pageSize,
//     data: CoachingDriverQueue(),
//   };
//
//   return [200, data];
// });
//
// mock.onPost("/api/safety/dash-cam").reply((config) => {
//   let pageSize = 10;
//   let page = 1;
//   if (config.data) {
//     const request = JSON.parse(config.data);
//     page = request.page;
//     pageSize = request.pageSize;
//   }
//
//   const startPage = pageSize * page - pageSize;
//   const endPage = pageSize * page > 64 ? 64 : pageSize * page;
//   const DashCam = () => {
//     let data = [];
//     for (let i = startPage; i < endPage; i++) {
//       let item = {
//         id: i + 1,
//         key: i + 1,
//         rank: '146',
//         name: 'Srgii Kashyra',
//         score: "68",
//         events: "2",
//         overSpeedLimit: '55',
//         distractedRate: "0.00 (0 events)",
//         followingDistanceRate: "0.00 (0 events)",
//         totalDistance: "12,216 km",
//       };
//       data.push(item);
//     }
//     return data;
//   };
//
//   const data = {
//     total: 64,
//     page: page,
//     pageSize: pageSize,
//     data: DashCam(),
//   };
//
//   return [200, data];
// });

