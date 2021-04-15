import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  }));

export default function BarChart(props) {
    const {data} = props;
  
    const classes = useStyles();

    const posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];

    // let data = [12,6,12,9,5.5,7.5,14,5,9,5.5,9,15,5,9,3.5,6];
    let option;

    option = {
        legend: {
            data: [''],
            selectorLabel: {
                fontSize: 30,
            }
        },
        grid: {
            bottom: 5,
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: [""],
                axisLine: false,
            }
        ],
        yAxis: [
            {
                type: 'value',
            },     
            {
                type: "value",
                min: 0,
                max: 25,
            }
        ],
        series: data.map(data => {
            return {
                name: 'km',
                type: 'bar',
                barGap: 0.03,
                // label: labelOption,
                data: [data],
                yAxisIndex: 1,
                itemStyle: {
                    color: "#739BD3"
                }
                
            }
        })    
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
