const formatReport = require('../../lib/handle/connection');

function tellMeImConnected(addr, port) {
  console.log(formatReport(addr, port));
}

module.exports = tellMeImConnected;
