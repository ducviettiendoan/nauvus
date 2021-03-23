import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ComplianceCard from "./ComplianceCard";
import { Grid, InputAdornment, TablePagination } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.js";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import LocalBarOutlined from "@material-ui/icons/LocalBarOutlined";
import complianceStyle from './style/complianceStyle';
import TableComponent from "../../../Components/Table";
import Search from "@material-ui/icons/Search";
const columns = [
  { id: "driver", label: 'Driver', minWidth: 350 },
  { id: "hour", label: 'Hours in Violation', minWidth: 600 },
];

function createData(driver, hour) {
  return { driver, hour };
}

const rows = [
  createData('Ali Singh', '2h 8min'),
  createData('Ali Singh', '2h 8min'),
];

const useStyles = makeStyles(complianceStyle);

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
                  { x: " ", y: 60 },
                  { x: "40%", y: 40 }
                ]}
                sampleTitle={
                  "HOS Violations"
                }
                sampleLabelRadius={20}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplianceCard sampleData={[
                { x: " ", y: 30 },
                { x: "70%", y: 70 }
              ]}
                sampleTitle={
                  "Unidentified Driving"
                }
                sampleLabelRadius={20}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ComplianceCard sampleData={[
                { x: " ", y: 90 },
                { x: "10%", y: 10 }
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
                          <Search className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                      onChange: event => {
                        setUsername(event.target.value);
                      },
                    }}
                  />
                </GridItem>
                <GridItem xs={3} className={classes.filterButton} >
                  {/* <Button className={classes.filterButtonText}>Filter</Button> */}
                  <IconButton className={classes.filterButtonText}>
                    <img src="/Images/Icon/filter.svg" className={classes.filterIcon}/>
                  Filter
                  </IconButton>
                </GridItem>
              </Grid>
            </CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TableComponent rows={rows} headCells={columns} />
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
