const buildResponse = require('../../lib/handle/message');

function respondToGood(target, context, msg, self, postInChat) {
  const response = buildResponse(target, context, msg, self);
  if (sendable(response)) { postInChat(target, response); }
}

function sendable(response) { return !!response; }

module.exports = respondToGood;
