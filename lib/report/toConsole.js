const onConnected = require('../../lib/handle/connection');

function logOnConnected(addr, port) {
  console.log(onConnected(addr, port));
}

module.exports = logOnConnected;
