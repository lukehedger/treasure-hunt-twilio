#!/bin/env node
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    twilio = require('twilio'),
    client = twilio();

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

    // TODO - dynamic message based on clue #
    console.log("body:", req.body);
    // store clues in config.json file clues: { 1: { hint: "this is a hint" } }
    // get clue number from text body eg. CLUE 1
    // then get config.clues[1].hint and resp.message(hint);
    // simple... ?
    resp.message('Thanks for subscribing!');

    res.set('Content-Type', 'text/xml');

    res.send(resp.toString());
});

var server = app.listen(server_port, server_ip_address, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log( "Listening on http://" + host + ":" + port );
});
