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
import "./DriverActivity.css"
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import SettingSearchBox from "../../../../../components/SearchBox/SettingSearchBox";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import Button from "../../../../../components/CustomButtons/Button";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";

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
  tabsContainer: {
    paddingTop: "16px !important",
    paddingLeft: "0px !important"
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
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: '2px'
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
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginBottom: '14px',
    marginLeft: '24px'
  },
  tagButton: {
    color: "#27AE60",
    background: "#e9f7ef",
    padding: "12px 16px",
    borderRadius: "28px",
    textAlign: "center"
  }
};

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
      >
        {value === index && <Typography>{children}</Typography>}
      </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const dumpData = [
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
  { hours: ['12:00 AM-6:00 PM', '12:00 AM-6:00 PM'], workingDays: ["Wednesday","Thursday"], tags: ['Tags'] },
];

export default function DriverActivity() {
  const classes = useStyles();

  const [checkedState, setCheckedState] = React.useState({
    checkedB: false,
  });
  const [value, setValue] = React.useState(0);

  const formatHours = (cell, row) => {
    return <div className={classes.textSub}>
      {
        cell.map((ele) => {
          return (<div >{ele}</div>)
        })
      }
    </div>
  }

  const formatWorkingDays = (cell, row) => {
    return <div className={classes.textSub}>
      {
        cell.map((ele) => {
          return (<div >{ele}</div>)
        })
      }
    </div>
  }

  const formatTags = (cell, row) => {
    return <div className={classes.textSub}>
      {
        cell.map((ele) => {
          return (<span className={classes.tagButton} >{ele}</span>)
        })
      }
    </div >
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
        </>
    )
  }

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };
  const tabs = [
    {
      id: 0,
      name: "Working Hours"
    },
    {
      id: 1,
      name: "Max Distance"
    },
  ]
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.tabsContainer}>
          <RoundedTabs tabs={tabs} tabValue={handleChangeTab}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Button
              round
              className="btn-round-active w-150 mr-2"
              startIcon={<AddOutlined />}
          >
            Add Contact
          </Button>
          <Button
              color="white"
              aria-label="edit"
              justIcon
              round
              className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz />
          </Button>
        </GridItem>
      </GridContainer>
          <TabPanel value={value} index={0}>
              <Card>
                <CardBody style={{ height: '74px' }}>
                  <GridContainer className={classes.liveSharingHeader}>
                    <GridItem xs={3} sm={3} md={3} className={classes.liveSharingTitle}>
                      2 selected for
                    </GridItem>
                    <GridItem xs={9} sm={9} md={9} className={classes.liveSharingButton}>
                      <SettingSearchBox placeholder={"Search contacts"} />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <div>
                  <ToolkitProvider
                      data={dumpData}
                      keyField="_id"
                      columns={[
                        {
                          dataField: "hours",
                          text: "Hours",
                          formatter: formatHours
                        },
                        {
                          dataField: "workingDays",
                          text: "Working Days",
                          formatter: formatWorkingDays
                        },
                        {
                          dataField: "tags",
                          text: "Tags",
                          formatter: formatTags
                        },
                        {
                          dataField: "action",
                          text: "Actions",
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
                </div>
              </Card>
              <GenPaginationV1 total={29} page={1} size={10} />
          </TabPanel>
    </div>
  );
}
