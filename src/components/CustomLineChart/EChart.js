import React from 'react'
import ReactECharts from 'echarts-for-react';
import './Echart.scss'
// render echarts option.
const EChart = (props) => {
    const {data} = props
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
        toolbox: {

        },
        dataZoom: [{
            start: 20,
            type: "inside"
        }],
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['16', '17', '18', '19', '20', '21', '22']
        },
        yAxis: {
            type: 'value',
            position: 'right'
        },
        series: [
            {
                color: '#27AE60',
                name: 'Successes',
                type: 'line',
                data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
                color: '#e0e6f1',
                type: 'line',
                markLine: {
                    symbol: ['none', 'none'],
                    label: {show: false},
                    data: [
                        {xAxis: 0},
                        {xAxis: 1},
                        {xAxis: 2},
                        {xAxis: 3},
                        {xAxis: 4},
                        {xAxis: 5},
                        {xAxis: 6}
                    ]
                },
            },
            {
                color: '#E53935',
                name: 'Errors',
                type: 'line',
                data: [1, 1, 1, 1, 1, 1, 1]
            },

        ]
    };
    return(
        <ReactECharts option={option} />
    )

}

export default EChart