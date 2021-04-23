import React, { useEffect, useState } from 'react'
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from '@material-ui/core';
import Calendar from "components/Calendar/Calendar";
// @material-ui/icons
import { MoreHoriz } from "@material-ui/icons";
// render echarts option.

const styles = {
    
title: {
    color: "#25345C",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "bold",
    marginLeft: "45px",
    marginBottom: "27px"
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    marginBottom: "20px",
    // marginLeft: "16px"
  },
  
  cardHeaderTitle: {
    color: "#25345C",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
    textAlign: "center"
  },
  cardHeaderSubTitle: {
    color: "#C4C4C4",
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: "normal",
    textAlign: "center"
  },
  cardHeader: {
    backgroundColor: "#FFFFFF",
    // padding: "0px 35px 16px 35px",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px"
  },
  noPadding: {
    padding: "0!important",
    margin: "0!important"
  },
  moreAction: {
    background: "#FFFFFF !important",
    border: "1px solid #ECEEF0 !important"
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "45px",
    marginBottom: "27px"
  },
}

const useStyles = makeStyles(styles);

const ReportLineChart = (props) => {
  const classes = useStyles();
  const { title } = props
  let colors = ['#E29468', '#1CD67C', '#25345C'];

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
          name: "Overall",
          icon: "none",
          textStyle: {
            color: colors[0]
          }
        },
        {
          name: "Over Speed",
          icon: "none",
          textStyle: {
            color: colors[1]
          }
        },
        {
          name: "Cruise Control",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "Coasting (any gear)",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "High Torque",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
          name: "Idling",
          icon: "none",
          textStyle: {
            color: "#B4B4B4"
          }
        },
        {
            name: "Anticipation",
            icon: "none",
            textStyle: {
              color: "#B4B4B4"
            }
          },
          {
            name: "Green Band",
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
            color: colors[2]
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
        name: 'Overall',
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
        name: 'Over Speed',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(138, 241, 185, 1)'
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
        name: 'Cruise Control',
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
        name: 'Coasting (any gear)',
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
        name: 'High Torque',
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
        name: 'Idling',
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
        name: 'Anticipation',
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
        name: 'Green Band',
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
        <Grid className={classes.title}>{title}</Grid>
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