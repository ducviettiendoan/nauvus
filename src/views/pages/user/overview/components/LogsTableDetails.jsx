import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "components/CustomButtons/Button";
import Calendar from "components/Calendar/Calendar";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DropDownIcon from "components/Icons/DropDownIcon";
import LegendIcon from "components/Icons/LegendIcon";
import DialogComponent from "components/Dialog/DialogComponent";
import CustomSelect from "components/CustomSelect/CustomSelect"
import { getActivityLogsData } from "reducers/overview"
import { connect } from 'react-redux';
import DialogError from "components/Dialog/DialogError";
import Table from "components/Table/TableV1";
import LogsDialogContent from "./LogsDialogContent";

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
    paddingTop: '12px !important',
    color: '#25345C',
  },
  details: {
    display: "flex",
    alignItems: "center",
    textAlign: "left"
  },
  legendIcon: {
    margin: " 15px 0 0 0px",
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
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
};

const useStyles = makeStyles(styles);

function LogsTableDetails(props) {
  const classes = useStyles();

  // table data
  useEffect(() => {
    props.getActivityLogsData()
  }, [])

  const columns = [
    {
      title: 'Shift',
      key: 'shift',
      onHeaderCell: { className: classes.onHeaderCell },
      render: shift => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{shift}</div>
        </div>
      ),
    },
    {
      title: 'Driving',
      key: 'driving',
      onHeaderCell: { className: classes.onHeaderCell },
      render: driving => <div className={classes.alignItemsCenter}>
        <div className={classes.textSub}>{driving}</div>
      </div>
    },
    {
      title: 'In Violatiom',
      key: 'inViolation',
      onHeaderCell: { className: classes.onHeaderCell },
      render: inViolation => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{inViolation}</div>
        </div>
      )
    },
    {
      title: 'From',
      key: 'from',
      onHeaderCell: { className: classes.onHeaderCell },
      render: from => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{from}</div>
        </div>
      )
    },
    {
      title: 'To',
      key: 'to',
      onHeaderCell: { className: classes.onHeaderCell },
      render: to => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub}>{to}</div>
        </div>
      )
    },
    {
      title: 'Details',
      key: 'details',
      onHeaderCell: { className: classes.onHeaderCell },
      render: details => <div className={classes.details}>
        <LegendIcon className={classes.legendIcon} />
        <div className={classes.textDetails}>{details}</div>
      </div>

    },
    {
      title: 'Date (EDT)',
      key: 'date',
      onHeaderCell: { className: classes.onHeaderCell },
      render: date => (
        <div className={classes.details}>
          <div className={classes.textSub}>{date}</div>
          <DropDownIcon className={classes.dropDownIconDate} />
        </div>
      )
    }
  ]

  // dialog states
  const [dialog, setDialog] = React.useState(false);
  const [formError, setFormError] = React.useState(false)

  const listSelectValue = ["Email to custom recipient", "FMCSA Audit Transfer", "Email to FMCSA"]
  const [selectValue, setSelectValue] = useState("none");

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value)
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

  const handleSendForm = () => {
    if (!inputValue.email || !inputValue.comment) {
      setFormError(true)
    }
  }

  return (
    <>
      <CardBody>
        {
          dialog && <DialogComponent
            open={true}
            setDialog={setDialog}
            handleSend={handleSendForm}
            setSelectValue={setSelectValue}
            childComponent={<LogsDialogContent inputValue={inputValue} setInputValue={setInputValue} />}
            // open, setDialog, setSelectValue, childComponent, handleSend 
          />
        }
        {
          formError && <DialogError
            open={true}
            errorValue={inputValue}
            setFormError={setFormError}
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

      <div>
        {props.data.length > 0 && <Table
          columns={columns}
          dataSource={props.data}
          onHeaderRow={{
            className: classes.onHeaderRow
          }}
          onBodyRow={{
            className: classes.tableRow
          }}
        />}
      </div>
    </>
  );
}

export default connect(
  ({ overview }) => ({
    data: overview.activityLogsData
  }), {
  getActivityLogsData
})(LogsTableDetails)