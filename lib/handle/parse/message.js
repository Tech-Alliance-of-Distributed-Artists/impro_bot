const constants = require('../../constants/internal');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;

function parseMessage(msg, self) {
  if (!!self) { return DO_NOT_REPLY; }
  return msg.trim();
}

module.exports = parseMessage;
