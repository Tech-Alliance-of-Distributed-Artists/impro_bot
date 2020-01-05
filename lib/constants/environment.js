function getEnvVars (loadEnvVars, getEnvVar) {
  loadEnvVars();
  const opts = {
    identity: {
      username: getEnvVar.BOT_USERNAME,
      password: getEnvVar.OAUTH_TOKEN
    },
    channels: [
      getEnvVar.CHANNEL_NAME
    ]
  };
  return opts;
}

module.exports = getEnvVars;
