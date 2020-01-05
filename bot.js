const dotenv = require('dotenv');
const getEnvVars = require('./lib/constants/environment');
const tellMeImConnected = require('./lib/tmiAdapter/onConnected');
const sendAGoodResponse = require('./lib/tmiAdapter/onMessage');
const tmi = require('tmi.js');

const opts = getEnvVars(dotenv.config, process.env);
const client = new tmi.client(opts);

client.on('connected', logToConsole);
client.on('message', respondWithSay);

client.connect();

function respondWithSay(target, context, msg, self) {
  sendAGoodResponse(target, context, msg, self, client.say);
}

function logToConsole(addr, port) {
  tellMeImConnected(addr, port, console.log)
}
