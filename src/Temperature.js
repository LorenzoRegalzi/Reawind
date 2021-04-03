import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import './App.css';





const useStyles = makeStyles({
  root: {
   height:'100%',
  
    boxShadow: `-webkit-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);`,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
    color: 'white'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  
});


const Temperature = ({ loading, data, error }) => {
  const classes = useStyles();
  
  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }
  return (
    <Card className={classes.root}>
        
        <p  class="temperature">{Math.floor(data.list[0].main.temp)}<sup>o</sup></p>
        <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`} alt="temp"></img>
    </Card>
  );
}

export default Temperature;