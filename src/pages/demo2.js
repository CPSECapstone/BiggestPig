import React from 'react';

import {Typography} from '@material-ui/core';

import {parseJson} from '../biz/APIParser';
import {testJson} from '../biz/dummyApi';

import {useStyles} from '../styles';

import {BackLink} from '../components/defaultComponents';

export default function Demo2() {
  const classes = useStyles();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyItems: 'center'}}>
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
