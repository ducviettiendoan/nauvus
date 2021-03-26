import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from "@material-ui/core/Select";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "@material-ui/core/Button";
import TableMaintenance from "./components/tableMaintenance";
import Calendar from "../../../../components/Calendar/Calendar";


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
    "& >select" : {
      paddingRight:"0 !important",
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
    position:"absolute",
    right: 8,
  }
};

const useStyles = makeStyles(styles);

function defectCreateData(asset, currentLocation, lastDvirStatus, count, unresolvedDefects) {
  return { asset, currentLocation, lastDvirStatus, count, unresolvedDefects };
}

function dvirsCreateData(asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight) {
  return { asset, currentDriver, makeModel, batteryVoltage, engineHours, odometer, checkEngineLight};
}

const defectRows = [
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
  defectCreateData('Vehicle 101', "8.1 mi SSE Rockford, IL", "Safe", 1, "Fuel Sysrem Feb 20, 5:13 AM"),
];

const divrsRows = [
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
  dvirsCreateData('115', "Shahid Mamino", "Freightline R/SCT 120", 14.3, "46,567","69,469", "Off"),
];



export default function Maintenance() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card testimonial>

                <GridContainer style={{padding: 16}}>
                  <GridItem xs={12} sm={12} md={12}>

                    <GridContainer style={{padding: "0 16px",alignItems: "center"}}>
                      <GridItem xs={3} sm={3} md={3} className={classes.searchBar}>
                        <IconButton type="submit" aria-label="search">
                          <SearchIcon/>
                        </IconButton>
                        <InputBase
                          placeholder="Search Drivers"
                        />
                      </GridItem>
                      <GridItem xs={9} sm={9} md={9} className={classes.headerRight}>
                        <FormControl variant="outlined">
                          <Select
                            native
                            value={"1"}
                            // onChange={handleChange}
                            // label="Age"
                            className={classes.selectForm}
                            IconComponent={() => (
                              <DropDownIcon className={classes.dropDownIcon} />
                            )}
                          >
                            <option value={1}>1.1 Weeks</option>
                          </Select>
                        </FormControl>
                        <FormControl variant="outlined">
                          <Calendar />
                        </FormControl>
                        <FormControl variant="outlined" className="moreIcon">
                          <IconButton>
                            <MoreHorizIcon fontSize="large" />
                          </IconButton>
                        </FormControl>
                        <FormControl variant="outlined">
                          <Button variant="contained" size="large" className="liveButton">
                            Live
                          </Button>
                        </FormControl>
                        {/*<form noValidate>*/}
                        {/*  <TextField*/}
                        {/*    id="date"*/}
                        {/*    type="date"*/}
                        {/*    defaultValue="2017-05-24"*/}
                        {/*    className={classes.textFieldDay}*/}
                        {/*    InputLabelProps={{*/}
                        {/*      shrink: true,*/}
                        {/*    }}*/}
                        {/*  />*/}
                        {/*</form>*/}
                      </GridItem>
                    </GridContainer>
                  
                  </GridItem>
                </GridContainer>
                <TableMaintenance />
              </Card>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
