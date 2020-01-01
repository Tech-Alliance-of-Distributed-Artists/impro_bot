const constants = require('../../../lib/signal/constants');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;
const SUGGESTION = constants.SUGGESTION;
const subject = require('../../../lib/handle/route/message');

describe("handle/route/message/routeResponse", function() {
  it("returns a message containing the SUGGEST command when given the SUGGEST command", function () {
    const command = SUGGESTION;
    const actual = subject(command);
    expect(actual).toContain(command);
  });

  it("returns a DO_NOT_REPLY message when given a DO_NOT_REPLY command", function () {
    const command = "pet the wallaby";
    const actual = subject(command);
    expect(actual).toEqual(DO_NOT_REPLY);
  });

  it("returns a DO_NOT_REPLY message for commands it does not know", function () {
    const command = "pet the wallaby";
    const actual = subject(command);
    expect(actual).toEqual(DO_NOT_REPLY);
  });

  it("returns a DO_NOT_REPLY message when given no command at all", function () {
    const actual = subject();
    expect(actual).toEqual(DO_NOT_REPLY);
  });
});
