const subject = require('../../lib/constants/internal');

describe("constants/internal", function() {
  it("has a DO_NOT_REPLY constant", function () {
    expect(subject.DO_NOT_REPLY).toEqual('');
  });

  it("has a SUGGESTION constant", function () {
    expect(subject.SUGGESTION).toEqual('suggest');
  });
});
