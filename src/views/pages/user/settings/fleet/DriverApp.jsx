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
};

const useStyles = makeStyles(styles);

export default function DriverApp() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["General", "Dvirs", "Routes"]} tabValue={handleChangeTab}/>
                </GridItem>
              </GridContainer>
              { value === 0 && <DriverAppGeneral />}
              { value === 1 && <DriverAppDvirs />}
              { value === 2 && <DriverAppRoutes />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
