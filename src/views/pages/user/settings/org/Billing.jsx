import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import SettingSearchBox from "components/SearchBox/SettingSearchBox";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import GenPaginationV1 from "components/Pagination/GenPaginationV1";

import Button from "components/CustomButtons/Button.js";
import { Row, Col } from "reactstrap";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import avatar from "assets/img/faces/avatar.jpg";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

import VerifiedIcon from "components/Icons/VerifiedIcon"
import CardIcon from "components/Icons/CardIcon"
import HelpIcon from "components/Icons/HelpIcon"
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import Gateway from "../devices/devices/Gateway";
import Sensors from "../devices/devices/Sensors";
import Summary from "./billing/Summary";
import Invoice from "./billing/Invoice";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  },
  textSub: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '16px',
    marginLeft: '24px',
    color: "#25345C",
  },
  textStatus: {
    fontSize: '14px',
    lineHeight: '24px',
    marginTop: '7px',
    marginBottom: '8px',
    marginLeft: '24px',
    padding: "12px 14px",
    color: "#FFFFFF",
    background: "rgba(229,57,53,0.85)",
    borderRadius: 23,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    width: 87,
    height: 41
  },
  invoiceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invoiceTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C"
  },
  invoiceButton: {
    textAlign: "right",
  },
  searchBox: {
    marginTop: "16px !important",
    textAlign: "right"
  },
  tabStyles: {
    centered: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tabItemStyles: {
    backgroundColor: "#FFFFFF",
    position: 'relative',
    display: 'block',
    border: '1px inner',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '12px 22px 12px 22px',
    color: '#555555',
    height: 'auto',
    marginRight: '8px',
    float: 'none',
    textTransform: 'none !important',
    minWidth: 'auto !important',
    minHeight: '41px !important',
    fontWeight: 700,
    fontSize: 14,
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  userHeader: {
    paddingTop: "27px"
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    marginTop: "-20px",
    marginRight: "20px"
  },
  status: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "left",
    display: 'inline-block'
  },
  avatar: {
    padding: "0px 0px 0px 0px !important",
    textAlign: "center",
    display: 'inline-block'
  },
  statusName: {
    color: "#25345C",
    fontWeight: "700",
    padding: "0px 0px 0px 0px !important",
  },
  statusVerify: {
    color: "#B4B4B4",
    fontWeight: "400",
    fontSize: "14px",
    padding: "0px 0px 0px 0px !important",
  },
  paymentData: {
    marginTop: "50px"
  },
  paymentTitle: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#25345C"
  },
  paymentType: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#B4B4B4"
  },
  paymentAmount: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#25345C",
    lineHeight: "21px"
  },
  paymentView: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#25345C",
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "11px"
  },
  paymentInfo: {
    padding: "0 !important",
    marginTop: "20px"
  },
  
  card: {
    paddingRight: "0 !important",
    marginTop: "25px",
    marginRight: "11px",
    marginLeft: "11px"
  },
  cardInfo: {
    paddingRight: "0 !important",
    marginTop: "25px",
    marginLeft: "11px"
  },
  paymentSection: {
    border: "1px solid #ECEEF0",
    borderRadius: "12px",
    margin: "15px",
  }, 
  helpBtn: {
    textAlign: "right"

  }
};

const useStyles = makeStyles(styles);

export default function Billing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={12} md={12} className={classes.topHeaderTitle}>
              <RoundedTabs tabs={["Summary", "Invoice"]} tabValue={handleChangeTab}/>
              { value === 0 && <Summary />}
              { value === 1 && <Invoice />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
