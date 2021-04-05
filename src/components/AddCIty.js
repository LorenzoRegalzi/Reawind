import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 130,
    boxShadow: 'none',
    display: 'flex',
    backgroundColor: 'transparent',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  button: {
    width: '100%',
    backgroundColor: 'transparent',
    fontSize: '1.3em',
    textTransform: 'none',
    fontWeight:'bold'
  },
  addIcon: {
    marginRight:10
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <Button
      size="large"
        variant="contained"
        className={classes.button}
    
      >
        <AddBoxOutlinedIcon className={classes.addIcon} fontSize="large" />
       Aggiungi una città
      </Button>
    </Card>
  );
}