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
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import EditIcon from "components/Icons/EditIcon";
import maps from "assets/img/maps.jpg";
import Chip from "@material-ui/core/Chip";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getInvalidAddress} from "reducers/setting-fleet";

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
    display: "flex",
    alignItems: "center",
    marginTop: "8px"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    marginLeft: '8px'
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '24px',
    color: "#C4C4C4"
  },
  textRoles: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  textAccess: {
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '16px',
    marginBottom: '15px',
    padding: "12px 14px",
    color: "#E53935",
    background: "rgba(229, 57, 53, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "100px",
    height: "41px"
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
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%"
  },
  selectStyle: {
    marginTop: 27,
    marginLeft: 12
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
};

const useStyles = makeStyles(styles);

export function InValidAddresses(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getInvalidAddress();
  }, []);

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

  const formatEmail = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div><img src={maps} alt="user-avatar" className={classes.avatarImage}/></div>
        <div className={classes.textName}>{cell}</div>
      </div>
    </>
  }

  const formatName = (cell, row) => {
    return <>
      <div style={{marginTop: "12px"}}>
        <div className={classes.textRoles}>{row.name}</div>
        <div className={classes.textEmail}>ID: {row.number}</div>
      </div>
    </>
  }

  const formatNotes = (cell, row) => {
    return <>
      <div className={classes.alignItemsCenter}>
        <div className={classes.textRoles}>{cell}</div>
      </div>
    </>
  }

  const formatTags = (cell, row) => {
    return <>
      <div className={classes.textAccess}>{cell}</div>
    </>
  }

  const addActionButton = () => {
    return (
      <div className={classes.actionButton}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
      </div>
    )
  }

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
                      <ToolboxButton placeholder={"Search addresses"} showFilter showTrash/>
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <ToolkitProvider
                  data={props.data}
                  columns={[
                    {
                      dataField: "address",
                      text: "Address",
                      formatter: formatEmail
                    },
                    {
                      dataField: "name",
                      text: "Name",
                      formatter: formatName
                    },
                    {
                      dataField: "tags",
                      text: "Tags",
                      formatter: formatTags
                    },
                    {
                      dataField: "notes",
                      text: "Notes",
                      formatter: formatNotes
                    },
                    {
                      dataField: "address_type",
                      text: "Address Type",
                      formatter: formatNotes
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

export default connect(
  ({settingFleet}: IRootState) => ({
    data: settingFleet.invalidAddresses
  }),
  {
    getInvalidAddress
  }
)(InValidAddresses);