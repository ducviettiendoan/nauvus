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
import Starred from "./components/Starred";
import {setShowCrash} from "reducers/safety";
import Button from "components/CustomButtons/Button";
import CustomDateRangePicker from "components/CustomDateRangePicker/CustomDateRangePicker";
import Saved from "./video-retrieval/Saved";
import Retrieval from "./video-retrieval/Retrieval";


const styles = {
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

};

const useStyles = makeStyles(styles);

function VideoRetrieval(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };
  const mockData = {dateTime: "Feb 3, 2021, 4:24 PM", id: "709", driver: "Haydee Watson Peigan", route: "Trail SE, 8 km NNW", location: "Shepard, AB", length: 1, favorite: false}

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={8} md={8} xl={6} className={classes.topHeaderTitle}>
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
          {value === 1 && <Retrieval data={mockData} />}
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
  setShowCrash
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoRetrieval);
