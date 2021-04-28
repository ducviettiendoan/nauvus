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
};

const useStyles = makeStyles(styles);

function Alerts(props) {
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
                  <RoundedTabs tabs={["Insidents", "Configure"]} tabValue={handleChangeTab} />
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
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

          {value === 0 && <Insidents />}
          {value === 1 && <div>b</div>}
          {value === 2 && <div>c</div>}
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = ({ }) => {
  return {};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
