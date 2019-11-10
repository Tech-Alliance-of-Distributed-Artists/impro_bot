const subject = require('../../lib/handle/connection');

describe("handle/connection/onEvent", function() {
  it("returns a string that reports the connection as successful", function() {
    const expected = "Connected to";

    const actual = subject();

    expect(actual).toContain(expected);
  });

  it("returns the full address and port sent to it", function() {
    const expected = "https://twitch.tv/impro_tv:80";
    const address = "https://twitch.tv/impro_tv";
    const port = 80;

    const actual = subject(address, port);

    expect(actual).toContain(expected);
  });

  it("returns the address that is sent to it", function() {
    const expected = "https://twitch.tv/impro_tv";
    const address = "https://twitch.tv/impro_tv";

    const actual = subject(address);

    expect(actual).toContain(expected);
  });

  it("returns no address if none is sent to it", function() {
    const expected = "https://twitch.tv/impro_tv";

    const actual = subject();

    expect(actual).not.toContain(expected);
  });

  it("returns a port that is sent to it", function() {
    const expected = "80";
    const address = undefined;
    const port = 80

    const actual = subject(address, port);

    expect(actual).toContain(expected);
  });

  it("returns no port if none is sent to it", function() {
    const expected = "80";
    const address = "any value";

    const actual = subject(address);

    expect(actual).not.toContain(expected);
  });
});
