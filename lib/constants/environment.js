function getEnvVars (loadEnvVars, getEnvVar) {
  loadEnvVars();
  const opts = {
    options: {
      debug: true
    },
    connection: {
      secure: true,
      reconnect: true
    },
    identity: {
      username: getEnvVar.BOT_USERNAME,
      async password() {
        return getEnvVar.OAUTH_TOKEN;
      }
    },
    channels: [
      getEnvVar.CHANNEL_NAME
    ]
  };
  return opts;
}

module.exports = getEnvVars;
