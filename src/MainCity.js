import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import './App.css';


export default function OppositeContentTimeline({ loading, data, error }) {

    if (error) {
      return <div >
        <h1 >{error}</h1>
      </div>;
    }
  
    if (!loading && !data) {
      return null;
    }
    
    let d = new Date();

    let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let dayString = new Intl.DateTimeFormat('en', { weekday: 'long'}).format(d);

    



  return (
    <div class="textcityBox">
        <h1 style={{padding: 0}}>{data.city.name}</h1>
        <h4>{`${dayString} ${day}, ${month}` }</h4>
        <small>{data.list[0].weather[0].main}</small>
    </div>
  );
}
