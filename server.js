var express = require('express');
var path = require('path');
var reload = require('reload');
var http = require('http');
var bodyParser = require('body-parser');

var router = require('./server/routing/route');

var app = express();

app.use('/', express.static(path.join(__dirname, 'app')));

app.use(bodyParser.json());

app.use(router);

app.set('port', process.env.PORT || 3000);

var server = http.createServer(app);

reload(server, app);

server.listen(app.get('port'), function() {
    console.log('Web server listening on port %d', app.get('port'));
});