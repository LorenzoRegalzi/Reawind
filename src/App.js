import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Timeline from './Timeline';
import SearchCard from './SearchCard';
import Localization from './Localization';
import AddCity from './AddCIty';
import CityCard from './CityCard';
import Temperature from './Temperature';
import Tabs from './Tabs';


import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from './store/actions/weatherActions';


import './App.css';



export default function FullWidthGrid() {
  const classes = useStyles();

  //const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.weather);

  console.log(data);
  useEffect(() => {
    dispatch(getWeather('Monza'));
  }, [dispatch]);


  return (
    <React.Fragment>
    <div className={classes.absoluteCard}>
      <Temperature data={data}></Temperature>
    </div>
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid className={classes.grid} style={{height: '100%'}} item xs={12} sm={12} md={8}>
          <Paper className={classes.cityBox} style={{borderRadius: 25,height: 450, backgroundImage: `url("../torino.jpeg")`}}>
            <div className={classes.textcityBox}>
              <h1 style={{padding: 0}}>{data.name}</h1>
              <h4>Friday 18, september {new Date().toLocaleDateString() }</h4>
              <small>Sunny</small>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <AddCity></AddCity>
          <Paper className={classes.paper} >
            <div className={classes.tipCard}>
              <CityCard  ></CityCard>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <h1 className={classes.cardTitle}>Today</h1>
            <Timeline ></Timeline>
          </Paper>
        </Grid>
        <Grid style={{height: '100%'}} item xs={12} sm={6} md={5}>
          <Paper className={classes.paper}>
            <Tabs></Tabs>
          </Paper>
        </Grid>
        <Grid  item xs={12} sm={12} md={4}>
          <Paper className={classes.paper}>
            <h1 className={classes.cardTitle}>Search</h1>
            <div className={classes.tipCard}>
              <SearchCard>
              </SearchCard>
            </div>
            <h1 className={classes.cardTitle} style={{marginTop: 20}}>Localization</h1>
            <div className={classes.tipCard}>
              <Localization></Localization>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
    </React.Fragment>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 35,
    paddingRight: 35,
    overflow: 'hidden',
   
  },
  paper: {
    textAlign: 'left',
    boxShadow: 'none',
    
    backgroundColor: 'transparent',
    marginLeft: 15,
    marginRight: 15
  },
  
  textcityBox: {
    marginLeft: 150,
    paddingTop: 80,

  },
  cardTitle: {
    marginTop: 0,
  },
  cardWeather: {
    backgroundColor: 'transparent'
  },
  card: {
    minWidth: 275,
    height: 100,
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
  },
  cityBox: {
    boxShadow: `-webkit-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);`,
    marginLeft: 15,
    marginRight: 15,
  },
  absoluteCard: {
    width: '140',
    height: '280',
    display: 'absolute',
    position: 'absolute',
    top: '130',
  },
  grid:{
   blockSize: 650,
   
  }
}));