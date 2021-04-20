import React from "react";
import {makeStyles} from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import StarEmptyIcon from "components/Icons/StarEmptyIcon";
import LocationIcon from "components/Icons/LocationIcon";
import img from "assets/img/bg.png"
import driving1 from "assets/img/driving1.png"
import driving2 from "assets/img/driving2.png"
import Card from "../../../../../components/Card/Card";

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
    margin: "16px !important",
  },


})

const useStyles = makeStyles(styles)
const Retrieval = (props) => {

  const classes = useStyles()
  const {dateTime, id, driver, route, location, length, favorite} = props.data

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
              Hello
            </Card>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </>
  )
}

export default Retrieval