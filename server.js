const express = require('express')
const app = express()
const fs = require('fs');
var path = require('path');
const port = 34;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/tk', function(request, respond) {
    clientInformation.login("");
    console.log('Logged');
});


app.listen(port, () => {
  console.log(`Pour lancer le bot, allez sur ce site : http://localhost:${port}`)
})
