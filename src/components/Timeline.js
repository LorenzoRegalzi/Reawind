import { useDispatch, useSelector } from 'react-redux';
import React, {useState, useEffect} from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';


import { getMonthWeather} from '../store/actions/monthWeatherAction';


export default function OppositeContentTimeline() {

  const [loading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.monthWeather);

  


  useEffect(() => {
    dispatch(getMonthWeather());
  }, [dispatch]);

    if (error) {
      return <div >
        <h1 >{error}</h1>
      </div>;
    }
  
    if (!loading && !data) {
      return null;
    }
    

    const nowTemperature = data.current.temp;

    const aroundNowTemperature = Math.round(nowTemperature);


    const times = [];
    

    for (let i = 1; i < 24; i++) {

      let temperature = data.hourly[i].temp;

      let aroundTemperature = Math.round(temperature);
      
      let unix_timestamp = data.hourly[i].dt;

    

      var date = new Date(unix_timestamp * 1000);

     

      var hours = date.getHours();


      var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      

      let formatHours = hours + ' ' + ampm;

      times.push({date : formatHours , temperature : aroundTemperature});
    }
    
  

  return (
    <React.Fragment>
      <h1 className="cardTitle">Today</h1>
      <Timeline class="timeline">
      
      <h3 class="title">Now</h3>
        <TimelineItem>
       
          <TimelineOppositeContent>
          <Typography class="firstTextDot">{aroundNowTemperature}<sup>o</sup></Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot class="firstDot"/>
            <TimelineConnector class="line"/>
          </TimelineSeparator>
          <TimelineContent>
           
          </TimelineContent>
        </TimelineItem>
        {times.map(data => 
          <TimelineItem>
            <TimelineOppositeContent>
            <Typography class="temperatureDot">{data.temperature}<sup>o</sup></Typography>
              
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot class="dot"/>
              <TimelineConnector class="line"/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography class="temperatureDate">{data.date}</Typography>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </React.Fragment>
  );
}
