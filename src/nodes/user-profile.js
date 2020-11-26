module.exports = RED => {
    function UserProfileNode(config) {
        const node = this;

        RED.nodes.createNode(node, config);

        node.on('input', async function(msg) {
            msg.payload = JSON.stringify(node, null, 4);

            node.send(msg);
        });
    }

    RED.nodes.registerType('habitica-user-profile', UserProfileNode);
};
