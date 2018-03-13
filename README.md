# @sealsystems/setenv

[![CircleCI](https://circleci.com/gh/sealsystems/node-setenv.svg?style=svg)](https://circleci.com/gh/sealsystems/node-setenv)
[![AppVeyor](https://ci.appveyor.com/api/projects/status/h3vlvdw99f7q83rp?svg=true)](https://ci.appveyor.com/project/Plossys/node-setenv)

Easily setting environment variables without the need to acces process.env

## Installation

```bash
$ npm install @sealsystems/setenv
```

## Quick start

First you need to add a reference to @sealsystems/setenv within your application.

```javascript
const setenv = require('@sealsystems/setenv');
```

### Setting a variables

Call the function to set a new environment variable or overwrite an existing one.

```
setenv (key, value)
```

- `key` mandatory string with name of the environment variable
- `value` value to set. Allowed data types are `string`, `object`, `number`, `boolean`. For all non string types their string representation is used. Objects are converted into JSON format.

Result value is `true` on success, false otherwise.

Example:

```javascript
setenv('MYKEY', 'my value');
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```bash
$ bot
```
