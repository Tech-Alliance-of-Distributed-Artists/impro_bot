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

const DO_NOT_REPLY = '';

function suggestion(command) {
  return command === 'suggest';
}

function formatReply(command) {
  return `You made a ${command} command! You're a good Charlie-compound Boy! Link: https://improtheatre.com`
}

module.exports = buildResponse;
