import React, { useState, useEffect } from "react"
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button.js";
import CheckedIcon from "components/Icons/CheckedIcon";
import CloseIcon from "components/Icons/CloseIcon";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import Table from "components/Table/TableV1";
import Chip from "@material-ui/core/Chip";
import CustomTimeline from "components/CustomTimeline/CustomTimeline"
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import Assigned from "../Assigned";
import DiaLog from "components/CustomDialog/Dialog";
import AssignDriverDialog from "./AssignDriverDialog"
// utils
import { getUnassignedDetailsData } from "reducers/safety"
import avatar from "assets/img/faces/avatar.jpg";
import { connect } from "react-redux"
import { Grid, makeStyles } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import TrashIcon from "components/Icons/TrashIcon";
import GreenTickIcon from "components/Icons/GreenTickIcon";


const useStyles = makeStyles((theme) => ({
  accuracyCard: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    paddingTop: "16px !important",
    paddingBottom: "16px !important",
    textAlign: "left"
  },
  accuracyHeader: {
    paddingBottom: "4px !important",
    color: "#25345C",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "bold"
  },
  accuracyContent: {
    paddingTop: "4px !important",
    paddingBottom: "16px !important",
    color: "#B4B4B4",
    fontSize: "14px",
    lineBreak: "17px",
    fontWeight: "normal"
  },
  checkedButton: {
    width: "20px !important",
    height: "20px !important",
    color: "#FFFFFF"
  },
  accuracyFooter: {
    color: "#25345C",
    fontSize: "14px",
    lineBreak: "17px",
    fontWeight: "normal",
    textDecorationLine: "underline",
    paddingLeft: "10px !important"
  },
  warningCard: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    padding: "16px !important",
    background: "#ECEEF0",
    display: "flex",
    flexDirection: "row"
  },
  warningContent: {
    color: "#25345C",
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: "normal",
    textAlign: "left"
  },
  onHeaderCellAvatar: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  onHeaderCellFirst: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "28px"
  },
  textSub: {
    fontWeight: 700,
    color: "#25345C",
    paddingLeft: "14px"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  gridTitle: {
    padding: "20px 0px 20px 0px"
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
  chips: {
    fontWeight: 400,
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
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
  onHeaderRow: {
    background: "#ECEEF0",
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
  avatarImage: {
    width: 100,
    height: 100,
    borderRadius: "50%"
  },
  driverText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#ECEEF0",
    borderRadius: "28px",
    width: "176px",
    height: "37px",
    padding: "8px 16px 8px 16px"
  },
  trashIcon: {
    fill: "#E53935 !important"
  },
  tripContent: {
    paddingLeft: "5px"
  },
  dest: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "400",
    display: "flex"
  },
  timeline: {
    position: "relative",
    right: "17px",
    maxWidth: "150px",
    minheight: "20px !important"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeaderButton: {
    display: "flex",
    justifyContent: "flex-end"
  },
  dialogHeader: {
    padding: "4px 16px 16px 16px"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center"
  },
}))

function UnassignedDetails(props) {
  const classes = useStyles()

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = selectedRowKeys => setSelectedRowKeys(() => [...selectedRowKeys])

  const [value, setValue] = React.useState(0);
  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  // get redux data
  useEffect(() => {
    props.getUnassignedDetailsData()
  }, [])

  // chips in table
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Standard Admin' },
    { key: 1, label: 'Full Admin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  // timeline data
  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}>Claycon Road, Toront...</div>
      </div>,
      color: "green"
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}>Vaughan, ON...</div>
      </div>,
      color: "red"
    }
  ]

  // colums in table
  const columns = [
    {
      title: 'Face',
      key: 'face',
      onHeaderCell: { className: classes.onHeaderCellAvatar },
      render: user => (
        <div><img src={avatar} alt="user-avatar" className={classes.avatarImage} /></div>
      ),
    },
    {
      title: 'Driver',
      key: 'driver',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: vehicle => <div className={classes.driverText}>
        <div>{vehicle}</div>
        <div>
          <GreenTickIcon />
          <TrashIcon viewBox="0 0 24 18" classes={{
            root: classes.trashIcon
          }} />
        </div>
      </div>,
    },
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: vehicle => <div className={classes.textSub}>{vehicle}</div>,
    },
    {
      title: 'Trip',
      key: 'trip',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: faces => <div className={classes.textSub}>
        <div className={classes.timeline}>
          <CustomTimeline styleTimeline={{ minHeight: "20px" }} timelineContent={timelineContent} />
        </div></div>
    }
  ]

  // dialog states
  const [openDialog, setOpenDialog] = React.useState(false)

  const handleOpen = () => {
    setOpenDialog(!openDialog)
  }

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer className={classes.topHeader}>
              <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                <RoundedTabs tabs={["Unassigned", "Assigned"]} tabValue={handleChangeTab} />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                <Button
                  round
                  className="btn-round-active mr-2 h-41"
                  onClick={handleOpen}
                >
                  Ungroup by Vehicle
                </Button>
                <Calendar isNotContainer={true} />
              </GridItem>
              {value === 1 && <Assigned />}
              {value === 0 &&
                <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                  <Table
                    renderTitle={
                      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
                        <Card className={classes.accuracyCard}>
                          <GridItem className={classes.accuracyHeader}>Improve Assignment Accuracy</GridItem>
                          <GridItem className={classes.accuracyContent}>Completing a few set up steps will help improve your automatic driver assignments:</GridItem>
                          <GridItem style={{ display: "flex", alignItems: "center " }}>
                            <CheckedIcon className={classes.checkedButton} />
                            <Grid className={classes.accuracyFooter}>Set up driver auto-assignment groups</Grid>
                          </GridItem>
                        </Card>
                        <Card className={classes.warningCard}>
                          <InfoOutlined />
                          <GridItem className={classes.warningContent}>
                            Trip segments which already have a static driver assignment will not appear in the Driver Assignment Report.
                            Static driver assignment take precedence over any driver assignment made by Camera ID throughout our platform. For more information,
                            please visit the FAQ section in our Knowledge Base.
                      </GridItem>
                        </Card>
                        <Grid container className={classes.gridTitle}>
                          <Grid item xs={12} sm={12} md={7}>
                            <Grid container className={classes.headContainer}>
                              <Grid item xl={2} className={classes.userRolesTitle}> {chipData.length} selected for </Grid>
                              <Grid item xl={10} className={classes.chipSelected}>
                                {chipData.map(data => (
                                  <Chip
                                    deleteIcon={<CloseIcon />}
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
                          <Grid xs={12} sm={12} md={5} className={classes.headLeft}>
                            <ToolboxButton placeholder="Search faces" showFilter showChecked />
                          </Grid>
                        </Grid>
                      </div>
                    }
                    rowSelection={{
                      selectedRowKeys,
                      onChange: onSelectChange,
                    }}
                    pagination={{
                      total: props.total,
                      current: props.page,
                      pageSize: props.pageSize,
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
                </div>}
            </GridContainer>

          </GridItem>
        </GridContainer>
        <DiaLog
          maxWidth={"md"}
          renderTitle={<div className={classes.dialogHeader}>
            <h3 className={classes.dialogTitle}>Assign a driver</h3>
            <h4 className={classes.dialogSubTitle}>Match trips with the driver to get more accurate insights on your fleet</h4>
          </div>}
          handleClose={handleClose}
          open={openDialog}
        >
          <AssignDriverDialog close={handleClose} />
        </DiaLog>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ safety }) => {
  return {
    data: safety.unassignedDetails.data,
    page: safety.unassignedDetails.page,
    total: safety.unassignedDetails.total,
    pageSize: safety.unassignedDetails.pageSize,
  }
}

const mapDispatchToProps = {
  getUnassignedDetailsData
}

export default connect(mapStateToProps, mapDispatchToProps)(UnassignedDetails)