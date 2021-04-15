import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FormatQuote from "@material-ui/icons/FormatQuote";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button";
import AddOutlined from "@material-ui/icons/AddOutlined";
import {MoreHoriz} from "@material-ui/icons";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import ValidAddresses from "./addresses-geofences/ValidAddresses";
import InvalidAddresses from "./addresses-geofences/InvalidAddresses";
import DiaLog from "../../../../../components/CustomDialog/Dialog";
import AddWorkingHoursForm from "./driver-activity/AddWorkingHoursForm";
import AddAddressForm from "./addresses-geofences/AddAddressForm";

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
    textAlign: "right",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

export default function AddressesGeofences(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openAdd, setOpenAdd] = useState(false);


  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <DiaLog
        renderTitle={<h3 className={classes.dialogTitle}>Site Details</h3>}
        handleClose={() => {
          setOpenAdd(false)
        }
        }
        open={openAdd}
      >
        <AddAddressForm handleClose={() => {
          setOpenAdd(false)
        }}/>
      </DiaLog>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={[
                    "Valid Addresses (2)",
                    "Invalid Addresses (0)"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                    startIcon={<AddOutlined/>}
                    onClick={()=> {
                      setOpenAdd(true)
                    }}
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
              {value === 0 && <ValidAddresses/>}
              {value === 1 && <InvalidAddresses/>}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  );
}