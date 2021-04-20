import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import AddOutlined from "@material-ui/icons/AddOutlined";
import RoundedTabs from "components/CustomTabs/RoundedTabs";
import ByAsset from "./live-sharing/ByAsset";
import ByLocation from "./live-sharing/ByLocation";
import ByRecurringRoute from "./live-sharing/ByRecurringRoute";
import DiaLog from "components/CustomDialog/Dialog";
import AddNewURLForm from "./live-sharing/AddNewURLForm";

const styles = {
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
  dialogTitle: {
    fontWeight: "bold",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#25345C",
    margin: "24px",
    textAlign: "center"
  },
};

const useStyles = makeStyles(styles);

export default function LiveSharing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const [dialogValue, setDialogValue] = React.useState(0)
  const [openAdd, setOpenAdd] = useState(false);

  const handleChangeTab = (newValue) => {
    setValue(newValue);
  };

  const handleChangeDialogTab = (newValue) => {
    setDialogValue(newValue);
  };

  return (
    <>
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>Create a new URL</h3>
            <div className={classes.dialogTitle}>
            <RoundedTabs tabs={["For Asset(S)", "For A Location", "For A Recurring Route"]} tabValue={handleChangeDialogTab}/>
            </div>
            </>
        }
        handleClose={() => {
          setOpenAdd(false)
        }
        }
        open={openAdd}
      >
        <AddNewURLForm
          dialogValue={dialogValue}
          handleClose={() => {
          setOpenAdd(false)
        }}/>
      </DiaLog>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>

              <GridContainer className={classes.topHeader}>
                <GridItem xs={12} sm={11} md={8} xl={6} className={classes.topHeaderTitle}>
                  <RoundedTabs tabs={["By Asset", "By Location", "By Recurring Route"]} tabValue={handleChangeTab}/>
                </GridItem>
                <GridItem xs={12} sm={4} md={4} xl={6} className={classes.topHeaderButton}>
                  <Button
                    round
                    className="btn-round-active mr-4"
                    startIcon={<AddOutlined/>}
                    onClick={()=>{setOpenAdd(true)}}
                  >
                    Create Link
                  </Button>
                </GridItem>
              </GridContainer>
              {value === 0 && <ByAsset />}
              {value === 1 && <ByLocation />}
              {value === 2 && <ByRecurringRoute />}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  );
}
