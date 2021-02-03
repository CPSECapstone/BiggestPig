import React from 'react';

import {Typography} from '@material-ui/core';

import {useStyles} from '../styles';

import {BackLink} from '../components/defaultComponents';
import BasicTable from '../components/table';

import './app.css';

export default function TableDemo() {
  const classes = useStyles();

  return (
    <div className="formatting">
      <BackLink />
      <Typography variant="h1" className={classes.title}>
            Table Demo
      </Typography>

      <div>
        <BasicTable></BasicTable>
      </div>
    </div>
  );
}
