'use strict';

const assert = require('assertthat');
const getenv = require('getenv');
const uuid = require('uuid');

const setenv = require('../lib/setenv');

suite('setenv', () => {
  test('is a function', (done) => {
    assert.that(setenv).is.ofType('function');
    done();
  });

  test('throws an error if key is missing', (done) => {
    assert
      .that(() => {
        setenv();
      })
      .is.throwing('Key is missing.');
    done();
  });

  test('throws an error if value is missing', (done) => {
    assert
      .that(() => {
        setenv('key');
      })
      .is.throwing('Value is missing');
    done();
  });

  test('returns false if called with an invalid type', (done) => {
    // eslint-disable-next-line no-empty-function
    const result = setenv('a', () => {});

    assert.that(result).is.false();
    done();
  });

  test('sets an environment variable of type string', (done) => {
    const key = uuid.v4();
    const result = setenv(key, 'testvalue');

    assert.that(result).is.true();
    assert.that(getenv(key)).is.equalTo('testvalue');
    done();
  });

  test('sets an environment variable of type object', (done) => {
    const key = uuid.v4();
    const result = setenv(key, { name: 'hugo', age: 108 });

    assert.that(result).is.true();
    assert.that(getenv(key)).is.equalTo('{"name":"hugo","age":108}');
    done();
  });

  test('sets an environment variable of type number', (done) => {
    const key = uuid.v4();
    const result = setenv(key, 99);

    assert.that(result).is.true();
    assert.that(getenv(key)).is.equalTo('99');
    done();
  });

  test('sets an environment variable of type boolean', (done) => {
    const key = uuid.v4();
    const result = setenv(key, true);

    assert.that(result).is.true();
    assert.that(getenv(key)).is.equalTo('true');
    done();
  });
});
