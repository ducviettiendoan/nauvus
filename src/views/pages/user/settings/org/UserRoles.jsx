import React, {useEffect, useState} from "react";
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
import ArrowDownIcon from "../../../../../components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "../../../../../components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../../../components/Icons/ArrowRightIcon";
import ArrowUpIcon from "../../../../../components/Icons/ArrowUpIcon";
import EditIcon from "../../../../../components/Icons/EditIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";
import PropTypes from "prop-types";
import avatar from "assets/img/faces/avatar.jpg";
import DotIcon from "../../../../../components/Icons/DotIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

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
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding:0,
    "&:hover" : {
      color: "#25345C"
    }
  },
  headContainer: {
    display: "flex",
    alignItems: "center"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div" : {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '8px'
  },
  textEmail:{
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#C4C4C4"
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '21px',
    marginLeft: '24px'
  },
  textAccess: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '12px',
    marginBottom: '14px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight:700,
    width: 165
  },
  actionButton: {
    marginTop: 14
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
  avatarImage : {
    width : 40,
    height: 40,
    borderRadius: "50%"
  },
  selectStyle: {
    marginTop:27,
    marginLeft:12
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
};

const useStyles = makeStyles(styles);

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

const dumpData = [
  { id: 1, user: 'Cameron Williamson', email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
  { id: 2, user: 'Cameron Williamson',email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
  { id: 3, user: 'Cameron Williamson',email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
  { id: 4, user: 'Cameron Williamson',email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
  { id: 5, user: 'Cameron Williamson',email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
  { id: 6, user: 'Cameron Williamson',email : 'jessica.hanson@example.com', roles: "Admin", access: "Entire Organisation"},
];

export default function UserRoles() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [hasSelected, setHasSelected] = useState(false)
  const [selectedAll, setSelectedAll] = useState(false)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(selected)



  const formatName = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><img src={avatar} alt="user-avatar" className={classes.avatarImage}/></div>
        <div className={classes.textName}>{cell}</div>
      </div>
    </>
  }

  const formatEmail = (cell, row) => {
    return <>
      <div className={ classes.textEmail }>{cell}</div>
    </>
  }

  const formatRoles = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><DotIcon style={{color: "#7CE7AC",marginTop:10}}/></div>
        <div className={classes.textRoles}>{cell}</div>
      </div>
    </>
  }

  const formatAccess = (cell, row) => {
    return <>
      <div className={ classes.textAccess }>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={ classes.iconButton } style={{color:"#ffffff", width: '22px', height: '22px'}} />
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={ classes.iconButton } style={{color:"#C4C4C4", width: '24px', height: '24px'}} />
        </Button>
      </div>
    )
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = dumpData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const selectAll = () => {
    return (
      <>
        <Checkbox
          tabIndex={-1}
          onClick={(event) => handleSelectAllClick(event)}
          checkedIcon={<Check className={classes.checkedIcon} />}
          icon={hasSelected ? <Check className={classes.checkedIcon} /> : <Check className={classes.uncheckedIcon} />}
          classes={{
            checked: classes.checked,
            root: classes.checkRoot
          }}
        />
      </>
    )
  }

  const handleSelect = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    if (selected.includes(id)){
      selected.splice(selectedIndex, 1)
    }else {
      selected.push(id)
    }

    setSelected(selected)

    if (selected.length > 0) {
      setHasSelected(true)
    }else {
      setHasSelected(false)
    }

    // const selectedIndex = selected.indexOf(id);
    // let newSelected = [];
    //
    // if (selectedIndex === -1) {
    //   newSelected = newSelected.concat(selected, id);
    // } else if (selectedIndex === 0) {
    //   newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //   newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //   newSelected = newSelected.concat(
    //     selected.slice(0, selectedIndex),
    //     selected.slice(selectedIndex + 1),
    //   );
    // }
    //
    // setSelected(newSelected);
  }

  const formatSelect = (cell,row) => {
    return (
      <div className={classes.selectStyle}>
        <Checkbox
          tabIndex={-1}
          onClick={(event) => handleSelect(event,cell)}
          checkedIcon={<Check className={classes.checkedIcon} />}
          icon={selected.includes(cell) ? <Check className={classes.checkedIcon} /> :<Check className={classes.uncheckedIcon} />}
          classes={{
            checked: classes.checked,
            root: classes.checkRoot
          }}
        />
      </div>
    )
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.log("ok")
  });

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
                      label="Users" {...a11yProps(0)}
                    >
                      Users
                    </Tab>
                    <Tab
                      className={classes.tabItemStyles}
                      label="Roles" {...a11yProps(1)}
                    >
                      Roles
                    </Tab>
                    <Tab
                      className={classes.tabItemStyles}
                      label="Pending Invitations"
                      {...a11yProps(2)}
                    >
                      Pending Invitations
                    </Tab>
                  </Tabs>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined />}
                  >
                    Invite User
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
              <TabPanel value={value} index={0} className={classes.tableContainer} >
                <Card testimonial>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <GridContainer className={classes.headContainer}>
                          <GridItem xl={3} className={classes.userRolesTitle}>
                            2 selected for
                          </GridItem>
                          <GridItem xl={8} className={classes.headContainer}>
                            <Button
                              round
                              className={`btn-round-active ${classes.selected} mr-2`}
                            >
                              Standard Admin
                              {/*<CloseIcon width={16} height={16} />*/}
                            </Button>
                            <Button
                              round
                              className={`btn-round-active ${classes.selected} mr-2`}
                            >
                              Full admin
                              {/*<CloseIcon width={16} height={16} />*/}
                            </Button>
                            <Button className={classes.clearAll}>
                              Clear All
                            </Button>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
                        <SettingSearchBox placeholder={"Search gateways"} />
                        <Button
                          color="white"
                          aria-label="edit"
                          justIcon
                          round
                          className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                          <FilterIcon style={{marginTop:10,marginLeft: 7, color: "#25345C"}}/>
                        </Button>
                        <Button
                          color="white"
                          aria-label="edit"
                          justIcon
                          round
                          className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                          <DeleteIcon style={{marginTop:7,marginLeft: 6, color: "#25345C"}}/>
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <ToolkitProvider
                    data={ dumpData }
                    keyField="_id"
                    columns={[
                      {
                        dataField: "id",
                        text: selectAll(),
                        formatter: formatSelect
                      },
                      {
                        dataField: "user",
                        text: "User",
                        formatter: formatName
                      },
                      {
                        dataField: "email",
                        text: "E-mail",
                        formatter: formatEmail
                      },
                      {
                        dataField: "roles",
                        text: "Roles",
                        formatter: formatRoles
                      },
                      {
                        dataField: "access",
                        text: "Access",
                        formatter: formatAccess
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
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </Card>
              </TabPanel>
              <TabPanel value={value} index={1} >
                {/*<TableComponent*/}
                {/*  rows={rows}*/}
                {/*  headCells={HeadCells}*/}
                {/*  action={["edit", "delete", "copy"]}*/}
                {/*/>*/}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {/*<TableComponent*/}
                {/*  rows={rows}*/}
                {/*  headCells={HeadCells}*/}
                {/*  action={["edit", "delete", "copy"]}*/}
                {/*/>*/}
              </TabPanel>
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10} />
        </GridItem>
      </GridContainer>
    </div>
  );
}