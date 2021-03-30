import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import {Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import Button from "components/CustomButtons/Button";
import EditIcon from "components/Icons/EditIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import InvalidAddresses from "./addresses-geofences/InvalidAddresses";
import WorkingHours from "./driver-activity/WorkingHours";
import MaxDistance from "./driver-activity/MaxDistance";

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
  liveSharingHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "8px !important"
  },
  headContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "5px"
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
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chip: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: 12,
    marginRight: 8
  },
  clearAll: {
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
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: '2px'
  },
  textName: {
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    color: '#25345C',
    marginLeft: '24px'
  },
  textSub: {
    fontWeight: '400',
    color: '#25345C',
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginBottom: '14px',
    marginLeft: '24px'
  },
  tagButton: {
    color: "#27AE60",
    background: "#e9f7ef",
    padding: "11px 16px",
    borderRadius: "28px",
    textAlign: "center",
    height: "41px"
  },
  topHeaderButton: {
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
};

const useStyles = makeStyles(styles);

export default function DriverActivity() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer className={classes.topHeader}>
        <GridItem xs={12} sm={11} md={8} xl={6} className={classes.tabsContainer}>
          <RoundedTabs tabs={["Working Hours", "Max Distance"]} tabValue={handleChangeTab}/>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
          <Button
            round
            className="btn-round-active w-150 mr-2"
            startIcon={<AddOutlined/>}
          >
            Add Address
          </Button>
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz/>
          </Button>
        </GridItem>
      </GridContainer>
      {value === 0 && <WorkingHours />}
      {value === 1 && <MaxDistance />}
    </div>
  );
}
