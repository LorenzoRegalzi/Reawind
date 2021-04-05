import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
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
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  
  content: {
    flex: '1 0 auto',
  },
  button: {
    margin: 0,
    padding: 0,
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
    borderRadius: 25,
    color: '#ffffff',
    fontSize: '2em',
  },
  input: {
    marginLeft: 10,
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#B8B8B8',
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  
  
  return (
    <React.Fragment>
    <h1 className="cardTitle" >Search</h1>
    <Card className={classes.root}>
    
        
        <InputBase className={classes.input}  defaultValue="Ex. Miami" inputProps={{ 'aria-label': 'naked' }}/>
        <Button
        variant="contained"
        className={classes.button}
      >
       <SearchIcon fontSize="large"  />
      </Button>
     
    
    </Card>
    </React.Fragment>
  );
}