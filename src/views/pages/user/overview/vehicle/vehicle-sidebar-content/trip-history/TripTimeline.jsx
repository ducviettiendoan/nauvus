import React, { useEffect } from 'react';
import clsx from "clsx";
import { Drawer } from "@material-ui/core";
import { setOpenDrawer } from "reducers/overview";
import { connect } from "react-redux";
import { Trips } from "./Trips";
import { makeStyles } from "@material-ui/core/styles";
import { TripTimelineSidebar } from "./TripTimelineSideBar";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import timelineImg from "assets/img/triptimeline.png";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";

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
  }
}));

export function TripTimeline(props) {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  useEffect(() => { props.setOpenDrawer(false) }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <span>Trip Timeline Ongoing</span>
        </div>
        <GridContainer>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg} />
          </GridItem>
          <GridItem onClick={handleDrawerOpen} >
            <img src={timelineImg} />
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg} />
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg} />
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg} />
          </GridItem>
          <GridItem onClick={handleDrawerOpen}>
            <img src={timelineImg} />
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
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
      </Drawer>
    </div>
  )
}

const mapStateToProps = ({ overview }) => {
  return {
  };
};

const mapDispatchToProps = {
  setOpenDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(TripTimeline);