/* eslint-disable  */

const express = require('express');
const axios = require('axios');
const app = express();

const chURL = 'http://127.0.0.1:5000/api';

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

const server = app.listen(8081, function () {
   const host = 'localhost';
   const port = server.address().port;
   console.log('Grant\' app listening at http://%s:%s', host, port);
});
