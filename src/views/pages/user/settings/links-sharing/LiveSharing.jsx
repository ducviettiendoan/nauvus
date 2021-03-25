import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableComponent from "components/Table/CustomTable"
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import { Tab, Tabs, Typography } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import BootstrapTable from "react-bootstrap-table-next";
import { Row } from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";
import ArrowDownIcon from "../../../../../components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "../../../../../components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../../../components/Icons/ArrowRightIcon";
import ArrowUpIcon from "../../../../../components/Icons/ArrowUpIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";

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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  tabStyles: {
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tabItemStyles: {
    backgroundColor: "#FFFFFF",
    position: 'relative',
    display: 'block',
    border: '1px inner',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '12px 22px 12px 22px',
    color: '#555555',
    height: 'auto',
    marginRight: '8px',
    float: 'none',
    textTransform: 'none !important',
    minWidth: 'auto !important',
    minHeight: '41px !important',
    fontWeight: 700,
    fontSize: 14,
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  }
};

const HeadCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'linkExpires', numeric: true, disablePadding: false, label: 'Link Expires' },
];

const dumpData = [
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
  { name: 'GR9X-6AN-3N5', linkExpires: 'Never' },
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

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatLinkExpires = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
        </Button>
        <Button justIcon color="google" simple>
          <CopyIcon className={classes.iconButton} style={{ color: "#ffffff", width: '22px', height: '22px' }} />
        </Button>
      </>
    )
  }

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
                    className={classes.tabStyles}
                    indicatorColor=""
                    position="static"
                    variant="scrollable"
                  >
                    <Tab
                      className={classes.tabItemStyles}
                      label="By Accet" {...a11yProps(0)}
                    >
                      By Accet
                    </Tab>
                    <Tab
                      className={classes.tabItemStyles}
                      label="By Location" {...a11yProps(1)}
                    // disabled={true}
                    >
                      By Location
                    </Tab>
                    <Tab
                      className={classes.tabItemStyles}
                      label="By Recurring Route"
                      {...a11yProps(2)}
                    >
                      By Recurring Route
                    </Tab>
                  </Tabs>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<AddOutlined />}
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
                  <ToolkitProvider
                    data={dumpData}
                    keyField="_id"
                    columns={[
                      {
                        dataField: "name",
                        text: "Name",
                        formatter: formatName
                      },
                      {
                        dataField: "linkExpires",
                        text: "Link Expires",
                        formatter: formatLinkExpires
                      },
                      {
                        dataField: "action",
                        text: "",
                        formatter: addActionButton
                      }
                    ]}
                  >
                    {props => (
                      <div className="table table-settings">
                        <BootstrapTable
                          {...props.baseProps}
                          bootstrap4={true}
                          bordered={false}
                        />

                      </div>
                    )}
                  </ToolkitProvider>
                </TabPanel>
                <TabPanel value={value} index={1} >
                  <div>No Location</div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div>No Route</div>
                </TabPanel>
              </Card>

              <GenPaginationV1
                total={100}
                page={1}
                size={10}
                pages={[
                  { text: <ArrowDownIcon />, arrow: true, disabled: true },
                  { text: <ArrowLeftIcon />, arrow: true, disabled: true },
                  { active: true, text: 1 },
                  { text: 2 },
                  { text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: <ArrowRightIcon />, arrow: true },
                  { text: <ArrowUpIcon />, arrow: true },
                ]}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
