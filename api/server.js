/* eslint-disable  */
import express from 'express';
import { json, urlencoded } from 'body-parser';
import axios from 'axios';

import db from './database.js';

const app = express();
const port = process.env.PORT || 5000;

// DO NOT DO THIS IN PRODUCTION, GET FREE CERT
//utilized cert from core services team
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.use(json());
app.use(urlencoded({ extended: true }));

// Authentication of user takes place here
// Check db for hash of password
app.post('/api/auth', (req, res) => {

  db.oneOrNone('SELECT * FROM "Users" WHERE "Email" = $1 AND "Password" = $2', [req.body.email, req.body.hashedPass])
    .then(function (data) {
      if (data !== null && typeof data != undefined) {
        res.send(
          { uid: data.ID },
        );
      } else {
        res.status(401).send("No data for query of interest");
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error);
    });

});

// this can be expanded to where vendors have associated id's
// and vendor apps have id's within the vendors org
app.get('/api/vendors', function (req, res) {
  db.many('SELECT * FROM "Vendors"', [])
    .then(function (data) {
      if (data !== null && typeof data != undefined) {
        res.status(200).send(data);
      } else {
        res.status(400).send("No Vendors Available");
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error);
    });
});

app.get('/api/start-vendor-app', function (req, res) {
  const vendorid = req.query.vendorid;
  
  if (!vendorid) {
    res.status(400).send("No vendor id provided");
  }

  db.oneOrNone('SELECT * FROM "Vendors" WHERE "ID" = $1', [vendorid])
    .then(function (data) {
      if (data !== null && typeof data != undefined) {
        var vendorurl = 'http://' + data.URL.split('//')[1] + '/start-app';

        axios.get(vendorurl)
          .then((result) => {
            res.status(200).send(result.data);
          }).catch((e) => {
            console.error(e);
            res.status(500).send(e);
          });
      } else {
        res.status(400).send("Vendor id not found " + vendorid);
      }
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error);
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));