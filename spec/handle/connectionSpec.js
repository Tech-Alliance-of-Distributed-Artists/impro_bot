const subject = require('../../lib/handle/connection');

describe("handle/connection/onEvent", function() {
  it("returns a string that reports the connection as successful", function() {
    const expected = "* Connected to https://twitch.tv/impro_tv:80";
    const address = "https://twitch.tv/impro_tv";
    const port = 80;
    const actual = subject(address, port);
    expect(actual).toEqual(expected);
  });
});
