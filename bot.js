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

client.on('connected', onConnectedHandler);
client.on('message', onMessageHandler);

client.connect();

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}

function onMessageHandler (target, context, msg, self) {
  if (doNothing(self)) { return; }
  const command = parseMessage(msg);
  routeMessage(command);
}

function doNothing(self) { return !!self; }

function parseMessage(msg) { return msg.trim(); }

function routeMessage(command) {
  const commands = ['!d20', 'suggest'];
  if (command === commands[0]) {
    console.log(`* That's a ${command} command!`);
  } else {
    console.log(`* I don't know what ${command} means!`);
  }
}
