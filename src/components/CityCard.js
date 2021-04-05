
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import { useDispatch, useSelector } from 'react-redux';
import { getMultiWeather} from '../store/actions/multiWeatherAction';
import React, {useState, useEffect} from 'react';
import '../App.css';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 150,
    boxShadow: `-webkit-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);`,
    borderRadius: 25,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    color: 'white',
  },
  tempBox:{
    display: 'flex',
    flexDirection:'column',
   
    justifyContent: 'center',
    textAlign: 'left',
  },
  cityName: {
      margin:0,
      marginBottom: 5,
      padding:0
  },
  date: {
      margin:0,
  },
  hour: {
    marginTop: 10
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  
  const [loading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.multiWeather);

    useEffect(() => {
      dispatch(getMultiWeather());

    }, [dispatch]);
    

    let d = new Date();

    let month = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let dayString = new Intl.DateTimeFormat('en', { weekday: 'long'}).format(d);


      

  
      function timeWithPlace(timezone){
        let optionsUk = {
          timeZone: timezone,
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        },
        formatter = new Intl.DateTimeFormat([], optionsUk);
        return formatter.format(new Date());
      }

    
  
      

  

  if (error) {
    return <div >
      <h1 >{error}</h1>
    </div>;
  }

  if (!loading && !data) {
    return null;
  }
  return (
    <React.Fragment> 

    <Card className={classes.root} style={{ backgroundImage: 'linear-gradient(to right, #132e70, #173476, #1a397c, #1e3f81, #224587, #264c8e, #2b5395, #2f5a9c, #3564a6, #3b6db0, #4177ba, #4781c4)'}}>
    <div className={classes.tempBox}>
    <h2 className={classes.cityName}>{data.list[0].name}</h2>
    <h5 className={classes.date}>{`${dayString} ${day},`}</h5>
    <h5 className={classes.date}>{`${month}`}</h5>
    <small className={classes.hour}>{timeWithPlace('GB')}</small>
    </div>
    <div className={classes.tempBox}>
    <img src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`} alt="temp"></img>
    </div>
   <div className={classes.tempBox}>
    <p  className="temperature">{Math.round(data.list[0].main.temp)}<sup>o</sup></p>
   </div>
   </Card>
   <Card className={classes.root} style={{marginTop:20, backgroundImage: 'linear-gradient(to right, #50586e, #555e73, #5a6478, #606a7e, #657083, #6a7588, #6e7b8d, #738092, #798698, #7f8d9d, #8593a3, #8b9aa9)'}}>
    <div className={classes.tempBox}>
    <h2 className={classes.cityName}>{data.list[1].name}</h2>
    <h5 className={classes.date}>{`${dayString} ${day},` }</h5>
    <h5 className={classes.date}>{`${month}`}</h5>
    <small className={classes.hour}>{timeWithPlace('CET')}</small>
    </div>
    <div className={classes.tempBox}>
    <img src={`http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`} alt="temp"></img>
    </div>
   <div className={classes.tempBox}>
    <p  className="temperature">{Math.round(data.list[0].main.temp)}<sup>o</sup></p>
   </div>
  
  

</Card>

  


</React.Fragment> 
  );
}