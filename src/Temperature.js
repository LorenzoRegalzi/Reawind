import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';





const useStyles = makeStyles({
  root: {
   height:'100%',
  
    boxShadow: `-webkit-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);
    box-shadow: 0px 26px 32px 2px rgba(0,0,0,0.12);`,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
        
        <p  className={classes.temperature}>20</p>
        <WbSunnyOutlinedIcon fontSize="large"></WbSunnyOutlinedIcon>
    </Card>
  );
}