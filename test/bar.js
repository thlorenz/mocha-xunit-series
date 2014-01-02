'use strict';
/*global suite, test */

var assert = require('assert');

function async(cb) {
  setTimeout(cb, 500);
}

suite('suite bar:uno');

test('bar:uno:first outer test', function (done) {
  console.log('> starting bar:uno:first outer test');
  
  async(function () {
    assert.ok(1, 'bar:uno:first outer passed');
    console.log('> passed bar:uno:first outer, calling done');
    done();
  });
});

test('bar:uno:second outer test', function (done) {
  console.log('> starting bar:uno:second outer test');
  
  async(function () {
    assert.ok(1, 'bar:uno:second outer passed');
    console.log('> passed bar:uno:second outer, calling done');
    done();
  });
});

suite('suite bar:dos');

test('bar:dos:first outer test', function (done) {
  console.log('> starting bar:dos:first outer test');
  
  async(function () {
    assert.ok(1, 'bar:dos:first outer passed');
    console.log('> passed bar:dos:first outer, calling done');
    done();
  });
});

test('bar:dos:second outer test', function (done) {
  console.log('> starting bar:dos:second outer test');
  
  async(function () {
    assert.ok(1, 'bar:dos:second outer passed');
    console.log('> passed bar:dos:second outer, calling done');
    done();
  });
});
