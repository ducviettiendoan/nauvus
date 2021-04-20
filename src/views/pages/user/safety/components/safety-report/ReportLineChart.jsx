import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import safetyChartStyle from '../style/safetyChartStyle';
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

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      // top: 300,
      // bottom: 200,
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
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
        data: ['Feb 2', '11:59 PM', 'Feb 9', '11:59 PM', 'Feb 16', '11:59PM', 'March 02']
      },
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0]
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
        data: ['Feb 2', '11:59 PM', 'Feb 9', '11:59 PM', 'Feb 16', '11:59PM', 'March 02', '11:59 PM']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Total Insidents/1000 ml',
        type: 'line',
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [15.0, 13.0, 5.0, 20.2, 11.0, 17.9, 13.3, 18.9]
      },
      {
        name: 'Crash',
        type: 'line',
        smooth: true,
        emphasis: {
          focus: 'series'
        },
        data: [17.0, 16.5, 3.0, 26.8, 8.0, 20.5, 10.0]
      }
    ]
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