import React from 'react'
import ReactECharts from 'echarts-for-react';
import './Echart.scss'
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";
import TimelineIcon from "@material-ui/icons/Timeline";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import GridContainer from "../Grid/GridContainer";
import {cardTitle, roseColor} from "../../assets/jss/material-dashboard-pro-react";
import {makeStyles} from "@material-ui/core/styles";
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
    const classes = useStyles()
    // const mockData = {
    //     title: {
    //         text: "API Volume"
    //     },
    //     series: [
    //         {
    //             color: '#27AE60',
    //             name: 'Successes',
    //             data: [
    //                 ["2021-3-17 11:59:00", 288],
    //                 ["2021-3-18 11:59:00", 291],
    //                 ["2021-3-18 14:59:00", 301],
    //                 ["2021-3-19 11:59:00", 291],
    //                 ["2021-3-20 11:59:00", 292],
    //                 ["2021-3-21 11:59:00", 282],
    //                 ["2021-3-22 11:59:00", 278],
    //                 ["2021-3-23 11:59:00", 286],
    //                 ["2021-3-24 11:59:00", 288],
    //                 ["2021-3-25 11:59:00", 288]
    //             ]
    //         },
    //         {
    //             color: '#E53935',
    //             name: 'Errors',
    //             data: [
    //                 ["2021-3-17 11:59:00", 1],
    //                 ["2021-3-18 11:59:00", 1],
    //                 ["2021-3-19 11:59:00", 1],
    //                 ["2021-3-20 11:59:00", 1],
    //                 ["2021-3-21 11:59:00", 1],
    //                 ["2021-3-22 11:59:00", 1],
    //                 ["2021-3-23 11:59:00", 1],
    //                 ["2021-3-24 11:59:00", 1],
    //                 ["2021-3-25 11:59:00", 1]
    //             ]
    //         }
    //     ],
    // }

    const {data} = props
    const {title, series} = data
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
        series: series.map((e) => {return {...e, type: "line"}})

    };
    return(
        <>
            <GridContainer >
                <GridItem xs={6}>
                    <h4 className={classes.boldBlueLeft + " my-4" }>
                        {title.text}
                    </h4>
                </GridItem>
                <GridItem xs={6} className={classes.textEnd}>
                    <Button
                        color="white"
                        aria-label="edit"
                        justIcon
                        round
                        className={`btn-36 ${classes.chartAction} mr-2`}
                    >
                        <TimelineIcon className={classes.colorBlue}/>
                    </Button>
                </GridItem>
                <GridItem xs={12} className={classes.textStart + " " + classes.colorBlue}>
                    {series.map(e => {
                        return (
                            <>
                                <FiberManualRecordIcon style={{color: `${e.color}`}} className={ classes.chartLegend + " mr-1"} />
                                <span className="mr-3">{e.name}</span>
                            </>
                        )
                    })}
                </GridItem>
                <GridItem xs={12} className={classes.noPadding}>
                    <ReactECharts option={option} />
                </GridItem>
            </GridContainer>
        </>
    )

}

export default EChart