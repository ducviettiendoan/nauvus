import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TextField from '@material-ui/core/TextField';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import ComplianceCard from "./ComplianceCard";
import { Grid, TablePagination } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import LocalBarOutlined from "@material-ui/icons/LocalBarOutlined"

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
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
  },
  table: {
    minWidth: "100%",
  },
  tableHead: {
    backgroundColor: "#ECEEF0"
  }
};

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
          {/* <CardBody backgroundColor={"#E5E5E5"} style={{ maxWidth: "1600px", margin: "auto" }}>

          </CardBody> */}
``
          <Grid
            container
            spacing={2}
            className={classes.gridCardContainer}
          >
            <Grid item xs={4} sm={3} xl={4} md={4}>
              <ComplianceCard
                sampleData={[
                  { x: "60%", y: 60 },
                  { x: "40%", y: 40 }
                ]}
                sampleTitle={
                  "HOS Violations"
                }
              />
            </Grid>
            <Grid item xs={4} sm={3} xl={4} md={4}>
              <ComplianceCard sampleData={[
                { x: "50%", y: 50 },
                { x: "50%", y: 50 }
              ]}
                sampleTitle={
                  "Unidentified Driving"
                }
              />
            </Grid>
            <Grid item xs={4} sm={3} xl={4} md={4}>
              <ComplianceCard sampleData={[
                { x: "30%", y: 30 },
                { x: "70%", y: 70 }
              ]}
                sampleTitle={
                  "Unassigned Segments"
                }/>
            </Grid>
          </Grid>

          <Card testimonial>
            <CardBody>
              <Grid
                container
                justify="space-between"
              >
                <GridItem xs={3} className={classes.searchBar}>
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    placeholder="Search Drivers"
                  />
                </GridItem>
                <GridItem xs={3} className={classes.filterButton} >
                  {/* <Button className={classes.filterButtonText}>Filter</Button> */}
                  <IconButton className={classes.filterButtonText}>
                    <LocalBarOutlined />
                  Filter
                  </IconButton>
                </GridItem>
              </Grid>
            </CardBody>

            <Paper className={classes.root}>
              <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead >
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth, background: "#ECEEF0", fontWeight: "bold"
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Card>

        </GridItem>
      </GridContainer>
    </div>
  );
}
