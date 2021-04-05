import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Timeline from './components/Timeline';
import SearchCard from './components/SearchCard';
import Localization from './components/Localization';
import AddCity from './components/AddCIty';
import CityCard from './components/CityCard';
import Temperature from './components/Temperature';
import Tabs from './components/Tabs';
import MainCity from './components/MainCity';

import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayWeather} from './store/actions/weatherActions';


import './App.css';



export default function App() {
  const classes = useStyles();

  const [loading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector(state => state.weather);
  

  useEffect(() => {
    dispatch(getFiveDayWeather('Milan'));
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
    <div className="absoluteCard">
      <Temperature data={data}></Temperature>
    </div>
    <div className="appMain">
      <Grid container spacing={3}>
        <Grid className={classes.grid}  item xs={12} sm={12} md={8}>
          <Paper className={classes.cityBox}>
              <MainCity data={data}></MainCity>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AddCity></AddCity>
          <Paper className="mainPaper">
              <CityCard></CityCard>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="mainPaper">
            <Timeline data={data}></Timeline>
          </Paper>
        </Grid>
        <Grid style={{height: '100%'}} item xs={12} sm={6} md={5}>
          <Paper className="mainPaper">
            <Tabs ></Tabs>
          </Paper>
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
          <Paper className="mainPaper">
              <SearchCard></SearchCard>
              <Localization></Localization>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}


const useStyles = makeStyles((theme) => ({
 
  cityBox: {
    boxShadow: `-webkit-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);`,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 25,
    height: 450,
    backgroundImage: `url("https://wallpaperaccess.com/full/2043362.jpg")`, 
    backgroundSize: 'cover'
  },
  
 
}));