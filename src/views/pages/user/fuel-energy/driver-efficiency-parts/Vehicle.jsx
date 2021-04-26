import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//material-ui/lab components
// @material-ui/icons
// core components
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {getDriverEfficiencyVehicles} from "reducers/fuel-energy";
import { connect } from "react-redux";

const styles = {
    selected: {
        height: 24,
        width: "auto",
        background: "#ECEEF0 !important",
        borderRadius: 28,
        color: "#25345C !important",
        display: "flex",
        alignItems: "center",
    },
    textName: {
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#25345C',
      paddingLeft: "12px"
  },
    tableRow: {
        '&:nth-of-type(even)': {
            backgroundColor: "#fbfbfb",
        },
    },
    onHeaderRow: {
        background: "#ECEEF0",
    },
    gridTitle: {
        padding: "20px"
    },
    onHeaderCellFirst: {
        fontWeight: 700,
        color: "#25345C",
        paddingLeft: "28px"
    },
    onHeaderCellNext: {
        fontWeight: 700,
        color: "#25345C",
        textAlign: "center",
    },
    alignItemsCenter: {
        display: "flex",
        alignItems: "center",
    },
    // moreAction: {
    //     background: "#FFFFFF !important",
    //     border: "1px solid #ECEEF0 !important",
    // },
    textEmail: {
        display: "flex",
        justifyContent: "center",
        fontSize: '16px',
        lineHeight: '24px',
        color: '#25345C',
        paddingLeft: "12px",
        fontWeight: 400,
    },
    topHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16
    },
    topHeaderTitle: {
        textAlign: "left",
        fontWeight: 700,
        fontSize: 18,
        color: "#25345C",
        padding: "0 16px !important",
        height: "38px",
        width: "91px"
    },
    topHeaderButton: {
        textAlign: "right !important",
        display: "flex",
        alignItems: "center"
    },
    moreAction: {
        background: "#FFFFFF !important",
        border: "1px solid #ECEEF0 !important"
    },
    headLeft: {
        display: "flex",
        justifyContent: "flex-end",
        "& > div": {
        marginTop: "-4px !important",
        marginBottom: "5px !important",
        marginRight: "-14px"
        }
    }

};


// const dumpData = [
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
//   { driver: "Alexandr Luchin", overall: "39.1 MPG", cruisecontrol: "2.0 gal", coasting: "0.0 kWh", hightorque: "78.1 mi", idling: "0.0", anticipation: "39.2 lb", greenband: "C$10.76", overspeed: "3h 20m", drivingtime: "10s (0.1%)" },
// ];

const useStyles = makeStyles(styles);

export function Vehicle(props) {
  const classes = useStyles();


  React.useEffect(() => {
    props.getDriverEfficiencyVehicles();
  }, []);

  const columns=[
    {
      key: "driver",
      title: "Driver",
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: (driver) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      key: "overall",
      title: "Overall",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: overall => <div className={classes.textEmail}>{overall}</div>
    },
    {
      key: "cruisecontrol",
      title: "Cruise Control",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: cruisecontrol => <div className={classes.textEmail}>{cruisecontrol}</div>
    },
    {
      key: "coasting",
      title: "Coasting (Any Gear)",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: coasting => <div className={classes.textEmail}>{coasting}</div>
    },
    {
      key: "hightorque",
      title: "High Torque",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: hightorque => <div className={classes.textEmail}>{hightorque}</div>
    },
    {
      key: "idling",
      title: "Idling",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: idling => <div className={classes.textEmail}>{idling}</div>
    },
    {
      key: "anticipation",
      title: "Anticipation",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: anticipation => <div className={classes.textEmail}>{anticipation}</div>
    },
    {
      key: "greenband",
      title: "Green Band",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: greenband => <div className={classes.textEmail}>{greenband}</div>
    },
    {
      key: "overspeed",
      title: "Over Speed",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: overspeed => <div className={classes.textEmail}>{overspeed}</div>
    },
    {
      key: "drivingtime",
      title: "Driving Time",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: drivingtime => <div className={classes.textEmail}>{drivingtime}</div>
    },
  ]

  return (
    <div>
          <div>
            <Table
              renderTitle={
              <div>
                <Grid container className={classes.gridTitle}>                    
                  <Grid xs={12} sm={12} md={12} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search driver" showFilter showColumn/>
                  </Grid>
                </Grid>
                </div>
              }          
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
            

          </div>
              </div>
  );
}

const mapStateToProps = ({fuelEnergy}) => {
  return {
    data: fuelEnergy.driverEfficiencyVehicles.data,
    page: fuelEnergy.driverEfficiencyVehicles.page,
    total: fuelEnergy.driverEfficiencyVehicles.total,
    pageSize: fuelEnergy.driverEfficiencyVehicles.pageSize
  };
};

const mapDispatchToProps = {
  getDriverEfficiencyVehicles
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);



























