import React from "react";
import { connect } from 'react-redux';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend"; 
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import Calendar from "components/Calendar/Calendar";
import LiveIconWhite from "components/Icons/LiveIconWhite";
import Button from "components/CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Insidents from './Insidents';
import Configure from './Configure'
import { setTab } from "reducers/alerts";

const styles = {
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15
  },
  topHeaderTitle: {
    textAlign: "left",
    fontWeight: 700,
    fontSize: 18,
    color: "#25345C",
    padding: "0 16px !important"
  },
  topHeaderButton: {
    textAlign: "right !important",
    display: "flex",
    alignItems: "center"
  },
  layoutAlert: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
};

const useStyles = makeStyles(styles);

function Alerts(props) {
  const classes = useStyles();

  const handleChangeTab = (value) => {
    props.setTab(value)
  };
  return (
    <div className={classes.layoutAlert}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer className={classes.topHeader}>
            <GridItem xs={12} sm={11} md={6} xl={6} className={classes.topHeaderTitle}>
              <RoundedTabs tabs={["Insidents", "Configure"]} value={props.tab} tabValue={handleChangeTab} />
            </GridItem>
            <GridItem xs={12} sm={4} md={6} xl={6} className={classes.topHeaderButton}>
              <Calendar placeholder="Day" />
              <div>
                <FormControl variant="outlined" className="moreIcon">
                  <IconButton style={{ width: "40px", height: "40px" }}>
                    <MoreHorizIcon fontSize="small" style={{ color: "#25345C" }} />
                  </IconButton>
                </FormControl>
              </div>
              <Button round className="btn-round-green w-84"> <LiveIconWhite /> Live </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>

      {props.tab === 0 && <Insidents />}
      {props.tab === 1 && <Configure />}
    </div>
  );
}

const mapStateToProps = ({ alerts }) => {
  return {
    tab: alerts.tab
  };
};

const mapDispatchToProps = {
  setTab
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
