import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ComplianceCard from "./ComplianceCard";
import {Grid, InputAdornment, TablePagination} from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";
import IconButton from '@material-ui/core/IconButton';
import TableComponent from "../../../../components/Table/CustomTable";
import Search from "@material-ui/icons/Search";
import FilterIcon from "../../../../components/Icons/FilterIcon";
import {cardTitle, roseColor} from "../../../../assets/jss/material-dashboard-pro-react";

const styles = {
  gridCardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px"
  },
  searchBar: {
    textAlign: "left",
    height: "45px",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "32px",
    maxWidth: "300px"
  },
  filterButton: {
    height: "45px",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "32px",
    maxWidth: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  filterButtonText: {
    textTransform: "none",
    fontSize: "14px",
    color: "#25345C"
  },
  table: {
    minWidth: "100%",
  },
  tableHead: {
    backgroundColor: "#ECEEF0"
  },
  filterIcon: {
    marginTop: 13
  },
  btnSearchOnMap: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "40px",
    border: "1px solid #C4C4C4",
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
}

const columns = [
  {id: "driver", label: 'Driver', minWidth: 350},
  {id: "hour", label: 'Hours in Violation', minWidth: 600},
];

function createData(driver, hour) {
  return {driver, hour};
}

const rows = [
  createData('Ali Singh', '2h 8min'),
  createData('Ali Singh', '2h 8min'),
];

const useStyles = makeStyles(styles);

export default function ComplianceDashboard() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Grid
            container
            spacing={2}
            className={classes.gridCardContainer}
          >
            <Grid item xs={12} sm={4}>
              <ComplianceCard
                sampleData={[
                  {x: " ", y: 60},
                  {x: "40%", y: 40}
                ]}
                sampleTitle={
                  "HOS Violations"
                }
                sampleLabelRadius={20}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplianceCard sampleData={[
                {x: " ", y: 30},
                {x: "70%", y: 70}
              ]}
                              sampleTitle={
                                "Unidentified Driving"
                              }
                              sampleLabelRadius={20}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplianceCard sampleData={[
                {x: " ", y: 90},
                {x: "10%", y: 10}
              ]}
                              sampleTitle={
                                "Unassigned Segments"
                              }
                              sampleLabelRadius={50}
              />
            </Grid>
          </Grid>

          <Card testimonial>
            <CardBody>
              <Grid
                container
                justify="space-between"
              >
                <GridItem xs={4}>
                  {/* <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    placeholder="Search Drivers"
                  /> */}
                  <CustomInput
                    formControlProps={{
                      className: classes.btnSearchOnMap
                    }}
                    inputProps={{
                      id: "btn-search-on-map",
                      placeholder: "Search",
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search className={classes.inputAdornmentIcon}/>
                        </InputAdornment>
                      ),
                      onChange: event => {
                        setUsername(event.target.value);
                      },
                    }}
                  />
                </GridItem>
                <GridItem xs={3} className={classes.filterButton}>
                  <IconButton className={classes.filterButtonText}>
                    <FilterIcon className={classes.filterIcon}/>
                    Filter
                  </IconButton>
                </GridItem>
              </Grid>
            </CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TableComponent rows={rows} headCells={columns}/>
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
