import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//material-ui/lab components
// @material-ui/icons
// core components
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {getDriverEfficiencyDrivers} from "reducers/fuel-energy";
import { connect } from "react-redux";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Button from "components/CustomButtons/Button.js";
import { useHistory } from "react-router-dom";


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
        textAlign: 'center'
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
    },
    
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  // selected: {
  //   height: 24,
  //   width: "auto",
  //   background: "#ECEEF0 !important",
  //   borderRadius: 28,
  //   color: "#25345C !important",
  //   display: "flex",
  //   alignItems: "center",
  // },
  clearAll: {
    textTransform: "none",
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    fontWeight: 400,
  },

};

const useStyles = makeStyles(styles);

export function Drivers(props) {
  const classes = useStyles();
  const history = useHistory();

  const onPageChange = (page, pageSize) => {
    props.getDriverEfficiencyDrivers()({page, pageSize});
  }

  const onShowSizeChange = (page, pageSize) => {
    props.getDriverEfficiencyDrivers()({page, pageSize});
  }

  const viewDetail = () => {
    history.push("/u/fuel-energy/driver-efficiency-report/123456789")
  }

  const [chipData, setChipData] = useState([
    {key: 0, label: 'Alexandr Luchin'},
  ]);

  
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  React.useEffect(() => {
    props.getDriverEfficiencyDrivers();
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
                <Grid item xs={12} sm={12} md={4}>
                          <Grid container className={classes.headContainer}>
                            <Grid item xl={2}
                                  className={classes.userRolesTitle}> {chipData.length} selected
                              for </Grid>
                            <Grid item xl={10} className={classes.chipSelected}>
                              {chipData.map(data => (
                                <Chip
                                  deleteIcon={<CloseIcon/>}
                                  label={data.label}
                                  onDelete={handleDelete(data)}
                                  className={classes.chips}
                                />
                              ))}
                              {chipData.length > 0 ?
                                (
                                  <Button onClick={handleClearAll}
                                          className={classes.clearAll}>
                                    Clear All
                                  </Button>
                                ) : ""}
                            </Grid>
                          </Grid>
                        </Grid>                   
                  <Grid xs={12} sm={12} md={8} className={classes.headLeft}>
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
                onClick: viewDetail,
                className: classes.tableRow
              }}
              pagination={{
                total: props.total,
                current: props.page,
                pageSize: props.pageSize,
                onChange: onPageChange,
                onShowSizeChange: onShowSizeChange
              }}
            />
            
          </div>
              </div>
  );
}

const mapStateToProps = ({fuelEnergy}) => {
  return {
    data: fuelEnergy.driverEfficiencyDrivers.data,
    page: fuelEnergy.driverEfficiencyDrivers.page,
    total: fuelEnergy.driverEfficiencyDrivers.total,
    pageSize: fuelEnergy.driverEfficiencyDrivers.pageSize
  };
};

const mapDispatchToProps = {
  getDriverEfficiencyDrivers
};

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);



























