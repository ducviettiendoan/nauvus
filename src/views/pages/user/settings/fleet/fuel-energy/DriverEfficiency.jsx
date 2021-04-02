import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";

import Button from "components/CustomButtons/Button.js";
import AddOutlined from "@material-ui/icons/AddOutlined";

import EditIcon from "components/Icons/EditIcon";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import {connect} from "react-redux";
import {IRootState} from "../../../../../../reducers";
import {getSensor} from "../../../../../../reducers/setting-device";
import {Sensors} from "../../devices/devices/Sensors";
import {getDriverEfficiency} from "../../../../../../reducers/setting-fleet";

const styles = {
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  topHeaderButton: {
    textAlign: "right",
    marginTop: -50,
    paddingRight: "0px !important"
  },
  actionButton: {
    paddingTop: '12px !important',
  },
};

const useStyles = makeStyles(styles);

export function DriverEfficiency(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getDriverEfficiency();
  }, []);

  const formatNameProfiles = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatVehicles = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="twitter" simple>
          <EditIcon style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
      </div>
    )
  }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridItem xs={12} sm={12} md={12} xl={12} className={classes.topHeaderButton}>
                <Button
                  round
                  className="btn-round-active mr-2"
                  startIcon={<AddOutlined/>}
                >
                  Create profile
                </Button>
                <Button
                  round
                  className="btn-round-gray"
                  startIcon={<AddOutlined/>}
                >
                  Essign vehicle
                </Button>
              </GridItem>
              <Card testimonial>
                <ToolkitProvider
                  data={props.data}
                  keyField="_id"
                  columns={[
                    {
                      dataField: "nameProfiles",
                      text: "Name Profiles",
                      formatter: formatNameProfiles
                    },
                    {
                      dataField: "vehicles",
                      text: "Vehicles",
                      formatter: formatVehicles
                    },
                    {
                      dataField: "actions",
                      text: "Actions",
                      formatter: addActionButton
                    },

                  ]}
                >
                  {props => (
                    <div className="table table-settings">
                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4={true}
                        bordered={false}
                      />

                    </div>
                  )}
                </ToolkitProvider>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({settingFleet}: IRootState) => ({
    data: settingFleet.driverEfficiencies
  }),
  {
    getDriverEfficiency
  }
)(DriverEfficiency);
