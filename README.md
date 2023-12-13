# Publishable *protocol for Servable*


@servable-community/publishable, #1.0.0


[![npm Package](https://img.shields.io/npm/v/@servable-community/publishable.svg?style=flat-square)](https://www.npmjs.org/package/@servable-community/publishable) [![NPM Downloads](https://img.shields.io/npm/dm/@servable-community/publishable.svg)](https://npmjs.org/package/@servable-community/publishable) [![Build Status](https://github.com/servable-community/publishable/actions/workflows/release.yml/badge.svg)](https://github.com/servable-community/publishable/actions/tests.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)




<img src="src/assets/icon.png" alt="drawing" style="width:80px;" />







## A complete lifecycle management for publication



Allow any object to be in a published or drafted state.





### Available in Servable registry


<img src="https://cdn.registry.servablecommunity.com/assets/logo.png" alt="drawing" style="width:50px;" />


@servable-community/publishable is available at [servable registry](https://registry.servablecommunity.com/protocol/@servable-community/publishable).


**Use in your servable project:**

```bash
yo servable -t useprotocol --protocolid @servable-community/publishable
```

## Install

```bash
yarn add @servable-community/publishable
```


or

```bash
npm install @servable-community/publishable
```

### Companion packages


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=servable-publishable-shared"/>

### Dependencies

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=localable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=versionable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=reactable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=commentable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=publishable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=reviewable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=taggable"/>

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=sharable"/>

## Usage

### Template


Add this template to your class' protocols.json file. Fill the values to fit your needs with the right parameters.

```json
{
  "id": "publishable",
  "name": "Publishable",
  "slug": "",
  "params": {}
}
```

### Parameters

| type | id  | Message | Default value | vacuity |
| ---- | --- | ------- | ------------- | ------- |
| input | waitForValidation | Wait for validation |  | optional |
| input | errorMessage | Error message | Could not publish | mandatory |
| input | notifyOnError | Notify on error |  | mandatory |

---


*Generated documentation below*

## Seed

## Protocol class

## Before init

## After init

## Config

## Functions

## Live Classes

## Schema

## System

## Lib

## Triggers

## Servable Documentation


You can find here the complete [servable documentation](https://documentation.servable.app/) with guides and api reference.

## License


MIT © [servable-community](https://github.com/servable-community)
