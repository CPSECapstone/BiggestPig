import React, {useEffect, useState} from 'react';

import {Typography} from '@material-ui/core';

import {parseJson} from '../biz/APIParser';
import {useStyles} from '../styles';
import {BackLink} from '../components/defaultComponents';

import './app.css';

import axios from 'axios';

export default function Vendor() {
  const classes = useStyles();
  // pageContents is json from vendor app
  const [pageContents, setPageContents] = useState();

  useEffect(() => {
    axios.get(`/api/start-vendor-app`, {
    }).then((resp) => {
      console.log(resp.data);
      setPageContents(resp.data);
    }).catch((e) => {
      console.error(e);
    });
  }, [pageContents]);

  return (
    <div className="formatting">
      <BackLink />
      <Typography variant="body1" className={classes.title}>
        Welcome to Vendor App
        everything here is populated by json sent by vendor
        except for me btw
      </Typography>

      <div>
        {pageContents && parseJson(JSON.stringify(pageContents))}
      </div>
    </div>
  );
}
