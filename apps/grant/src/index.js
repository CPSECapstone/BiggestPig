const express = require('express');
const axios = require('axios');
const app = express();

const cloudhaven = 'http://127.0.0.1:5000/api';
// reference
// https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/

const vendorAppJson = {
  'authorization': '6fa691d2c07bea6ae78b7022c80e9d20',
  "target": "42aefbae01d2dfd981f7da7d823d689e",
   "components": {
      "form": {
         "formID": "78b83774d3a907fbea42783d58a95204",
         "column0": {
            "children": {
               "textFormField0": {
                  "label": "Full Name",
                  "required": true,
                  "validation": "[a-fA-F0-9]",
               },
               "textFormField1": {
                  "label": "Address",
                  "required": true,
                  "validation": "[a-fA-F0-9]",
               },
            },
         },
         "column1": {
            "children": {
               "textFormField": {
                  "label": "Phone Number",
                  "validation": "[0-9]",
               },
               "button": {
                  "action": "submit",
                  "target": "78b83774d3a907fbea42783d58a95204",
               },
            },
         },
      },
   },
};

app.get('/start-app', function (req, res) {
   res.status(200).send(vendorAppJson);
});


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

app.get('/hello/:comp/:text', function (req, res) {

   // cloudhaven api is running on port 5000
   axios.get(`http://127.0.0.1:5000/api/getcomp/${req.params.comp}/${req.params.text}`, {
   }).then((result) => {
      res.status(200).send(result.data);
   }).catch((e) => {
      console.error(e);
      res.status(500).send(e);
   });
});

const server = app.listen(8081, function () {
   const host = 'localhost';
   const port = server.address().port;
   console.log('Example app listening at http://%s:%s', host, port);
});
