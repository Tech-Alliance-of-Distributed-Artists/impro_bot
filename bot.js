const log = require('./lib/report/toConsole');
const onConnected = require('./lib/handle/connection');
const tmi = require('tmi.js');

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

const client = new tmi.client(opts);

client.on('connected', (addr, port) => { log(onConnected(addr, port)); });
client.on('message', onMessageHandler);

client.connect();

function onMessageHandler (target, context, msg, self) {
  if (doNothing(self)) { return; }
  const command = parseMessage(msg);
  const response = buildResponse(command);
  if (response !== DO_NOT_REPLY) { send(response, target); }
}

function doNothing(self) { return !!self; }

function parseMessage(msg) { return msg.trim(); }

function buildResponse(command) {
  if (known(command)) {
    return handleKnown(command);
  }
  return handleUnknown(command);
}

function send(response, target) {
  client.say(target, response);
}

function known(command) {
  const commands = ['suggest'];
  return command === commands[0];
}

function handleKnown(command) {
  console.log(`* That's a ${command} command!`);
  return `You made a ${command} command! You're a good Charlie-compound Boy! Link: https://improtheatre.com`
}

const DO_NOT_REPLY = `RESPONSE NOT NECESSARY`;

function handleUnknown(command) {
  console.log(`* I don't know what ${command} means!`);
  return DO_NOT_REPLY;
}
