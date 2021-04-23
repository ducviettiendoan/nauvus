import React, {useState} from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
// import SafetyCard from "./Card.jsx"
// import "./Safety.css";
import { makeStyles } from '@material-ui/core/styles';
import {
  cardTitle,
  roseColor,
} from "assets/jss/material-dashboard-pro-react.js";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Calendar from "../../../../../components/Calendar/Calendar";
import Select from "@material-ui/core/Select";
import DropDownIcon from "../../../../../components/Icons/DropDownIcon";
import MenuItem from "@material-ui/core/MenuItem";
import LineChartCard from "../report/components/LineChart";



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
    // fontStyle: italics
    color: "#999999"
  },
  topHeaderTitle: {
    textAlign: "left",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headContainer: {
    alignItems: "center",
    textAlign: "left",
    marginTop: "8px"
  },
  userRolesTitle: {
    fontSize: 16,
    color: "#25345C",
    fontWeight: 700,
    paddingRight: "0px !important",
    paddingLeft: "23px !important",

  },
  chipSelected: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px !important"
  },
  chips: {
    background: "#ECEEF0",
    color: "#25345C",
    fontSize: "12px",
    marginRight: 8
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
  headLeft: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& > div": {
      marginBottom: "0 !important",
      marginRight: 8
    }
  },
  chipRow:{
    marginLeft: "8px",
  },
  cardMargin: {
    margin: "16px !important",
  },
  subTitleposition:{
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 30px 0px 0px !important",

  },
  selectForm: {
    width: "100%",
    height: "44px",
    background: "#FFFFFF",
    boxSizing: "border-box",
    borderRadius: "20px",
    padding: "0x !important",
    border: "1px solid #ECEEF0 !important",
    "&::before": {
      borderBottom: "0px",
    },
    "& > select:focus": {
      backgroundColor: "#FFFFFF !important",
    },
    "&:hover": {
      borderBottom: "0px",
    },
    marginRight: 15,
  },
  select: {
    color: "#25345C",
    fontWeight: 400,
    fontSize: 14,
    borderStyle: "none",
    borderWidth: 2,
    marginRight: 15,
    paddingTop: 14,
    paddingBottom: 15,
    "&:focus": {
      borderRadius: 12,
      backgroundColor: "white",
      borderColor: "#B4B4B4",
    },
  },
  dropDownIcon: {
    color: "#C4C4C4",
    cursor: "pointer",
    position: "absolute",
    right: 5,
  },

};

const useStyles = makeStyles(styles);

// function a11yProps(index) {
//   return {
//     id: `scrollable-force-tab-${index}`,
//     'aria-controls': `scrollable-force-tabpanel-${index}`,
//   };
// };

export default function ResolvedList(){
  const classes = useStyles();

  const handleChangeTab = (newValue) => {
    setValue(newValue);

  };

  const [selectValue, setSelectValue] = useState({
    selectA: "none",
  });

  const name = "selectA";
  const listValues = ["Needs Coaching", "Needs Review", "Needs Recognition", "Coached", "Reviewed", "Regconized", "Dismissed"];
  const placeholder1 = "Unassigned";
  const placeholder2 = "Need Review";
  const selectValue1 = selectValue.selectA;

  const menuProps = {
    classes: {
      paper: classes.paper,
      list: classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const handleChange = (event) => {
    setSelectValue({ ...selectValue, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            {/* 1st Bar */}
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  {/*<RoundedTabs tabs={["Inbox List", "Resolved List", "Dismissed", "Starred"]} tabValue={handleChangeTab}/>*/}
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                    <div>
                      <span>Driver:</span>
                      <span>Alexandr Fedyachkin</span>
                    </div>

                    <FormControl variant="outlined">
                      <Select
                        className={classes.selectForm}
                        fullWidth
                        disableUnderline
                        classes={{ root: classes.select }}
                        MenuProps={menuProps}
                        IconComponent={() => (
                          <DropDownIcon className={classes.dropDownIcon} />
                        )}
                        value={selectValue1}
                        onChange={handleChange}
                        name={name}
                      >
                        {selectValue1 === "none" && (
                          <option value="none" disabled style={{ display: "none" }}>
                            <span>Coach:</span>
                            <span>{placeholder1}</span>
                          </option>
                        )}
                        {listValues.map((value, i) => (
                          <MenuItem key={i} value={i}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                  <FormControl variant="outlined">
                    <Select
                      className={classes.selectForm}
                      fullWidth
                      disableUnderline
                      classes={{ root: classes.select }}
                      MenuProps={menuProps}
                      IconComponent={() => (
                        <DropDownIcon className={classes.dropDownIcon} />
                      )}
                      value={selectValue1}
                      onChange={handleChange}
                      name={name}
                    >
                      {selectValue1 === "none" && (
                        <option value="none" disabled style={{ display: "none" }}>
                          {placeholder2}
                        </option>
                      )}
                      {listValues.map((value, i) => (
                        <MenuItem key={i} value={i}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl variant="outlined" className="moreIcon">
                    <IconButton style={{width: "42px", height: "42px"}}>
                      <MoreHorizIcon fontSize="small" style={{color: "#25345C"}} />
                    </IconButton>
                  </FormControl>

                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <LineChartCard/>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>

        </GridItem>
        <GridItem xs={12} sm={12} md={12}>

        </GridItem>
      </GridContainer>
    </div>
  );
}
