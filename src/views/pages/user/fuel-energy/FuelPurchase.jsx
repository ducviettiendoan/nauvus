import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Grid } from "@material-ui/core";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Calendar from "components/Calendar/Calendar";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Button from "components/CustomButtons/Button.js";
import { getPurchaseReport } from "reducers/fuel-energy";
import { IRootState } from "reducers";
import { connect } from "react-redux";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import Table from "components/Table/TableV1";

const styles = {
  select: {
    color: "#25345C",
    fontWeight: 700,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    marginTop: "14px",
    color: "#25345C",
    marginLeft: "24px",
    paddingTop: "12px !important",
  },
  calendar: {
    marginLeft: "8px !important",
    marginRight: "9px !important",
  },
  filterIcon: {
    marginTop: 13,
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
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
    padding: "0 16px !important",
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px",
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  textName: {
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#25345C",
    paddingLeft: "12px",
  },
  textStatus: {
    fontSize: "14px",
    lineHeight: "24px",
    paddingLeft: "0px !important",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "53px",
    height: "41px",
  },
  textEmail: {
    fontSize: "16px",
    lineHeight: "21px",
    color: "#25345C",
    fontWeight: 400,
  },
  gridTitle: {
    padding: "20px",
  },
};

const useStyles = makeStyles(styles);

export function FuelPurchase(props) {
  const classes = useStyles();

  React.useEffect(() => {
    props.getPurchaseReport();
  }, []);

  const [tab, setTab] = useState();

  const handleChangeTab = (event, newTab) => {
    setTab(newTab);
  };

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };
  

  const columns = [
    {
      title: "Vehicle",
      key: "vehicle",
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: (vehicle) => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{vehicle}</div>
        </div>
      ),
    },
    {
      title: "Efficiency",
      key: "efficiency",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (efficiency) => (
        <div className={classes.textEmail}>{efficiency}</div>
      ),
    },
    {
      title: "Fuel Used",
      key: "fuelUsed",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (fuelUsed) => <div className={classes.textEmail}>{fuelUsed}</div>,
    },
    {
      title: "Energy Used",
      key: "energyUsed",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (energyUsed) => (
        <div className={classes.textEmail}>{energyUsed}</div>
      ),
    },
    {
      title: "Distance",
      key: "distance",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (distance) => <div className={classes.textEmail}>{distance}</div>,
    },
    {
      title: "% Driving Electric",
      key: "drivingElectric",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (drivingElectric) => (
        <div className={classes.textEmail}>{drivingElectric}</div>
      ),
    },
    {
      title: "Est. Carbon Emissions",
      key: "estCarbonEmissions",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (estCarbonEmissions) => (
        <div className={classes.textEmail}>{estCarbonEmissions}</div>
      ),
    },
    {
      title: "Est. Costning",
      key: "estCost",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (estCost) => <div className={classes.textEmail}>{estCost}</div>,
    },
    {
      title: "Total Engine Run Time",
      key: "totalEngineRunTime",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (totalEngineRunTime) => (
        <div className={classes.textEmail}>{totalEngineRunTime}</div>
      ),
    },
    {
      title: "Idle Time (%)",
      key: "idleTime",
      onHeaderCell: { className: classes.onHeaderCellNext },
      render: (idleTime) => <div className={classes.textEmail}>{idleTime}</div>,
    },
  ];

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <GridContainer className={classes.topHeader}>
                    <GridItem
                      xs={12}
                      sm={11}
                      md={8}
                      xl={6}
                      className={classes.topHeaderTitle}
                    >
                      <RoundedTabs
                        tabs={[
                          "All(15)",
                          "Verified(12)",
                          "Unverified(5)",
                          "Processing(1)",
                          "Invalid(10)",
                        ]}
                        tabValue={handleChangeTab}
                      />
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={4}
                      md={4}
                      xl={6}
                      className={classes.topHeaderButton}
                    >
                      <Calendar placeholder="Day" />
                      <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                      >
                        <MoreHorizontalIcon />
                      </Button>
                      <Button round className="btn-round-green w-84">
                        <LiveIconWhite />
                        Live
                      </Button>
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>

              <div>
                {props.data.length > 0 && (
                  <Table
                    renderTitle={
                      <Grid container className={classes.gridTitle}>
                        <Grid item xs={12} sm={12} md={6}></Grid>
                        <Grid
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.headLeft}
                        >
                          <ToolboxButton
                            placeholder="Search driver"
                            showFilter
                            showColumn
                          />
                        </Grid>
                      </Grid>
                    }
                    columns={columns}
                    dataSource={props.data}
                    onHeaderRow={{
                      className: classes.onHeaderRow,
                    }}
                    onBodyRow={{
                      className: classes.tableRow,
                    }}
                  />
                )}
              </div>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  ({ fuelEnergy }: IRootState) => ({
    data: fuelEnergy.purchaseReports,
  }),
  {
    getPurchaseReport,
  }
)(FuelPurchase);
