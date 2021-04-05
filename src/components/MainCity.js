import React from 'react';
import '../App.css';


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
    <div className="textcityBox">
        <h1 style={{padding: 0}}>{data.city.name}</h1>
        <h4>{`${dayString} ${day}, ${month}` }</h4>
        <small>{data.list[0].weather[0].main}</small>
    </div>
  );
}
