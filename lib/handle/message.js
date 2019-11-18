const DO_NOT_REPLY = require('../signal/constants');
const routeResponse = require('./route/message');

function buildResponse (target, context, msg, self) {
  const command = parseMessage(msg, self);
  return routeResponse(command);
}

function parseMessage(msg, self) {
  if (!!self) { return DO_NOT_REPLY; }
  return msg.trim();
}

module.exports = buildResponse;
