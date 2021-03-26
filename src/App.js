import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 60
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400
  },
  cityBox: {
    padding: theme.spacing(2),
    textAlign: 'left',
    height: 400,
    backgroundImage: `url("https://picsum.photos/800/400")`
  },
  textcityBox: {
    marginLeft: 150,
    marginTop: 50,
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.cityBox} style={{borderRadius: 25}}>
            <div className={classes.textcityBox}>
              <h1>Turin</h1>
              <h4>Friday 18, september</h4>
              <small>Sunny</small>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>Select city</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>today weather</Paper>
        </Grid>
        <Grid item xs={6} sm={5}>
          <Paper className={classes.paper}>month and week weather</Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>searching</Paper>
        </Grid>
      </Grid>
    </div>
  );
}