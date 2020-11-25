module.exports = RED => {
    function HabiticaAccountNode(n) {
        RED.nodes.createNode(this, n);

        this.username = n.username;
        this.apiKey = n.apiKey;
    }

    RED.nodes.registerType('habitica-account', HabiticaAccountNode);
};
