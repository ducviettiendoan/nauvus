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
import TableComponent from "../../../../Components/Table"
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SearchIcon from '@material-ui/icons/Search';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import { Button, IconButton, InputBase, Tab, Tabs, Typography } from "@material-ui/core";

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
    fontSize: 18
  },
  btnCreateLink: {
    padding: "5px, 10px",
    background: "#25345C",
    color: "white",
    borderRadius: 28,
    textTransform: "none",
    height: 46,
    fontSize: 14
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  btnSearchTable: {
    background: "white",
    padding: "0px 20px 0px 20px",
    borderRadius: "36px",
    height: "50px",
    width: "252px",
    color: "#C4C4C4",
    border: "1px solid #C4C4C4",
    float: "right",
    margin: "0, 0",
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    display: "flex",
    fontSize: 14
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
  inputBase: {
    "& input::placeholder": {
      fontSize: "14px"
    }
  },
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
                <CardBody className={classes.liveSharingHeader}>
                  <div className={classes.liveSharingTitle}>Scheduled Reports List</div>
                  <div>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btnCreateLink}
                      startIcon={<ControlPointIcon />}
                    >
                      Add a Scheduled Report
                    </Button>
                  </div>
                </CardBody>

                <div>
                  <div className={classes.btnSearchTable}>
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      className={classes.inputBase}
                      placeholder="Search scheduled reports"
                    />
                  </div>
                </div>


                <TableComponent rows={rows} headCells={HeadCells} />
              </Card>

            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
