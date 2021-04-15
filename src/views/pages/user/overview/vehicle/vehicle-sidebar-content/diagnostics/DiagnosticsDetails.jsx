import React, {useEffect, useState} from "react";
import classNames from "classnames"
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import "perfect-scrollbar/css/perfect-scrollbar.css";
import {connect} from 'react-redux';
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import customDropdownStyle from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";
import {setOpenDiagnostics, setAnchorEl, getDiagnosticData} from "reducers/overview"
import GridItem from "../../../../../../../components/Grid/GridItem";
import Table from "../../../../../../../components/Table/TableV1";
import Divider from "@material-ui/core/Divider";
import Button from "../../../../../../../components/CustomButtons/Button";
import CloseButtonIcon from "../../../../../../../components/Icons/CloseButtonIcon";


const useStyles = makeStyles((theme) => ({
  ...customDropdownStyle(theme),
  dropdownVehicle: {
    borderTop: "1px solid #ECEEF0",
    borderRadius: "0px",
    boxShadow: "none",
    width: "500px",
    paddingLeft: "16px",
    paddingRight: "16px",
    zIndex: "2000",
    position: "absolute",
    top: "68px",
    left: "387px"
  },
  gatewayContentTitle: {
    fontWeight: 700,
    fontSize: '22px',
    color: '#25345C',
    padding: "0px 0px !important"
  },
  gatewayContentSubTitle: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#B4B4B4',
    padding: "0px 0px !important"
  },
  onHeaderCell: {
    fontWeight: "bold"
  },
  textDiagnostic: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#25345C',
    lineHeight: '24px'
  },
  textValue: {
    fontWeight: 400,
    fontSize: '16px',
    color: "#25345C",
    lineHeight: '21px'
  },
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },
  onHeaderRow: {
    background: "#ECEEF0",
  },
  tableTitle: {
    textAlign: "left",
    padding: "10px 0px"
  },
  diagnosticHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  }
}));


function DiagnosticsDetails(props) {
  const classes = useStyles();

  const handleCloseMore = () => {
    props.setOpenDiagnostics(false)
    props.setAnchorEl(false)
  }

  React.useEffect(() => {
    props.getDiagnosticData();
  }, []);

  const columns = [
    {
      title: 'Diagnostic',
      key: 'diagnostic',
      onHeaderCell: {className: classes.onHeaderCell},
      render: diagnostic => <div className={classes.textDiagnostic}>{diagnostic}</div>,
    },
    {
      title: 'Value',
      key: 'value',
      onHeaderCell: {className: classes.onHeaderCell},
      render: value => <div className={classes.textValue}>{value}</div>
    },
    {
      title: 'Timestamp',
      key: 'timeStamp',
      onHeaderCell: {className: classes.onHeaderCell},
      render: timeStamp => <div className={classes.textValue}>{timeStamp}</div>
    },
  ];

  return (
    <div>
      <Popper
        open={props.openDiagnostics}
        anchorEl={props.anchorEl}
        transition
        disablePortal
        placement="bottom"
        className={classNames({
          [classes.popperClose]: !props.anchorEl,
          [classes.popperResponsive]: true,
          [classes.popperNav]: true
        })}
      >
        {({TransitionProps}) => (
          <Grow
            {...TransitionProps}
            id="profile-menu-list"
            style={{transformOrigin: "0 0 0"}}
          >
            <Paper className={classes.dropdown && classes.dropdownVehicle}>
              <MenuList role="menu">
                <div>
                  <div className={classes.diagnosticHeader}>
                    <div className={classes.tableTitle}>
                      <GridItem xs={12} className={classes.gatewayContentTitle}>
                        Diagnostic
                      </GridItem>
                      <GridItem xs={12} className={classes.gatewayContentSubTitle}>
                        description
                      </GridItem>
                    </div>
                    <Button
                      color="white"
                      aria-label="edit"
                      justIcon
                      round
                      className={`btn-36 ${classes.moreAction} `}
                      onClick={handleCloseMore}
                    >
                      <CloseButtonIcon/>
                    </Button>
                  </div>

                  <Divider variant="fullWidth" light/>
                  <Table
                    columns={columns}
                    dataSource={props.data}
                    onHeaderRow={{className: classes.onHeaderRow}}
                    onBodyRow={{className: classes.tableRow}}
                  />
                </div>
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

const mapStateToProps = ({overview}) => {
  return {
    openDiagnostics: overview.openDiagnostics,
    anchorEl: overview.anchorEl,

    //Diagnostic Data
    data: overview.diagnosticData.data,
    page: overview.diagnosticData.page,
    total: overview.diagnosticData.total,
    pageSize: overview.diagnosticData.pageSize
  }
}

const mapDispatchToProps = {
  setOpenDiagnostics,
  setAnchorEl,
  getDiagnosticData
}


export default connect(mapStateToProps, mapDispatchToProps)(DiagnosticsDetails);