import express from 'express';
import { json, urlencoded } from 'body-parser';

import db from './database.js';

const app = express();
const port = process.env.PORT || 5000;

// DO NOT DO THIS IN PRODUCTION, GET FREE CERT
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
   res.send({ express: 'Hello From Express' });
});

app.post('/api/hello', (req, res) => {
   console.log(req.body);
   res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
   );
});

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
            res.status(401).send();
         }
      })
      .catch(function (error) {
         console.log(error);
         res.status(500).send();
      });

});

app.listen(port, () => console.log(`Listening on port ${port}`));