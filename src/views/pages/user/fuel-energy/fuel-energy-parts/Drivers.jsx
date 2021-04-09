import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//material-ui/lab components
// @material-ui/icons
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import { InfoOutlined } from "@material-ui/icons";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {getDrivers} from "reducers/fuel-energy";
import {connect} from 'react-redux';

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
    textBold: {
        fontSize: '16px',
        lineHeight: '21px',
        color: "#25345C",
        fontWeight: 700,
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
        textAlign: 'center'
    },
    alignItemsCenter: {
        display: "flex",
        alignItems: "center",
    },
    alert: {
        padding: "0 18px 0 18px"
    },
    txtInfoMain: {
        fontWeight: "bold",
        fontSize: "18px",
        lineHeight: "27px",
        color: "#25345C",
    },
    txtInfoSub: {
        fontSize: "14px",
        lineHeight: "21px",
        color: "#25345C",
        fontWeight: "400",
    },
    moreAction: {
        background: "#FFFFFF !important",
        border: "1px solid #ECEEF0 !important",
    },
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
        marginTop: "-20px !important",
        marginBottom: "16px !important",
        marginRight: "8px"
        }
    }

};


const dumpData = [
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
  { vehicle: "Vehicle 101", efficiency: "39.1 MPG", fuelUsed: "2.0 gal", energyUsed: "0.0 kWh", distance: "78.1 mi", drivingElectric: "0.0", estCarbonEmissions: "39.2 lb", estCost: "C$10.76", totalEngineRunTime: "3h 20m", idleTime: "10s (0.1%)" },
];

const useStyles = makeStyles(styles);

export function Drivers(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getDrivers();
  }, []);

  const columns=[
    {
      key: "vehicle",
      title: "Vehicle",
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: (vehicle) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{vehicle}</div>
        </div>
      ),
    },
    {
      key: "efficiency",
      title: "Efficiency",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: efficiency => <div className={classes.textEmail}>{efficiency}</div>
    },
    {
      key: "fuelUsed",
      title: "Fuel Used",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: fuelUsed => <div className={classes.textEmail}>{fuelUsed}</div>
    },
    {
      key: "energyUsed",
      title: "Energy Used",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: energyUsed => <div className={classes.textEmail}>{energyUsed}</div>
    },
    {
      key: "distance",
      title: "Distance",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: distance => <div className={classes.textEmail}>{distance}</div>
    },
    {
      key: "drivingElectric",
      title: "% Driving Electric",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: drivingElectric => <div className={classes.textEmail}>{drivingElectric}</div>
    },
    {
      key: "estCarbonEmissions",
      title: "Est. Carbon Emissions",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: estCarbonEmissions => <div className={classes.textEmail}>{estCarbonEmissions}</div>
    },
    {
      key: "estCost",
      title: "Est. Cost",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: estCost => <div className={classes.textEmail}>{estCost}</div>
    },
    {
      key: "totalEngineRunTime",
      title: "Total Engine Run Time",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: totalEngineRunTime => <div className={classes.textEmail}>{totalEngineRunTime}</div>
    },
    {
      key: "idleTime",
      title: "Idle Time(%)",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: idleTime => <div className={classes.textEmail}>{idleTime}</div>
    },
  ]

  return (
    <div>
          <div>
             <Table
              renderTitle={
              <div>
                <div className={classes.alert}>              
                <Card >
                  <CardBody>
                    <div className="ml-5" style={{ textAlign: "left" }}>
                      <div className={classes.txtInfoMain}>
                        Efficiency Benchmarks
                      </div>
                      <div className={`mb-4 ${classes.txtInfoSub}`}>
                        Efficiency benchmarks are now available for select
                        vehicle makes and models. To turn on this feature, go
                        here.
                      </div>
                    </div>
                    <div style={{ position: "absolute", top: "16px" }}>
                      <InfoOutlined />
                    </div>
                  </CardBody>
                </Card>
              </div>
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
  console.log(fuelEnergy.drivers.data);
  return {
    data: fuelEnergy.drivers.data,
    page: fuelEnergy.drivers.page,
    total: fuelEnergy.drivers.total,
    pageSize: fuelEnergy.drivers.pageSize
  };
};

const mapDispatchToProps = {
  getDrivers
};

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);



























