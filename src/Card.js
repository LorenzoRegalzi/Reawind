import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 100,
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      
    </Card>
  );
}