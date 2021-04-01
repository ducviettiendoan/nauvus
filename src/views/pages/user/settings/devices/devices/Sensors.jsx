import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button";
import CloseIcon from "components/Icons/CloseIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import DeleteIcon from "components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import DotIcon from "components/Icons/DotIcon";
import Chip from "@material-ui/core/Chip";
import MoreIcon from "components/Icons/MoreIcon";

const styles = {
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
    textTransform: "none",
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
    paddingTop: '10px !important'
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textSub: {
    color: '#25345C',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '10px !important'
  },
  actionButton: {
    paddingTop: '10px !important'
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

const dumpData = [
  {
    id: 1,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
  {
    id: 2,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
  {
    id: 3,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
  {
    id: 4,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
  {
    id: 5,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
  {
    id: 6,
    name: 'Trailer 109 - Right Door',
    product: 'EM22',
    sensorID: 'WN5WN-KPE-M28',
    signal: 'Connected',
    pairedAsset: "CargoMM23",
    position: 'Middle',
  },
];

export default function Sensors() {
  const classes = useStyles();

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

  const formatProduct = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatSensorID = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatPairedAsset = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatSignal = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><DotIcon style={{color: "#7CE7AC", marginTop: 10}}/></div>
        <div className={classes.textRoles}>{cell}</div>
      </div>
    </>
  }

  const formatPosition = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  const formatPowerState = (cell, row) => {
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
        <Button justIcon color="twitter" simple>
          <MoreIcon className={classes.iconButton} style={{color: "#ffffff", width: '24px', height: '24px'}}/>
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
                      <ToolboxButton placeholder={"Search gateways"} showFilter showEdit showLink showTrash/>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={dumpData}
                  columns={[
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "product",
                      text: "Product",
                      formatter: formatProduct
                    },
                    {
                      dataField: "sensorID",
                      text: "ID",
                      formatter: formatSensorID
                    },
                    {
                      dataField: "signal",
                      text: "Signal",
                      formatter: formatSignal
                    },
                    {
                      dataField: "pairedAsset",
                      text: "Paired Asset",
                      formatter: formatPairedAsset
                    },
                    {
                      dataField: "position",
                      text: "Position",
                      formatter: formatPosition
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
            </GridItem>
          </GridContainer>
          <GenPaginationV1 total={29} page={1} size={10}/>
        </GridItem>
      </GridContainer>
    </div>
  );
}