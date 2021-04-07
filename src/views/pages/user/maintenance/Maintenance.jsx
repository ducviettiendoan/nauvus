import React, {useState, useEffect} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import AddOutlined from "@material-ui/icons/AddOutlined";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import './maintenaceStyle.css'

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "@material-ui/core/Button";
import TableMaintenance from "./components/tableMaintenance";
import Calendar from "components/Calendar/Calendar";
import Defects from "../maintenance/components/Defects";
import Dvirs from "../maintenance/components/Dvirs";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import MoreHorizontalIcon from "components/Icons/MoreHorizontalIcon";
import LiveIconWhite from "components/Icons/LiveIconWhite";


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
  searchBar: {
    textAlign: "left",
    height: "45px",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "32px"
  },
  select: {
    background: "#FFFFFF",
    border: "1px solid #C4C4C4",
    boxSizing: "border-box",
    borderRadius: "20px",
  },
  headerRight: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  selectForm: {
    width: "138px",
    height: "41px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    "& >select": {
      paddingRight: "0 !important",
      width: "100%",
      zIndex: "1000",
    },
    "&::before": {
      borderBottom: "0px"
    },
    "& > select:focus": {
      backgroundColor: "unset"
    },
    "&:hover": {
      borderBottom: "0px"
    },
    marginRight: 8
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 8,
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important",
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center",
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
    borderRadius: "30px",
  },
  addButton: {
    background: "#25345C",
    color: "#FFFFFF",
    borderRadius: "28px",
    padding: "14px 10px",
    textTransform: "initial",
    fontSize: "14px",
    lineHeight: "17px",
    fontStyle: "normal",
    marginLeft: "10px",
    width: "170px",
  }

};

const useStyles = makeStyles(styles);

// function defectCreateData(asset, currentLocation, lastDvirStatus, count, unresolvedDefects) {
//   return {asset, currentLocation, lastDvirStatus, count, unresolvedDefects};
// }

// function dvirsCreateData(asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight) {
//   return {asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight};
// }


export default function Maintenance() {
  const classes = useStyles();

  const [tab, setTab] = useState(0);


  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
    
  };

  const handleChangeTab = (newTab) => {
    setTab(newTab);
  };

  const BlueButton = tab === 1 ?                         
  <Button
    round
    className= {classes.addButton}
    startIcon={<AddOutlined/>}
  >
    Add a driver
  </Button>
  :
  null


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>

                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <GridContainer className={classes.topHeader}>
                    <GridItem
                        xs={12}
                        sm={11}
                        md={4}
                        xl={4}
                        className={classes.topHeaderTitle}
                    >
                        <RoundedTabs
                        tabs={[
                            "Defects",
                            "Dvirs"
                        ]}
                        tabValue={handleChangeTab}
                        />
                    </GridItem>
                    <GridItem
                        xs={12}
                        sm={4}
                        md={8}
                        xl={8}
                        className={classes.topHeaderButton}
                    >
                        <Calendar placeholder="Day" />
                        <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.moreAction} mr-2`}
                        >
                        <MoreHorizontalIcon />
                        </Button>
                        <Button round className="btn-round-green w-84">
                        <LiveIconWhite />
                        Live
                        </Button>
                        {BlueButton}
 
                    </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>             
            </GridItem>
          </GridContainer>
          {tab === 0 && <Defects/>}
          {tab === 1 && <Dvirs/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}
