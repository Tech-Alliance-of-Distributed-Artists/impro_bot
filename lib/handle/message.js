function buildResponse (target, context, msg, self) {
  if (doNothing(self)) { return; }
  const command = parseMessage(msg);
  return routeResponse(command);
}

function doNothing(self) { return !!self; }

function parseMessage(msg) { return msg.trim(); }

const DO_NOT_REPLY = '';

function routeResponse(command) {
  if (suggestion(command)) { return formatReply(command); }
  return DO_NOT_REPLY;
}

function suggestion(command) {
  const commands = ['suggest'];
  return command === commands[0];
}

function formatReply(command) {
  return `You made a ${command} command! You're a good Charlie-compound Boy! Link: https://improtheatre.com`
}

module.exports = buildResponse;
