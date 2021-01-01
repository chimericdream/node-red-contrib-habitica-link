const https = require('https');

module.exports = RED => {
    function CreateTaskNode(config) {
        const node = this;

        RED.nodes.createNode(node, config);

        node.apiAccount = RED.nodes.getNode(config.apiAccount);
        node.account = RED.nodes.getNode(config.account);

        const handleErr = (err) => {
            console.log(err);
            node.error('Something done broke');
            node.status({fill: 'red', shape: 'ring', text: 'Error creating task'});
        };

        node.on('input', async function(msg) {
            const opts = {
                host: 'habitica.com',
                path: '/api/v3/tasks/user',
                headers: {
                    'X-Client': `${node.apiAccount.userId}-NodeRED`,
                    'X-API-User': node.account.userId,
                    'X-API-Key': node.account.apiToken,
                },
            };

            const request = https.request(opts, req => {
                req.setEncoding('utf-8');

                let body = '',
                    response = null;

                req.on('data', data => {
                    body += data;
                });

                req.on('end', () => {
                    response = JSON.parse(body);

                    if (response.success) {
                        msg.payload = response.data;
                        node.send(msg);
                        node.status({fill: 'green', shape: 'dot', text: 'Task created'});
                    }
                    else {
                        handleErr('The response was not successful');
                    }
                });
            }).on('error', err => handleErr(err));

            request.write({'text': config.text, 'type': config.kind});
            request.end();
        });
    }

    RED.nodes.registerType('habitica-create-task', CreateTaskNode);
};
