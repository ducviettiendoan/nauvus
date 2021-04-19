import React from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import {connect} from "react-redux";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import {makeStyles} from '@material-ui/core/styles';
import {cardTitle, roseColor,} from "assets/jss/material-dashboard-pro-react.js"; 
import Button from "components/CustomButtons/Button";
import CustomDateRangePicker from "components/CustomDateRangePicker/CustomDateRangePicker";
import Saved from "./video-retrieval/Saved";


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
  chipRow: {
    marginLeft: "8px",
  },
  cardMargin: {
    margin: "16px !important",
  },
  subTitleposition: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px 30px 0px 0px !important",

  }

};

const useStyles = makeStyles(styles);

function VideoRetrieval(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Saved", "Requests", "Starred"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-2"
                  >
                    Request Video
                  </Button>
                  <CustomDateRangePicker/>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <Saved />}
          {/*{value === 1 && <Requests />}*/}
          {/*{value === 2 && <Starred />}*/}
        </GridItem>
      </GridContainer>
    </>
  );
}

const mapStateToProps = ({safety}) => {
  return {
    showCrash: safety.showCrash
  };
};

const mapDispatchToProps = { 
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoRetrieval);
