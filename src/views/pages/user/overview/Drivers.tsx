import React, {useEffect, useState} from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import {Theme, makeStyles, Card} from '@material-ui/core';
import {BaseCSSProperties} from '@material-ui/core/styles/withStyles';

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import Button from "components/CustomButtons/Button.js";
import {connect} from 'react-redux';
// import {loadVehicles} from 'reducers/vehicle';
import {IRootState} from 'reducers';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {getDriversData, setOpenDrawer} from "reducers/overview"
import DotIcon from "components/Icons/DotIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import DriverDetails from "views/pages/user/overview/components/DriverDetails";

const styles = {
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
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
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8,
    fontWeight: 400,
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
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  drivingStatusContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  dotIcon: {
    color: "#7CE7AC",
    marginTop: 10
  },
  textTable: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  textTableId: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#C4C4C4",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  textStatus: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  GridDriverDetails: {
    padding: "0 !important"
  }
};

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);


export function Drivers(props) {
  const classes = useStyles({} as StyleProps);

  useEffect(() => {
    props.getDriversData()
  }, [])

  // useEffect(() => {
  //   async function fetchVehicles() {
  //     await props.loadVehicles();
  //   }
  //
  //   fetchVehicles();
  // }, [1]);

  const [chipData, setChipData] = useState([
    {key: 0, label: 'Standard Admin'},
    {key: 1, label: 'Full admin'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: user => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{user.name}</div>
          <div className={classes.textTableId}>{user.id_1}</div>
          <div className={classes.textTableId}>{user.id_2}</div>
        </div>
      ),
    },
    {
      title: 'Driving Status',
      key: 'drivingStatus',
      onHeaderCell: {className: classes.onHeaderCell},
      render: drivingStatus => <div className={classes.drivingStatusContainer}>
        <div><DotIcon className={classes.dotIcon}/></div>
        <div className={classes.textTable}>{drivingStatus}</div>
      </div>
    },
    {
      title: 'Current Vehicle',
      key: 'currentVehicle',
      onHeaderCell: {className: classes.onHeaderCell},
      render: currentVehicle => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{currentVehicle}</div>
        </div>
      )
    },
    {
      title: 'Current Location',
      key: 'currentLocation',
      onHeaderCell: {className: classes.onHeaderCell},
      render: currentLocation => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{currentLocation.distance}</div>
          <div className={classes.textTable}>{currentLocation.location}</div>
        </div>
      )
    },
    {
      title: 'App version',
      key: 'appVersion',
      onHeaderCell: {className: classes.onHeaderCell},
      render: appVersion => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{appVersion}</div>
        </div>
      )
    },
    {
      title: 'Operating System',
      key: 'operatingSystem',
      onHeaderCell: {className: classes.onHeaderCell},
      render: operatingSystem => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{operatingSystem}</div>
        </div>
      )
    },
  ]

  const onBackDriver = () => {
    props.setOpenDrawer(false)
  }
  const viewDetail = () => {
    props.history.push("/o/drivers/aaaaaa")
  }

  return (
    <div>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={props.openDriverDetails ? classes.GridDriverDetails : ""}>
            {
              props.openDriverDetails
                ?
                <DriverDetails onBack={onBackDriver}/>
                :
                (
                  props.data.length > 0 && <Table
                    renderTitle={
                      <Grid container className={classes.gridTitle}>
                        <Grid item xs={12} sm={12} md={6}>
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
                        <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                          <ToolboxButton placeholder="Search for driver" showFilter showColumn/>
                        </Grid>
                      </Grid>
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
                  />
                )
            }
          </GridItem>
        </GridContainer>
      </GridItem>

    </div>
  );
}

export default connect(
  ({authentication, vehicle, overview}: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    // vehicles: vehicle.vehicles,
    data: overview.driversData,
    openDriverDetails : overview.openDriverDetails
  }),
  {
    // loadVehicles,
    getDriversData,
    setOpenDrawer
  }
)(Drivers);
