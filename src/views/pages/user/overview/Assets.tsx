import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import { Theme, makeStyles } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { connect } from 'react-redux';
import { loadVehicles } from 'reducers/vehicle';
import { IRootState } from 'reducers';
import VehicleAssets from "./components/VehicleAssets";
import VehicleTrailers from "./components/VehicleTrailers";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import AddOutlined from "@material-ui/icons/AddOutlined";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import { MoreHoriz } from "@material-ui/icons";


const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
};

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles<Theme, StyleProps>(() => styles as any);


export function Assets(props) {
  const classes = useStyles({} as StyleProps);

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };


  React.useEffect(() => {
    async function fetchVehicles() {
      await props.loadVehicles();
    }
    fetchVehicles();
  }, [1]);

  return (
    <div>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["Vehicles (1)", "Trailers (1)"]} tabValue={handleChangeTab} />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                {value === 0 && <Button
                  round
                  className="btn-round-active mr-2"
                  startIcon={<AddOutlined />}
                >
                  Activate Devices
                </Button>}

                {value === 1 && <Button
                  round
                  className="btn-round-active mr-2"
                  startIcon={<AddOutlined />}
                >
                  Activate Trailers
                </Button>}

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

            {value === 0 && <VehicleAssets />}
            {value === 1 && <VehicleTrailers />}

          </GridItem>
        </GridContainer>
      </GridItem>

    </div>
  );
}

export default connect(
  ({ authentication, vehicle }: IRootState) => ({
    isAuthenticated: authentication.isAuthenticated,
    user: authentication.user,
    vehicles: vehicle.vehicles
  }),
  {
    loadVehicles
  }
)(Assets);