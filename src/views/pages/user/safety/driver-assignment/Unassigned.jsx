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
import { getUnassignedData } from "reducers/safety"

// utils
import { connect } from "react-redux"
import { Grid, makeStyles } from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";


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
}))

function Unassigned(props) {
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    props.getUnassignedData()
  }, [])

  const viewDetail = (id) => {
    history.push(`/safety/driver-assignment-details/${id}`)
  }

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

  const columns = [
    {
      title: 'Vehicle',
      key: 'vehicle',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: vehicle => <div className={classes.textSub}>{vehicle}</div>,
    },
    {
      title: 'Number of Faces',
      key: 'faces',
      onHeaderCell: { className: classes.onHeaderCellFirst },
      render: faces => <div className={classes.textSub}>{faces}</div>
    }
  ]

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <div>
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
                        <ToolboxButton placeholder="Search vehicles" showFilter />
                      </Grid>
                    </Grid>
                  </div>
                }
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
                  onClick: viewDetail,
                  className: classes.tableRow
                }}
              />
            </div>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  )
}


const mapStateToProps = ({ safety }) => {
  return {
    data: safety.unassignedAssignment.data,
    page: safety.unassignedAssignment.page,
    total: safety.unassignedAssignment.total,
    pageSize: safety.unassignedAssignment.pageSize,
  }
}

const mapDispatchToProps = {
  getUnassignedData
}

export default connect(mapStateToProps, mapDispatchToProps)(Unassigned)