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

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

import Button from "components/CustomButtons/Button.js";
import EditIcon from "components/Icons/EditIcon";
import CloseIcon from "components/Icons/CloseIcon";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import FilterIcon from "components/Icons/FilterIcon";

import Chip from "@material-ui/core/Chip";

import {
    blackColor,
    cardTitle, hexToRgb, primaryColor,
    roseColor
} from "assets/jss/material-dashboard-pro-react.js";

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
  
  textVehicle: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '25px',
    marginLeft: '24px',
    color: "#25345C",
  },
  fuelTypeTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important",
    color: "#25345C !important",
    fontWeight: "400 !important",
    fontSize: "12px !important",
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
  clearAll: {
    color: "#8097D8",
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    },
    textTransform: "none !important",
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
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

const dumpData = [
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
    { vehicle101: 'vehicle 101', year: "2017", make: 'FORD', model: "Fusion", ifta: "M85" },
  
  ];

const useStyles = makeStyles(styles);

export default function VehicleFuelTypes() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Fusion'},
    {key: 1, label: 'FORD'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const formatVehicle101 = (cell, row) => {
    return <>
      <div className={classes.textVehicle}>{cell}</div>
    </>
  }

  const formatYear = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatMake = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatModel = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatIFTA = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
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
              <Card testimonial>
                <CardBody>
                    
                <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <GridContainer className={classes.headContainer}>
                          <GridItem xl={2} className={classes.fuelTypeTitle}>
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
                      </GridItem>
                    </GridContainer>
                </CardBody>

                <ToolkitProvider
                    data={dumpData}
                    keyField="_id"
                    columns={[
                      {
                        dataField: "vehicle101",
                        text: "Vehicle 101",
                        formatter: formatVehicle101
                      },
                      {
                        dataField: "year",
                        text: "Year",
                        formatter: formatYear
                      },
                      {
                        dataField: "make",
                        text: "Make",
                        formatter: formatMake
                      },
                      {
                        dataField: "model",
                        text: "Model",
                        formatter: formatModel
                      },
                      {
                        dataField: "ifta",
                        text: "IFTA Fuel Type",
                        formatter: formatIFTA
                      },
                      {
                        dataField: "actions",
                        text: "Actions",
                        formatter: addActionButton
                      },

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
              
        <GenPaginationV1 total={29} page={1} size={10}/>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
