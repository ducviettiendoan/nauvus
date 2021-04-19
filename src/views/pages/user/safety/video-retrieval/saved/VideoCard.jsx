import React, {useState} from "react";
import Card from "components/Card/Card";
import GridItem from "components/Grid/GridItem";
import img from "assets/img/istockphoto-1278066964-612x612 1.png"
import {makeStyles} from "@material-ui/core/styles";
import StarGreyIcon from "components/Icons/StarGreyIcon";
import StarYellowIcon from "components/Icons/StarYellowIcon";

const styles = {
  card: {
    margin: "8px 0",
  },
  videoCard: {
    marginBottom: 60
  },
  text: {
    fontSize: 18,
    fontWeight: 700,
    color: "#25345C",
    textAlign: "left",
    marginTop: 14,
    marginBottom: 12
  },
  subText: {
    fontSize: 18,
    fontWeight: 400,
    color: "#25345C",
    textAlign: "left",
    margin: "12px 0",
  },
  sText: {
    fontSize: 18,
    fontWeight: 400,
    color: "#C4C4C4",
    textAlign: "left",
    margin: "12px 0",
  },
  imgControl: {
    display: "flex",
    margin: "10px",
    marginRight: "15px",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    width: "calc(100% - 25px)"

},
  duration: {
    fontWeight: 400,
    fontSize: 14,
    color: "#25345C",
    padding: "5px 11px",
    background: "#ECEEF0",
    borderRadius: "18px"
  }
}
const useStyles = makeStyles(styles);

const VideoCard = (props) => {
  const classes = useStyles()
  const {dateTime, id, driver, route, vehicle, length, favorite} = props.data
  const [favoriteState, setFavoriteState] = useState(favorite)
  const handleFavorite = () => {
    setFavoriteState(favoriteState => !favoriteState)
  }
  return (
    <GridItem className={classes.videoCard} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <img src={img}/>
        <div className={classes.imgControl}>
          <div className={classes.duration}>{length} min</div>
          {favoriteState ? <StarYellowIcon style={{fontSize: 18}} onClick={handleFavorite}/> : <StarGreyIcon style={{fontSize: 18}} onClick={handleFavorite}/>}
        </div>
      </Card>
      <GridItem>
      <div className={classes.text}>{dateTime}</div>
      <div className={classes.subText}>{id}</div>
      <div className={classes.sText}>{driver}</div>
      <div className={classes.sText}>{route}</div>
      <div className={classes.sText}>{vehicle}</div>
      </GridItem>
    </GridItem>
  )
}

export default VideoCard;