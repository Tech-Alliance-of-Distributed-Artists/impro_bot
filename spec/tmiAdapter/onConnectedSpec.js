const subject = require('../../lib/tmiAdapter/onConnected');

describe("tmiAdapter/onMessage/respondToGood", function() {
  it("passes a message to a logging callback like console.log", function () {
    const addr = "twitch.tv/impro_tv";
    const port = 80;

    const spy = new Spy();
    subject(addr, port, spy.recordWhatIsSent);

    expect(spy.actual()).toContain("Connected");
  });
});

function Spy() { Spy.prototype.response = "I have not yet been called"; }
Spy.prototype.recordWhatIsSent = function(response) {
  Spy.prototype.response = response;
};
Spy.prototype.actual = function() {
  return Spy.prototype.response;
};
