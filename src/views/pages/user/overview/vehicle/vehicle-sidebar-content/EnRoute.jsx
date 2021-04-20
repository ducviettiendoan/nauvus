import React from 'react'
import Accordion from "components/Accordion/Accordion";
import Button from "components/CustomButtons/Button";
import LiveStreamIcon from "components/Icons/LiveStreamIcon";
import CameraWhiteIcon from "components/Icons/CameraWhiteIcon";
import driving from "assets/img/driving.png";
import Card from "components/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import DiaLog from "components/CustomDialog/Dialog";
import OutwardFacing from "components/CustomCamera/OutwardFacing";
import RefreshIcon from "components/Icons/RefreshIcon";
import vehicleSidebarContentStyle from "./vehicleSidebarContentStyle";

const useStyles = makeStyles(vehicleSidebarContentStyle);

export default function EnRoute() {
  const classes = useStyles()

  const [openLiveStream, setOpenLiveStream] = React.useState(false);
  const [openCamera, setOpenCamera] = React.useState(false);

  return (
    <div>
      <Card className={classes.dropdownContent}>
        <Accordion collapses={
          [
            {
              title:
                <div className={classes.enRouteContainer}>
                  <div className={classes.cardExpandHeaderTitle}>
                    En Route
                  </div>
                </div>,
              content:
                <div style={{width: "100%"}}>
                  <Button
                    round
                    className={`btn-round-active h-36 w-166 ${classes.livestreamButton}`}
                    startIcon={<LiveStreamIcon/>}
                    onClick={() => setOpenLiveStream(true)}
                  >
                    View Live Stream
                  </Button>
                  <Button
                    color="white"
                    aria-label="edit"
                    justIcon
                    round
                    className={`btn-36 ${classes.cameraButton} mr-2`}
                    onClick={() => setOpenCamera(true)}
                  >
                    <CameraWhiteIcon/>
                  </Button>
                  <img src={driving} style={{width: 332, height: 190}}/>
                </div>
            },
          ]
        }
                   expansionSummaryClasses={{
                     root: classes.expansionClasses,
                     content: classes.expansionContentClasses
                   }}
                   expansionPanelClasses={{
                     root: classes.expansionPanelClasses,
                   }}
                   expansionPanelRounded={{
                     rounded: classes.expansionPanelClassesRounded,
                   }}
        />
      </Card>
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>New Camera Snapshot</h3>
            <h4 className={classes.dialogSubTitle}>Taken at 12:02:46 PM </h4>
          </>
        }
        open={openCamera}
      >
        <img src={driving} style={{width: 534, marginBottom: 16}}/>
        <OutwardFacing/>
        <div className={classes.selectButton}>
          <Button
            type="button"
            round
            className="btn-round-active-2 mr-2"
            onClick={() => setOpenCamera(false)}
          >
            Close
          </Button>
          <Button
            round
            className="btn-round-active mr-2"
            type="submit"
            startIcon={<RefreshIcon/>}
          >
            Refresh
          </Button>
        </div>
      </DiaLog>
      <DiaLog
        renderTitle={
          <>
            <h3 className={classes.dialogTitle}>Real Time</h3>
            <h4 className={classes.dialogSubTitle}>Taken at 12:02:46 PM </h4>
          </>
        }
        open={openLiveStream}
      >
        <img src={driving} style={{width: 534, marginBottom: 16}}/>
        <div className={classes.selectButton}>
          <Button
            type="button"
            round
            className="btn-round-active-2 mr-2"
            onClick={() => setOpenLiveStream(false)}
          >
            Close
          </Button>
        </div>
      </DiaLog>
    </div>

  )
}