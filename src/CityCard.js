import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';





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
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
    color: 'white',
    marginBottom: 20
  },
  tempBox:{
    display: 'flex',
    flexDirection:'column',
   
    justifyContent: 'center',
    textAlign: 'left',
  },
  cityName: {
      margin:0,
      marginBottom: 5
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
  

  return (
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
  );
}