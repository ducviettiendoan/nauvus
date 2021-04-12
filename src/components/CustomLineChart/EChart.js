import React, {useEffect, useState} from 'react'
import ReactECharts from 'echarts-for-react';
import './Echart.scss'
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";
import TimelineIcon from "@material-ui/icons/Timeline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import GridContainer from "../Grid/GridContainer";
import {makeStyles} from "@material-ui/core/styles";
import Calendar from "../Calendar/Calendar";
// render echarts option.

const styles = {
  colorBlue: {
    color: "#25345C"
  },
  colorGrey: {
    color: "#C4C4C4"
  },
  colorGreen: {
    color: "#27AE60"
  },
  colorRed: {
    color: "#E53935"
  },
  boldBlueLeft: {
    color: "#25345C",
    fontWeight: "700",
    textAlign: "left"
  },
  fontSize16: {
    fontSize: "1rem!important"
  },
  chartAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important",
  },
  textEnd: {
    textAlign: "right"
  },
  textStart: {
    textAlign: "left"
  },
  noPadding: {
    padding: "0!important",
    margin: "0!important"
  },
  chartLegend: {
    fontSize: 12,
    verticalAlign: "baseline"
  },
  bigCard: {
    marginTop: "0px!important",
    marginBottom: "20px!important",
    height: "90%",
  },
  bigCardGridItem: {
    padding: "0 8px!important",
  },
};

const useStyles = makeStyles(styles);

const EChart = (props) => {
  const classes = useStyles();
  const [series, setSeries] = useState([]);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    if (props.data) {
      if (props.data.series) {
        setSeries(props.data.series)
      }
      if (props.data.title) {
        setTitle(props.data.title)
      }
    }
  }, [props.data])

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
      padding: [10, 10, 10, 10],
      extraCssText: 'text-align: left'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {},
    dataZoom: [{
      start: 0,
      type: "inside"
    }],
    xAxis: {
      type: 'time',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      position: 'right'
    },
    series: series.map((e) => {
      return {...e, type: "line", smooth: "true"}
    })
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={6}>
          <h4 className={classes.boldBlueLeft + " my-4"}>
            {title && title.text}
          </h4>
        </GridItem>
        <GridItem xs={6} className={classes.textEnd}>
          <GridContainer justify="flex-end" alignItems="center">
            <GridItem className={classes.noPadding}>
              <Calendar style={{background: "red"}}/>
            </GridItem>
            <GridItem className={classes.noPadding}>
              <Button
                color="white"
                aria-label="edit"
                justIcon
                round
                className={`btn-36 ${classes.chartAction} mr-3`}
              >
                <TimelineIcon className={classes.colorBlue}/>
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem xs={12} className={classes.textStart + " " + classes.colorBlue}>
          {series.map(e => {
            return (
              <>
                <FiberManualRecordIcon style={{color: `${e.color}`}} className={classes.chartLegend + " mr-1"}/>
                <span className="mr-3">{e.name}</span>
              </>
            )
          })}
        </GridItem>
        <GridItem xs={12} className={classes.noPadding}>
          <ReactECharts option={option}/>
        </GridItem>
      </GridContainer>
    </>
  )

}

export default EChart