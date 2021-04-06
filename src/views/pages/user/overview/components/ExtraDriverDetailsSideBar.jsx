import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import {useHistory, useLocation} from "react-router-dom";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import CustomSearchInput from "components/CustomInput/CustomSearchInput";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";

import SearchIcon18 from "components/Icons/SearchIcon18";

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// import PerfectScrollbar from "react-perfect-scrollbar";

import {Col, Row} from 'reactstrap';
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  extraSidebarContainer: {
    padding: '0 18px'
  },
  extraSidebarSearchContainer: {
    height: '68px',
    borderBottom: '1px solid #25345c1f',
    marginLeft: '-18px',
    marginRight: '-18px',
  },
  backButtonWrapper: {
    textAlign: "left",
    marginTop: "16px",
    marginBottom: "26px",
  },
  customButtonBack: {
    border: "1px solid #ECEEF0",
    borderRadius: 22,
    textAlign: "center",
    boxShadow: "none",
    paddingLeft: 0,
    padding: 0,
    width: 89,
    height: 42,
  }
};

import {connect} from 'react-redux';
import {IRootState} from 'reducers';
import Button from "components/CustomButtons/Button";
import ArrowBackIcon from "components/Icons/ArrowBackIcon";
import { setOpenDrawer } from "reducers/overview";

const useStyles = makeStyles(styles);
var ps;

export function ExtraDriverDetailsSideBar(props) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.extraSidebarContainer}>
        <Row className={classes.extraSidebarSearchContainer}>
          <Col>
            <div className={classes.backButtonWrapper}>
              <Button
                className={`btn-round-white-3 ${classes.customButtonBack}`}
                startIcon={<ArrowBackIcon className={classes.buttonIcon}/>}
                style={{boxShadow: "none", paddingLeft: "0px"}}
                onClick={e => {
                  props.setOpenDrawer(!props.openDrawer)
                }}
              >
                Back
              </Button>
            </div>
          </Col>
        </Row>

      </div>
    </>
  );
}

export default connect(
  ({overview}: IRootState) => ({
    data: overview.driversData,
    openDrawer : overview.openDrawer
  }),
  {
    setOpenDrawer
  }
)(ExtraDriverDetailsSideBar);