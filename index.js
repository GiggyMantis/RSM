const http = require('http');
const nocache = require('nocache');
var static = require('node-static');

var express = require('express');
var app = express();

var file = new(static.Server)(__dirname);

app.get('/', function (req, res) {
    file.serve(req,res);
})

app.get('/index.html', function (req, res) {
    file.serve(req,res);
})

app.get('/reader.js', function (req, res) {
    file.serve(req,res);
})

app.get('/styles.css', function (req, res) {
    file.serve(req,res);
})

app.get('/template.mailbox', function (req, res) {
    file.serve(req,res);
})

app.use(nocache());

var server = app.listen(8080, function () {
   var port = server.address().port;
   
   console.log("Running Really Simple Messaging http://127.0.0.1:%s", port)
})


