const subject = require('../../lib/tmiAdapter/onMessage');

describe("tmiAdapter/onMessage/respondToGood", function() {
  it("passes a response to a callback from a valid message", function () {
    const target = "";
    const context = "";
    const message = "suggest";
    const self = false;

    const spy = new Spy();
    subject(target, context, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toContain(message);
  });

  it("does not pass a message that needs not be responded to", function () {
    const target = "";
    const context = "";
    const message = "No reply necessary, but know that I love you.";
    const self = false;

    const spy = new Spy();
    subject(target, context, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toContain("I have not yet been called");
  });

  it("does not respond to itself even if the message is valid", function () {
    const target = "";
    const context = "";
    const message = "suggest";
    const self = true;

    const spy = new Spy();
    subject(target, context, message, self, spy.recordWhatIsSent);

    expect(spy.actual()).toContain("I have not yet been called");
  });
});

function Spy() { Spy.prototype.response = "I have not yet been called"; }
Spy.prototype.recordWhatIsSent = function(target, response) {
  Spy.prototype.response = response;
};
Spy.prototype.actual = function() {
  return Spy.prototype.response;
};
