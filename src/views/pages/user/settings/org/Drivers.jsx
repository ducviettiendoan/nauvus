import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {
  blackColor,
  cardTitle, hexToRgb, primaryColor,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import {Tab, Tabs, Typography} from "@material-ui/core";
import Button from "../../../../../components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import CloseIcon from "../../../../../components/Icons/CloseIcon";
import SettingSearchBox from "../../../../../components/SearchBox/SettingSearchBox";
import FilterIcon from "../../../../../components/Icons/FilterIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import EditIcon from "../../../../../components/Icons/EditIcon";
import PropTypes from "prop-types";
import avatar from "assets/img/faces/avatar.jpg";
import DotIcon from "../../../../../components/Icons/DotIcon";
import Chip from "@material-ui/core/Chip";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import MoreIcon from "../../../../../components/Icons/MoreIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";

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
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
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
  },
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  selected: {
    height: 24,
    width: "auto",
    background: "#ECEEF0 !important",
    borderRadius: 28,
    color: "#25345C !important",
    display: "flex",
    alignItems: "center",
  },
  clearAll: {
    textTransform: 'none',
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px',
    paddingTop: '12px !important'
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '12px !important',
    color: '#25345C',
  },
  textTags: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '16px',
    marginBottom: '15px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 71,
    height: "41px"
  },
  actionButton: {
    paddingTop: '12px !important',
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
    paddingTop: 20,
    marginLeft: '24px'
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  selectStyle: {
    marginTop: 27,
    marginLeft: 12
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px"
  },
  checked: {
    color: primaryColor[0] + "!important"
  },
  checkRoot: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  indeterminateIcon: {
    width: 20,
    height: 20
  },
  checkBoxIcon: {
    width: 20,
    height: 20,
    marginTop: 30,
    marginLeft: 12
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


const tabs = [
  {
    id: 0,
    name: "Active Drivers"
  },
  {
    id: 1,
    name: "Deactivated Drivers"
  },
]

const handleChangeTab = (newValue) => {
  setValue(newValue);
};

const dumpData = [
  {
    id: 1,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
  {
    id: 2,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
  {
    id: 3,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
  {
    id: 4,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
  {
    id: 5,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
  {
    id: 6,
    name: 'Brooklyn Simmons',
    username: 'greenkoala518',
    tags: 'Status',
    peerGroup: "Group 12",
    phone: "(208) 555-0112",
    dlState: "Maine",
    dlNumber: "558612",
  },
];

export default function Drivers() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Standard Admin'},
    {key: 1, label: 'Full admin'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatUserName = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatTags = (cell, row) => {
    return <>
      <div className={classes.textTags}>{cell}</div>
    </>
  }

  const formatPeerGroup = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatPhone = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDLState = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatDLNumber = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <MoreIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
      </div>
    )
  }

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    style: {background: "linear-gradient(0deg,#ECEEF0,#ECEEF0)"},
    classes: 'customSelectRow',
    selectionHeaderRenderer: ({indeterminate, ...rest}) => (
      <input
        type="checkbox"
        className={classes.indeterminateIcon}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        {...rest}
      />
    ),
    selectionRenderer: ({mode, ...rest}) => (
      <input className={classes.checkBoxIcon} type={mode} {...rest} />
    )

  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={tabs} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                  >
                    Add a driver
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHoriz/>
                  </Button>
                </GridItem>
              </GridContainer>
              <TabPanel value={value} index={0} className={classes.tableContainer}>
                <Card testimonial>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <GridContainer className={classes.headContainer}>
                          <GridItem xl={2} className={classes.userRolesTitle}>
                            {chipData.length} selected for
                          </GridItem>
                          <GridItem xl={10} className={classes.chipSelected}>
                            {
                              chipData.map(data => (
                                <Chip
                                  deleteIcon={<CloseIcon/>}
                                  label={data.label}
                                  onDelete={handleDelete(data)}
                                  className={classes.chip}
                                />
                              ))
                            }
                            {
                              chipData.length > 0
                                ?
                                (
                                  <Button onClick={handleClearAll} className={classes.clearAll}>
                                    Clear All
                                  </Button>
                                )
                                : ""
                            }
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                        <SettingSearchBox placeholder={"Search gateways"}/>
                        <Button
                          color="white"
                          aria-label="edit"
                          justIcon
                          round
                          className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                          <FilterIcon style={{marginTop: 10, marginLeft: 7, color: "#25345C"}}/>
                        </Button>
                        <Button
                          color="white"
                          aria-label="edit"
                          justIcon
                          round
                          className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                          <DeleteIcon style={{marginTop: 7, marginLeft: 6, color: "#25345C"}}/>
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <ToolkitProvider
                    data={dumpData}
                    // keyField="_id"
                    columns={[
                      {
                        dataField: "name",
                        text: "Name",
                        formatter: formatName
                      },
                      {
                        dataField: "username",
                        text: "Username",
                        formatter: formatUserName
                      },
                      {
                        dataField: "tags",
                        text: "Tags",
                        formatter: formatTags
                      },
                      {
                        dataField: "peerGroup",
                        text: "Peer Group",
                        formatter: formatPeerGroup
                      },
                      {
                        dataField: "phone",
                        text: "Phone",
                        formatter: formatPhone
                      },
                      {
                        dataField: "dlState",
                        text: "DL State",
                        formatter: formatDLState
                      },
                      {
                        dataField: "dlNumber",
                        text: "DL Number",
                        formatter: formatDLNumber
                      },
                      {
                        dataField: "action",
                        text: "Action",
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
                          keyField='id'
                          selectRow={selectRow}

                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </Card>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Card testimonial>
                  <CardBody>
                    <GridContainer>
                      No content
                    </GridContainer>
                  </CardBody>
                </Card>
              </TabPanel>
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}