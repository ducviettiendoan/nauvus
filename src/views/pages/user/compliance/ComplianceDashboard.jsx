import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Grid} from "@material-ui/core";
import complianceStyle from './style/complianceStyle';
import PieChartCard from "./compliance-card/PieChartCard";
import Table from "components/Table/TableV1";
import {connect} from "react-redux";
import {getComplianceDashboardData} from "reducers/compliance";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import { lastDayOfDecade } from "date-fns";

const useStyles = makeStyles(complianceStyle);

export function ComplianceDashboard(props) {
  const classes = useStyles();

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: driver => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{driver}</div>
        </div>
      ),
    },
    {
      title: 'Hours in violation',

      key: 'hour',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: hour => <div className={classes.textEmail}>{hour}</div>
    }
  ]

  React.useEffect(() => {
    // Get list data
    props.getComplianceDashboardData();
  }, []);
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Grid
            container
            spacing={2}
            className={classes.gridCardContainer}
          >
            <Grid item xs={12} sm={12} md={6}>
              <PieChartCard
                
                title={"HOS Violations"}
                data = {[{
                  value: 65,

                  itemStyle: {
                    color: "#739BD3",
                  },
      
                  detail: {
                    offsetCenter: ['0%', '0%'],
                    formatter: '{value}%',
                    fontSize: 21,
                    fontWeight: 700,
                    fontFamily: 'Lato',
                }
                }]}
                radio={["Hours", "Logs"]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <PieChartCard
                title={"Unidentified Driving"}
                data = {[{
                  value: 50,

                  itemStyle: {
                    color: "#739BD3",
                  },
      
                  detail: {
                      offsetCenter: ['0%', '0%'],
                      formatter: '{value}%',
                      fontSize: 21,
                      fontWeight: 700,
                      fontFamily: 'Lato',
                  }
                }]}
                radio={["Hours"]}
              />
            </Grid>
          </Grid>
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={7}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
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
                            <Button onClick={handleClearAll} className={classes.clearAll}>
                              Clear All
                            </Button>
                          ) : ""}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={12} md={5} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search driver" showFilter showColumn />
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={props.data}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
            
          </div>
        </GridItem>
      </GridContainer>
    </>
  );
}

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.complianceDashboard.data,
    page: compliance.complianceDashboard.page,
    total: compliance.complianceDashboard.total,
    pageSize: compliance.complianceDashboard.pageSize,
  };
};

const mapDispatchToProps = {
  getComplianceDashboardData
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplianceDashboard);