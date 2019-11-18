const DO_NOT_REPLY = require('../../signal/constants');
const formatReply = require('../format/message');

function routeResponse(command) {
  if (suggestion(command)) { return formatReply(command); }
  return DO_NOT_REPLY;
}

function suggestion(command) {
  return command === 'suggest';
}

module.exports = routeResponse;
