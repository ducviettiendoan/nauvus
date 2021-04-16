import React, {useEffect} from 'react';
import clsx from "clsx";
import {Drawer} from "@material-ui/core";
import {setOpenDrawer} from "reducers/overview";
import {connect} from "react-redux";
import {Trips} from "./Trips";
import {makeStyles} from "@material-ui/core/styles";
import {TripTimelineSidebar} from "./TripTimelineSideBar";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import timelineImg from "assets/img/triptimeline.png";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import trip from "../../../../../../../assets/img/TripHistoryContent.png"
import {Col, Row} from "reactstrap";
import DriverIcon from "../../../../../../../components/Icons/DriverIcon";
import TripDriverIcon from "../../../../../../../components/Icons/TripDriverIcon";
import TruckIcon from "../../../../../../../components/Icons/TruckIcon";
import tripmap from "../../../../../../../assets/img/tripmapdemo.png"
import CustomTimeline from "../../../../../../../components/CustomTimeline/CustomTimeline";
import Button from "../../../../../../../components/CustomButtons/Button";
import NavigationIcon from "../../../../../../../components/Icons/NavigationIcon";
import OrganizationUpload from "../../../../../../../components/CustomUpload/OrganizationUpload";
import DiaLog from "../../../../../../../components/CustomDialog/Dialog";
import TripHistoryDialog from "./TripHistoryDialog";
import ArrowBackIcon from "../../../../../../../components/Icons/ArrowBackIcon";

const drawerWidth = 525;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  sidebarTitle: {
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '24px',
    color: '#25345C',
  },
  sidebarHeader: {
    padding: "22px 0px 0px 16px",
    display: "flex",
    alignItems: "center"
  },
  sidebarContent: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '24px',
    color: '#25345C',
  },
  sidebarHeaderContent: {
    padding: "15px 0px 0px 27px",
    display: "flex",
    alignItems: "center"
  },
  dest: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#25345C",
    fontWeight: "400",
    display: "flex"
  },
  time: {
    fontSize: "12px",
    lineHeight: "18px",
    color: "#B4B4B4",
    fontWeight: "400",
    marginBottom: 4
  },
  tripContainer: {
    marginBottom: "12px !important",
    marginLeft: "16px"
  },
  tripContent: {
    paddingLeft: "5px",
    minWidth: "237px !important"
  },
  timeline: {
    position: "relative",
    right: "17px",
    maxWidth: "150px"
  },
  buttonFullWidth: {
    width: "100%",
    marginBottom: "24px"
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
  headerButton: {
    padding: "14px 0px 14px 31px !important"
  },
  headerButtonRight: {
    padding: "14px 0px 14px 8px !important"
  }
}));

export function TripTimeline(props) {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  useEffect(() => {
    props.setOpenDrawer(false)
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openDialog, setOpenDialog] = React.useState(false)

  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Milton, ON</div>
        <div className={classes.time}> 12:05 PM EDT (1h 2m)</div>
      </div>,
      color: "green",
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}> Vaughan, ON</div>
        <div className={classes.time}>Mar 22, 11:03 AM EDT</div>
      </div>,
      color: "red",
    }
  ]

  const handleClose = () => {
    setOpenDialog(false)
  }


  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon/>
          </IconButton>
          <span className={classes.sidebarTitle}>Trip Timeline Ongoing</span>
        </div>
        <GridContainer>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg}/>
          </GridItem>
        </GridContainer>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div>
          <Row>
            <Col xs={4} className={classes.headerButton}>
              <Button
                round
                className="btn-round-white w-142 h-41"
                startIcon={<ArrowBackIcon/>}
                onClick={handleDrawerClose}
              >
                Previous Trip
              </Button>
            </Col>
            <Col xs={8} className={classes.headerButtonRight}>
              <Button
                round
                className="btn-round-gray w-116 h-41"
                startIcon={<ArrowBackIcon/>}
              >
                Next Trip
              </Button>
            </Col>
          </Row>
        </div>
        <Divider/>
        <Row className={classes.sidebarHeader}>
          <Col className={classes.sidebarTitle}>
            Mar 22, 11:03 AM EDT
          </Col>
        </Row>
        <Row className={classes.sidebarHeaderContent}>
          <TripDriverIcon/>
          <Col className={classes.sidebarContent}>
            Bashir Said Isse
          </Col>
        </Row>
        <Row className={classes.sidebarHeaderContent}>
          <TruckIcon/>
          <Col className={classes.sidebarContent}>
            405
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={tripmap} style={{width: "100%"}}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classes.tripContainer}>
              <div className={classes.timeline}>
                <CustomTimeline
                  timelineContent={timelineContent}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              round
              className={`btn-round-active h-41 ${classes.buttonFullWidth}`}
              onClick={() => setOpenDialog(!openDialog)}
            >
              Retrieve Video
            </Button>
          </Col>
        </Row>
      </Drawer>
      <DiaLog
        // fullWidth={false}
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
    </div>
  )
}

const mapStateToProps = ({overview}) => {
  return {};
};

const mapDispatchToProps = {
  setOpenDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(TripTimeline);