import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import {Divider} from "@material-ui/core";
import Button from "components/CustomButtons/Button";
import EditIcon from "components/Icons/EditIcon";
import AddIcon from "components/Icons/AddIcon";
import DiaLog from "components/CustomDialog/Dialog";
import AddRulesetForm from "./AddRulesetForm";
import Table from "components/Table/TableV1";
import {Row} from "reactstrap";
import GridContainer from "../../../../../../components/Grid/GridContainer";

const styles = {
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
    // overflow: "hidden",
    maxWidth: "714px",

  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
  },
  textSub: {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    },
  },
  addIcon: {
    top: "3px !important"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  gridTitle: {
    padding: "20px"
  },
  onHeaderCell: {
    fontWeight: "bold",
    color: "#25345C",
  },
  tableHeader: {
    "&>:last-child": {
      "&>:first-child": {
        border: "none",
        boxShadow: "none",
        margin: 0,
        padding: 0,
      }
    }
  },
};

const dumpData = [
  {
    name: 'Default',
    cycle: "USA Property (8/70)",
    restart: '34-hour',
    restBreak: 'Property (on-duty/off-duty/sleeper)'
  },
];

const useStyles = makeStyles(styles);

export default function ComplianceRuleSet() {
  const [openAdd, setOpenAdd] = useState(false);
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

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cell => (
        <div className={classes.textName}>{cell}</div>
      ),
    },
    {
      title: 'Cycle',
      key: 'cycle',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cell => <div className={classes.textSub}>{cell}</div>
    },
    {
      title: 'Restart',
      key: 'restart',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cell => <div className={classes.textSub}>{cell}</div>

    },
    {
      title: 'Rest Break',
      key: 'restBreak',
      onHeaderCell: {className: classes.onHeaderCell},
      render: cell => <div className={classes.textSub}>{cell}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: {className: classes.onHeaderCell},
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="twitter" simple>
            <EditIcon className={classes.iconButton}
                      style={{color: "#ffffff", width: '22px', height: '22px'}}/>
          </Button>
        </div>
      )
    }
  ];

  return (
    <>
    <DiaLog
      renderTitle={<h3 className={classes.dialogTitle}>Create a new ruleset</h3>}
      handleClose={() => {
        setOpenAdd(false)
      }
      }
      open={openAdd}
    >
      <AddRulesetForm handleClose={() => {
        setOpenAdd(false)
      }}/>
    </DiaLog>

    <CardBody className={classes.cardContainer}>
      <GridItem className={classes.configTitle}>
        Driver Ruleset
      </GridItem>
      <GridContainer className={classes.cardMultipleContent}>
        <GridItem  xs={12} sm={12} md={12} >
          <div className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerItem}>
                Driver Ruleset
              </GridItem>
              <GridItem className={classes.contentItem}>
                Configure organization default HOS rules for drivers. Rulesets added here will
                be the
                default
                driver HOS ruleset for existing and new drivers added. Intrastate rules may be
                set here
                if your
                organization does not participate in Interstate commerce. If your organization
                has both
                Interstate and Intrastate drivers, use this setting for Interstate settings and
                use
                State
                Override for your Intrastate settings.
              </GridItem>
            </CardBody>
          </div>
          <div className={classes.tableHeader}>
            <Table
              className={classes.tableHeader}
              renderTitle={<></>
              }
              columns={columns}
              dataSource={dumpData}
              onHeaderRow={{className: classes.onHeaderRow}}
              onBodyRow={{className: classes.tableRow}}
            />
          </div>
          <Divider variant="fullWidth" light/>
          <div xs={12} sm={12} md={12} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerItem}>
                State Override Driver Ruleset
              </GridItem>
              <GridItem className={classes.contentItem}>
                Configure Intrastate HOS rules for drivers. The state override will only apply
                when the
                driver
                selects a vehicle that is in the state. If a driver leaves the state, the driver
                will be
                moved
                to the organization default ruleset for that cycle. When the driver returns to
                the home
                state,
                the driver will be kept on the organization default ruleset for the next 7 or 8
                days,
                per FMCSA
                rules.
              </GridItem>
            </CardBody>
          </div>
          <Button
            className="btn-round-white-3 h-41"
            startIcon={<AddIcon className={classes.addIcon}/>}
            style={{boxShadow: 'none', paddingBottom: 35}}
            onClick={() => {
              setOpenAdd(true)
            }}
          >
            Add a bounding state ruleset
          </Button>
          <Divider variant="fullWidth" light/>
          <GridItem xs={12} sm={12} md={12} className={classes.gridContent}>
            <CardBody className={classes.cardItem}>
              <GridItem className={classes.headerItem}>
                Canada Driver Ruleset
              </GridItem>
              <GridItem className={classes.contentItem}>
                Configure Intrastate HOS rules for drivers. The state override will only apply
                when the
                driver
                selects a vehicle that is in the state. If a driver leaves the state, the driver
                will be
                moved
                to the organization default ruleset for that cycle.
              </GridItem>
            </CardBody>
          </GridItem>
          <div className={classes.tableHeader}>
            <Table
              columns={columns}
              dataSource={dumpData}
              onHeaderRow={{className: classes.onHeaderRow}}
              onBodyRow={{className: classes.tableRow}}
            />
          </div>
        </GridItem>
      </GridContainer>
</CardBody>

</>
);
}
