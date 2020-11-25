module.exports = RED => {
    function HabiticaRootAccountNode(n) {
        RED.nodes.createNode(this, n);

        this.username = n.username;
        this.userId = n.userId;
    }

    RED.nodes.registerType('habitica-root-account', HabiticaRootAccountNode);
};
