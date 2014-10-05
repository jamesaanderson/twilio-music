var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.post('/sms', function(req, res) {
  var song = req.body['Body']

  console.log(song);
  io.emit('sms', song);
});

var port = process.env.PORT || 1337
http.listen(port);
