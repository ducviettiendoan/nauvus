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
import DeleteIcon from "components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import Chip from "@material-ui/core/Chip";
import MoreIcon from "components/Icons/MoreIcon";

import ToolboxButton from "components/CustomButtons/ToolboxButton";
import AddOutlined from "@material-ui/icons/AddOutlined";

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
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px',
    paddingTop: '12px !important',
    marginBottom: '15px',
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '12px !important',
    color: '#25345C',
    marginBottom: '15px',
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
    name: 'Chal Vee',
    username: 'Chal',
  },
  {
    id: 2,
    name: 'Chal Vee',
    username: 'Chal',
  },
  {
    id: 3,
    name: 'Chal Vee',
    username: 'Chal',
  },
  {
    id: 4,
    name: 'Chal Vee',
    username: 'Chal',
  },
  {
    id: 5,
    name: 'Chal Vee',
    username: 'Chal',
  },
  {
    id: 6,
    name: 'Chal Vee',
    username: 'Chal',
  },

];

export default function DeactivatedDriver() {
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

  const formatUserName = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }

  // const formatTags = (cell, row) => {
  //   return <>
  //     <div className={classes.textTags}>{cell}</div>
  //   </>
  // }
  //
  // const formatPeerGroup = (cell, row) => {
  //   return <>
  //     <div className={classes.textSub}>{cell}</div>
  //   </>
  // }
  //
  // const formatPhone = (cell, row) => {
  //   return <>
  //     <div className={classes.textSub}>{cell}</div>
  //   </>
  // }
  //
  // const formatDLState = (cell, row) => {
  //   return <>
  //     <div className={classes.textSub}>{cell}</div>
  //   </>
  // }
  //
  // const formatDLNumber = (cell, row) => {
  //   return <>
  //     <div className={classes.textSub}>{cell}</div>
  //   </>
  // }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button
          round
          className="btn-round-active h-41 w-101"
        >
          Reactivate
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
                    <GridItem xs={12} sm={12} md={6}>
                      <ToolboxButton placeholder="Search gateways" showFilter showTrash/>
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
                      dataField: "username",
                      text: "Username",
                      formatter: formatUserName
                    },
                    {
                      dataField: "tags",
                      text: "Tags",
                      // formatter: formatTags
                    },
                    {
                      dataField: "peerGroup",
                      text: "Peer Group",
                      // formatter: formatPeerGroup
                    },
                    {
                      dataField: "phone",
                      text: "Phone",
                      // formatter: formatPhone
                    },
                    {
                      dataField: "dlState",
                      text: "DL State",
                      // formatter: formatDLState
                    },
                    {
                      dataField: "dlNumber",
                      text: "DL Number",
                      // formatter: formatDLNumber
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