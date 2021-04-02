import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";
import Button from "components/CustomButtons/Button";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import Chip from "@material-ui/core/Chip";
import CloseIcon from "components/Icons/CloseIcon";
import {connect} from "react-redux";
import {IRootState} from "reducers";
import {getWorkingHour} from "reducers/setting-fleet";

const styles = {
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px"
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
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  clearAll: {
    color: "#8097D8",
    textTransform: 'none',
    background: "unset !important",
    boxShadow: "unset !important",
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
    "&:hover": {
      color: "#25345C"
    }
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
    padding: "11px 16px",
    borderRadius: "28px",
    textAlign: "center",
    height: "41px"
  },
};

const useStyles = makeStyles(styles);

export function WorkingHours(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getWorkingHour();
  }, []);

  const formatHours = (cell, row) => {
    return <div className={classes.textSub}>
      {
        cell.map((ele) => {
          return (<div>{ele}</div>)
        })
      }
    </div>
  }

  const formatWorkingDays = (cell, row) => {
    return <div className={classes.textSub}>
      {
        cell.map((ele) => {
          return (<div>{ele}</div>)
        })
      }
    </div>
  }

  const formatTags = (cell, row) => {
    return <div className={classes.textSub} style={{marginTop: "28px"}}>
      {
        cell.map((ele) => {
          return (<span className={classes.tagButton}>{ele}</span>)
        })
      }
    </div>
  }

  const addActionButton = () => {
    return (
      <div style={{marginTop: "15px"}}>
        <Button justIcon color="twitter" simple>
          <EditIcon className={classes.iconButton} style={{color: "#ffffff", width: '22px', height: '22px'}}/>
        </Button>
        <Button justIcon color="google" simple>
          <DeleteIcon className={classes.iconButton} style={{color: "#C4C4C4", width: '24px', height: '24px'}}/>
        </Button>
      </div>
    )
  }

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
  return (
    <div>
      <Card>
        <CardBody style={{height: '74px'}}>
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
              <ToolboxButton placeholder={"Search tags"} showTrash/>
            </GridItem>
          </GridContainer>
        </CardBody>
        <div>
          <ToolkitProvider
            data={props.data}
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
                  keyField="id"
                />
              </div>
            )}
          </ToolkitProvider>
          <Button
            className="btn-round-white-3 h-41 mb-4"
            startIcon={<AddOutlined/>}
            style={{boxShadow: "none", marginBottom: "10px"}}
          >
            Add working hours
          </Button>
        </div>
      </Card>
      <GenPaginationV1 total={29} page={1} size={10}/>
    </div>
  );
}

export default connect(
  ({settingFleet}: IRootState) => ({
    data: settingFleet.workingHours
  }),
  {
    getWorkingHour
  }
)(WorkingHours);