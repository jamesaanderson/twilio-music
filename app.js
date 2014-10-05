var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.post('/sms', function(req, res) {
  console.log(req.body.Body);

  io.emit('sms', req.body.Body);
});

var port = process.env.PORT || 1337
http.listen(port);
