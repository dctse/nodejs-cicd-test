/* global describe it */
const assert = require('assert');

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return now when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
