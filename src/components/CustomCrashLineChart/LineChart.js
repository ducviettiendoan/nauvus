import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

}));

export default function LineChart(props) {
  const {data} = props;

  const classes = useStyles();

  const option = {
    // title: {
    //   text: 'Speed',
    // },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br />{a0}: {c0}km/h<br />{a1}: {c1}%<br />{a2}: On',
      axisPointer: {
        type: 'cross'
      },
      textStyle: {
        fontWeight: 600,
      }
    },

    grid:{
      right: 70,
      top: 70,
      left: 70,
      bottom: 30,
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['', '4:06 AM', "4:06:28","4:06:30","4:06:31","4:06:32","4:06:33","4:06:34","4:06:35", "4:06:36","","","","4:06:37"],
      axisTick:{
        show: false,
      }
    },
    yAxis: [

      {
        type: 'value',
        axisLabel: {
          formatter: function(value,index){
            if(index%2===0){
              return value
            }
          }
        },
        axisPointer: {
          snap: false,
          lineStyle: {
            width: 0
          }
        },
        axisLine: {onZero: false},
      },

//   {
//     type: "value",
//     max: 100,
//   },
    ],
    series: [
      {
        name: 'Speed',
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        data: [52,54,45,40,40,40,35,58,46,37,30,27,24,21,18],
        showSymbol: false,
        lineStyle: {
          color: '#54A7E2',
        },

      },

      {
        name: 'Accelerator Pedal ',
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        data: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
        showSymbol: false,
        lineStyle: {
          color: '#FF6A00',
        }

      },

      {
        name: 'Brake',
        type: 'line',
        smooth: true,
        yAxisIndex: 0,
        data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        showSymbol: false,
        lineStyle:{
          color: "#FF4015",
          width: 5,
        }

      },

    ]
  };
  return (
    <>
      <div>
        <Grid container className={classes.cardFooter}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <ReactEcharts option={option}/>

          </Grid>
        </Grid>
      </div>
    </>
  );
}
