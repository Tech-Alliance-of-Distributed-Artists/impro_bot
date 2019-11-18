const parseMessage = require('./parse/message');
const routeResponse = require('./route/message');

function buildResponse (target, context, msg, self) {
  const command = parseMessage(msg, self);
  return routeResponse(command);
}

module.exports = buildResponse;
