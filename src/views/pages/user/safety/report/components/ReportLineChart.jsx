import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import safetyChartStyle from './safetyChartStyle';
import Card from "@material-ui/core/Card";
import { Grid } from '@material-ui/core';
import Calendar from "components/Calendar/Calendar";
// @material-ui/icons
import { MoreHoriz } from "@material-ui/icons";
// render echarts option.

const useStyles = makeStyles(safetyChartStyle);


const ReportLineChart = (props) => {
  const classes = useStyles();
  const { title } = props
  let colors = ['#739BD3', '#73C2D3'];

  const option = {
    color: colors,
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        animation: false,
        label: {
          backgroundColor: '#505765'
        }
      }
    },
    legend: {
      data: [
        {
          name: "Total Insidents/1000 ml",
          icon: "none",
          textStyle: {
            color: colors[0]
          }
        },
        {
          name: "Crash",
          icon: "none",
          textStyle: {
            color: colors[1]
          }
        },
        {
          name: "Harsh Turn",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "Harsh Accel",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "Rolling Stop",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "Harsh Brake",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
      ],
      left: -20
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: true,
          lineStyle: {
            color: colors[1]
          }
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return params.value
                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
            }
          }
        },
        data: ['Feb 2', '11:59 PM', 'Feb 9', '11:59 PM', 'Feb 16', '11:59PM', 'Feb 23', '11:59 PM', 'March 02']
      },
    ],
    yAxis: [
      {
        type: 'value',
        // show: false
      },
      {
        type: 'value',
        show: false
      },
    ],
    series: [
      {
        name: 'Total Insidents/1000 ml',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 1
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(115,155,211, -0.9497)'
          }, {
            offset: 1,
            color: '#FFFFFF'
          }])
        },
        data: [5.0, 10.0, 15.0, 13.0, 5.0, 20.2, 11.0, 17.9, 13.3, 18.9, 3.0]
      },
      {
        name: 'Crash',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgb(115,194,211, -0.509)'
          }, {
            offset: 1,
            color: '#FFFFFF'
          }])
        },
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        data: [20.0, 18.0, 17.0, 14.0, 3.0, 26.8, 8.0, 20.5, 10.0, 15.0, 16.0]
      },
      {
        name: 'Harsh Turn',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {

        },
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        name: 'Harsh Accel',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {

        },
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        data: []
      },
      {
        name: 'Rolling Stop',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {

        },
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series',

        },
        data: []
      },
      {
        name: 'Harsh Brake',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {

        },
        lineStyle: {
          width: 1
        },
        emphasis: {
          focus: 'series'
        },
        data: []
      },
    ],
  };

  return (
    <Card className={classes.root}>
      <GridContainer className={classes.titleContainer}>
        <Grid className={classes.safetyTitle}>{title}</Grid>
        <Grid className={classes.buttonContainer}>
          <Calendar isNotContainer={true} />
          <Button
            color="white"
            aria-label="edit"
            justIcon
            round
            className={`btn-36 ${classes.moreAction} mr-2`}
          >
            <MoreHoriz />
          </Button>
        </Grid>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} >
          <ReactECharts option={option} />
        </GridItem>
      </GridContainer>
    </Card>
  )

}

export default ReportLineChart