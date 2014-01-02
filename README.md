# mocha-xunit-series

Confirming that async mocha tests written qunit style to run in proper order as long as they aren't nested.

[This is how NOT to do it](https://github.com/thlorenz/mocha-xunit-series/blob/master/test/foo-nested.js)

```sh
git clone https://github.com/thlorenz/mocha-xunit-series && cd mocha-xunit-series
npm install
npm test
```

Then opent [http://localhost:3200/__zuul](http://localhost:3200/__zuul).

## License

MIT
