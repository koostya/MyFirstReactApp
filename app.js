var express = require('express');
var app = express();
var path = require('path');

app.get('index', function (req, res) {
  res.send(req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
