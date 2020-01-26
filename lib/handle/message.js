const parseMessage = require('./parse/message');
const routeResponse = require('./route/message');

function buildResponse (channel, tags, message, self) {
  const command = parseMessage(message, self);
  return routeResponse(command);
}

module.exports = buildResponse;
