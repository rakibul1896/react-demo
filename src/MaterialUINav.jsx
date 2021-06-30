import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import TabPanel from './TabPanel';


const useStyles = makeStyles((theme) => ({
  rootOne: {
    background: 'green',
    'z-index': 10,
  },
  indicator: {
    backgroundColor: 'red',
    height: '100%',
  },
  wrapped: {
      'z-index': 10,
  }
}));

const MaterialUINav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{
          indicator: classes.indicator,
        }}
        centered
      >
        <Tab
          label="Home"
          classes={{
            root: classes.rootOne,
          }}
        />
        <Tab label="Contact" />
        <Tab label="About" />
      </Tabs>

      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default MaterialUINav;
