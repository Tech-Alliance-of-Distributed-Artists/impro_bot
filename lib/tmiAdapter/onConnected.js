const formatReport = require('../../lib/handle/connection');

function tellMeImConnected(addr, port, log) {
  log(formatReport(addr, port));
}

module.exports = tellMeImConnected;
