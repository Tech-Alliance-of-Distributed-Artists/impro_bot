const constants = require('../../signal/constants');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;
const SUGGESTION = constants.SUGGESTION;
const formatReply = require('../format/message');

function routeResponse(command) {
  if (command === SUGGESTION) { return formatReply(command); }
  return DO_NOT_REPLY;
}

module.exports = routeResponse;
