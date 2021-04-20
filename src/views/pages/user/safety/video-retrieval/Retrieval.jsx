import React from "react";
import {makeStyles} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import StarEmptyIcon from "components/Icons/StarEmptyIcon";
import LocationIcon from "components/Icons/LocationIcon";
import img from "assets/img/bg.png"
import driving1 from "assets/img/driving1.png"
import driving2 from "assets/img/driving2.png"
import Card from "components/Card/Card";
import {GOOGLE_MAP_API_KEY} from "config/constants";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps";
import CustomTimeline from "components/CustomTimeline/CustomTimeline";
import Button from "components/CustomButtons/Button";

const styles = theme => ({
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24
  },
  specialRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 24
  },
  subRow: {
    display: "flex",
    alignItems: "center",
  },
  mainText: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: 18
  },
  mainTextGrey: {
    fontWeight: 700,
    fontSize: 18,
    color: "#b4b4b4",
  },
  text: {
    color: "#25345C",
    fontWeight: 400,
    fontSize: 18
  },
  textGrey: {
    fontWeight: 400,
    fontSize: 18,
    color: "#b4b4b4"
  },
  subText: {
    color: "#25345C",
    fontWeight: 700,
    fontSize: 16
  },
  marginLeft24: {
    marginLeft: 24
  },
  icon: {
    marginRight: 10,
    fontSize: 18
  },
  smallImg: {
    marginRight: 8,
    borderRadius: 8,
    width: 166,
  },
  bigImg: {
    borderRadius: 8,
    marginBottom: 12,
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: "49%",
    },
  },
  overflow: {
    overflow: "auto"
  },
  cardMargin: {
    margin: "16px",
    display: "flex",
    flexDirection: "row",
    padding: 16,
    flexWrap: "wrap"
  },
  tripContent: {
    paddingLeft: "5px",
    minWidth: "237px !important"
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
    marginBottom: 4,
    textAlign: "left"
  },
  tripContainer: {
    marginBottom: "12px !important",
    width: "100%",
    paddingTop: "4px",
    [theme.breakpoints.up('md')]: {
      width: "306px",
    },
  },
  timeline: {
    maxWidth: "306px",
    margin: "auto"
  },
  mapWrapper: {
    padding: 0,
    width: "100%",
    [theme.breakpoints.up('md')]: {
      width: "calc(100% - 306px)",
    },
  },
  buttonPaddingLeft: {
    padding: "12px 16px",
    marginRight: 8
  },
  buttonPadding: {
    padding: "12px 16px",
  },
  location: {
    width: 270,
    margin: "auto",
    marginTop: "16px",
    marginBottom: "16px",
    textAlign: "left",
    display: "flex",
    alignItems: "center"
  }

})

const RegularMap = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={props.center}
        defaultOptions={{
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false
        }}
      />
    )
  })
);

const useStyles = makeStyles(styles)
const Retrieval = (props) => {

  const classes = useStyles()

  const mockData = {dateTime: "Feb 3, 2021, 4:24 PM", id: "709", driver: "Haydee Watson Peigan", route: "Trail SE, 8 km NNW", location: "Shepard, AB", length: 1, favorite: false}

  const {dateTime, id, driver, route, location, length, favorite} = props.data || mockData

  const timelineContent = [
    {
      title: "B",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}>Trail SE, 8 km NNW Shepard, AB</div>
        <div className={classes.time}>4:24 PM</div>
      </div>,
      color: "green",
    },
    {
      title: "A",
      content: <div className={classes.tripContent}>
        <div className={classes.dest}>Highway 401Express, Mississauga, ON</div>
        <div className={classes.time}>Feb 3, 4:24 PM</div>
      </div>,
      color: "red",
    }
  ]

  const renderMap = () => {
    return (
      <RegularMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`}
        loadingElement={<div style={{height: 280}}/>}
        containerElement={<div className={classes.mapWrapper}/>}
        mapElement={<div style={{height: 280, borderRadius: 12}}/>}
        isMarkerShown
        center={{lat: 40.748817, lng: -73.985428}}
      />
    )
  }


  return (
    <>
      <GridContainer>
        <GridItem className={classes.row} xs={12}>
          <div>
            <span className={classes.mainText}>Retrieval: </span>
            <span className={classes.mainTextGrey}>{dateTime}</span>
          </div>
          <div>
            <span className={classes.textGrey}>Driver: </span>
            <span className={classes.text}>{driver}</span>
            <span className={classes.textGrey + " " + classes.marginLeft24}>Vehicle: </span>
            <span className={classes.text}>{id}</span>
          </div>
        </GridItem>
        <GridItem className={classes.row} xs={12}>
          <div className={classes.subRow}>
            <StarEmptyIcon className={classes.icon}/>
            <span className={classes.mainText}>{dateTime}</span>
            <LocationIcon color="#c4c4c4" className={classes.marginLeft24 + " " + classes.icon}/>
            <span className={classes.mainText}>{route}. {location}</span>
          </div>
        </GridItem>
        <GridItem className={classes.row + " " + classes.overflow} xs={12}>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
          <img src={img} className={classes.smallImg}/>
        </GridItem>
        <GridItem className={classes.row} xs={12}>
          <div className={classes.subText}>31 km/h - Limit 100</div>
          <div className={classes.subText}>11:02:40 AM EDT</div>
        </GridItem>
        <GridItem className={classes.specialRow} xs={12}>
          <img src={driving1} className={classes.bigImg}/>
          <img src={driving2} className={classes.bigImg}/>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <Card testimonial className={classes.cardMargin}>
              {renderMap()}
              <div className={classes.tripContainer}>
                <div className={classes.timeline}>
                  <CustomTimeline
                    timelineContent={timelineContent}
                    classes={{
                      root: classes.timelineContent
                    }}
                  />
                </div>
                <div className={classes.location}>
                  <LocationIcon className={classes.icon}/>
                  <span className={classes.subText}>{route} {location}</span>
                </div>
                <div>
                  <Button
                    round
                    className={`btn-round-white h-41 ` + classes.buttonPaddingLeft}
                  >
                    View Trip
                  </Button>
                  <Button
                    round
                    className={`btn-round-active h-41 `  + classes.buttonPadding}
                  >
                    View Incident Report
                  </Button>
                </div>
              </div>
            </Card>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default Retrieval