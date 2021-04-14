import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {connect} from 'react-redux';
import {getStatusSummary, getUnassignedHOSUnassigned} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomizedProgressBars from "components/ProgressBar/ProgressBar";
import {Col, Row} from "reactstrap";
import AssignHOSSegment from "./AssignHOSSegment";
import DiaLog from "components/CustomDialog/Dialog";


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
    marginTop: "30px"
  },
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    },
    marginTop: "25px"
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#25345C',
    paddingLeft: "12px"
  },
  textSub: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontWeight: 400
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
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  progressTitle: {
    textAlign: "left",
    fontWeight: 400,
    fontSize: 14,
    color: "#B4B4B4"
  },
  progressData: {
    textAlign: "right",
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C"
  },
  progressBar: {
    marginTop: 8
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  actionButton: {
    paddingRight: "40px",
    display: "flex",
    justifyContent: "space-between"
  },
  
  editHeader: {
    textAlign: "center"
  },
  dialogTitle: {
    fontSize: "22px",
    fontWeight: "700",
    lineHeight: "26.4px",
    color: "#25345C"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "17px",
    color: "#B4B4B4"
  }
}));

export function Unassigned(props) {
  const classes = useStyles();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  React.useEffect(() => {
    // Get list data
    props.getUnassignedHOSUnassigned();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const onShowSizeChange = (page, pageSize) => {
    props.getUnassignedHOSUnassigned({ page, pageSize }); 
  }

  const onPageChange = (page, pageSize) => {
    props.getUnassignedHOSUnassigned({ page, pageSize }); 
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const onSelectChange = selectedRowKeys => setSelectedRowKeys(() => [...selectedRowKeys])

  
  const openAssignHOS = () => {
    setOpenForm(true)
  }

  const closeAssignHOS = () => {
    setOpenForm(false)
  }


  const columns = [
    {
      title: 'Start Time',
      key: 'startTime',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: startTime => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textSub} >{startTime}</div>
        </div>
      ),
    },
    {
      title: 'Duration',
      key: 'duration',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: duration => <div className={classes.textSub}>{duration}</div>
    },
    {
      title: 'Distance',
      key: 'distance',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: distance => <div className={classes.textSub}>{distance}</div>
    },
    {
        title: 'Trip',
        key: 'trip',
        onHeaderCell: {className: classes.onHeaderCellNext},
        render: trip =><div>
            <div className={classes.textSub}>{trip.to}</div>
            <div className={classes.textSub}>{trip.from}</div>
            </div> 
      },
      {
        title: 'Camera ID',
        key: 'cameraId',
        onHeaderCell: {className: classes.onHeaderCellNext},
        render: cameraId => <div className={classes.textSub}>{cameraId}</div>
      },
    {
      title: 'Annotation',
      key: 'annotation',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: annotation => <div className={classes.textSub}>{annotation}</div>
    },
    {
        title: 'Actions',
        key: 'action',
        onHeaderCell: { className: classes.onHeaderCellNext },
        render: () => (
          <div className={classes.actionButton}>
            <Button
              round
              className="btn-round-white"
              onClick={openAssignHOS}
              >
              Assign
            </Button>
            <Button
              round
              className="btn-round-white"
              >
              Annotate
            </Button>
          </div>
        )
      }
  ]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <div>
            {
             <Table
              renderTitle={
                <Grid container className={classes.gridTitle}>
                    <GridItem xs={12} sm={11} md={7} xl={7} className={classes.topHeaderTitle}>
                    <GridContainer>
                    <GridItem xs={6} className={classes.progress}>
                      <Row>
                        <Col className={classes.progressTitle}>
                          Unassigned Distance
                        </Col>
                        <Col className={classes.progressData}>
                          47.5km
                        </Col>
                      </Row>
                      <Row className={classes.progressBar}>
                        <Col>
                          <CustomizedProgressBars value={50}/>
                        </Col>
                      </Row>
                    </GridItem>
                    <GridItem xs={6}>
                      <Row>
                        <Col className={classes.progressTitle}>
                          Unassigned Distance
                        </Col>
                        <Col className={classes.progressData}>
                          57m 21s km
                        </Col>
                      </Row>
                      <Row className={classes.progressBar}>
                        <Col>
                          <CustomizedProgressBars value={80}/>
                        </Col>
                      </Row>
                    </GridItem>
                    </GridContainer>
                    </GridItem>
                  <Grid item xs={12} sm={12} md={6}>
                    <Grid container className={classes.headContainer}>
                      <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} records selected </Grid>
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
                    <ToolboxButton placeholder="Search driver"/>
                    <Button
                      round
                      className="btn-round-white-4"
                    >
                      Assign Selected
                    </Button>
                    <Button
                      round
                      className="btn-round-white-4"
                    >
                      Annotate Selected
                    </Button>
                  </Grid>
                </Grid>
              }
              rowSelection={{
                selectedRowKeys,
                onChange: onSelectChange,
              }}
              pagination={{
                total: props.total,
                current: props.page,
                pageSize: props.pageSize,
                onChange: onPageChange,
                onShowSizeChange: onShowSizeChange
              }}
              columns={columns}
              dataSource={props.data}
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
      <DiaLog
        renderTitle={<div className={classes.editHeader}>
          <h3 className={classes.dialogTitle}>Assign HOS Segment</h3>
          <p className={classes.dialogSubTitle}>Apr 1, 2021</p>
          </div>}
        handleClose={closeAssignHOS}
        open={openForm}
      >
        <AssignHOSSegment handleClose={closeAssignHOS}/>
      </DiaLog>
    </div>
  );
}

const mapStateToProps = ({ compliance }) => {
  return {
    data: compliance.unassignedHOSUnassigned.data,
    page: compliance.unassignedHOSUnassigned.page,
    total: compliance.unassignedHOSUnassigned.total,
    pageSize: compliance.unassignedHOSUnassigned.pageSize
  };
};

const mapDispatchToProps = {
  getUnassignedHOSUnassigned, 
  getStatusSummary
};

export default connect(mapStateToProps, mapDispatchToProps)(Unassigned);
