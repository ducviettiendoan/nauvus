import React, {useEffect} from 'react'
import {Drawer} from "@material-ui/core";
import {setOpenDrawer} from "../../../../../../../reducers/overview";
import {connect} from "react-redux";
import {Trips} from "./Trips";
import {makeStyles} from "@material-ui/core/styles";
import {TripTimelineSidebar} from "./TripTimelineSideBar";
import GridContainer from "../../../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../../../components/Grid/GridItem";
import timelineImg from "../../../../../../../assets/img/triptimeline.png"

const drawerWidth = 525;
const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth - 1,
    marginLeft: "1px",
    marginTop: "1px",
    overflow: "hidden",
  },
  tripTimelineTitle: {
    display: "flex",
    alignItems: "center",
    justifyContents: "space-between",
    flexDirection: "row"
  }
}

const useStyles = makeStyles(styles)

export function TripTimeline(props) {
  const [open, setOpen] = React.useState(true)
  const classes = useStyles()

  useEffect(() => {
    props.setOpenDrawer(false)
  }, [])

  const listTimeline = ["0", "1", "2", "3", "4", "5"]

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <TripTimelineSidebar />
      </Drawer>
      <GridContainer>
        {listTimeline.map((timeline, i) => {
          return (
            <GridItem key={i}>
              <img src={timelineImg}/>
            </GridItem>
          )
        })}
      </GridContainer>
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