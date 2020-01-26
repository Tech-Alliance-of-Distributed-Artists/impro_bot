const subject = require('../../lib/tmiAdapter/onMessage');

describe("tmiAdapter/onMessage/respondToGood", function() {
  it("passes a response to a callback from a valid message", function () {
    const channel = "";
    const tags = "";
    const message = "suggest";
    const self = false;

    const spy = new Spy();
    subject(channel, tags, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toContain(message);
  });

  it("does not pass a message that needs not be responded to", function () {
    const channel = "";
    const tags = "";
    const message = "No reply necessary, but know that I love you.";
    const self = false;

    const spy = new Spy();
    subject(channel, tags, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toEqual("I have not yet been called");
  });

  it("does not respond to itself even if the message is valid", function () {
    const channel = "";
    const tags = "";
    const message = "suggest";
    const self = true;

    const spy = new Spy();
    subject(channel, tags, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toEqual("I have not yet been called");
  });
});

function Spy() { Spy.prototype.response = "I have not yet been called"; }
Spy.prototype.recordWhatIsSent = function(channel, response) {
  Spy.prototype.response = response;
};
Spy.prototype.actual = function() {
  return Spy.prototype.response;
};
