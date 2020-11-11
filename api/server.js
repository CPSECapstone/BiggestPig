import express from 'express';
import { json, urlencoded } from 'body-parser';

import db from './database.js';

const app = express();
const port = process.env.PORT || 5000;

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
   console.log("Attempt to authenticate: ");
   console.log(req.body);
   
   res.send(
      { valid: true },
   );
});

app.listen(port, () => console.log(`Listening on port ${port}`));