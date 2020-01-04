const buildResponse = require('../../lib/handle/message');
const constants = require('../constants/internal');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;

function respondToGood(target, context, msg, self, postInChat) {
  const response = buildResponse(target, context, msg, self);
  if (response !== DO_NOT_REPLY) { postInChat(target, response); }
}

module.exports = respondToGood;
