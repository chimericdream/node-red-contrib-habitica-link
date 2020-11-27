# Node-RED Habitica Link

[![npm](https://img.shields.io/npm/dt/node-red-contrib-habitica-link.svg?style=flat-square)](https://www.npmjs.com/package/node-red-contrib-habitica-link)
[![npm](https://img.shields.io/npm/v/node-red-contrib-habitica-link.svg?style=flat-square)](https://github.com/chimericdream/node-red-contrib-habitica-link/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/chimericdream/node-red-contrib-habitica-link/blob/main/LICENSE.md)

Habitica Link provides nodes for Node-RED to fetch data from and interact with the Habitica API.

### Features
* Fetch data from Habitica for multiple user accounts
* Fetch profile data

### Installation
Habitica Link was written for **Node.js 14+** and Node-RED v1.1.3+. It supports the Habitica API version 3+.

Either use the Editor - Menu - Manage Palette - Install option, or run the following command in your Node-RED user directory (typically `~/.node-red`) after installing Node-RED-dashboard.

```
npm install node-red-contrib-habitica-link
```

_Note:_ As this is a new plugin in active development, the version compatibility is likely to change. That said, my goal is to only _broaden_ the version compatibility. In other words, as I continue working on the plugin, I hope to expand support for more than simply the latest Node.js LTS and Node-RED versions.

### Configuration

When setting up your first node, you will need to define at least one set of credentials to use when querying Habitica's API. All API calls require the following information:

* "App Owner" user ID: This will typically be the user ID of the Node-RED admin.
* User ID: this is the ID of the user for which data will be fetched
* API Token: this must match the secret token for the given user ID (i.e. not the "app owner")

![User Account Setup](https://raw.githubusercontent.com/chimericdream/node-red-contrib-habitica-link/main/docs/screenshots/example-user-account-config.png)

### Available Nodes

- [User Profile](#user-profile)

## User Profile
Use the User Profile node to fetch profile data (including things such as stats, current gold, etc) for a given user.

![User Profile Example](https://raw.githubusercontent.com/chimericdream/node-red-contrib-habitica-link/main/docs/screenshots/example-user-profile-flow.png)

### Profile information
If you don't specify which fields you want, the Habitica API will return the complete user object. [See the user schema](https://github.com/HabitRPG/habitica/blob/develop/website/server/models/user/schema.js) for a list of fields.

### Retrieving specific fields
In the node's edit dialog, you may specify one or more fields you wish to retrieve for the user. Enter a list of field keys separated by commas or line breaks into the textarea.

|  Property  | Type | Information                                                      |
|:----------:|:----:|------------------------------------------------------------------|
| **API Account** | Habitica Account | (required) The main account to be used by Node-RED to identify itself to Habitica's API |
| **Account** | Habitica Account | (required) The account for which data will be fetched from Habitica. |
| **Fields** | string[] | (optional) A list of strings, separated by commas or line breaks, indicating which fields should be fetched from the user's account. |

![User Profile Config](https://raw.githubusercontent.com/chimericdream/node-red-contrib-habitica-link/main/docs/screenshots/example-user-profile-config.png)

## Contributing

Anyone willing to contribute is welcome to [open an issue](https://github.com/chimericdream/node-red-contrib-habitica-link/issues/new). Code contributions are always welcome! For ideas, check out the [issue tracker](https://github.com/chimericdream/node-red-contrib-habitica-link/issues) and/or project road map (coming soon).

This project welcomes any and all who wish to contribute. To aid in this, we have adopted the [Contributor Covenant](https://www.contributor-covenant.org/). You can read [the full text](https://github.com/chimericdream/node-red-contrib-habitica-link/blob/main/CONDUCT.md) of the code here.

## License

Node-RED Habitica Link is released as open source under the MIT license. See the [license](https://github.com/chimericdream/node-red-contrib-habitica-link/blob/main/LICENSE.md) file for the full text of the license.
