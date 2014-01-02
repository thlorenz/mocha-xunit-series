'use strict';
/*global suite, test */

var assert = require('assert');

function async(cb) {
  setTimeout(cb, 500);
}

suite('suite foo:uno');

test('foo:uno:first outer test', function (done) {
  console.log('> starting foo:uno:first outer test');
  
  async(function () {
    assert.ok(1, 'foo:uno:first outer passed');
    console.log('> passed foo:uno:first outer, calling done');
    done();
  });
});

test('foo:uno:second outer test', function (done) {
  console.log('> starting foo:uno:second outer test');
  
  async(function () {
    assert.ok(1, 'foo:uno:second outer passed');
    console.log('> passed foo:uno:second outer, calling done');
    done();
  });
});

suite('suite foo:dos');

test('foo:dos:first outer test', function (done) {
  console.log('> starting foo:dos:first outer test');
  
  async(function () {
    assert.ok(1, 'foo:dos:first outer passed');
    console.log('> passed foo:dos:first outer, calling done');
    done();
  });
});

test('foo:dos:second outer test', function (done) {
  console.log('> starting foo:dos:second outer test');
  
  async(function () {
    assert.ok(1, 'foo:dos:second outer passed');
    console.log('> passed foo:dos:second outer, calling done');
    done();
  });
});
