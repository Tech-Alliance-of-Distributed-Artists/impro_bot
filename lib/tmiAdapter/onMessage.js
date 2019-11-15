const buildResponse = require('../../lib/handle/message');

function respondToGood(target, context, msg, self, say) {
  const response = buildResponse(target, context, msg, self);
  if (sendable(response)) { say(target, response); }
}

function sendable(response) { return !!response; }

module.exports = respondToGood;
