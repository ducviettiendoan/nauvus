import React from "react";
// @material-ui/core components
import { Theme, makeStyles } from "@material-ui/core";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import { connect } from "react-redux";
import { loadVehicles } from "reducers/vehicle";
import { IRootState } from "reducers";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import { MoreHoriz } from "@material-ui/icons";
import { Row } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import LogsTableDetails from "views/pages/user/overview/components/LogsTableDetails";
import { setOpenDrawer } from 'reducers/overview';

const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0px 16px !important",
  },
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  logContainer: {
    padding: "0px 30px !important",
  },
  iconButton: {
    "&:hover": {
      color: "#25345C !important",
    },
  },
  textTags: {
    fontSize: "14px",
    lineHeight: "24px",
    marginTop: "16px",
    marginBottom: "15px",
    marginLeft: "24px",
    padding: "12px 14px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 71,
    height: "41px",
  },
  textSub: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    marginLeft: "24px",
    paddingTop: "12px !important",
    color: "#25345C",
  },
  tableCustom: {
    marginBottom: "0px !important",
    "& div > table": {
      marginBottom: "0px !important",
    },
  },
};

interface StyleProps {
  root: BaseCSSProperties;
}

const dumpData = [
  {
    dutyStatus: "Status",
    timeInCurrentStatus: "67:21",
    vehicleName: "vehicle 101",
    timeUntilBreak: "-",
    driveRemaining: "12:00",
    shiftRemaining: "16:00",
    cycleRemaining: "80:00",
    cycleTomorrow: "80:00",
  },
];

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);

export function Logs(props) {
  const classes = useStyles({} as StyleProps);

  React.useEffect(() => {
    props.setOpenDrawer(false);
  }, []);

  const formatDutyStatus = (cell, row) => {
    return (
      <>
        <div className={classes.textTags}>{cell}</div>
      </>
    );
  };

  const formatTimeInCurrentStatus = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatVehicleName = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatAddTimeUntilBreak = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatDriveRemaining = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatShiftRemaining = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const formatCycleRemaining = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  const addCycleTomorrow = (cell, row) => {
    return (
      <>
        <div className={classes.textSub}>{cell}</div>
      </>
    );
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} className={classes.logContainer}>
              <GridContainer className={classes.topHeader}>
                <GridItem
                  xs={12}
                  sm={11}
                  md={8}
                  xl={6}
                  className={classes.topHeaderTitle}
                >
                  55 Activity
                </GridItem>
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  xl={6}
                  className={classes.topHeaderButton}
                >
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHoriz />
                  </Button>
                </GridItem>
              </GridContainer>

              <Card>
                <div>
                  <ToolkitProvider
                    data={dumpData}
                    keyField="_id"
                    columns={[
                      {
                        dataField: "dutyStatus",
                        text: "Duty Status",
                        formatter: formatDutyStatus,
                      },
                      {
                        dataField: "timeInCurrentStatus",
                        text: "Time in current status",
                        formatter: formatTimeInCurrentStatus,
                      },
                      {
                        dataField: "vehicleName",
                        text: "Vehicle name",
                        formatter: formatVehicleName,
                      },
                      {
                        dataField: "timeUntilBreak",
                        text: "Time until break",
                        formatter: formatAddTimeUntilBreak,
                      },
                      {
                        dataField: "driveRemaining",
                        text: "Drive remaining",
                        formatter: formatDriveRemaining,
                      },
                      {
                        dataField: "shiftRemaining",
                        text: "Shift remaining",
                        formatter: formatShiftRemaining,
                      },
                      {
                        dataField: "cycleRemaining",
                        text: "Cycle remaining",
                        formatter: formatCycleRemaining,
                      },
                      {
                        dataField: "cycleTomorrow",
                        text: "Cycle tomorrow",
                        formatter: addCycleTomorrow,
                      },
                    ]}
                  >
                    {(props) => (
                      <div
                        className={`table table-settings ${classes.tableCustom} `}
                      >
                        <BootstrapTable
                          {...props.baseProps}
                          bootstrap4={true}
                          bordered={false}
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              </Card>
              <LogsTableDetails />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({ authentication, vehicle }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles,
  }),
  {
    loadVehicles,
    setOpenDrawer
  }
)(Logs);
