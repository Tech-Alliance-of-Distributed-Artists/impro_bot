const subject = require('../../../lib/handle/format/message');

describe("handle/format/message/formatReply", function() {
  it("builds a response string from the command passed to it", function () {
    const command = "Farmboy, fetch me that pitcher";
    const reply = `You made a ${command} command! You're a good Charlie-compound Boy! Link: https://improtheatre.com`

    const actual = subject(command);

    expect(actual).toEqual(reply);
  });
});
