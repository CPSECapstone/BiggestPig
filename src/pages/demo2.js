import React from 'react';
import {parseJson} from '../biz/APIParser';
import {testJson} from '../biz/dummyApi';

import {useStyles} from '../styles';
import {Typography} from '@material-ui/core';
import {BackLink} from '../components/defaultComponents';

export default function Demo2() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
      <BackLink />
      <Typography variant="h1" className={classes.title}>
                Welcome to Demo 2
      </Typography>

      <div>
        {parseJson(testJson)}
      </div>
    </div>
  );
}
