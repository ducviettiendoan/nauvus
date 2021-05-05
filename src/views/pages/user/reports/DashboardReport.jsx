import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import complianceStyle from "../compliance/style/complianceStyle";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import Button from "components/CustomButtons/Button";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import VehicleReport from "./dashboard/VehicleReport";
import TrailerReport from "./dashboard/TrailerReport";
import DriverReport from "./dashboard/DriverReport";

const useStyles = makeStyles(complianceStyle);

export default function DashboardReport(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
          <RoundedTabs tabs={["Vehicle", "Trailer", "Driver"]} tabValue={handleChangeTab}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Calendar placeholder="Day"/>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
            // onClick={handleOpenMore}
          >
            <MoreHorizontalIcon/>
          </Button>
          <Button round className="btn-round-green w-84">
            <LiveIconWhite/>
            Live
          </Button>
        </GridItem>
      </GridContainer>
      {value === 0 && <VehicleReport/>}
      {value === 1 && <TrailerReport/>}
      {value === 2 && <DriverReport/>}
    </div>
  )
};

