import React from "react";
// @material-ui/core components
// @material-ui/icons
// core components
import {connect} from "react-redux";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import {makeStyles} from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button";
import CustomDateRangePicker from "components/CustomDateRangePicker/CustomDateRangePicker";
import Saved from "./video-retrieval/Saved";
import DiaLog from "components/CustomDialog/Dialog";
import TripHistoryDialog from "../overview/vehicle/vehicle-sidebar-content/trip-history/TripHistoryDialog";


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
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
  dialogSubTitle: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

function VideoRetrieval(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [openDialog, setOpenDialog] = React.useState(false)

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setOpenDialog(false)
  }

  return (
    <>
      <DiaLog
        maxWidth={"md"}
        renderTitle={<div>
          <h3 className={classes.dialogTitle}>Request Video</h3>
          <h4 className={classes.dialogSubTitle}>View historical video from your camera </h4>
        </div>}
        handleClose={handleClose}
        open={openDialog}
      >
        <TripHistoryDialog close={handleClose}/>
      </DiaLog>
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
                    onClick={() => {setOpenDialog(true)}}
                  >
                    Request Video
                  </Button>
                  <CustomDateRangePicker/>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          {value === 0 && <Saved />}
          {value === 1 && <Saved />}
          {value === 2 && <Saved />}
        </GridItem>
      </GridContainer>
    </>
  );
}

const mapStateToProps = ({safety}) => {
  return {
  };
};

const mapDispatchToProps = { 
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoRetrieval);
