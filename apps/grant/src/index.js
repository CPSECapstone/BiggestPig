const express = require('express');
const axios = require('axios');
const app = express();

const cloudhaven = 'http://127.0.0.1:5000/api';
// reference
// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

app.get('/', function (req, res) {

   // cloudhaven api is running on port 5000
   axios.get('http://127.0.0.1:5000/api/home', { 
   }).then((result) => {
      res.status(200).send(result.data);
   }).catch((e) => {
      console.error(e);
      res.status(500).send(e);
   });
});

app.get('/hello/:comp/:text', function(req, res) {

  // cloudhaven api is running on port 5000
   axios.get(`http://127.0.0.1:5000/api/getcomp/${req.params.comp}/${req.params.text}`, {
  }).then((result) => {
     res.status(200).send(result.data);
  }).catch((e) => {
     console.error(e);
     res.status(500).send(e);
  });
});

const server = app.listen(8081, function() {
  const host = 'localhost';
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
