import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import {connect} from 'react-redux';
import {getStatusSummary, getUnassignedHOS} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import CustomizedProgressBars from "components/ProgressBar/ProgressBar";
import {Col, Row} from "reactstrap";

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
    alignItems: "center"
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
}));

export function UnassignedHOS(props) {
  const classes = useStyles();

  React.useEffect(() => {
    // Get list data
    props.getUnassignedHOS();
  }, []);

  const [chipData, setChipData] = React.useState([
    {key: 0, label: 'Cycle Tomorrow'},
    {key: 1, label: 'Cycle Remaining'},
  ]);

  const onShowSizeChange = (page, pageSize) => {
    props.getUnassignedHOS({ page, pageSize }); 
  }

  const onPageChange = (page, pageSize) => {
    props.getUnassignedHOS({ page, pageSize }); 
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const viewDetail = () => {
    props.history.push("/u/compliance/unassigned-hos-report/123456789")
  }

  const columns = [
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: {className: classes.onHeaderCellFirst},
      render: vehicle => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textName}>{vehicle}</div>
        </div>
      ),
    },
    {
      title: 'Unassigned Time',
      key: 'unassignedTime',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: unassignedTime => <div className={classes.textEmail}>{unassignedTime}</div>
    },
    {
      title: 'Unassigned Distance',
      key: 'unassignedDistance',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: unassignedDistance => <div className={classes.textEmail}>{unassignedDistance}</div>
    },
    {
      title: 'Segments',
      key: 'segments',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: segments => <div className={classes.textEmail}>{segments}</div>
    },
    {
      title: 'Pending',
      key: 'pending',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: pending => <div className={classes.textEmail}>{pending}</div>
    },
    {
      title: 'Annotated',
      key: 'annotated',
      onHeaderCell: {className: classes.onHeaderCellNext},
      render: annotated => <div className={classes.textEmail}>{annotated}</div>
    },
  ]

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
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
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.moreAction} mr-2`}
                  >
                    <MoreHorizontalIcon/>
                  </Button>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <div>
            {
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
                    <ToolboxButton placeholder="Search driver" showFilter showColumn/>
                  </Grid>
                </Grid>
              }
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
                onClick: viewDetail,
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

const mapStateToProps = ({ compliance }) => {
  return {
    data: compliance.unassignedHOS.data,
    page: compliance.unassignedHOS.page,
    total: compliance.unassignedHOS.total,
    pageSize: compliance.unassignedHOS.pageSize
  };
};

const mapDispatchToProps = {
  getUnassignedHOS, 
  getStatusSummary
};

export default connect(mapStateToProps, mapDispatchToProps)(UnassignedHOS);
