function onEvent (target, context, msg, self) {
  if (doNothing(self)) { return; }
  const command = parseMessage(msg);
  return buildResponse(command);
}

function doNothing(self) { return !!self; }

function parseMessage(msg) { return msg.trim(); }

const DO_NOT_REPLY = '';

function buildResponse(command) {
  if (known(command)) { return handleKnown(command); }
  return DO_NOT_REPLY;
}

function known(command) {
  const commands = ['suggest'];
  return command === commands[0];
}

function handleKnown(command) {
  return `You made a ${command} command! You're a good Charlie-compound Boy! Link: https://improtheatre.com`
}

module.exports = onEvent;
