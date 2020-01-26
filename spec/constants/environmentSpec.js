const subject = require('../../lib/constants/environment');

let testEnvVars = {
  BOT_USERNAME: "Has not been set",
  OAUTH_TOKEN: "Has not been set",
  CHANNEL_NAME: "Has not been set"
};

describe("constants/environment", function() {
  it("Returns an Object with populated environment variables", function () {
    const actual = subject(mockLoadEnvVars, testEnvVars);

    expect(actual.identity.username).toEqual('Harry Poole');
    expect(actual.identity.password).toEqual('oauth:1awesomerandompassofthislength');
    expect(actual.channels[0]).toEqual('Impro_TV');
  });

  it("Returns an Object with set options for tmi and twitch", function () {
    const actual = subject(mockLoadEnvVars, testEnvVars);

    expect(actual.options.debug).toEqual(true);
    expect(actual.connection.secure).toEqual(true);
    expect(actual.connection.reconnect).toEqual(true);
  });
});

function mockLoadEnvVars() {
  testEnvVars.BOT_USERNAME = "Harry Poole";
  testEnvVars.OAUTH_TOKEN = "oauth:1awesomerandompassofthislength";
  testEnvVars.CHANNEL_NAME = "Impro_TV";
}
