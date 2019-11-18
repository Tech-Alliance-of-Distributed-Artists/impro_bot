const DO_NOT_REPLY = require('../signal/constants');
const formatReply = require('./format/message');

function buildResponse (target, context, msg, self) {
  const command = parseMessage(msg, self);
  return routeResponse(command);
}

function parseMessage(msg, self) {
  if (!!self) { return DO_NOT_REPLY; }
  return msg.trim();
}

function routeResponse(command) {
  if (suggestion(command)) { return formatReply(command); }
  return DO_NOT_REPLY;
}

function suggestion(command) {
  return command === 'suggest';
}

module.exports = buildResponse;
