import React from 'react'
import Card from "components/Card/Card";
import { makeStyles } from "@material-ui/core/styles";
import vehicleSidebarContentStyle from "../../overview/vehicle/vehicle-sidebar-content/vehicleSidebarContentStyle";
import { connect } from 'react-redux';
import { setOpenDiagnostics, setAnchorEl } from "reducers/overview"
import Grid from '@material-ui/core/Grid';
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import SafetyDetailsCard from "./SafetyDetailsCard";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import Button from "components/CustomButtons/Button";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";

const useStyles = makeStyles(vehicleSidebarContentStyle);

export default function SafetyReportDetails(props) {
  const classes = useStyles()

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  //Dump Data
  const card1 = [
    {
      name: "Event Label Summary",
      value: 0,
    },
    {
      name: "Total Event Tab",
      value: 0
    },
    {
      name: 'Harsh Accel',
      value: 0,
    },
    {
      name: "Harsh Break",
      value: 0,
    },
    {
      name: "Harsh Turn",
      value: 0,
    },
    {
      name: 'Rolling Stop',
      value: 0,
    },
    {
      name: "Crash",
      value: 0,
    },
  ];

  const card2 = [
    {
      name: "Speeding",
      value: 0,
    },
    {
      name: "Time Over Speed Limit",
      value: `${0}s (${0}.${0}%)`,
    },
    {
      name: 'Severe (Over 30%)',
      value: `${0}s (${0}.${0}%)`,
    },
    {
      name: "Heavy (20-30%)",
      value: `${0}s (${0}.${0}%)`,
    },
    {
      name: 'Moderate (10-20%)',
      value: `${0}s (${0}.${0}%)`,
    },
    {
      name: "Light (0-10%)",
      value: `${0}s (${0}.${0}%)`,
    },
  ];

  const card3 = [
    {
      name: "Policy Violation Summary",
      value: 0,
    },
    {
      name: "Policy Violation Summary",
      value: 0
    },
    {
      name: 'No Seatbelt',
      value: 0,
    },
    {
      name: "Obstructed Camera",
      value: 0,
    },
    {
      name: "No Mask",
      value: 0,
    },
  ];

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
              <RoundedTabs tabs={["Driver", "Vehicle"]} tabValue={handleChangeTab}/>
            </GridItem>
            <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
              <Calendar placeholder="Day"/>
              <Button
                color="white"
                aria-label="edit"
                justIcon
                round
                className={`btn-36 ${classes.moreAction} mr-2`}
              >
                <MoreHorizontalIcon/>
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

      <Card style={{height: "665px"}}>
        <Grid container className={classes.gridTitle}>
          <Grid item xs={12} sm={12} md={6} className={classes.centerTitle}>
            <span className={classes.tableTitle}>148 drivers</span>
          </Grid>
          <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
            <ToolboxButton placeholder="Search driver" showFilter/>
          </Grid>
        </Grid>

        <GridContainer style={{paddingLeft:"15px", paddingRight: "15px"}}>
            <GridItem xs={4} sm={4} md={4} className={classes.card}>
              <SafetyDetailsCard content={card1}/>
            </GridItem>

          <GridItem xs={4} sm={4} md={4} className={classes.card}>
            <SafetyDetailsCard content={card2}/>
          </GridItem>

          <GridItem xs={4} sm={4} md={4} className={classes.card}>
            <SafetyDetailsCard content={card3}/>
          </GridItem>

        </GridContainer>
      </Card>

      <GridItem xs={12} sm={12} md={12} className={classes.pagination}>
        <GenPaginationV1
          total={50}
          current={1}
          pageSize={6}
          showSizeChanger
          onChange={null}
          onShowSizeChange={null}
          pageSizeOptions={[6, 12, 18, 24]}
        />
    </GridItem>

    </div>
  )
}

// const mapStateToProps = ({ overview }) => {
//   return {
//   }
// }
//
// const mapDispatchToProps = {
//   setOpenDiagnostics,
//   setAnchorEl
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Diagnostics)