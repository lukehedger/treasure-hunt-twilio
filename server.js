#!/bin/env node
var express = require('express');
var app = express(),
    twilio = require('twilio'),
    client = twilio();

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/message', function (req, res) {

    console.log(req.body);

    var resp = new twilio.TwimlResponse();

    // TODO - dynamic message based on clue #
    // store clues in config.json file clues: { 1: { hint: "this is a hint" } }
    // get clue number from text body eg. CLUE 1
    // then get config.clues[1].hint and resp.message(hint);
    // simple... ?
    resp.message('Thanks for subscribing!');

    res.set('Content-Type', 'text/xml');

    // TODO - does this send a response sms automatically or do we need to use client.sendSms ?
    res.send(resp.toString());
});

var server = app.listen(server_port, server_ip_address, function () {
    var host = server.address().address,
        port = server.address().port;

    console.log( "Listening on http://" + host + ":" + port );
});

// client.sendSms({
//     to:'447964209427',
//     from:'441329801049',
//     body:'ahoy hoy! Testing Twilio and node.js'
// }, function(error, message) {
//     if (!error) {
//         console.log('Success! The SID for this SMS message is:');
//         console.log(message.sid);
//         console.log('Message sent on:');
//         console.log(message.dateCreated);
//     } else {
//         console.log('Oops! There was an error.');
//     }
// });
