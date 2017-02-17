import { helloWorld } from '../index';
import assert from 'assert';

// Passing arrow functions ("lambdas") to Mocha is discouraged.
// http://mochajs.org/#arrow-functions
describe('Modern JavaScript Project', function () {
  describe('helloWorld', function () {
    it('works', function () {
      assert.equal(helloWorld(), 'Hello, World!');
    });
  });
});
