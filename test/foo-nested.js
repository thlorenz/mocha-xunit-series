
'use strict';
/*global suite, test */

var assert = require('assert');

function async(cb) {
  setTimeout(cb, 500);
}

suite('suite foo:uno');

// DON'T DO THIS SINCE IT'S UNCLEAR WHEN IT'S DONE
// Instead write tests in a flat test structure, write a setup function and call it from each test
test('WRONG! foo:uno:first outer test', function (done) {
  console.log('> starting foo:uno:first outer test');
  
  async(function () {
    assert.ok(1, 'foo:uno:first outer passed');
    console.log('> passed foo:uno:first outer, calling done');
    done();
  });

  test('WRONG! -- totally different tests run in between, that will mess with your setup ;) -- foo:uno:first inner test', function (done) {
    console.log('> starting foo:uno:first inner test');
    
    async(function () {
      assert.ok(1, 'foo:uno:first inner passed');
      console.log('> passed foo:uno:first inner, calling done');
      done();
    });

    test('WRONG! -- and this one NEVER runs! -- foo:uno:first inner-inner test', function (done) {
      console.log('> starting foo:uno:first inner-inner test');
      
      async(function () {
        assert.ok(1, 'foo:uno:first inner-inner passed');
        console.log('> passed foo:uno:first inner-inner, calling done');
        done();
      });
    });
  });

  test('WRONG! foo:uno:second inner test', function (done) {
    console.log('> starting foo:uno:second inner test');
    
    async(function () {
      assert.ok(1, 'foo:uno:second inner passed');
      console.log('> passed foo:uno:second inner, calling done');
      done();
    });
  });
});
