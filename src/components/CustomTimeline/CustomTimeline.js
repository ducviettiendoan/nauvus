import React from 'react';
import classNames from "classnames"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const styles = {
  timeline: {
    paddingBottom: "0px !important",
    marginBottom: "0px"
  },
  timelineItem: {
    minHeight: "50px"
  },
  timelineOppositeContent: {
    padding: "1px 3px 6px 0px !important",
  },
  timelineTitle: {
    color: "#B4B4B4",
  },
  timelineConnector: {
    background: "#FFFFFF",
    border: "1px dashed #25345C",
    height: "13px !important"
  },
  timelineDot: {
    width: "12px",
    height: "12px",
    border: "1px solid",
    background: "#FFFFFF",
    boxShadow: "none",
  },
  timelineContent: {
    minWidth: "290px !important",
    paddingLeft: "0px !important"
  },
  greenDot: {
    border: "1px solid #27AE60 !important",
  },
  redDot: {
    border: "1px solid #E53935 !important",
  }
}

const useStyles = makeStyles(styles)

export default function CustomTimeline(props) {
  const { timelineContent } = props
  console.log(timelineContent)

  const classes = useStyles()

  return (
    <React.Fragment>
      <Timeline align="left" classes={{
        root: classes.timeline
      }}>
        {timelineContent.map((item, i) => {
          return (
            <TimelineItem key={i} classes={{
              root: classes.timelineItem
            }} >
              <TimelineOppositeContent classes={{
                root: classes.timelineOppositeContent
              }}>
                <Typography className={classes.timelineTitle}>{item.title}</Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot className={classNames({
                  [classes.timelineDot]: true,
                  [classes[item.color + "Dot"]]: true
                })}
                />
                {i < timelineContent.length - 1 && <TimelineConnector classes={{
                  root: classes.timelineConnector
                }} />}
              </TimelineSeparator>
              <TimelineContent classes={{
                root: classes.timelineContent
              }}>
                <Typography>{item.content}</Typography>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </React.Fragment>
  );
}
