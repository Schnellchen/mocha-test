const NumbersValidator = require('../../app/number_validator');
const {expect} = require('chai');

describe('isNumberEven positive scenarios', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  afterEach(function() {
    validator = null;
  });

  it('Should return true if number is even', function() {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('Should return false if number is odd', function() {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });
});
