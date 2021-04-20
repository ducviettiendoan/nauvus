import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Lato',
    fontSize: 14,
  },
  avatar: {
    backgroundColor: red[500],
  },
  chart: {
    marginTop: "50px",
    height: "150px !important",
  },
  chartTitle: {
    textAlign: "center",
    color: "#25345C",
    fontSize: "21px",
    lineHeight: "30px",
    fontWeight: "bold",
  },
}));

export default function PieChart(props) {
  const { title, data } = props

  const classes = useStyles();

  const option = {
    series: [{
      type: 'gauge',
      startAngle: -35,
      endAngle: 325,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#95A4B9',
        }
      },
      axisLine: {
        lineStyle: {
          width: 20,
        }
      },
      splitLine: {
        show: false,
        distance: 0,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 100
      },
      data: data
    }]
  };
  return (
    <>
      <Grid className={classes.cardFooter}>
        <ReactEcharts option={option} className={classes.chart} />
      </Grid>
      <Grid className={classes.chartTitle}>{title}</Grid>
    </>
  );
}
