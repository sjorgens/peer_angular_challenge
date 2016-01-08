/**
 * Created by robbynewman on 1/8/16.
 */


var express = require('express');
var path = require('path');

var app = express();

//
//var republican = require('./public/data/republican');
//var democrat = require('./public/data/democrat');

app.use(express.static('public'));


app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, 'public/views/index.html'));
});


app.get('/republican', function(request, response){
    response.sendFile(path.join(__dirname, 'public/data/republican.json'))
});

app.get('/democrat', function(request, response){
    response.sendFile(path.join(__dirname, 'public/data/democrat.json'))
});

//
//app.get('/republican', republican);
//app.get('/democrat', democrat);


var server = app.listen(3000,function() {
    var port = server.address().port;
    console.log('Listening at 3000');
});
