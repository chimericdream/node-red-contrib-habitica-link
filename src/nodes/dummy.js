module.exports = RED => {
    function DummyNode(config) {
        RED.nodes.createNode(this, config);

        this.on('input', msg => {
            msg.payload = msg.payload.toLowerCase();

            this.send(msg);
        });
    }

    RED.nodes.registerType('dummy', DummyNode);
};
