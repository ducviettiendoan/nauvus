import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.js";
import Button from "components/CustomButtons/Button.js";
import AddOutlined from "@material-ui/icons/AddOutlined";
import RoundedTabs from "../../../../../components/CustomTabs/RoundedTabs";
import ByAccet from "./live-sharing/ByAccet";
import ByLocation from "./live-sharing/ByLocation";
import ByRecurringRoute from "./live-sharing/ByRecurringRoute";

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
};

const useStyles = makeStyles(styles);

export default function LiveSharing() {
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
                  <RoundedTabs tabs={["By Accet", "By Location", "By Recurring Route"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<AddOutlined/>}
                  >
                    Create Link
                  </Button>
                </GridItem>
              </GridContainer>
              {value === 0 && <ByAccet />}
              {value === 1 && <ByLocation />}
              {value === 2 && <ByRecurringRoute />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
