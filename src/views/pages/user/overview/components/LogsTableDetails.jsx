import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DropDownIcon from "components/Icons/DropDownIcon";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import { Row } from "reactstrap";
import LegendIcon from "../../../../../components/Icons/LegendIcon";
import DialogComponent from "../../../../../components/Dialog/DialogComponent";
import CustomSelect from "../../../../../components/CustomSelect/CustomSelect"
import { getActivityLogsData } from "../../../../../reducers/overview"
import { connect } from 'react-redux';
// @material-ui/icons
// core components
const styles = {
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
  selectForm: {
    minWidth: "150px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0px 0px 0px 0px !important",
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 8,
  },
  expandButton: {
    marginRight: 8
  },
  textSub: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px',
    paddingTop: '12px !important',
    color: '#25345C',
  },
  details: {
    display: "flex",
    alignItems: "center"
  },
  legendIcon: {
    margin: " 15px 0 0 24px",
    color: "#E53935"
  },
  textDetails: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '8px',
    paddingTop: '12px !important',
    color: '#25345C',
  },
  dropDownIconDate: {
    margin: "24px 0 0 8px",
    color: "#C4C4C4",
    cursor: "pointer"
  }
};

const useStyles = makeStyles(styles);

function LogsTableDetails(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getActivityLogsData()
  }, [])

  const [dialog, setDialog] = React.useState(false);

  const listSelectValue = ["Email to custom recipient", "FMCSA Audit Transfer", "Email to FMCSA"]
  const [selectValue, setSelectValue] = useState("none");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value)
  }

  const formatShift = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  const formatDriving = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  const formatInViolation = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  const formatFrom = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  const formatTo = (cell, row) => {
    return <>
      <div className={classes.textSub}>{cell}</div>
    </>
  }
  const formatDetails = (cell, row) => {
    return <div className={classes.details}>
      <LegendIcon className={classes.legendIcon} />
      <div className={classes.textDetails}>{cell}</div>
    </div>
  }
  const formatDate = (cell, row) => {
    return <div className={classes.details}>
      <div className={classes.textSub}>{cell}</div>
      <DropDownIcon className={classes.dropDownIconDate} />
    </div>
  }

  useEffect(() => {
    if (selectValue == 1) {
      setDialog(true)
    }
  }, [selectValue])

  const [inputValue, setInputValue] = useState({
    email: "",
    comment: ""
  })

  return (
    <>
      <CardBody>
        {
          dialog && <DialogComponent
            open={true}
            setDialog={setDialog}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        }
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer className={classes.headContainer}>
              <GridItem>
                <Calendar />
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
            <FormControl variant="outlined" className={classes.selectForm}>
              <CustomSelect
                listValues={listSelectValue}
                selectValue={selectValue}
                onChange={handleSelectChange}
                placeholder={"Transfer Logs"}
                customStyle={"logsSelect"}
              />
            </FormControl>
            <Button
              round
              className={`btn-round-white w-101 h-41 ${classes.expandButton}`}
            >
              Expand All
            </Button>
            <Button
              round
              className="btn-round-white w-101 h-41"
            >
              Collapse All
            </Button>
          </GridItem>
        </GridContainer>
      </CardBody>
      <ToolkitProvider
        data={props.data}
        keyField="_id"
        columns={[
          {
            dataField: "shift",
            text: "Shift",
            formatter: formatShift
          },
          {
            dataField: "driving",
            text: "Driving",
            formatter: formatDriving
          },
          {
            dataField: "inViolation",
            text: "In Violation",
            formatter: formatInViolation
          },
          {
            dataField: "from",
            text: "From",
            formatter: formatFrom
          },
          {
            dataField: "to",
            text: "To",
            formatter: formatTo
          },
          {
            dataField: "details",
            text: "Details",
            formatter: formatDetails
          },
          {
            dataField: "date",
            text: "Date ( EDT)",
            formatter: formatDate
          }
        ]}
      >
        {props => (
          <div className={`table table-settings ${classes.tableCustom} `}>
            <BootstrapTable
              {...props.baseProps}
              bootstrap4={true}
              bordered={false}
            />
          </div>
        )}
      </ToolkitProvider>
    </>
  );
}

export default connect(
  ({ overview }) => ({
    data: overview.activityLogsData
  }), {
  getActivityLogsData
})(LogsTableDetails)