import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import {getDriverHOS, getViolations} from "reducers/compliance";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import RoundedTabs from "../../../../components/CustomTabs/RoundedTabs";
import Calendar from "../../../../components/Calendar/Calendar";
import MoreHorizontalIcon from "../../../../components/Icons/MoreHorizontalIcon";
import Popper from "@material-ui/core/Popper";
import classNames from "classnames";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import LiveIconWhite from "../../../../components/Icons/LiveIconWhite";
import DriverQueue from "./coaching/CoachingDriverOueue";
import Effectiveness from "./coaching/CoachingEffectiveness";
import Summary from "./coaching/CoachingSummary";

const useStyles = makeStyles((theme) => ({
  tableRow: {
    '&:nth-of-type(even)': {
      backgroundColor: "#fbfbfb",
    },
  },

  alignItemsCenter: {
    display: "flex",
    alignItems: "center",
  },
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
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  tableTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 700,
  },
  centerTitle: {
    display: "flex",
    alignItems: "center",
  }
}));

export function Coaching(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const [openMore, setOpenMore] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleCloseMore = () => setOpenMore(false)
  const handleOpenMore = (event) => {
    setOpenMore(true)
    setAnchorEl(event.currentTarget);
  }

  const dropdownItem = classNames(classes.dropdownItem, classes.grayHover);

  React.useEffect(() => {
    // Get list data
    props.getViolations();
  }, []);

  return (
    <div>

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["Driver Queue", "Effectiveness", "Summary"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Calendar placeholder="Day"/>
                  <Button round className="btn-round-green w-84">
                    <LiveIconWhite/>
                    Live
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>

          {value === 0 && <DriverQueue/>}
          {value === 1 && <Effectiveness/>}
          {value === 2 && <Summary/>}
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({compliance}) => {
  return {
    data: compliance.violations.data,
    page: compliance.violations.page,
    total: compliance.violations.total,
    pageSize: compliance.violations.pageSize
  };
};

const mapDispatchToProps = {
  getViolations
};

export default connect(mapStateToProps, mapDispatchToProps)(Coaching);
