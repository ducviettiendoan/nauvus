import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import PropTypes from 'prop-types';
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
import { Tabs, Typography } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";

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
  createLinkButton: {
    background: "#25345C",
    color: "white",
    borderRadius: 28,
    textTransform: "none",
    height: 46,
    fontSize: 14,
    marginRight: 21,
    marginTop: 17,
    "&:hover": {
      background: "#25345C !important"
    },
    fontWeight: 700
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    textAlign: "right",
  },
};

const HeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'linkExpires', numeric: true, disablePadding: false, label: 'Link Expires' },
];

function createData(name, linkExpires) {
  return { name, linkExpires };
}

const rows = [
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
  createData('GR9X-6AN-3N5', 'Never'),
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function LiveSharing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    position="static"
                    indicatorColor=""
                  >
                    <Button
                      className="btn-round-white mr-2"
                      label="By Accet" {...a11yProps(0)}
                    >
                      By Accet
                    </Button>
                    <Button
                      className="btn-round-white mr-2"
                      label="By Location" {...a11yProps(1)}
                      // disabled={true}
                    >
                      By Location
                    </Button>
                    <Button
                      className="btn-round-white mr-2 "
                      label="By Recurring Route"
                      {...a11yProps(2)}
                      disabled={true}
                    >
                      By Recurring Route
                    </Button>
                  </Tabs>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<ControlPointIcon />}
                  >
                    Create Link
                  </Button>
                </GridItem>
              </GridContainer>
              <Card testimonial>
                <CardBody >
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={12} sm={3} md={3} className={classes.liveSharingTitle}>
                      22
                    </GridItem>
                    <GridItem xs={12} sm={9} md={9} className={classes.liveSharingButton}>
                      <SettingSearchBox placeholder={"Search assets"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <TabPanel value={value} index={0} className={classes.tableContainer} >
                  <TableComponent
                    rows={rows}
                    headCells={HeadCells}
                    action={["edit", "delete", "copy"]}
                  />
                </TabPanel>
                <TabPanel value={value} index={1} >
                  <TableComponent
                    rows={rows}
                    headCells={HeadCells}
                    action={["edit", "delete", "copy"]}
                  />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <TableComponent
                    rows={rows}
                    headCells={HeadCells}
                    action={["edit", "delete", "copy"]}
                  />
                </TabPanel>
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
