var thrift = require('thrift');
var Messenger = require('./gen-nodejs/Messenger.js');
var ttypes = require('./gen-nodejs/hello_types.js');

var connection = thrift.createConnection('localhost', 8080, {
  transport : thrift.TBufferedTransport,
  protocol : thrift.TBinaryProtocol
});

connection.on('error', function(err) {
  assert(false, err);
});

var client = thrift.createClient(Messenger, connection);

setInterval(function () {
  var latLng = new ttypes.LatLng();
  latLng.lat = Math.random();
  latLng.lng = Math.random();

  var send = new ttypes.Send();
  send.username = 'ericyan';
  send.content = 'Say hello at ' + new Date();
  send.location = latLng;

  client.send(send);
}, 1000);
