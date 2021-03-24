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
import TableComponent from "components/Table/CustomTable"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "components/Icons/ArrowRightIcon";
import ArrowUpIcon from "components/Icons/ArrowUpIcon";
import PaginationV2 from "components/Pagination/PaginationV2";
import SearchBox from "components/SearchBox/SearchBox";
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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  liveSharingButton: {
    textAlign: "right",
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
  }
};

const HeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Report Name' },
  { id: 'repeat', numeric: true, disablePadding: false, label: 'Repeat' },
  { id: 'sendAt', numeric: true, disablePadding: false, label: 'Send At' },
  { id: 'recipients', numeric: true, disablePadding: false, label: 'Recipients' },
  { id: 'target', numeric: true, disablePadding: false, label: 'Target' },
  { id: 'createdBy', numeric: true, disablePadding: false, label: 'Created By' },
];

function createData(name, repeat, sendAt, recipients, target, createdBy) {
  return { name, repeat, sendAt, recipients, target, createdBy };
}

const rows = [
  createData('Driver Report', 'Weekly', 'Friday 12:00 PM EET', 2, 'Entire Group', 'Tatle'),
  createData('IFTA', 'Monthly', '12:00 PM EET', 2, 'Entire Group', 'Tatle'),
  createData('Driver Report', 'Weekly', 'Friday 12:00 PM EET', 2, 'Entire Group', 'Tatle'),
  createData('IFTA', 'Monthly', '12:00 PM EET', 2, 'Entire Group', 'Tatle'),
  createData('Driver Report', 'Weekly', 'Friday 12:00 PM EET', 2, 'Entire Group', 'Tatle'),
  createData('IFTA', 'Monthly', '12:00 PM EET', 2, 'Entire Group', 'Tatle'),
];

const useStyles = makeStyles(styles);

export default function ScheduledReports() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>
                <CardBody>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                      Scheduled Reports  List
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <Button
                        round className="btn-round-active"
                        startIcon={<ControlPointIcon />}
                      >
                        Add a Scheduled Report
                      </Button>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={12} sm={12} md={12} className={classes.searchBox}>
                      <SearchBox placeholder={"Search scheduled reports"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <TableComponent
                  rows={rows}
                  headCells={HeadCells}
                  action={["edit", "delete"]}
                />
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
