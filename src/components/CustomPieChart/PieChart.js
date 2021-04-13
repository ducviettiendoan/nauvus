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
  avatar: {
    backgroundColor: red[500],
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingRight: "30px !important",
    paddingLeft: "10px !important",
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
  },
  chart: {
    marginTop: "50px",
    height: "150px !important",
  },
  button: {
    textAlign: "right",
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
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <ReactEcharts option={option} className={classes.chart}/>
          </Grid>         
          <Grid item xs={0} sm={0} ms={0} lg={1} xl={0}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Grid container>
              <Grid item xs={1} sm={1} md={2} lg={2} xl={1} className={classes.button}>
                <RadioButton checked={true}/>
                
              </Grid>
              <Grid item xs={11} sm={11} md={10} lg={10} xl={11} className={classes.cardFooterData}>
                
                <span>Identified</span>
                <span style={{paddingLeft: "15px"}}>{`${data[0].value}%`}</span>
                <span>188h 28min</span>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={1} sm={1} md={2} lg={2} xl={1} className={classes.button}>
                <RadioButton checked={false}/>
                
              </Grid>
              <Grid item xs={11} sm={11} md={10} lg={10} xl={11} className={classes.cardFooterData}>               
                <span>Unidentified</span>
                <span style={{position: "relative", right: "15px", marginLeft: "15px"}}>1.8%</span>
                <span>3h 31min</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
