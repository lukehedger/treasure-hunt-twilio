var server = require('diet'),
    app = server(),
    twilio = require('twilio'),
    client = twilio();

// TODO - diet.js -> how can we use config.json and /routes

app.listen('http://127.0.0.1:8000')

app.get('/', function($){
    $.end('Hello World!')
});

app.post('/message', function ($) {

    // TODO - push app to https://www.openshift.com/ to test POST request
    // configure number sms request url

    // TODO - how can we get text body?
    console.log($.body, $.query, $.params);

    var resp = new twilio.TwimlResponse();

    // TODO - dynamic message based on clue #
    resp.message('Thanks for subscribing!');

    $.header('content-type', 'text/xml')

    // TODO - does this send a response sms automatically or do we need to use client.sendSms ?
    $.end(resp.toString());
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
