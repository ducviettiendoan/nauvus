import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import TableComponent from "components/Table/CustomTable"
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import {Tab, Tabs, Typography} from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import SettingSearchBox from "components/SearchBox/SettingSearchBox";
import BootstrapTable from "react-bootstrap-table-next";
import {Row} from "reactstrap";
import GenPaginationV1 from "../../../../../components/Pagination/GenPaginationV1";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import EditIcon from "../../../../../components/Icons/EditIcon";
import DeleteIcon from "../../../../../components/Icons/DeleteIcon";
import CopyIcon from "../../../../../components/Icons/CopyIcon";
import ArrowDownIcon from "../../../../../components/Icons/ArrowDownIcon";
import ArrowLeftIcon from "../../../../../components/Icons/ArrowLeftIcon";
import ArrowRightIcon from "../../../../../components/Icons/ArrowRightIcon";
import ArrowUpIcon from "../../../../../components/Icons/ArrowUpIcon";
import AddOutlined from "@material-ui/icons/AddOutlined";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardFooter from "../../../../../components/Card/CardFooter";
import Switch from "components/CustomSwitch/Switch.jsx"
import { Divider } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";
import DriverAppDvirs from "./components/DriverAppDvirs";
import DriverAppGeneral from "./components/DriverAppGeneral";
import DriverAppRoutes from "./components/DriverAppRoutes";

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
  liveSharingTitle: {
    fontWeight: 700,
    fontSize: 18,
    textAlign: "left",
    color: "#25345C",
    marginTop: '-17px'
  },
  liveSharingButton: {
    textAlign: "right",
    marginTop: "2px"
  },
  createLinkButton: {
    background: "#25345C",
    color: "white",
    borderRadius: 28,
    textTransform: "none",
    height: 46,
    fontSize: 14,
    marginRight: 21,
    marginTop: 17,
    "&:hover": {
      background: "#25345C !important"
    },
    fontWeight: 700
  },
  tableContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  inputAdornmentIcon: {
    color: "#8181A5",
    fontSize: "18px",
    marginLeft: "0 !important;"
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    marginLeft: "15px"
  },
  topHeaderButton: {
    textAlign: "right",
    
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
    fontSize: '16px',
    lineHeight: '24px',
    marginTop: '14px',
    marginLeft: '24px'
  },
  iconButton: {
    '&:hover': {
      color: '#25345C !important',
    }
  },
  gridContent: {
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 0px 0px !important"
  },
  cardItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 0px !important"
  },

  headerItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    fontFamily: "Lato",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },

  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "Lato",
    padding: "0px 0px 20px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  cardMultipleContent: {
    paddingLeft: "6px !important",
    paddingBottom: "20px !important"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
    paddingLeft: "20px",

  },
  textFieldRoot: {
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#C4C4C4'
  },
  textInputRoot: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#25345C'
  },


};

const useStyles = makeStyles(styles);

export default function DriverApp() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };
  const handleChange = (event) => {
  };

  return (
    <div style={{paddingTop: "16px"}}>

      <RoundedTabs tabs={["General", "Dvirs", "Routes"]} tabValue={handleChangeTab}/>

      <Card style={{padding:"0px 20px", marginTop: "16px"}}>

      <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer className={classes.topHeader}>
                  <GridItem xs={12} sm={11} md={6} xl={3} className={classes.topHeaderTitle}>
                  
                  </GridItem>
                </GridContainer>
                {value === 0 && <DriverAppGeneral />}
                {value === 1 && <DriverAppDvirs />}
                {value === 2 && <DriverAppRoutes />}

              </GridItem>
            </GridContainer>
          </GridItem>
      </GridContainer>
      </Card>
    </div>
  );
}
