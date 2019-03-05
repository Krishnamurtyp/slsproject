var express = require('express');
var app = express();
var cors = require('cors');
var url = require('url');
const bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    "Output": "Hello World!"
  });
});

app.get('/user/:id', (req,res) => {
    var id = req.params.id
    res.send({
      "output" : "Hello "+id
    });
  });

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app