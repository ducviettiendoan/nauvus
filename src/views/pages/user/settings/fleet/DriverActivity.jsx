import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import WorkingHours from "./driver-activity/WorkingHours";
import MaxDistance from "./driver-activity/MaxDistance";

const styles = {
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
};

const useStyles = makeStyles(styles);

export default function DriverActivity() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.tabsContainer}>
          <RoundedTabs tabs={["Working Hours", "Max Distance"]} tabValue={handleChangeTab}/>
        </GridItem>
        {value === 0 && <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Button
            round
            className="btn-round-active mr-2"
            startIcon={<AddOutlined/>}
          >
            Add Working Hours
          </Button>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz/>
          </Button>
        </GridItem>}
        {value === 1 && <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Button
            round
            className="btn-round-active mr-2"
            startIcon={<AddOutlined/>}
          >
            Add Max Distance
          </Button>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz/>
          </Button>
        </GridItem>}
      </GridContainer>
      {value === 0 && <WorkingHours/>}
      {value === 1 && <MaxDistance/>}
    </div>
  );
}
