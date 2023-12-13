# Publishable *protocol for Servable*


**@servable-community/publishable**


[![npm Package](https://img.shields.io/npm/v/@servable-community/publishable.svg?style=flat-square)](https://www.npmjs.org/package/@servable-community/publishable) [![NPM Downloads](https://img.shields.io/npm/dm/@servable-community/publishable.svg)](https://npmjs.org/package/@servable-community/publishable) [![Build Status](https://github.com/servable-community/publishable/actions/workflows/release.yml/badge.svg)](https://github.com/servable-community/publishable/actions/tests.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)




<img src="src/assets/icon.png" alt="drawing" style="width:80px;" />







## A complete lifecycle management for publication



Allow any object to be in a published or drafted state.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



```mermaid

%%{

  init: {

    'theme': 'base',

    'themeVariables': {

      'primaryColor': '#fff',

      'primaryTextColor': '#323232',

      'primaryBorderColor': '#323232',

      'lineColor': '#323232',

      'fontFamily': 'ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace'

    }

  }

}%%

flowchart TD

    start([Launch Servable]) --> requiresMigration{A protocol requires migration?}

    requiresMigration -- Yes --> migrate[Migrate every protocol that requires migration]

    requiresMigration -- No --> doLaunch[Do Launch]

    migrate --> doLaunch[Do Launch]

```



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


<img src="https://github-readme-stats.vercel.app/api/pin/?username=undefined&repo=undefined"/>

### Dependencies

#### Target classes


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=disposableorphansable"/>


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=disposablechildrenable"/>

#### Managed classes

##### Applies to classes: *commentableEntry*


<img src="https://github-readme-stats.vercel.app/api/pin/?username=servable-community&repo=localable"/>

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

## Seed

## Protocol class

## Before init

## After init

## Config

## Functions

## Live Classes

## Schema

#### Target class


**Fields**

| Name | Type | Target class | Default value |
| ---- | ---- | ------------ | ------------- |
| publishableStatus | String |  |  |


**Class Level Permissions**

| Name | Content |
| ---- | ------- |
| protectedFields | {"*":[]} |


**Indexes**

| Name | Content |
| ---- | ------- |
| _publishableStatus | {"publishableStatus":1} |

## System

## Lib

## Triggers

## Resources

### Servable Documentation


You can find here the complete [servable documentation](https://documentation.servablecommunity.com/) with guides and api reference.

### Servable Registry


You can find other Servable  protocols at the [Servable registry](https://registry.servablecommunity.com/)

### License


MIT © [servable-community](https://github.com/servable-community)
