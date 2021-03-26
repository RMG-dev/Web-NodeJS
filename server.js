var express = require('express');

var app = express();

app.get('/process_get', function (req, res) {
    token = req.query['token1'];
    console.log(token)
})

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Le serveur est lancé sur le port :", port)  
})
