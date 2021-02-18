import React, {useEffect, useState} from 'react';

import {Typography} from '@material-ui/core';

import {parseJson} from '../biz/APIParser';
import {useStyles} from '../styles';
import {BackLink} from '../components/defaultComponents';

import './app.css';

import axios from 'axios';

export default function Vendor(props) {
  const classes = useStyles();
  const [pageContents, setPageContents] = useState();

  const vendorid = props.location.state.vendorid;

  useEffect(() => {
    if (vendorid) {
      axios.get(`/api/start-vendor-app`, {
        params: {
          vendorid: vendorid,
        },
      }).then((resp) => {
        setPageContents(resp.data);
      }).catch((e) => {
        console.error(e);
      });
    }
  }, [vendorid]);

  return (vendorid &&
    (<div className="formatting">
      <BackLink />
      <Typography variant="body1" className={classes.title}>
        Welcome to Vendor App
        everything here is populated by json sent by vendor
        except for me btw
      </Typography>

      <div>
        {pageContents && parseJson(JSON.stringify(pageContents))}
      </div>
    </div>)
  );
}
