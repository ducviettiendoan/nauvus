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
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";



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

  textEmail2: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#C4C4C4",
    fontWeight: 400,
    marginLeft: "10px !important",
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
    '&:nth-of-type(4)': {
        backgroundColor: "#ECEEF0",
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
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    paddingLeft: "0px !important",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "53px",
    height: "41px"
  },

  textStatus2: {
    fontSize: '14px',
    lineHeight: '24px',
    padding: "0px !important",
    color: "#25345C",
    background: "#FFFFFF",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: "95px",
    height: "40px"
  },

}));

export default function Defects(props) {
  const classes = useStyles();


  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  };

  let dumpData = [];
  for (let i = 0; i < 20; i++) {
    let item = {
      id: i + 2,
      key: i + 2,
      asset: "Vehicle 101",
      currentLocation: "8.1 mi SSE Rockford, IL",
      lastDvirStatus: "Safe",
      count: "1",
      unresolvedDefects: "Fuel Sysrem",
      actions: "",
    };

    dumpData.push(item);
    dumpData.map(data => {
        if (data.key === 5){
            data.actions = "Last Dvir";
        }
    });
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
      title: 'Current Location',
      key: 'currentLocation',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: currentLocation => <div className={classes.textEmail}>{currentLocation}</div>
    },
    {
      title: 'Last Dvir Status',
      key: 'lastDvirStatus',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: lastDvirStatus => <div className={classes.textStatus}>{lastDvirStatus}</div>
    },
    {
      title: 'Count',
      key: 'count',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: count => <div className={classes.textEmail}>{count}</div>
    },
    {
      title: 'Unresolved Defects',
      key: 'unresolvedDefects',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: unresolvedDefects => (
        <div>
            <span className={classes.textEmail}>{unresolvedDefects}</span>
            <span className={classes.textEmail2}>Feb 20, 5:13 AM</span>
        </div>
      )
                                    
    },
    {
      title: 'Actions',
      key: "actions",
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: actions => <div className={classes.textStatus2}>{actions}</div>
    },
  ]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            {dumpData.length > 0 && <Table
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
                    <ToolboxButton placeholder="Search driver" showFilter showColumn/>
                  </Grid>
                </Grid>
              }
              columns={columns}
              dataSource={dumpData}
              pageSize = {7}
              onHeaderRow={{
                className: classes.onHeaderRow
              }}
              onBodyRow={{
                className: classes.tableRow
              }}
            />
            }
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

