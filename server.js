#!/bin/env node
var server = require('diet'),
    app = server();

var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8000

app.listen("http://" + server_ip_address + ":" + server_port)

app.get('/', function($){
    $.end('Hello World!')
});
