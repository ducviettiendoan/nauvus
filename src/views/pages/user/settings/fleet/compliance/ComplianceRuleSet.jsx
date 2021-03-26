import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Switch from "components/CustomSwitch/Switch.jsx"
import CustomSlider from "components/CustomSlider/CustomSlider"

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import {Divider, Grid} from "@material-ui/core";
import SearchBox from "../../../../../../components/SearchBox/SearchBox";
import RadioButton from "../../../../../Components/RadioButton";
import Button from "../../../../../../components/CustomButtons/Button";
import EditIcon from "../../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../../components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import AddOutlined from "@material-ui/icons/AddOutlined";
import AddIcon from "../../../../../../components/Icons/AddIcon";

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
  cardContainer: {
    padding: "0px 0px 0px 16px !important"
  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  gridContent: {
    display: "flex",
    padding: "10px 0px 10px 0px !important",
    alignItems: "center"
  },
  configTitle: {
    fontSize: 18,
    fontFamily: "Lato",
    fontWeight: "bold",
    color: "#25345C",
    fontStyle: "normal",
    padding: "10px 0px 20px 0px !important"
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
  },
  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    overflow: "hidden"
  },
  advancedSettings: {
    padding: "2px 0px 0px 0px !important",
    marginLeft: "-6px !important",
  },
  advancedTitle: {
    padding: "0px 0px 16px 0px !important",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C"
  },
  advancedTagContainer: {
    padding: "0px 0px 0px 0px !important",
  },
  advancedChoice: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    color: "#25345C",
    padding: "0px 0px 16px 0px !important",
  },
  tagChoice: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 0px 0px 0px !important"
  },
  radioButtonGroup: {
    display: "flex",
    flexDirection: "row",
    padding: "0px 0px 0px 0px !important"
  },
  inputWrapper: {
    textAlign: "right",
    padding: "0px 0px 0px 0px !important"
  },
  engineTitle: {
    padding: "0px 0px 16px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#25345C",
  },
  engineDescription: {
    padding: "0px 0px 24px 0px !important",
    fontSize: "16px",
    lineHeight: "21px",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    color: "#B4B4B4",
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
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  addIcon: {
    top: "3px !important"
  }
};

const dumpData = [
  {name: 'Default', cycle: "USA Property (8/70)", restart: '34-hour', restBreak: 'Property (on-duty/off-duty/sleeper)'},
];

const useStyles = makeStyles(styles);

export default function ComplianceRuleSet() {

  const formatName = (cell, row) => {
    return <>
      <div className={classes.textName}>{cell}</div>
    </>
  }

  const formatCycle = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatRestart = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatRestBreak = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
      </>
    )
  }

  const classes = useStyles();

  const [checkedState, setCheckedState] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setCheckedState({...checkedState, [event.target.name]: event.target.checked});
  };

  const [sliderValue, setSliderValue] = useState({
    sliderA: 0,
  })

  const handleSliderChange = (event) => {
    setSliderValue({...sliderValue, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <CardBody className={classes.cardContainer}>
                <GridItem xs={3} sm={3} md={3} className={classes.configTitle}>
                  Driver Ruleset
                </GridItem>
                <GridItem className={classes.cardMultipleContent}>
                  <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                    <CardBody className={classes.cardItem}>
                      <GridItem className={classes.headerItem}>
                        Driver Ruleset
                      </GridItem>
                      <GridItem className={classes.contentItem}>
                        Configure organization default HOS rules for drivers. Rulesets added here will be the default
                        driver HOS ruleset for existing and new drivers added. Intrastate rules may be set here if your
                        organization does not participate in Interstate commerce. If your organization has both
                        Interstate and Intrastate drivers, use this setting for Interstate settings and use State
                        Override for your Intrastate settings.
                      </GridItem>
                    </CardBody>
                  </GridItem>
                  <div>
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
                          dataField: "cycle",
                          text: "Cycle",
                          formatter: formatCycle
                        },
                        {
                          dataField: "restart",
                          text: "Restart",
                          formatter: formatRestart
                        },
                        {
                          dataField: "restBreak",
                          text: "Rest Break",
                          formatter: formatRestBreak
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
                          <Row className="justify-content-center">
                            {/* <PaginationV2
                                        pages={[
                                          { text: <ArrowDownIcon/>, arrow : true,disabled : true },
                                          { text: <ArrowLeftIcon/>, arrow : true,disabled : true },
                                          { active: true, text: 1 },
                                          { text: 2 },
                                          { text: 3 },
                                          { text: 4 },
                                          { text: 5 },
                                          { text: <ArrowRightIcon/>, arrow : true },
                                          { text: <ArrowUpIcon/>, arrow : true },
                                        ]}
                                      /> */}
                          </Row>
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>
                  <Divider variant="fullWidth" light/>
                  <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                    <CardBody className={classes.cardItem}>
                      <GridItem className={classes.headerItem}>
                        State Override Driver Ruleset
                      </GridItem>
                      <GridItem className={classes.contentItem}>
                        Configure Intrastate HOS rules for drivers. The state override will only apply when the driver
                        selects a vehicle that is in the state. If a driver leaves the state, the driver will be moved
                        to the organization default ruleset for that cycle. When the driver returns to the home state,
                        the driver will be kept on the organization default ruleset for the next 7 or 8 days, per FMCSA
                        rules.
                      </GridItem>
                    </CardBody>
                  </GridItem>
                  <Button
                    className="btn-round-white-3 h-41"
                    startIcon={<AddIcon className={classes.addIcon}/>}
                    style={{boxShadow: 'none', paddingBottom: 35}}
                  >
                    Add a bounding state ruselet
                  </Button>
                  <Divider variant="fullWidth" light/>
                  <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
                    <CardBody className={classes.cardItem}>
                      <GridItem className={classes.headerItem}>
                        Canada Driver Ruleset
                      </GridItem>
                      <GridItem className={classes.contentItem}>
                        Configure Intrastate HOS rules for drivers. The state override will only apply when the driver
                        selects a vehicle that is in the state. If a driver leaves the state, the driver will be moved
                        to the organization default ruleset for that cycle.
                      </GridItem>
                    </CardBody>
                  </GridItem>
                  <div>
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
                          dataField: "cycle",
                          text: "Cycle",
                          formatter: formatCycle
                        },
                        {
                          dataField: "restart",
                          text: "Restart",
                          formatter: formatRestart
                        },
                        {
                          dataField: "restBreak",
                          text: "Rest Break",
                          formatter: formatRestBreak
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
                          <Row className="justify-content-center">
                          </Row>
                        </div>
                      )}
                    </ToolkitProvider>
                  </div>
                </GridItem>
              </CardBody>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
