var thrift = require('thrift');
var Messenger = require('../gen-nodejs/Messenger.js');
var ttypes = require('../gen-nodejs/hello_types.js');

var server = thrift.createServer(Messenger, {
  send (send) {
    console.log(send);
  }
});

server.listen(8080);
