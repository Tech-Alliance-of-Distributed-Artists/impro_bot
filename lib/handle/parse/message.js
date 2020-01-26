const constants = require('../../constants/internal');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;

function parseMessage(message, self) {
  if (!!self) { return DO_NOT_REPLY; }
  return message.trim();
}

module.exports = parseMessage;
