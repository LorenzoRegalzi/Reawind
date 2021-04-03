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
    
    console.log(data.list[0].main.temp);

    const nowTemperature = data.list[0].main.temp;

    const aroundNowTemperature = Math.round(nowTemperature);


    const times = [];

    for (let i = 1; i < 9; i++) {

      let temperature = data.list[i].main.temp;

      let aroundTemperature = Math.round(temperature);

      var onlyHours = new Date(data.list[i].dt_txt).getHours();

      var ampm = onlyHours >= 12 ? 'p.m.' : 'a.m.';

      onlyHours = onlyHours % 12;

      onlyHours = onlyHours ? onlyHours : 12;

      let formatHours = onlyHours + ' ' + ampm;
      
      times.push({date : formatHours , temperature : aroundTemperature});
    }
    
    //console.log(time);

  return (
    <React.Fragment>
    
      <Timeline class="timeline">
      
      <h3 class="title">NOW</h3>
        <TimelineItem>
       
          <TimelineOppositeContent>
          <Typography>{aroundNowTemperature}<sup>o</sup></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot class="dot"/>
            <TimelineConnector class="line"/>
          </TimelineSeparator>
          <TimelineContent>
           
          </TimelineContent>
        </TimelineItem>
        {times.map(data => 
          <TimelineItem>
            <TimelineOppositeContent>
            <Typography>{data.temperature}<sup>o</sup></Typography>
              
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="dot"/>
              <TimelineConnector class="line"/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography>{data.date}</Typography>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </React.Fragment>
  );
}
