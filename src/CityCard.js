
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayWeather} from './store/actions/weatherActions';
import React, {useState, useEffect} from 'react';



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
    backgroundImage: 'linear-gradient(to right, #50586e, #555e73, #5a6478, #606a7e, #657083, #6a7588, #6e7b8d, #738092, #798698, #7f8d9d, #8593a3, #8b9aa9);',
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
  temperature: {
    fontSize: '3em',
    margin:0,
    fontWeight: 'bold'
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);

  //console.log(data);

  
    useEffect(() => {
      dispatch(getFiveDayWeather('Milano'));
      console.log('i fire once');
    }, [dispatch]);
    
    

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
    <Card className={classes.root} style={{marginBottom:20, backgroundImage: 'linear-gradient(to right, #132e70, #173476, #1a397c, #1e3f81, #224587, #264c8e, #2b5395, #2f5a9c, #3564a6, #3b6db0, #4177ba, #4781c4)'}}>
        <div className={classes.tempBox}>
        <h2 className={classes.cityName}>{data.city.name}</h2>
        <h5 className={classes.date}><h2>{data.list[0].dt_txt}</h2></h5>
        <h5 className={classes.date}></h5>
        <small className={classes.hour}></small>
        </div>
        <div className={classes.tempBox}>
        <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
        </div>
       <div className={classes.tempBox}>
        <p  className={classes.temperature}>20</p>
       </div>
      
      

    </Card>
    <Card className={classes.root}>
    <div className={classes.tempBox}>
    <h2 className={classes.cityName}>London</h2>
    <h5 className={classes.date}>Friday 18,</h5>
    <h5 className={classes.date}>September  </h5>
    <small className={classes.hour}>2:30pm</small>
    </div>
    <div className={classes.tempBox}>
    <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
    </div>
   <div className={classes.tempBox}>
    <p  className={classes.temperature}>20</p>
   </div>
  
  

</Card>
</React.Fragment> 
  );
}