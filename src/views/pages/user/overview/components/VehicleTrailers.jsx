import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import Button from "components/CustomButtons/Button";
import ToolboxButton from "components/CustomButtons/ToolboxButton";
import CloseIcon from "components/Icons/CloseIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import Chip from "@material-ui/core/Chip";
import Grid from '@material-ui/core/Grid';
import Table from "components/Table/TableV1";
import MoreIcon from "components/Icons/MoreIcon";
import { IRootState } from 'reducers';
import { connect } from 'react-redux';
import { getTrailersData } from "reducers/overview"

const styles = {
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
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
  chips: {
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
  onHeaderCell: {
    fontWeight: "bold"
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  dotIcon: {
    color: "#7CE7AC",
    marginTop: 10
  },
  textTable: {
    fontSize: '16px',
    lineHeight: '21px',
    color: "#25345C",
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
  },
  textStatus: {
    display: "inline-block",
    fontSize: '14px',
    lineHeight: '17px',
    padding: "12px 16px",
    color: "#27AE60",
    background: "rgba(39, 174, 96, 0.1)",
    borderRadius: 23,
    fontWeight: "bold",
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
};

const useStyles = makeStyles(styles);

function VehicleTrailers(props) {
  const classes = useStyles(styles)

  useEffect(() => {
    props.getTrailersData()
  }, [])

  const [chipData, setChipData] = useState([
    { key: 0, label: 'Standard Admin' },
    { key: 1, label: 'Full admin' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClearAll = () => {
    setChipData([])
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      onHeaderCell: { className: classes.onHeaderCell },
      render: user => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{user}</div>
        </div>
      ),
    },
    {
      title: 'Location',
      key: 'location',
      onHeaderCell: { className: classes.onHeaderCell },
      render: location => <div className={classes.alignItemsCenter}>
        <div className={classes.textTable}>{location.location}</div>
        <div className={classes.textTable}>{location.time}</div>
      </div>
    },
    {
      title: 'Last Trip',
      key: 'lastTrip',
      onHeaderCell: { className: classes.onHeaderCell },
      render: trip => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{trip}</div>
        </div>
      )
    },
    {
      title: 'Status',
      key: 'status',
      onHeaderCell: { className: classes.onHeaderCell },
      render: status => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{status}</div>
        </div>
      )
    },
    {
      title: 'Battery',
      key: 'battery',
      onHeaderCell: { className: classes.onHeaderCell },
      render: battery => (
        <div className={classes.alignItemsCenter}>
          <div className={classes.textTable}>{battery}</div>
        </div>
      )
    },
    {
      title: 'Tags',
      key: 'tag',
      onHeaderCell: { className: classes.onHeaderCell },
      render: tag => <div className={classes.textStatus}>{tag}</div>
    },
    {
      title: 'Actions',
      key: 'action',
      onHeaderCell: { className: classes.onHeaderCell },
      render: () => (
        <div className={classes.actionButton}>
          <Button justIcon color="google" simple>
            <DeleteIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
          <Button justIcon color="google" simple>
            <MoreIcon className={classes.iconButton} style={{ color: "#C4C4C4", width: '24px', height: '24px' }} />
          </Button>
        </div>
      )
    }
  ]

  return (
    <div>
      {props.data.length > 0 && <Table
        renderTitle={
          <Grid container className={classes.gridTitle}>
            <Grid item xs={12} sm={12} md={6}>
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
            <Grid xs={12} sm={12} md={6} className={classes.headLeft}>
              <ToolboxButton placeholder="Search in trailer" showFilter showTrash />
            </Grid>
          </Grid>
        }
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
  );
}

export default connect(
  ({ overview }) => ({
    data: overview.trailersData
  }),
  {
    getTrailersData
  }
)(VehicleTrailers);