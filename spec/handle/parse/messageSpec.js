const constants = require('../../../lib/constants/internal');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;
const SUGGESTION = constants.SUGGESTION;
const subject = require('../../../lib/handle/parse/message');

describe("handle/message/buildResponse", function() {
  it("returns a SUGGEST command when a message says 'suggest'", function () {
    const message = "suggest";
    const self = false;

    const actual = subject(message, self);
    expect(actual).toEqual(SUGGESTION);
  });

  it("returns a SUGGEST command when a message says 'suggest' even if no self is given", function () {
    const message = "suggest";
    const actual = subject(message);
    expect(actual).toEqual(SUGGESTION);
  });

  it("returns a SUGGEST command when a message says 'suggest' even if there is white space", function () {
    const message = " \n\t\rsuggest \n\t\r";
    const actual = subject(message);
    expect(actual).toEqual(SUGGESTION);
  });

  it("returns a DO_NOT_REPLY command when self is true, even if a message says 'suggest'", function () {
    const message = "suggest";
    const self = true;

    const actual = subject(message, self);
    expect(actual).toEqual(DO_NOT_REPLY);
  });
});
