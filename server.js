#!/bin/env node
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    twilio = require('twilio'),
    client = twilio();

var config = require('./config');

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.get('/', function (req, res) {
    res.send('Hello Twilio!');
    console.log("hello...?");
});

app.post('/message', function (req, res) {

    var resp = new twilio.TwimlResponse();

    var body = req.body.Body;
    console.log("body:", body);

    var clue = body.match(/clue (.*)/i)[1];
    console.log("clue:", clue);

    var hint = config.hints[clue];
    console.log("hint:", hint);

    resp.message('Hint ' + clue + ': ' + hint, {
      from: 'Hen Hint'
    });

    res.set('Content-Type', 'text/xml');

    res.send(resp.toString());
});

var server = app.listen(server_port, server_ip_address, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log( "Listening on http://" + host + ":" + port );
});
