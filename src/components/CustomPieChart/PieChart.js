import React, {Component} from 'react';
import ReactEcharts from 'echarts-for-react';

import {makeStyles} from '@material-ui/core/styles';

import {red} from '@material-ui/core/colors';
import {Grid} from '@material-ui/core';
import RadioButton from '../../views/Components/RadioButton';


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Lato',
    fontSize: 14,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: "38px !important",
    paddingLeft: "38px !important",
  },

  cardFooterData: {
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardFooterTitle: {
    fontWeight: 400,
    textAlign: "left",
  },
  cardBodyTitle1: {
    textAlign: "left",
    paddingLeft: 9
  },
  cardBodyTitle2: {
    textAlign: "right",
    paddingRight: 22
  }
}));


export default function PieChart(props) {
  const {title, data} = props

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
                borderColor: '#739BD3',
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
      <div>
        <Grid container className={classes.cardFooter}>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={5} >
            <ReactEcharts option={option} style={{marginTop: "50px", height: "200px"}}/>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={8} xl={7}>
            <Grid container>
              <Grid item xs={1} sm={2} md={1} lg={2} xl={1} style={{textAlign: "right"}}>
                <RadioButton checked={true}/>
                
              </Grid>
              <Grid item xs={11} sm={10} md={11} lg={10} xl={11} className={classes.cardFooterData}>
                
                <span>Identified</span>
                <span>{`${data[0].value}%`}</span>
                <span>188h 28min</span>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={1} sm={2} md={1} lg={2} xl={1} style={{textAlign: "right"}}>
                <RadioButton checked={false}/>
                
              </Grid>
              <Grid item xs={11} sm={10} md={11} lg={10} xl={11} className={classes.cardFooterData}>               
                <span>Unidentified</span>
                <span style={{marginRight: "30px"}}>1.8%</span>
                <span>3h 31min</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
