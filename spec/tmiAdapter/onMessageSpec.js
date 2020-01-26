const subject = require('../../lib/tmiAdapter/onMessage');

describe("tmiAdapter/onMessage/respondToGood", function() {
  it("passes a response to a callback from a valid message", function () {
    const channel = "";
    const tags = "";
    const message = "suggest";
    const self = false;

    const spy = new Spy();
    subject(channel, tags, message, self, spy);

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

Spy.prototype.actual = function() {
  return Spy.prototype.response;
};

Spy.prototype.say = function(channel, response) {
  this._recordWhatIsSaid(this._arbitraryDependentFunction(), channel, response);
};

Spy.prototype._arbitraryDependentFunction = function() { return true; };

Spy.prototype._recordWhatIsSaid = function(dependency, channel, response) {
  if (dependency) { return Spy.prototype.response = response; }
  return Spy.prototype.response = "Dependency not resolved";
};
