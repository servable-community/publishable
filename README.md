# Publishable Protocol

![logo](/static/img/polar-bear-4.png)

[![npm Package](https://img.shields.io/npm/v/servable-publishable.svg?style=flat-square)](https://www.npmjs.org/package/servable-publishable)
[![NPM Downloads](https://img.shields.io/npm/dm/servable-publishable.svg)](https://npmjs.org/package/servable-publishable)
[![Build Status](https://github.com/yelounak/servable-publishable/actions/workflows/release.yml/badge.svg)](https://github.com/yelounak/servable-publishable/actions/tests.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

The publishable protocol handles the complete publication state of an object.

## Install
```bash
yarn add servable-publishable
```

## Auxiliary packages

### Shared library
[servable-publishable-shared](https://github.com/yelounak/servable-publishable-shared)
```bash
yarn add servable-publishable-shared
```

### React library
[servable-publishable-react](https://github.com/yelounak/servable-publishable-react)
```bash
yarn add servable-publishable-react
```

## Protocol
### Configuration
#### Payload sample
```json
 {
    id: 'publishable',
    name: 'publishable',
    slug: 'ps',
    module: {
        'servable-publishable': '*'
    },
    version: '*',
    params: {
        liveClasses: ['publishable'],
        schema: {
            restrictSecurity: true
        }
    }
},
```
#### Reference


### Capacities
#### Schema
**Classes**
TODO

**Class level permissions**
TODO

**Indexes**
```json
{
    "_publishableStatus": {
        "publishableStatus": 1
    }
}
```

**Fields**
```json
{
    "publishableStatus": {
        "type": "String"
    }
}
```

#### Protocol class
TODO
#### Classes
TODO
#### Triggers
TODO
#### Before init
TODO
#### After init
TODO
#### Seed
TODO
#### Config
TODO
#### Functions
TODO
#### Jobs
TODO
#### Live classes
TODO

### Security
TODO

### Performance
TODO

## Servable Documentation
You can find here the complete [servable documentation](https://documentation.servable.app/) with guides and api reference.

## License

MIT © [yelounak](https://github.com/yelounak)
