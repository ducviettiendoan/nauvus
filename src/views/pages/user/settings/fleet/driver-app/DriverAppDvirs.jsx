import React, {useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Switch from "components/CustomSwitch/Switch.jsx"
import CustomCheckbox from "../../../../../../components/CustomCheckbox/CustomCheckbox";
import AddIcon from "../../../../../../components/Icons/AddIcon";
import DiaLog from "../../../../../../components/CustomDialog/Dialog";
import AddAdminForm from "../../org/tags/AddAdminForm";

const styles = {
  gridContent: {
    display: "flex",
    alignItems: "center",
    padding: "0px 0px 0px 0px !important",
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
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  contentItem: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    padding: "0px 0px 17px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",

  },
  cardMultipleContent: {
    paddingLeft: "12px !important",
    paddingBottom: "20px !important"
  },
  contentContainer: {
    display: "flex",
    margin: "16px 7px 16px 16px",
    paddingLeft: "20px",
  },
  bigHeaderItem: {
    fontWeight: 700,
    fontSize: 16,
    color: "#25345C",
    padding: "9px 0px 15px 0px !important",
    overflow: "hidden",
  },
  headItem: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    padding: "9px 0px 6px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  switch: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  cardBody: {
    paddingTop: "5px",
  },

  firstContentHeader: {
    fontWeight: 700,
    fontSize: 14,
    color: "#25345C",
    padding: "9px 0px 15px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  firstContent: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    padding: "0px 0px 17px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  cardMultipleContent2: {
    paddingLeft: "6px !important"
  },
  contentItem2: {
    color: "#B4B4B4",
    fontWeight: 700,
    fontSize: 14,
    padding: "0px 0px 8px 0px !important",
    lineHeight: "21px",
    overflow: "hidden",
  },
  firstContentHeaderButton: {
    textAlign: "right"
  },
  checkBox: {
    fontSize: 14,
    color: "#25345C",
    padding: "16px 0",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    "&>span": {
      paddingRight: 8
    }
  },
  divider: {
    width: "100%",
    margin: "24px 0 24px 0",
    borderTop: "1px solid #ECECF2"
  },
  dialogTitle: {
    color: "#25345C",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center"
  },
  dialogSubTitle: {
    fontWeight: 700,
    fontSize: "14px",
    color: "#B4B4B4",
    textAlign: "center",
  },
};

const useStyles = makeStyles(styles);

export default function DriverAppDvirs() {
  const classes = useStyles();
  const [openAdd, setOpenAdd] = useState(false)
  const handleChange = (event) => {
  };

  return (
    <GridContainer>
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>Add Custom Tile</h3>
            <h4 className={classes.dialogSubTitle}>Information for the DVIR entry</h4>
          </>
        }
        handleClose={() => {
          setOpenAdd(false)
        }
        }
        open={openAdd}
      >
        <AddAdminForm handleClose={() => {
          setOpenAdd(false)
        }}/>
      </DiaLog>
      <CardBody className={classes.cardBody}>
        <GridContainer className={classes.cardMultipleContent} xs={12}>
          <GridItem xs={12} className={classes.gridContent}>
            <GridItem className={classes.cardItem} xs={12}>
              <GridItem className={classes.bigHeaderItem}>
                Custom App Tiles
              </GridItem>
              <GridItem className={classes.contentItem} xs={12}>
                Add a custom tile to the home screen that links to other apps.
              </GridItem>
            </GridItem>
            <Button
              className="btn-round-white-3 h-41"
              startIcon={<AddIcon/>}
              style={{boxShadow: 'none'}}
              onClick={() => {
                setOpenAdd(true)
              }}
            >
              Add Title
            </Button>
          </GridItem>

          <GridItem xs={12} className={classes.gridContent}>
            <GridItem className={classes.cardItem} xs={12}>
              <GridItem className={classes.headerItem}>
                Hours of Service
              </GridItem>
              <GridItem className={classes.contentItem} xs={12}>
                Drivers will be able to update their driving status and edit their logs. Drivers will NOT be in ELD
                compliance if this feature is disabled.
              </GridItem>
            </GridItem>
            <Switch onChange={handleChange} className={classes.switch}/>
          </GridItem>
          <hr className={classes.divider}/>
          <GridItem xs={12} className={classes.gridContent}>
            <GridItem className={classes.cardItem} xs={12}>
              <GridItem className={classes.headerItem}>
                DVIRs
              </GridItem>
              <GridItem className={classes.contentItem} xs={12}>
                Drivers will be able to submit pre and post-trip inspections of vehicles and trailers.
              </GridItem>
            </GridItem>
            <Switch onChange={handleChange} className={classes.switch}/>
          </GridItem>
          <GridItem xs={12} className={classes.gridContent}>
            <GridContainer>
              <GridItem xs={12} sm={6}>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Require walkaround photos
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Drivers must mark DVIRs as either pre or post trip
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Mandatory Checklist
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Automatically add "Vehicle Needs Sanitizing" defect to post-trip DVIRs
                </div>
              </GridItem>
              <GridItem xs={12} sm={6}>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Drivers must enter comments on DVIR defects
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Disallow Drivers from resolving DVIRs
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Enable Sanitization Tracking in DVIRs
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
          <hr className={classes.divider}/>
          <GridItem xs={12} className={classes.gridContent}>
            <GridItem className={classes.cardItem} xs={12}>
              <GridItem className={classes.headerItem}>
                Routes
              </GridItem>
              <GridItem className={classes.contentItem} xs={12}>
                Drivers will be able to view live, scheduled, and completed routes.
              </GridItem>
            </GridItem>
            <Switch onChange={handleChange} className={classes.switch}/>
          </GridItem>
          <GridItem xs={12} className={classes.gridContent}>
            <GridContainer>
              <GridItem xs={12}>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Allow drivers to select a route from the unassigned routes in the driver app.
                </div>
                <div className={classes.checkBox}>
                  <CustomCheckbox/>Require drivers to manually start all routes by choosing which route to start in
                  the Driver App. Drivers must explicitly start the route for it to begin tracking.
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <Button round className="btn-round-active mr-2">
          Save
        </Button>
        <Button round className="btn-round-active-2">
          Cancel
        </Button>
      </CardBody>
    </GridContainer>
  )
    ;
}
