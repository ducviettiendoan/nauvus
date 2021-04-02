import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import {Grid} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import complianceStyle from './style/complianceStyle';
import FilterIcon from "components/Icons/FilterIcon";
import PieChartCard from "./compliance-card/PieChartCard";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import Table from "../../../../components/Table/TableV1";

const useStyles = makeStyles(complianceStyle);

export default function ComplianceDashboard(props) {
  const classes = useStyles();

  const data = [
    {id: 2, key: 2, driver: "Ali Singh", hour: "2h 8min"},
    {id: 3, key: 3, driver: "Ali Singh", hour: "2h 8min"},
  ]

  const columns = [
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: {className: classes.onHeaderCell},
      render: driver => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      title: 'Hours In Violation',
      key: 'hour',
      onHeaderCell: {className: classes.onHeaderCell},
      render: hour => <div className={classes.textHour}>{hour}</div>
    },
  ]


  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Grid
            container
            spacing={2}
            className={classes.gridCardContainer}
          >
            <Grid item xs={12} sm={4}>
              <PieChartCard
                title={"HOS Violations"}
                data={[
                  {name: "In Violation", value: 60},
                  {name: "Compliant", value: 40},
                ]}
                radio={["Hours", "Logs"]}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <PieChartCard
                title={"Unidentified Driving"}
                data={[
                  {name: "Unidentified", value: 30},
                  {name: "Identified", value: 70}
                ]}
                radio={["Hours"]}

              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <PieChartCard
                title={"Unassigned Segments"}
                data={[
                  {name: "Unassigned", value: 5},
                  {name: "Managed", value: 95}
                ]}
                radio={["Hours", "Segments"]}
              />
            </Grid>
          </Grid>
          <Table
            renderTitle={
              <CardBody>
                <Grid
                  container
                  justify="space-between"
                >
                  <GridItem className={classes.searchBox} xs={4}>
                    <SettingSearchBox placeholder="Search Drivers"/>
                  </GridItem>
                  
                  <GridItem className={classes.filterButton}>
                    <IconButton className={classes.filterButtonText1}>
                      <FilterIcon className={classes.filterIcon} />
                      Filter
                    </IconButton>
                  </GridItem>
                  
                </Grid>
              </CardBody>
            }
            columns={columns}
            dataSource={data}
            onHeaderRow={{
              className: classes.onHeaderRow
            }}
            onBodyRow={{
              className: classes.tableRow
            }}
          />
        </GridItem>
      </GridContainer>
    </>
  );
}
