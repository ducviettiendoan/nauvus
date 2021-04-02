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
    alignItems: "center"
  },
  cardFooterData: {
    fontWeight: "bold",
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

  const calculatePercent = (index) => {
    let sum = 0;
    data.forEach((ele) => {
      sum += ele.value
    })
    console.log(sum)
    return ((data[index].value / sum) * 100).toFixed(2) + "%"
  }
  const classes = useStyles();

  const option = {
    color: ["#EB7580", "#44D485"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: title,
        type: 'pie',
        radius: '70%',
        center: ['50%', '60%'],
        startAngle: 115,
        label: {
          normal: {
            formatter: '{d}%',
            fontSize: '18',
            position: 'inside',
            color: 'white'
          },

          show: false,
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '24.5',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 4
        },
        data: data


      }
    ],
  }

  return (
    <>
      <ReactEcharts option={option}/>
      <div>
        <Grid container className={classes.cardFooter}>
          <Grid item xs={6} sm={12} md={12} lg={6} className={classes.cardFooterTitle}>
            <RadioButton radioColor="red" checked={true}/>
            {data[0].name}
          </Grid>
          <Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData}>
            {calculatePercent(0)}
          </Grid>
          <Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData}>
            3h 31min
          </Grid>
        </Grid>
        <Grid container className={classes.cardFooter}>
          <Grid item xs={6} sm={12} md={12} lg={6} style={{textAlign: "left"}} className={classes.cardFooterTitle}>
            <RadioButton radioColor="green" checked={true}/>
            {data[1].name}
          </Grid>
          <Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData}>
            {calculatePercent(1)}
          </Grid>
          <Grid item xs={3} sm={6} md={6} lg={3} className={classes.cardFooterData}>
            188h 28min
          </Grid>
        </Grid>
      </div>
    </>
  );
}
