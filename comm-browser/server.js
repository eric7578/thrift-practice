var thrift = require('thrift');
var Messenger = require('../gen-nodejs/Messenger.js');
var ttypes = require('../gen-nodejs/hello_types.js');

var handlers = {
  send: function (send, result) {
    console.log(send);
    result(null, 'Hello, ' + send.username);
  }
};

var opt = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TJSONProtocol,
  processor: Messenger,
  handler: handlers
};

var server = thrift.createWebServer({
  cors: {
    '*': true
  },
  services: {
    '/hello': opt
  }
}).listen(8080);
