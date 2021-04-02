import React, {useEffect} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import {Row} from "reactstrap";
import LegendIcon from "../../../../../components/Icons/LegendIcon";
import DialogComponent from "../../../../../components/Dialog/DialogComponent";
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
    width: "auto",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "& >select": {
      paddingRight: "0 !important",
      width: "100%",
      zIndex: "1000",
    },
    "&::before": {
      borderBottom: "0px"
    },
    "& > select:focus": {
      backgroundColor: "unset"
    },
    "&:hover": {
      borderBottom: "0px"
    },
    marginRight: 8
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

const dumpData = [
  {
    shift: '0:00:00',
    driving: '0:00:00',
    inViolation: '0:00:00',
    from: '-',
    to: '-',
    details: 'Missing Driver Certification',
    date: 'Mon, Mar 29'
  },
];

const useStyles = makeStyles(styles);

export default function LogsTableDetails() {
  const classes = useStyles();
  const [selectTransfer, setSelectTransfer] = React.useState("null");
  const [dialog, setDialog] = React.useState(false);

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
      <LegendIcon className={classes.legendIcon}/>
      <div className={classes.textDetails}>{cell}</div>
    </div>
  }
  const formatDate = (cell, row) => {
    return <div className={classes.details}>
      <div className={classes.textSub}>{cell}</div>
      <DropDownIcon className={classes.dropDownIconDate}/>
    </div>
  }

  useEffect(() => {
    if (selectTransfer == 'email_to_custom_recipient') {
      setDialog(true)
    }
  },[selectTransfer])

  return (
    <>
      <CardBody>
        {
          dialog ? <DialogComponent open={true} /> : ""
        }
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <GridContainer className={classes.headContainer}>
              <GridItem>
                <Calendar/>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.headLeft}>
            <FormControl variant="outlined">
              <Select
                native
                value={selectTransfer}
                onChange={event => setSelectTransfer(event.target.value)}
                // label="Age"
                className={classes.selectForm}
                IconComponent={() => (
                  <DropDownIcon className={classes.dropDownIcon}/>
                )}
              >
                <option value={"null"} disabled>Transfer Logs</option>
                <option value={"email_to_custom_recipient"}>Email to custom recipient</option>
                <option value={"FMCSA_audit_transfer"}>FMCSA Audit Transfer</option>
                <option value={"email_to_FMCSA"}>Email to FMCSA</option>
              </Select>
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
        data={dumpData}
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
    </>
  );
}
