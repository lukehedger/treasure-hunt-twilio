#!/bin/env node
// var server = require('diet'),
//     app = server(),
//     twilio = require('twilio'),
//     client = twilio();
//
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8000
//
// app.listen("http://" + server_ip_address + ":" + server_port)
//
// app.get('/', function($){
//     $.end('Hello World!')
// });
//
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

var server = require('diet'),
    app = server();

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.get('/', function ($) {
    $.end('Hello World!');
});

app.listen("http://" + server_ip_address + ":" + server_port);

console.log( "Listening on " + server_ip_address + ", server_port " + server_port );
