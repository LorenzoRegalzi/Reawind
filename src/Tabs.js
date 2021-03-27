import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  firstItem: {
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
    borderRadius: 25,
    borderTopLeftRadius: 0,
    height:'86%'
  },
  secondItem: {
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
   
    borderRadius: 25,
    borderTopLeftRadius: 0,
    height:'86%'
  },
  tabs: {
    backgroundColor: 'transparent',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    display: 'inline-block'
  },
  tab: {
    backgroundImage: 'linear-gradient(114deg, rgba(86,122,232,1) 0%, rgba(97,140,236,1) 35%, rgba(108,163,241,1) 100%)',
  
    color: 'white',
    fontSize: '2em',
    textTransform: 'none',
    display: 'block',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  return (
    <div className={classes.root}>
      
        <Tabs value={value} onChange={handleChange} className={classes.tabs} indicatorColor="none" aria-label="simple tabs example" >
          <Tab className={classes.tab} label="This week" {...a11yProps(0)} /> 
          <Tab className={classes.tab} label="This month" {...a11yProps(1)} />
          
        </Tabs>
   
      <TabPanel className={classes.secondItem} value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel className={classes.firstItem} value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
}
