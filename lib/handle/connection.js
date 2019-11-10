function onEvent(addr, port) {
    return `* Connected to ${addr}:${port}`;
}

module.exports = onEvent;
