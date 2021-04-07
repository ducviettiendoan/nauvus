import mock from "utils/axios-mock";

mock.onGet("/vehicles").reply(() => {
  const mapData = [
    {"serialnumber": "123456789123456", "longitude": 105.76892, "latitude": 21.03157, "status": "connected", "last_connection_date": "2021-03-14T09:39:08.967039"}
    , {"serialnumber": "123456789123457", "longitude": -73.658648, "latitude": 40.748617, "status": "connected", "last_connection_date": null}
  ];

  return [200, mapData];
});
