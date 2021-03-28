import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    timeline: {
        backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
        overflowY: 'scroll',
        height: '362',
        margin:0,
        marginTop:10,
        borderRadius: 25,
        color:"#ffffff"
    },
    dot: {
        backgroundColor:"#ffffff",
        width: 15,
        height: 15,
        margin:0
    },
    line: {
        backgroundColor:"#ffffff",
        width: 5,
        height: 15,
    },
    title: {
        color:"#ffffff",
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop:50,
        marginBottom:5,
    },
  }));

export default function OppositeContentTimeline() {
    const classes = useStyles();

  return (
    <React.Fragment>
    
      <Timeline className={classes.timeline} >
      <h3 className={classes.title}>NOW</h3>
        <TimelineItem>
       
          <TimelineOppositeContent>
            <Typography >09:30 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Eat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >10:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Code</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >12:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Sleep</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >9:00 am</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot className={classes.dot}/>
            <TimelineConnector className={classes.line}/>
          </TimelineSeparator>
          <TimelineContent>
            <Typography>Repeat</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
