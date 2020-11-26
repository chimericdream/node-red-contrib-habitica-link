const https = require('https');

module.exports = RED => {
    function UserProfileNode(config) {
        const node = this;

        RED.nodes.createNode(node, config);

        node.apiAccount = RED.nodes.getNode(config.apiAccount);
        node.account = RED.nodes.getNode(config.account);

        const fields = [];

        if (config.fields.length > 0) {
            for (let i = 0; i < config.fields.length; i++) {
                fields.push(config.fields[i]);
            }
        }

        const fieldQuery = fields.length === 0
            ? ''
            : `?userFields=${fields.join(',')}`;

        node.on('input', async function(msg) {
            const opts = {
                host: 'habitica.com',
                path: `/api/v3/user${fieldQuery}`,
                headers: {
                    'X-Client': `${node.apiAccount.userId}-NodeRED`,
                    'X-API-User': node.account.userId,
                    'X-API-Key': node.account.apiToken,
                },
            };

            https.get(opts, req => {
                req.setEncoding('utf-8');

                let body = '',
                    response = null;

                req.on('data', data => {
                    body += data;
                });

                req.on('end', () => {
                    response = JSON.parse(body);

                    msg.fields = node.fields;
                    msg.payload = response;
                    node.send(msg);
                    node.status({fill: 'green', shape: 'dot', text: 'Profile retrieved'});
                });
            }).on('error', err => {
                console.log(err);
                node.error('Something done broke');
                node.status({fill: 'red', shape: 'ring', text: 'Error retrieving profile'});
            });
        });
    }

    RED.nodes.registerType('habitica-user-profile', UserProfileNode);
};
