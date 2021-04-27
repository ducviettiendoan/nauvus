import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import DiaLog from "components/CustomDialog/Dialog";
import VehicleDvirForm from "./VehicleDvirForm";
import {getDvirsData} from "reducers/maintainance";
import {connect} from "react-redux";



const useStyles = makeStyles((theme) => ({
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
    color: '#25345C',
    paddingLeft: "12px"
  },
  textEmail: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400,
    
  },

  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
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
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellNext: {
    fontWeight: 700,
    color: "#25345C",
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  dialogForm: {
    margin: "24px",
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    textAlign: "center"
  },
  dialogRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#C4C4C4',
    marginLeft: "16px",
    textAlign: "center",
  },

}));

export function Dvirs(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getDvirsData();
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
  };

  const columns = [
    {
      title: 'Asset',
      key: 'asset',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: asset => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{asset}</div>   
        </div> 
      ),
    },
    {
      title: 'Current Driver',
      key: 'currentDriver',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: currentDriver => <div className={classes.textEmail}>{currentDriver}</div>
    },
    {
      title: 'Make/Model',
      key: 'makeModel',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: makeModel => <div className={classes.texEmail}>{makeModel}</div>
    },
    {
      title: "Battery Voltage",
      key: 'batteryVoltage',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: batteryVoltage => <div className={classes.textEmail}>{batteryVoltage}</div>
    },
    {
      title: 'Engine Hours',
      key: 'engineHours',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: engineHours => <div className={classes.textEmail}>{engineHours}</div>                                 
    },
    {
      title: 'Odormeter(Mi)',
      key: "odormeter",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: odormeter => <div className={classes.textEmail}>{odormeter}</div>
    },
    {
        title: 'Check Engine Light',
        key: "checkEngineLight",
        onHeaderCell: {className: classes.onHeaderCellNext},
        render: checkEngineLight => <div className={classes.textEmail}>{checkEngineLight}</div>
      },
  ];

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>       
          <div>
            <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                      <Grid item xl={10} className={classes.chipSelected}>
                        {chipData.map(data => (
                          <Chip
                            deleteIcon={<CloseIcon/>}
                            label={data.label}
                            onDelete={handleDelete(data)}
                            className={classes.chips}
                          />
                        ))}
                        {chipData.length > 0 ?
                          (
                            <Button onClick={handleClearAll} className={classes.clearAll}>
                              Clear All
                            </Button>
                          ) : ""}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
                    <ToolboxButton placeholder="Search asset" showFilter showColumn/>
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={props.data}
              pageSize = {10}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />

          </div>
        </GridItem>
      </GridContainer>

      <DiaLog
        renderTitle={
          <div className={classes.dialogForm}>
            <h3 className={classes.dialogTitle}>Create a new DVIR entry</h3>
            <div className={classes.dialogRoot}>Information for the DVIR entry</div>
          </div>
        }
        handleClose={props.handleClose}
        open={props.open}

      >
        <VehicleDvirForm handleClose={props.handleClose}/>
      </DiaLog>

    </div>
  );
}

const mapStateToProps = ({maintainance}) => {
  return {
    data: maintainance.dvirs.data,
    page: maintainance.dvirs.page,
    total: maintainance.dvirs.total,
    pageSize: maintainance.dvirs.pageSize
  };
};

const mapDispatchToProps = {
  getDvirsData
};

export default connect(mapStateToProps, mapDispatchToProps)(Dvirs);

